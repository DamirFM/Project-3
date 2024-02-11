const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const Product = require('./models/Product');
const cors = require('cors');
const { Client, Environment } = require('square');
const User = require('../server/models/User');
const Order = require('../server/models/Order');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Setup Square Client
const squareClient = new Client({
  environment: process.env.NODE_ENV === 'production' ? Environment.Production : Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors());

  // ROUTES 

  // Route for fetching products
  app.get('/api/products', async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  });

  // GET user by ID
app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params; // Extract the user ID from the request parameters

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
});

   // Route for processing Square payment
   app.post('/api/process-payment', async (req, res) => {
    const { sourceId, amount } = req.body; // Ensure you have `sourceId` and `amount` from the client
    try {
      const { result } = await squareClient.paymentsApi.createPayment({
        sourceId: sourceId,
        amountMoney: {
          amount: amount,
          currency: 'CAD',
        },
        locationId: process.env.SQUARE_LOCATION_ID,
        idempotencyKey: crypto.randomUUID(), 
      });

      res.json(result);
    } catch (error) {
      console.error('Error processing payment:', error);
      res.status(500).json({ error: error.message });
    }
  });

// GET route for fetching an order by ID
app.get('/api/orders/:id', async (req, res) => {
  const { id } = req.params; // Extract the order ID from the URL

  try {
    const order = await Order.findById(id); // Find the order in the database

    if (!order) {
      // If no order is found with the given ID, send a 404 response
      return res.status(404).json({ message: 'Order not found' });
    }

    // If an order is found, respond with the order data
    res.json(order);
  } catch (error) {
    // Handle potential errors, such as invalid ID format
    console.error('Error fetching order:', error);
    res.status(500).json({ message: 'Error fetching order', error: error.message });
  }
});

// POST new order
app.post('/api/orders', async (req, res) => {
  console.log(req.body);
  const { userId, products } = req.body; // Extracting userId and product IDs from the request body

  if (!userId || !products || products.length === 0) {
    return res.status(400).json({ message: 'Missing required fields: userId and products' });
  }

  try {
    // Create a new order
    const newOrder = new Order({
      user: userId,
      products: products,
    });
    const order = await newOrder.save();

    // Optionally, update user's orders
    await User.findByIdAndUpdate(userId, { $push: { orders: order._id } }, { new: true });

    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: "Error creating order", error: error.message });
  }
});


  // GET  Route for fetching orders
  app.get('/api/orders', async (req, res) => {
    try {
      const orders = await Order.find({});
      res.json(orders);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  });

  // POST route for creating a new order
app.post('/api/orders', async (req, res) => {
  const { userId, productIds } = req.body; // Assuming productIds is an array of product IDs

  // Check for missing fields
  if (!userId || !productIds || productIds.length === 0) {
    return res.status(400).json({ message: 'Missing required fields: userId and products' });
  }

  try {
    // Optional: Verify the user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Optional: Verify each product exists
    for (const productId of productIds) {
      const productExists = await Product.findById(productId);
      if (!productExists) {
        return res.status(404).json({ message: `Product not found: ${productId}` });
      }
    }

    // Create a new order
    const newOrder = new Order({
      user: userId,
      products: productIds,
      purchaseDate: Date.now() // This is optional if your schema defaults to Date.now()
    });

    // Save the order to the database
    const order = await newOrder.save();

    // Update user's orders (optional, depends on your schema design)
    await User.findByIdAndUpdate(userId, { $push: { orders: order._id } });

    // Respond with the newly created order
    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
});


  // Serve up static assets
  app.use('/images', express.static(path.join(__dirname, '../client/public/images')));

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();

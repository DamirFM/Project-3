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

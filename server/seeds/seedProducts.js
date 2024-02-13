const mongoose = require('mongoose');
const Product = require('../models/Product');
const products = require('./productData'); 


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

  const seedProducts = async () => {
    try {
      // Optionally clear existing products
      await Product.deleteMany({});
      console.log('Existing products cleared.');
  
      // Insert new product seed data
      await Product.insertMany(products);
      console.log('Products successfully seeded');
    } catch (error) {
      console.error('Error seeding products:', error);
    } finally {
      // Close the database connection
      mongoose.connection.close();
    }
  };
  
seedProducts();
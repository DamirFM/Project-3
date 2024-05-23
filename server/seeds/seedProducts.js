const mongoose = require('mongoose');
const Product = require('../models/Product');
const products = require('./productData'); 

// Import the connection module to ensure connection is established
const db = require('../config/connection');

const seedProducts = async () => {
  try {
    // Clear existing products
    await Product.deleteMany({});
    console.log('Existing products cleared.');

    // Insert new product seed data
    await Product.insertMany(products);
    console.log('Products successfully seeded');
  } catch (error) {
    console.error('Error seeding products:', error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed.');
  }
};

// Listen for the connected event to start seeding
db.once('open', async () => {
  console.log('MongoDB connected');
  await seedProducts();
});

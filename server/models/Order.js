const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [{
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product', 
    },
    name: String, 
    price: Number, 
  }],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

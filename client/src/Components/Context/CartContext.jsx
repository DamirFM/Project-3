import React, { createContext, useContext, useState } from 'react';
import AuthService from '../../utils/auth';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
  if (!AuthService.loggedIn()) {
    alert("Please log in to add items to the cart");
    return;
  }

  setCartItems(currentItems => {
    const productExists = currentItems.find(item => item._id === product._id);

    if (productExists) {
      // If the product exists, increase its quantity
      return currentItems.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If the product doesn't exist, add it to the cart with quantity 1
      return [...currentItems, { ...product, quantity: 1 }];
    }
  });
};
  

  const removeFromCart = (productId) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

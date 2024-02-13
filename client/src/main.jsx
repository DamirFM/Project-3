import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './Theme/Theme.js'
import { CartProvider } from './Components/Context/CartContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>

    <ChakraProvider theme={customTheme}>
    <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>

  </>

);

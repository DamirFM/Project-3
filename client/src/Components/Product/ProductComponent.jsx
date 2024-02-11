import React from 'react';
import { Button } from '@chakra-ui/react';
import { useCart } from './CartContext';

const ProductComponent = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Product details */}
      <Button colorScheme="blue" onClick={() => addToCart(product)}>Add to Cart</Button>
    </div>
  );
};

import React from 'react';
import { Text, VStack, useColorModeValue } from '@chakra-ui/react';

const OrderComponent = ({ order }) => {
  console.log(order)
  const formattedDate = new Date(parseInt(order.purchaseDate)).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  const bgColor = useColorModeValue('gray.100', 'gray.900');

  return (
    <VStack align="start" mb={4} bg={bgColor} p={4} borderRadius="lg">
      <Text><strong>Order ID:</strong> {order.__typename}</Text>
      <Text><strong>Purchase Date:</strong> {formattedDate}</Text>
      <Text><strong>Products:</strong> {order.product} </Text>
      {order.products.length > 0 ? (
        order.products.map((product, index) => (
          <Text key={`${order.__typename}-${index}`} pl={4}>- {product.name || `Product ${index + 1}`}</Text>
        ))
      ) : (
        <Text pl={4}>No products in this order.</Text>
      )}
    </VStack>
  );
};

export default OrderComponent;

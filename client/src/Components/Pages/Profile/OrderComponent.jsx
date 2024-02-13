import React from 'react';
import { VStack, Text, useColorModeValue } from '@chakra-ui/react';

const OrderComponent = ({ order }) => {
  console.log(order);
  const formattedDate = new Date(parseInt(order.purchaseDate)).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  const bgColor = useColorModeValue('rgba(230,234,255, .3)', 'rgba(0.32,0.32,0.35, .3)');

  return (
    <VStack align="start" mb={4} bg={bgColor} p={4} borderRadius="lg">
      <Text><strong>Purchase Date:</strong> {formattedDate}</Text>
      <Text><strong>Products:</strong> </Text>
      {order.products && order.products.length > 0 ? (
        order.products.map((productId, index) => (
          <Text key= {`${productId}-${index}`} pl={4}>
            {/* {order.productNames[index]} (${order.productPrices[index].toFixed(2)}) */}
            {productId.name} , ${productId.price}
          </Text>
        ))
      ) : (
        <Text pl={4}>No products in this order.</Text>
      )}
    </VStack>
  );
};

export default OrderComponent;

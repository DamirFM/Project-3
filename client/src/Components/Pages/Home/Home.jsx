import React from 'react';
import {
  Box,
  SimpleGrid,
  Button,
  Container,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import ProductCard from '../Store/ProductCard'; // Adjust the import path as necessary

const HomePage = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'A great product', price: '19.99', imageUrl: 'http://placekitten.com/200/300' },
    { id: 2, name: 'Product 2', description: 'Another great product', price: '29.99', imageUrl: 'http://placekitten.com/200/300' },
    // Add more products as needed
  ];

  const buttonBgColor = useColorModeValue('blue.500', 'blue.200');
  const buttonTextColor = useColorModeValue('white', 'gray.800');

  return (
    <Container maxW="container.xl" py={5}>
      <Heading as="h2" mb={5}>Featured Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SimpleGrid>
      <Box textAlign="center" mt={10}>
        <Button
          colorScheme="blue"
          bg={buttonBgColor}
          color={buttonTextColor}
          onClick={() => window.location.href='/store'} // Adjust navigation as needed
        >
          Shop Now
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;

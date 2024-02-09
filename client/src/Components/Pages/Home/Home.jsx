import React from 'react';
import {
  Box,
  SimpleGrid,
  Button,
  Container,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import ProductCard from '../Store/ProductCard'; // Ensure this path is correct

const HomePage = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'A great product', price: '19.99', imageUrl: 'http://placekitten.com/200/300' },
    { id: 2, name: 'Product 2', description: 'Another great product', price: '29.99', imageUrl: 'http://placekitten.com/200/300' },
    { id: 3, name: 'Product 3', description: 'Another one', price: '39.99', imageUrl: 'http://placekitten.com/200/300' },
    { id: 4, name: 'Product 4', description: 'Keyboard', price: '49.99', imageUrl: 'http://placekitten.com/200/300' },
    // Add more products as needed
  ];

  const buttonBgColor = useColorModeValue('blue.500', 'blue.200');
  const buttonTextColor = useColorModeValue('white', 'gray.800');
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.50');
  const titleColor = useColorModeValue('orange.500', 'orange.400')

  return (
    <Box maxW="1440px" mx="auto" py={5} bg={bgColor}>
    <Container maxW="1440px" py={5}> {/* Adjusted for wider screens */}
      <Heading as="h2" mb={5} fontFamily="'Protest Revolution', sans-serif" color={titleColor} >Featured Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={20}>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SimpleGrid>
      <Box textAlign="center" mt={10}>
        <Button
          colorScheme="blue"
          bg={buttonBgColor}
          color={buttonTextColor}
          onClick={() => window.location.href='/store'}
        >
          Shop Now
        </Button>
      </Box>
    </Container>
    </Box>
  );
};

export default HomePage;

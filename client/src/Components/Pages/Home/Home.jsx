import React from 'react';
import {
  Box,
  SimpleGrid,
  Button,
  Container,
  Heading,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import ProductCard from '../Store/ProductCard'; 

const HomePage = () => {
  const products = [
    { id: 1, name: 'Logitech Wireless Gaming Mouse', description: 'Logitech G502 LIGHTSPEED Wireless Gaming Mouse, 5,600 DPI, 11 Programmable Buttons', price: '149.99', imageUrl: 'https://m.media-amazon.com/images/I/718b9wK3eaL._AC_UL320_.jpg' },
    { id: 2, name: 'IPhone 12 Blue 64GB', description: 'iPhone 12: 6.1-inch Super Retina XDR display, A14 Bionic chip, dual-camera system with Night mode and Deep Fusion', price: '599.99', imageUrl: 'https://m.media-amazon.com/images/I/61pz7VA6KoL._AC_UL320_.jpg' },
    { id: 3, name: 'Sony Wireless Headphones', description: 'Sony WH-1000XM5 WirelessNoise Cancelling Headphones with Auto Noise Cancelling Optimizer, Hands-Free Calling', price: '439.99', imageUrl: 'https://m.media-amazon.com/images/I/61aT4CcnGmL._AC_UL320_.jpg' },
    { id: 4, name: 'Seagate External Hard Drive 2TB', description: 'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox', price: '99.99', imageUrl: 'https://m.media-amazon.com/images/I/41UY0i5ygQL._AC_UL320_.jpg' },
  ];

  const buttonBgColor = useColorModeValue('blue.500', 'blue.200');
  const buttonTextColor = useColorModeValue('white', 'gray.800');

  const titleColor = useColorModeValue('orange.500', 'orange.400');
  const bgGradient = useColorModeValue(
    'linear(to-b, facebook.400, orange.500)', 
    'linear(to-b, black, orange.600)' 
  );

  const headingFontSize = useBreakpointValue({ base: '3xl', md: '6xl' });

  return (
    <Box mx="auto" py={5} bgGradient={bgGradient}>
      <Container maxW="1440px" py={5} bg="transparent">
        <Heading 
          as="h2" 
          mb={5} 
          fontSize={headingFontSize} 
          textAlign="center" 
          fontFamily="'Metamorphous', sans-serif"
          color={titleColor} 
          textShadow='2px 2px #ff0000'
        >
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 5, md: 10 }}>
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

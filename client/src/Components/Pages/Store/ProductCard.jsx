import React from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const ProductCard = ({ name, description, price, imageUrl }) => {
  const bgColor = useColorModeValue('rgba(230,234,255, .3)', 'rgba(0.32,0.32,0.35, .3)');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box p={5} shadow="md" borderWidth="0px" borderRadius="lg" bg={bgColor} textAlign="center">
    {/* Image Container */}
    <Box display="flex" justifyContent="center">
      <Image borderRadius="md" src={imageUrl} alt={name} maxWidth="100%" maxHeight="100%" objectFit="cover" />
    </Box>
    <VStack align="center" mt={4}>
      <Heading as="h3" size="md" color={textColor}>{name}</Heading>
      <Text color={textColor}>{description}</Text>
      <Text fontWeight="bold" color={textColor}>${price}</Text>
    </VStack>
  </Box>
  );
};

export default ProductCard;

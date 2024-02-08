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
  const bgColor = useColorModeValue('card.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={bgColor}>
      <Image borderRadius="md" src={imageUrl} alt={name} />
      <VStack align="start" mt={4}>
        <Heading as="h3" size="md" color={textColor}>{name}</Heading>
        <Text color={textColor}>{description}</Text>
        <Text fontWeight="bold" color={textColor}>${price}</Text>
      </VStack>
    </Box>
  );
};

export default ProductCard;

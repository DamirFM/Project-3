import React from 'react';
import { Box, VStack, Image, Text, useColorModeValue } from '@chakra-ui/react';

const StoreCard = ({ name, description, image, price }) => {
  const bgColor = useColorModeValue('orange.500', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const titleColor = useColorModeValue('gray.900', 'orange.400');

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" bg={bgColor} width="292px">
      <VStack align="start" spacing={4}>
        <Box width="260px" height="200px" display="flex" alignItems="center" justifyContent="center" overflow="hidden" borderRadius="md">
          {/* Removed the layout prop as it's not a valid prop for Chakra UI's Image component */}
          <Image src={image} alt={name} objectFit="cover" boxSize="100%" />
        </Box>
        <Text fontWeight="bold" color={titleColor}>{name}</Text>
        <Text fontSize="sm" noOfLines={3} color={textColor}>{description}</Text>
        <Text fontWeight="bold" color={textColor}>${price}</Text>
      </VStack>
    </Box>
  );
};

export default StoreCard;

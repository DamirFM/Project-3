import React from 'react';
import { Box, VStack, Image, Text, useColorModeValue, AspectRatio } from '@chakra-ui/react';

const StoreCard = ({ name, description, image, price }) => {
  // Define color mode-dependent values
  const bgColor = useColorModeValue('rgba(230,234,255, .3)', 'rgba(0.32,0.32,0.35, .3)');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const titleColor = useColorModeValue('gray.900', 'orange.400');

  return (
    <Box p={{ base: 3, md: 5 }} shadow="md" borderWidth="0px" borderRadius="lg" bg={bgColor} textAlign="center">
      {/* AspectRatio Container */}
      <AspectRatio ratio={4/ 3} maxW="100%" borderRadius="md">
        <Image src={image} alt={name} objectFit="cover" borderRadius="md" />
      </AspectRatio>
      <VStack align="center" mt={4}>
        <Text fontWeight="bold" color={titleColor} fontSize={{ base: 'md', md: 'lg' }}>
          {name}
        </Text>
        <Text fontSize={{ base: 'sm', md: 'md' }} noOfLines={{ base: 2, md: 3 }} color={textColor}>
          {description}
        </Text>
        <Text fontWeight="bold" color={textColor}>
          ${price}
        </Text>
      </VStack>
    </Box>
  );
};

export default StoreCard;

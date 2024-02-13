import React from 'react';
import { Box, VStack, Image, Text, useColorModeValue, AspectRatio } from '@chakra-ui/react';

const StoreCard = ({ name, description, image, price }) => {
  // Define color mode-dependent values
  const bgColor = useColorModeValue('rgba(230,234,255, .3)', 'rgba(0.32,0.32,0.35, .3)');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const titleColor = useColorModeValue('gray.900', 'orange.400');

  return (
    <Box p={5} shadow="md" borderWidth="0px" borderRadius="lg" bg={bgColor} textAlign="center">
      {/* AspectRatio Container */}
      <AspectRatio ratio={8/ 6} width="327px" height="auto">
        <Image src={image} alt={name} objectFit="cover" borderRadius="md" />
      </AspectRatio>
      <VStack align="center" mt={4} >
        <Text fontWeight="bold" color={titleColor} fontSize="lg">{name}</Text>
        <Text fontSize="sm" noOfLines={3} color={textColor}>{description}</Text>
        <Text fontWeight="bold" color={textColor}>${price}</Text>
      </VStack>
    </Box>
  );
};

export default StoreCard;

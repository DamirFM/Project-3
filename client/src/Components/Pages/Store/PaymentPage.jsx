import React from 'react';
import PaymentForm from '../Store/PaymentForm/PaymentForm'; 
import { Box, useColorModeValue } from '@chakra-ui/react';

const PaymentPage = () => {
  const bgGradient = useColorModeValue(
    'linear(to-b, facebook.400, orange.500)', 
    'linear(to-b, black, orange.600)' 
  );

  return (
    <Box bgGradient={bgGradient} minHeight="100vh" py={8} px={4} display="flex" justifyContent="center" alignItems="center">
      <Box maxW="md" w="100%">
        <PaymentForm />
      </Box>
    </Box>
  );
};

export default PaymentPage;

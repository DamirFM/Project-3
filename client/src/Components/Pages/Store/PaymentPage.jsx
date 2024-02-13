import React from 'react';
import PaymentForm from '../Store/PaymentForm/PaymentForm'; 
import { useColorModeValue }  from '@chakra-ui/react';

const PaymentPage = () => {
  const bgGradient = useColorModeValue(
    'linear(to-b, facebook.400, orange.500)', 
    'linear(to-b, black, orange.600)' 
  );
  return (
    <div>
      <box bgGradient={bgGradient}>
      <PaymentForm />
      </box>
    </div>

  );
};

export default PaymentPage;
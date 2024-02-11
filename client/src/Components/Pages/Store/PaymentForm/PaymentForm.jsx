import React, { useEffect, useState } from 'react';
import {
  Box, Button, Flex, FormControl, FormLabel, Input, useToast, VStack, Heading, Text, Divider
} from '@chakra-ui/react';
import { useCart } from '../../../Context/CartContext'; // Update the import path as needed


const PaymentForm = () => {
  const { cartItems } = useCart();
  const [card, setCard] = useState(null);
  const [isCardReady, setIsCardReady] = useState(false); // State to track the readiness of the card form
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const toast = useToast();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    const initializePaymentForm = async () => {
      if (!window.Square) {
        console.error("Square SDK not loaded.");
        toast({
          title: 'Square SDK failed to load',
          description: "Please check your internet connection and try again.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        return;
      }

      try {
        const payments = window.Square.payments('sq0idp-QDPtbMgp36U7twCzp4pZZg', 'LJC9HFX2S985R');
        const cardInstance = await payments.card();
        await cardInstance.attach('#card-input');
        setCard(cardInstance);
        setIsCardReady(true); 
      } catch (error) {
        console.error("Failed to initialize Square card input:", error);
        toast({
          title: 'Payment form initialization error',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    };

    initializePaymentForm();

    // Cleanup function to prevent duplicate card fields
    return () => {
      if (card) {
        card.destroy();
        setIsCardReady(false); // Reset card form readiness
      }
    };
  }, [toast]); // Removed card from dependency array to prevent re-initializing

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handlePayment = async () => {
    if (!card) {
      toast({
        title: 'Payment system not ready',
        description: 'The payment system is not initialized yet. Please try again later.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    try {
      const result = await card.tokenize();
      if (result.status === 'OK') {
        toast({
          title: 'Payment Successful',
          description: 'Your payment was processed successfully.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        // Process the payment on your server using result.token
        clearCart(); // Consider clearing the cart after successful payment
      } else {
        toast({
          title: 'Payment Failed',
          description: `Failed to process payment: ${result.errors[0].message}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: 'Payment Error',
        description: 'An unexpected error occurred while processing your payment.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };


  return (
    <Flex direction={{ base: 'column', md: 'row' }} gap="20px">
      <Box flex="1" bg="gray.700" color="white" p="4" borderRadius="md">
        <Heading size="md" mb="4">Cart Summary</Heading>
        <VStack divider={<Divider />} spacing={4}>
          {cartItems.map((item, index) => (
            <Flex key={index} justify="space-between" w="full">
              <Text>{item.name}</Text>
              <Text fontWeight="bold">${(item.price * item.quantity).toFixed(2)}</Text>
            </Flex>
          ))}
          <Flex justify="space-between" w="full" pt="4" borderTop="1px" borderColor="gray.200">
            <Text fontWeight="semibold">Subtotal</Text>
            <Text fontWeight="semibold">${subtotal.toFixed(2)}</Text>
          </Flex>
        </VStack>
      </Box>
  
      <Box flex="1" bg="orange.600" p="4" borderRadius="md" boxShadow="sm">
        <Heading size="md" mb="4">Payment & Shipping</Heading>
        <VStack spacing={4} align="stretch" mb="4">
          <Input bg="white" placeholder="Full Name" name="fullName" value={shippingInfo.fullName} onChange={handleInputChange} />
          <Input bg="white" placeholder="Address Line 1" name="addressLine1" value={shippingInfo.addressLine1} onChange={handleInputChange} />
          <Input bg="white" placeholder="Address Line 2" name="addressLine2" value={shippingInfo.addressLine2} onChange={handleInputChange} />
          <Input bg="white" placeholder="City" name="city" value={shippingInfo.city} onChange={handleInputChange} />
          <Input bg="white" placeholder="State" name="state" value={shippingInfo.state} onChange={handleInputChange} />
          <Input bg="white" placeholder="Zip Code" name="zipCode" value={shippingInfo.zipCode} onChange={handleInputChange} />
        </VStack>
  
   
          <FormControl id="card-container" marginBottom="4">
            <FormLabel>Card Details</FormLabel>
            <div id="card-input"></div>
          </FormControl>
        
        <Button colorScheme="blue" onClick={handlePayment}>Submit Payment</Button>
      </Box>
    </Flex>
  );
  
};

export default PaymentForm;

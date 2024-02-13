import React, { useState } from 'react';
import {
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Icon,
  Badge,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';
import { useCart } from '../Context/CartContext'; // Adjust the import path as necessary
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CartComponent = () => {
  const { cartItems, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate(); 
  const butBgColor = useColorModeValue('facebook.500', 'gray.800');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Navigate to the payment page
  const handleCheckout = () => {
    setIsCartOpen(false); 
    navigate('/payment'); 
  };

  return (
    <>
      <Button bg={butBgColor} position="relative" onClick={() => setIsCartOpen(true)}>
        <Icon as={FaShoppingCart} />
        {cartItems.length > 0 && (
          <Badge colorScheme="blue.900" ml="1" position="absolute" top="-1" right="-1" borderRadius="full">
            {cartItems.length}
          </Badge>
        )}
      </Button>

      <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
  <VStack spacing={4}>
    {cartItems.map((item, index) => (
      // Assuming each item has a unique identifier `id`
      // If not, you might use a combination or index, but using item's unique id is preferred
      <Box key={item.id || index}> 
        {item.name} - ${item.price.toFixed(2)} x {item.quantity}
      </Box>
    ))}
    {cartItems.length === 0 ? (
      <Text>Your cart is empty.</Text>
    ) : (
      <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
    )}
  </VStack>
</ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={handleCheckout} isDisabled={cartItems.length === 0}>
              Checkout
            </Button>
            <Button colorScheme="red" onClick={clearCart}>Clear Cart</Button>
            <Button variant="ghost" onClick={() => setIsCartOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartComponent;

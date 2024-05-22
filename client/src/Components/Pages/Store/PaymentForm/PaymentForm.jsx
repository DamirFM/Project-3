import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack,
  Heading,
  Text,
  Divider,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useCart } from "../../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../../utils/auth";
import { useMutation, gql } from "@apollo/client";

const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      _id
    }
  }
`;

const PaymentForm = () => {
  const { cartItems, clearCart } = useCart();
  const [card, setCard] = useState(null);
  const [isCardReady, setIsCardReady] = useState(false);
  const navigate = useNavigate();
  const paymentFormInitialized = useRef(false);
  const toast = useToast();
  const [addOrder] = useMutation(ADD_ORDER);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const bgColor = useColorModeValue(
    "rgba(230,234,255, .3)",
    "rgba(0.32,0.32,0.35, .3)"
  );
  const bgGradient = useColorModeValue(
    "linear(to-b, facebook.400, orange.500)",
    "linear(to-b, black, orange.600)"
  );
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  useEffect(() => {
    if (paymentFormInitialized.current) {
      return;
    }

    const initializePaymentForm = async () => {
      if (!window.Square) {
        console.error("Square SDK not loaded.");
        toast({
          title: "Square SDK failed to load",
          description: "Please check your internet connection and try again.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }

      try {
        const payments = window.Square.payments(
          "sq0idp-QDPtbMgp36U7twCzp4pZZg",
          "LJC9HFX2S985R"
        );
        const cardInstance = await payments.card();
        await cardInstance.attach("#card-input");
        setCard(cardInstance);
        setIsCardReady(true);
        paymentFormInitialized.current = true;
      } catch (error) {
        console.error("Failed to initialize Square card input:", error);
        toast({
          title: "Payment form initialization error",
          description: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };

    initializePaymentForm();

    return () => {
      if (card) {
        card.destroy();
        setIsCardReady(false);
        paymentFormInitialized.current = false;
      }
    };
  }, [card, toast]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePayment = async () => {
    if (!card) {
      toast({
        title: "Payment system not ready",
        description:
          "The payment system is not initialized yet. Please try again later.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    try {
      const result = await card.tokenize();
      if (result.status === "OK") {
        const userProfile = AuthService.getProfile();
        const userId = userProfile?._id;

        const productIds = cartItems.map((item) => item._id);
        const productName = cartItems.map((item) => item.name);
        const productPrice = cartItems.map((item) => item.price);

        console.log(cartItems);
        console.log({
          userId,
          products: productIds,
          productName,
          productPrice,
        });

        const response = await addOrder({
          variables: {
            products: productIds,
          },
        });

        if (response.data) {
          clearCart();
          toast({
            title: "Payment and Order Successful",
            description:
              "Your payment was processed and order was placed successfully.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/profile");
        } else {
          // Handle order creation failure
          toast({
            title: "Order Creation Failed",
            description: "Failed to create order after payment.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      } else {
        // Handle payment failure
        toast({
          title: "Payment Failed",
          description: `Failed to process payment: ${result.errors[0].message}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Order and Payment error:", error);
      toast({
        title: "Order and Payment Error",
        description:
          "An unexpected error occurred while processing your payment and order.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const columnDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Flex direction={columnDirection} gap="20px" bgGradient={bgGradient}>
      <Box
      flex="1"
      bg={bgColor}
      pt={10}
      px={8}
      pb={5}
      borderRadius="md"
      boxShadow="sm"
      maxWidth="lg"
      mx="auto"
      >
        <Heading size="md" mb="4">
          Cart Summary
        </Heading>
        <VStack divider={<Divider />} spacing={4}>
          {cartItems.map((item, index) => (
            <Flex key={index} justify="space-between" w="full">
              <Text>{item.name}</Text>
              <Text fontWeight="bold">
                ${(item.price * item.quantity).toFixed(2)}
              </Text>
            </Flex>
          ))}
          <Flex
            justify="space-between"
            w="full"
            pt="4"
            borderTop="1px"
            borderColor="gray.200"
          >
            <Text fontWeight="semibold">Subtotal</Text>
            <Text fontWeight="semibold">${subtotal.toFixed(2)}</Text>
          </Flex>
        </VStack>
      </Box>

      <Box
        flex="1"
        bg={bgColor}
        pt={10}
        px={8}
        pb={5}
        borderRadius="md"
        boxShadow="sm"
        maxWidth="lg"
        mx="auto"
      >
        <Heading size="md" mb="4">
          Payment & Shipping
        </Heading>
        <VStack spacing={4} align="stretch" mb="4">
          <Input
            bg="transparent"
            placeholder="Full Name"
            name="fullName"
            value={shippingInfo.fullName}
            onChange={handleInputChange}
          />
          <Input
            bg="transparent"
            placeholder="Address Line 1"
            name="addressLine1"
          />
          <Input
            bg="transparent"
            placeholder="Address Line 2"
            name="addressLine2"
            value={shippingInfo.addressLine2}
            onChange={handleInputChange}
          />
          <Input
            bg="transparent"
            placeholder="City"
            name="city"
            value={shippingInfo.city}
            onChange={handleInputChange}
          />
          <Input
            bg="transparent"
            placeholder="State"
            name="state"
            value={shippingInfo.state}
            onChange={handleInputChange}
          />
          <Input
            bg="transparent"
            placeholder="Zip Code"
            name="zipCode"
            value={shippingInfo.zipCode}
            onChange={handleInputChange}
          />
        </VStack>

        <FormControl id="card-container" marginBottom="4">
          <label>Card Details</label>
          <div id="card-input"></div>
        </FormControl>

        <Button colorScheme="blue" onClick={handlePayment}>
          Submit Payment
        </Button>
      </Box>
    </Flex>
  );
};

export default PaymentForm;

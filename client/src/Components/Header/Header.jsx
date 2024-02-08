import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ColorModeSwitcher from '../Header/ColorModeSwitcher';

function Header() {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box bg={bgColor} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Stack direction={'row'} spacing={4} align={'center'}>
          <ChakraLink as={Link} to="/" color={textColor}>Landing</ChakraLink>
          <ChakraLink as={Link} to="/home" color={textColor}>Home</ChakraLink>
          <ChakraLink as={Link} to="/about" color={textColor}>About</ChakraLink>
          <ChakraLink as={Link} to="/checkout" color={textColor}>Checkout</ChakraLink>
          <ChakraLink as={Link} to="/profile" color={textColor}>Profile</ChakraLink>
          <ChakraLink as={Link} to="/store" color={textColor}>Store</ChakraLink>
        </Stack>
        <Flex alignItems={'center'}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;

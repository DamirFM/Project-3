import React from 'react';
import {
  Box,
  Flex,
  Stack,
  useColorModeValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ColorModeSwitcher from '../Header/ColorModeSwitcher';

function Header() {
  const bgColor = useColorModeValue('header.100', 'header.900');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Box maxW="1440px" mx="auto" width="100%" bg={bgColor} px={5}>
      <Flex as="nav" h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/* Wrap links in a Box to apply font size globally */}
        <Box fontSize="lg">
          <Stack direction={'row'} spacing={4} align={'center'}>
            <ChakraLink
              as={Link}
              to="/"
              color={textColor}
              fontFamily="'Roboto Condensed', sans-serif"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}>
              Landing
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/home"
              color={textColor}
              fontFamily="'Roboto Condensed', sans-serif"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}>
              Home
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/about"
              color={textColor}
              fontFamily="'Roboto Condensed', sans-serif"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}>
              About
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/checkout"
              color={textColor}
              fontFamily="'Roboto Condensed', sans-serif"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}>
              Checkout
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/profile"
              color={textColor}
              fontFamily="'Roboto Condensed', sans-serif"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}>
              Profile
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/store"
              color={textColor}
              fontFamily="'Roboto Condensed', sans-serif"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}>
              Store
            </ChakraLink>
          </Stack>
        </Box>
        <Flex alignItems={'center'}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;

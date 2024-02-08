import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';

function Landing() {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.50');

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg={bgColor}>
      <Flex direction={{ base: 'column', md: 'row' }} width="full" maxW="4xl" px={4} bg={bgColor}>
        {/* Splash Image */}
        <Flex flex={1}>
          <Image
            borderRadius="lg"
            src="http://placekitten.com/600/400"
            alt="Splash Image"
            objectFit="cover"
          />
        </Flex>
        {/* Welcome Message and Login Area */}
        <Flex flex={1} alignItems="start" flexDirection="column" justifyContent="center" p={5}>
          <VStack spacing={4} align="flex-start">
            <Heading as="h1" size="xl" color={textColor}>
              Welcome to Our Application
            </Heading>
            <Text fontSize="lg" color={textColor}>Sign in to continue</Text>
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button colorScheme="blue" width="full">Login</Button>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Landing;

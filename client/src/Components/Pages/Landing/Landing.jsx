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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

function Landing() {
  const bgColor = useColorModeValue('brand.100', 'brand.900');
  const textColor = useColorModeValue('gray.800', 'gray.50');

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg={bgColor}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        width="full"
        maxW="1440px" // Adjusted for wider screens
        px={4}
        bg={bgColor}
        margin="auto" // Center the content
      >
        {/* Splash Image */}
        <Flex flex={1}>
          <Image
            borderRadius="lg"
            src="http://placekitten.com/600/400"
            alt="Splash Image"
            objectFit="cover"
          />
        </Flex>
        {/* Welcome Message and Tabs for Login/Signup Area */}
        <Flex flex={1} alignItems="start" flexDirection="column" justifyContent="center" p={5} minH="600px">
          <Heading as="h1" size="xl" color={textColor} mb={4}>
            Welcome to Our Application
          </Heading>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Signup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack spacing={10} align="flex-start">
                  <Input placeholder="Email" />
                  <Input placeholder="Password" type="password" />
                  <Button colorScheme="blue" width="full">Login</Button>
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack spacing={3} align="flex-start">
                  <Input placeholder="Username" />
                  <Input placeholder="Email Address" />
                  <Input placeholder="Password" type="password" />
                  <Button colorScheme="blue" width="full">Signup</Button>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Landing;

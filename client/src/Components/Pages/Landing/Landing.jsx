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
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.50');
  const inputColor = useColorModeValue('gray.50', 'gray.600')
  const titleColor = useColorModeValue('orange.500', 'orange.400')

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
            src='public/images/vulcan.jpg'
            alt="Splash Image"
            objectFit="cover"
          />
        </Flex>
        {/* Welcome Message and Tabs for Login/Signup Area */}
        <Flex flex={1} alignItems="start" flexDirection="column" justifyContent="center" p={5} minH="600px">
          <Heading as="h1" size="xl" color={titleColor} mb={4} fontFamily="'Protest Revolution', sans-serif">
            Welcome to Vulcan's <br></br>
            Computer Emporium
          </Heading>
          <Tabs variant="soft-rounded" colorScheme="orange">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Signup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack spacing={10} align="flex-start">
                  <Input placeholder="Email" bg={inputColor} />
                  <Input placeholder="Password" type="password" bg={inputColor}/>
                  <Button colorScheme="orange" width="full">Login</Button>
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack spacing={3} align="flex-start">
                  <Input placeholder="Username" bg={inputColor}/>
                  <Input placeholder="Email Address" bg={inputColor}/>
                  <Input placeholder="Password" type="password" bg={inputColor}/>
                  <Button colorScheme="orange" width="full">Signup</Button>
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

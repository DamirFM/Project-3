import React, { useState } from 'react';
import Auth from '../../../utils/auth';
import { useNavigate } from 'react-router-dom';



import {
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
  Alert,
} from '@chakra-ui/react';
import { LOGIN_USER, ADD_USER } from '../../../utils/mutations';
import { useMutation } from '@apollo/client'
// Import Auth if defined elsewhere in your codebase

function Landing() {
  const history = useNavigate(); 
  const bgColor = useColorModeValue('brand.100', 'brand.900');
  const textColor = useColorModeValue('gray.800', 'gray.50');

  const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [Login] = useMutation(LOGIN_USER);
  const [AddUser] = useMutation(ADD_USER);
  // Define Auth object if not already defined

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      // Implement login functionality
      const { data } = await Login({ variables: { email: userFormData.email, password: userFormData.password } });

      Auth.login(data.login.token);
      setTimeout(history, 0, "/profile");
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      // Implement signup functionality 
      const { data } = await AddUser({ variables: { email: userFormData.email, password: userFormData.password, firstName: userFormData.firstName, lastName: userFormData.lastName } });
      Auth.login(data.addUser.token);
      setTimeout(history, 0, "/profile");
    } catch (err) {
      console.error(err);
      if (err.message.includes('E11000 duplicate key error')) {
        // Handle duplicate key error (email already exists)
        setShowAlert(true);
      } else {
        // Handle other errors
      }
    }
  };


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
                <VStack spacing={4} align="flex-start">
                  <Input
                    placeholder="Email"
                    name="email"
                    value={userFormData.email}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={userFormData.password}
                    onChange={handleInputChange}
                  />
                  <Button colorScheme="blue" width="full" onClick={handleLoginSubmit}>Login</Button>
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack spacing={4} align="flex-start">
                  <Input
                    placeholder="First Name"
                    name="firstName"
                    value={userFormData.firstName}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Last Name"
                    name="lastName"
                    value={userFormData.lastName}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Email Address"
                    name="email"
                    value={userFormData.email}
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={userFormData.password}
                    onChange={handleInputChange}
                  />
                  <Button colorScheme="blue" width="full" onClick={handleSignupSubmit}>Signup</Button>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
          {/* Alert Component */}
          {/* <Alert
            status="error"
            variant="solid"
            borderRadius="md"
            mt={4}
            onClose={() => setShowAlert(false)}
            show={showAlert}
          >
            Something went wrong with your signup or login!
          </Alert> */}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Landing;

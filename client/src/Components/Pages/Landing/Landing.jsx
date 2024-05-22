import React, { useState, useEffect } from 'react';
import Auth from '../../../utils/auth';
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
import { useMutation } from '@apollo/client';

function Landing() {

  const inputColor = useColorModeValue('BlackAlpha 200', 'gray.600');
  const titleColor = useColorModeValue('orange.400', 'orange.400');
  const loginColor = useColorModeValue('transparent', 'transparent');
  const bgGradient = useColorModeValue(
    'linear(to-b, facebook.400, orange.500)', 
    'linear(to-b, black, orange.600)' 
  );

  const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN_USER);
  const [addUser] = useMutation(ADD_USER);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Auth.loggedIn());
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({ variables: { ...userFormData } });
      Auth.login(data.login.token);
      setIsLoggedIn(true);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({ variables: { ...userFormData } });
      Auth.login(data.addUser.token);
      setIsLoggedIn(true);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bgGradient={bgGradient}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        width="full"
        maxW="1440px"
        px={4}
        bg="transparent"
        margin="auto"
      >
        <Flex flex={1} display={{ base: 'none', md: 'block' }}>
          <Image
            borderRadius="140"
            src='https://i.imgur.com/NXi59lo.jpeg'
            alt="Splash Image"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Flex>
        <Flex
          flex={1}
          alignItems="start"
          flexDirection="column"
          justifyContent="center"
          p={5}
          minH={{ base: 'auto', md: '600px' }}
          width={{ base: '100%', md: '50%' }}
        >
          <Heading
            as="h1"
            size="xl"
            fontSize={{ base: '3xl', md: '6xl' }}
            color={titleColor}
            textShadow='2px 2px #ff0000'
            mb={{ base: 2, md: 4 }}
            fontFamily="'Metamorphous', sans-serif"
          >
            Welcome to <br /> Vulcan's Computer Emporium
          </Heading>

          {isLoggedIn && (
            <Alert bg={loginColor} borderRadius="md" mt={4}>
              You are logged in.
            </Alert>
          )}
          {isLoggedIn && (
            <Button colorScheme="orange" mt={4}>
              <a href="/store" style={{ textDecoration: 'none', color: 'inherit' }}>Shop Now!</a>
            </Button>
          )}
          {showAlert && (
            <Alert status="error" borderRadius="md" mt={4}>
              Something went wrong with your signup or login!
            </Alert>
          )}
          {!isLoggedIn && (
            <Tabs variant="soft-rounded" colorScheme="orange" width="100%">
              <TabList mb="1em" flexDirection={{ base: 'column', md: 'row' }}>
                <Tab width={{ base: '100%', md: 'auto' }}>Login</Tab>
                <Tab width={{ base: '100%', md: 'auto' }}>Signup</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <VStack spacing={4} align="flex-start" width="100%">
                    <Input
                      placeholder="Email"
                      name="email"
                      value={userFormData.email}
                      onChange={handleInputChange}
                      bg={inputColor}
                      width="100%"
                    />
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={userFormData.password}
                      onChange={handleInputChange}
                      bg={inputColor}
                      width="100%"
                    />
                    <Button colorScheme="orange" width="full" onClick={handleLoginSubmit}>
                      Login
                    </Button>
                  </VStack>
                </TabPanel>
                <TabPanel>
                  <VStack spacing={4} align="flex-start" width="100%">
                    <Input
                      placeholder="First Name"
                      name="firstName"
                      value={userFormData.firstName}
                      onChange={handleInputChange}
                      bg={inputColor}
                      width="100%"
                    />
                    <Input
                      placeholder="Last Name"
                      name="lastName"
                      value={userFormData.lastName}
                      onChange={handleInputChange}
                      bg={inputColor}
                      width="100%"
                    />
                    <Input
                      placeholder="Email Address"
                      name="email"
                      value={userFormData.email}
                      onChange={handleInputChange}
                      bg={inputColor}
                      width="100%"
                    />
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={userFormData.password}
                      onChange={handleInputChange}
                      bg={inputColor}
                      width="100%"
                    />
                    <Button colorScheme="orange" width="full" onClick={handleSignupSubmit}>
                      Signup
                    </Button>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Landing;

import React, { useState } from 'react';
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
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.50');
  const inputColor = useColorModeValue('gray.50', 'gray.600');
  const titleColor = useColorModeValue('orange.500', 'orange.400');

  const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN_USER);
  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({ variables: { ...userFormData } });
      Auth.login(data.login.token);
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
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg={bgColor}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        width="full"
        maxW="1440px"
        px={4}
        bg={bgColor}
        margin="auto"
      >
        <Flex flex={1}>
          <Image
            borderRadius="lg"
            src='public/images/vulcan.jpg'
            alt="Splash Image"
            objectFit="cover"
          />
        </Flex>
        <Flex flex={1} alignItems="start" flexDirection="column" justifyContent="center" p={5} minH="600px">
          <Heading as="h1" size="xl" fontSize="6xl" color={titleColor} mb={4} fontFamily="'Protest Revolution', sans-serif">
            Welcome to Vulcan's <br/>Computer Emporium
          </Heading>
          {showAlert && (
            <Alert status="error" borderRadius="md" mt={4}>
              Something went wrong with your signup or login!
            </Alert>
          )}
          <Tabs variant="soft-rounded" colorScheme="orange">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Signup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack spacing={4} align="flex-start">
                  <Input placeholder="Email" name="email" value={userFormData.email} onChange={handleInputChange} bg={inputColor} />
                  <Input placeholder="Password" type="password" name="password" value={userFormData.password} onChange={handleInputChange} bg={inputColor}/>
                  <Button colorScheme="orange" width="full" onClick={handleLoginSubmit}>Login</Button>
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack spacing={4} align="flex-start">
                  <Input placeholder="First Name" name="firstName" value={userFormData.firstName} onChange={handleInputChange} bg={inputColor}/>
                  <Input placeholder="Last Name" name="lastName" value={userFormData.lastName} onChange={handleInputChange} bg={inputColor}/>
                  <Input placeholder="Email Address" name="email" value={userFormData.email} onChange={handleInputChange} bg={inputColor}/>
                  <Input placeholder="Password" type="password" name="password" value={userFormData.password} onChange={handleInputChange} bg={inputColor}/>
                  <Button colorScheme="orange" width="full" onClick={handleSignupSubmit}>Signup</Button>
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

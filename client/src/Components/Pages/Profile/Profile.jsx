import React from 'react';
import { useQuery } from '@apollo/client';
import AuthService from '../../../utils/auth'; // Adjust the import path as needed
import { GET_USER_PROFILE } from '../../../utils/queries';
import {
  Box, Flex, Text, Heading, VStack, useColorModeValue
} from '@chakra-ui/react';

const ProfilePage = () => {
  const { data, loading, error } = useQuery(GET_USER_PROFILE);
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const boxBgColor = useColorModeValue('white', 'gray.800');

  // Decode the JWT to get the user profile
  const profileFromToken = AuthService.getProfile();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const user = data.user;
console.log(data)
  return (
    <Flex direction="column" align="center" p={5}>
      {/* Box for JWT-based User Info */}
      <Box w="full" bg={boxBgColor} p={5} borderRadius="lg" mb={5}>
        <Heading size="lg" mb={2}>User Information (From Token)</Heading>
        <Text><strong>Name:</strong> {profileFromToken.firstName} {profileFromToken.lastName}</Text>
        <Text><strong>Email:</strong> {profileFromToken.email}</Text>
      </Box>

      {/* Box for GraphQL-based User Info */}
      <Box w="full" bg={boxBgColor} p={5} borderRadius="lg" mb={5}>
        <Heading size="lg" mb={2}>User Information (From GraphQL)</Heading>
        <Text><strong>Name:</strong> {user.firstName} {user.lastName}</Text>
        <Text><strong>Email:</strong> {user.email}</Text>
      </Box>

      {/* Orders Box */}
      <Box w="full" bg={boxBgColor} p={5} borderRadius="lg">
        <Heading size="lg" mb={2}>Orders</Heading>
        {user.orders.map(order => (
          <VStack key={order._id} align="start" mb={4}>
            <Text><strong>Order ID:</strong> {order._id}</Text>
            <Text><strong>Purchase Date:</strong> {new Date(order.purchaseDate).toLocaleDateString()}</Text>
            <Text><strong>Products:</strong></Text>
            {order.products.map(product => (
              <Text key={product._id} pl={4}>- {product.name}</Text>
            ))}
          </VStack>
        ))}
      </Box>
    </Flex>
  );
};

export default ProfilePage;

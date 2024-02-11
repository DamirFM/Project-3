import React from 'react';
import { useQuery } from '@apollo/client';
import AuthService from '../../../utils/auth';
import { GET_USER_PROFILE } from '../../../utils/queries';
import {
  Box, Flex, Text, Heading, useColorModeValue
} from '@chakra-ui/react';
import OrderComponent from './OrderComponent'; // Adjust the import path as necessary

const ProfilePage = () => {
  const { data, loading, error } = useQuery(GET_USER_PROFILE);
  const boxBgColor = useColorModeValue('white', 'gray.800');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data?.user || { orders: [] };

  return (
    <Flex direction="column" align="center" p={5}>
      <Box w="full" bg={boxBgColor} p={5} borderRadius="lg" mb={5}>
        <Heading size="lg" mb={2}>{user.firstName}</Heading>
        <Text><strong>Email:</strong> {user.email}</Text>
      </Box>

      <Box w="full" bg={boxBgColor} p={5} borderRadius="lg">
        <Heading size="lg" mb={2}>Orders</Heading>
        {user.orders.map((order) => (
          <OrderComponent key={order._id} order={order} />
        ))}
      </Box>
    </Flex>
  );
};

export default ProfilePage;

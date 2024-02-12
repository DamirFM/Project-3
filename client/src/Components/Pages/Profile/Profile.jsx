// Import necessary dependencies
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_PROFILE } from '../../../utils/queries';
import {
  Box, Flex, Spinner, Alert, AlertIcon, useColorModeValue
} from '@chakra-ui/react';
import OrderComponent from './OrderComponent'; // Ensure this path is correct

const ProfilePage = () => {
  const { data, loading, error } = useQuery(GET_USER_PROFILE);
  const boxBgColor = useColorModeValue('white', 'gray.800');

  if (loading) return <Flex justify="center"><Spinner /></Flex>;
  if (error) return (
    <Alert status="error">
      <AlertIcon />
      There was an error processing your request: {error.message}
    </Alert>
  );

  const user = data?.user || {};

  return (
    <Flex direction="column" align="center" p={5}>
      <Box w="full" bg={boxBgColor} p={5} borderRadius="lg" mb={5}>
        {/* Display user information */}
      </Box>

      <Box w="full" bg={boxBgColor} p={5} borderRadius="lg">
        {/* Assuming you have a heading for orders */}
        {user.orders && user.orders.length > 0 ? user.orders.map((order) => (
          <OrderComponent key={order._id} order={order} />
        )) : 'No recent purchases found.'}
      </Box>
    </Flex>
  );
};

export default ProfilePage;

import React from 'react';
import { useQuery } from '@apollo/client';
import AuthService from '../../../utils/auth';
import { GET_USER_PROFILE } from '../../../utils/queries';
import {
  Box, Flex, Text, Heading, useColorModeValue, VStack
} from '@chakra-ui/react';
import OrderComponent from './OrderComponent'; // Ensure the path is correct

const ProfilePage = () => {
  const { data, loading, error } = useQuery(GET_USER_PROFILE);
  const boxBgColor = useColorModeValue('rgba(230,234,255, .3)', 'rgba(0.32,0.32,0.35, .3)');
  const bgGradient = useColorModeValue(
    'linear(to-b, facebook.400, orange.500)', 
    'linear(to-b, black, orange.600)' 
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data?.user || { orders: [] };

  return (
    <Flex direction={{ base: 'column', md: 'row' }} align="flex-start" gap={5} p={5} wrap="wrap" bgGradient={bgGradient}>
      {/* User Info Box */}
      <Box flex={{ base: '1 1 100%', md: '1' }} bg={boxBgColor} p={5} borderRadius="lg" mb={{ base: 5, md: 0 }} minWidth={{ base: '100%', md: '300px' }} pt="250" pb="223">
        <Heading size="lg" textAlign="center" color="orange.500" fontFamily="'Protest Revolution', sans-serif" fontSize="6xl" mb={2}>{user.firstName || 'User'}</Heading>
        <Text textAlign="center"><strong>Email:</strong> {user.email || 'No email'}</Text>
      </Box>

      {/* Orders Box */}
      <Box flex={{ base: '1 1 100%', md: '2' }} bg={boxBgColor} p={5} borderRadius="lg" overflowY="auto" maxHeight="xl" minWidth="300px" >
        <VStack divider={<Box borderColor="gray.200" borderWidth="2px" width="full" />} spacing={4}>
          {user.orders && user.orders.length > 0 ? user.orders.map((order) => (
            <OrderComponent key={order._id} order={order} />
          )) : <Text>No recent purchases found.</Text>}
        </VStack>
      </Box>
    </Flex>
  );
};

export default ProfilePage;

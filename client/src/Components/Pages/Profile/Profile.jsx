import React from 'react';
import { Box, Flex, Text, Heading, VStack, Divider } from '@chakra-ui/react';

// Mocked user data for illustration. Replace this with your user data fetched from the database
const userData = {
  firstName: 'Kanye',
  lastName: 'West',
  email: 'kanye@west.com',
  // Password should not be displayed or fetched to the client for security reasons
  orders: [
    // Assuming orders have some basic information you might want to display
    { id: 1, itemName: 'Product 1', quantity: 2, status: 'Delivered' },
    { id: 2, itemName: 'Product 2', quantity: 1, status: 'Shipped' },
  ],
};

const Profile = () => {
  return (
    <Box maxW="1440px" mx="auto" p={5}>
      <VStack spacing={4} align="flex-start">
        <Heading>Profile</Heading>
        <Text><strong>First Name:</strong> {userData.firstName}</Text>
        <Text><strong>Last Name:</strong> {userData.lastName}</Text>
        <Text><strong>Email:</strong> {userData.email}</Text>

        <Divider />

        <Heading size="md">Orders</Heading>
        {userData.orders.map((order) => (
          <Box key={order.id} p={2}>
            <Text><strong>Item Name:</strong> {order.itemName}</Text>
            <Text><strong>Quantity:</strong> {order.quantity}</Text>
            <Text><strong>Status:</strong> {order.status}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Profile;

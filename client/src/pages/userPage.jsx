import React from 'react';
import { Flex, Box, VStack, Heading, Text, Avatar, Button } from '@chakra-ui/react';
import { FaUserEdit, FaUpload, FaCog, FaGift, FaSignOutAlt } from 'react-icons/fa';

const UserProfile = () => {
  return (
   <Flex minH="100vh" p={4} bg="gray.50">
    <Box w="250px" p={4} borderRight="1px solid blue">
      <Heading as="h2" size="lg" mb={4}>User Profile</Heading>
      <Text ml={4} fontSize="xl" fontWeight="bold">User Name</Text>
      <VStack align="start" spacing={2} mt={4}>
        <Button leftIcon={<FaUserEdit />} variant="ghost">Edit Preferences</Button>
        <Button leftIcon={<FaUpload />} variant="ghost">Upload Image</Button>
        <Button leftIcon={<FaCog />} variant="ghost">Settings</Button>
        <Button leftIcon={<FaGift />} variant="ghost">Rewards</Button>
        <Button leftIcon={<FaSignOutAlt />} variant="ghost">Logout</Button>
      </VStack>
    </Box>
    </Flex>
  );
};

export default UserProfile;

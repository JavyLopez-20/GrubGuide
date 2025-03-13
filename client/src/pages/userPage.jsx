import React from 'react';
import { Flex, Box, VStack, Heading, Avatar, Button } from '@chakra-ui/react';
import { FaUserEdit, FaUpload, FaCog, FaGift, FaSignOutAlt } from 'react-icons/fa';

const UserProfile = () => {
  return (
   <Flex minH="100vh" p={4} bg="gray.50">
    <Box bg="teal.500" w="250px" p={4} borderRight="5px solid" borderColor="blackAlpha.200">
      <Heading as="h2" size="lg" mb={4}>User Profile</Heading>
      <Avatar.Root>
      <Avatar.Fallback name="User" />
      <Avatar.Image src="https://bit.ly/sage-adebayo" />
    </Avatar.Root>
      <VStack align="start" spacing={2} mt={4}>
        <Button color="white" leftIcon={<FaUserEdit />} variant="ghost">Edit Preferences</Button>
        <Button color="white" leftIcon={<FaUpload />} variant="ghost">Upload Image</Button>
        <Button color="white" leftIcon={<FaCog />} variant="ghost">Settings</Button>
        <Button color="white" leftIcon={<FaGift />} variant="ghost">Rewards</Button>
        <Button color="white" leftIcon={<FaSignOutAlt />} variant="ghost">Logout</Button>
      </VStack>
    </Box>
    </Flex>
  );
};

export default UserProfile;

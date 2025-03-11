import React from 'react';
import { Flex, Box, VStack, Heading, Text, Avatar, Button } from '@chakra-ui/react';
import { FaUserEdit, FaUpload, FaCog, FaGift, FaSignOutAlt } from 'react-icons/fa';

const userProfile = () => {
  return (
    <Flex minH="100vh" p={4}>
      {/* Left Sidebar */}
      <Box w="250px" p={4} borderRight="1px solid #green.500">
        <Flex align="center" mb={4}>
          <Avatar size="lg" name="User Name" src="user-profile.jpg" />
          <Text ml={4} fontSize="xl" fontWeight="bold">User Name</Text>
        </Flex>
        <VStack align="start" spacing={2}>
          <Button leftIcon={<FaUserEdit />} variant="ghost">Edit Preferences</Button>
          <Button leftIcon={<FaUpload />} variant="ghost">Upload Image</Button>
          <Button leftIcon={<FaCog />} variant="ghost">Settings</Button>
          <Button leftIcon={<FaGift />} variant="ghost">Rewards</Button>
          <Button leftIcon={<FaSignOutAlt />} variant="ghost">Logout</Button>
        </VStack>
      </Box>

      {/* Center: Favorite Restaurants */}
      <Box flex="1" p={4}>
        <Heading size="lg" mb={4}>Favorite Restaurants</Heading>
        {/* Restaurant cards will go here */}
      </Box>

      {/* Right: Messages/Chat */}
      <Box w="300px" p={4} borderLeft="1px solid #e2e8f0" overflowY="auto">
        <Heading size="lg" mb={4}>Messages</Heading>
        {/* Messages and chat form will go here */}
      </Box>
    </Flex>
  );
};

export default userProfile;
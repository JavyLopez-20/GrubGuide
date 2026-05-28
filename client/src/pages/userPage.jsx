import React, { useContext, useState, useEffect } from 'react';
import { Flex, Box, VStack, Heading, Button, Center, Text } from '@chakra-ui/react';
import { FaUserEdit, FaUpload, FaCog, FaGift, FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../components/Auth';

const UserProfile = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [profile, setProfile] = useState({ username: "", favorites: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch("/api/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch Profile");
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <Center minH="100vh">
        <Text fontSize="xl">Please log in to view your profile</Text>
      </Center>
    );
  }

  if (error) {
    return (
      <Center minH="100vh">
        <Text color="red.500" fontSize="xl">{error}</Text>
      </Center>
    );
  }

  return (
   <Flex minH="100vh" p={4} bg="gray.50">
    <Box bg="#FD1C03" w="250px" p={4} borderRight="5px solid" borderColor="blackAlpha.200">
      <Heading as="h2" size="lg" mb={4}>User Profile</Heading>
      <VStack align="start" spacing={2} mt={4}>
        <Button color="white" leftIcon={<FaUserEdit />} variant="ghost">Edit Preferences</Button>
        <Button color="white" leftIcon={<FaUpload />} variant="ghost">Upload Image</Button>
        <Button color="white" leftIcon={<FaCog />} variant="ghost">Settings</Button>
        <Button color="white" leftIcon={<FaGift />} variant="ghost">Rewards</Button>
        <Button color="white" leftIcon={<FaSignOutAlt />} variant="ghost">Logout</Button>
      </VStack>
    </Box>
    <Box bg="#0D0A09" borderColor="#F00A19" border="5px solid">
      <Image src={profile.favorites.image_url} alt={"Image of cuisine"} />
    </Box>
    </Flex>
  );
};

export default UserProfile;
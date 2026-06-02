import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Heading, Text, Image, Spinner, Button, Center, Flex, Link as ChakraLink, SimpleGrid} from "@chakra-ui/react";
import { AuthContext } from "../components/Auth";

const RestaurantDetails = () => {
    const [result, setResult] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFavorited, setIsFavorited] = useState(false)
    const { isLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
            const fetchBusinessDetails = async () => {
            const url = `/api/results/business/${id}`;
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                console.log("API response", data)
                setResult(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        const checkIfFavorited = async () => {
            if (!isLoggedIn) return;
            try {
              const token = localStorage.getItem("authToken");
              const response = await fetch(`/api/favorites/${id}`, {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              });
              if (!response.ok) {
                throw new Error("Failed to check favorite status");
              }
              const data = await response.json();
              setIsFavorited(data.isFavorited);
            } catch (error) {
              console.error("Error checking favorite status:", error);
            }
          };
        fetchBusinessDetails();
        if (isLoggedIn) checkIfFavorited();
    }, [id, isLoggedIn]);

    const handleToggleFavorite = async () => {
        if (!isLoggedIn) {
          alert("Please log in to manage favorites");
          navigate("/login");
          return;
        };
        try {
            const token = localStorage.getItem("authToken");
            const method = isFavorited ? "DELETE" : "POST";
            const url = isFavorited ? `/api/favorites/${id}` : "/api/favorites";
            const response = await fetch(url, {
              method,
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: method === "POST" ? JSON.stringify({
                businessId: id,
                name: result.name,
                image_url: result.image_url,
              }) : null,
            });
            if (!response.ok) {
              throw new Error(`Failed to ${isFavorited ? "remove from" : "add to"} favorites`);
            }
            setIsFavorited(!isFavorited);
            alert(isFavorited ? "Removed from favorites!" : "Added to favorites!");
          } catch (error) {
            console.error("Error:", error);
            alert(`Failed to ${isFavorited ? "remove from" : "add to"} favorites`);
          }
        };
    
    if (loading) {
        return (
            <Center minH="100vh">
                <Spinner size="xl" color="teal.500" />
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
    if (!result) {
        return (
            <Center minH="100vh">
                <Text fontSize="lg">No Restaurant found</Text>
            </Center>
        );
    }
    return (
        <Box minH="100vh" bg="gray.50" p={6}>
        <SimpleGrid spacing={6} align="stretch"
        maxW="800px" mx="auto">
                <Heading as="h1" size="2xl" 
                color="teal.600">
                    {result.name}
                    </Heading>
                <Image
                    // src={result.image_url}
                    alt={result.name}
                    borderRadius="lg"
                    boxShadow="md"
                    objectFit="cover"
                    width="200px"
                    maxH="400px"
                    />
                <Text fontSize="lg" color="gray.600">{result.location?.address}</Text>
                <Text fontSize="lg" color="gray.600">Categories: {result.categories.map(categories => categories.name).join(', ')}</Text>
                <Text fontSize="lg" color="gray.600">Distance: {result?.distance}</Text>
                <Text fontSize="lg" color="gray.600">Phone: {result?.tel} </Text>
                {/* <Text fontSize="lg" color="gray.600">Social Media: {result.social_media}</Text> */}
                <Text fontSize="lg" color="gray.600">Hours:</Text>
                <Text fontSize="lg" color="gray.600">Website: <ChakraLink href={result?.website} color="blue.500" isExternal>View on website</ChakraLink></Text>
            {isLoggedIn && (
            <Button colorPalette={isFavorited ? "red" : "teal"}
            onClick={handleToggleFavorite}>
            {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
            </Button>)}
                <Flex justifyContent="space-between" alignItems="center">
                </Flex>
            </SimpleGrid>
        </Box>
    );
};

export default RestaurantDetails;
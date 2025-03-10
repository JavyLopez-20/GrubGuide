import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box,
    Heading,
    Text,
    Image,
    VStack,
    Spinner,
    Center,
    Badge,
    Flex,
    Link as ChakraLink
} from "@chakra-ui/react";


const RestaurantDetails = () => {
    const [business, setBusiness] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBusinessDetails = async () => {

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`/api/results/restaurant/${id}`);
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Failed to fetch business details: ${errorText} - ${response.statusText}`);
                }
                const data = await response.json();
                setBusiness(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBusinessDetails();
    }, [id]);
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
    if (!business) {
        return (
            <Center minH="100vh">
                <Text fontSize="lg">No Restaurant found</Text>
            </Center>
        );
    }
    return (
        <Box minH="100vh" bg="gray.50" p={6}>
            <VStack spacing={6} align="stretch"
            maxW="800px" mx="auto">
                <Heading as="h1" size="2x1" 
                color="teal.600">
                    {business.name}
                    </Heading>
                <Image
                    src={business.image_url}
                    alt={business.name}
                    borderRadius="lg"
                    boxShadow="md"
                    objectFit="cover"
                    width="100%"
                    maxH="400px"
                />
                <Text fontSize="lg" color="gray.600">{business.location.address1}, {business.location.city}</Text>
                <Text fontSize="lg" color="gray.600">Rating: {business.rating}</Text>
                <Text fontSize="lg" color="gray.600">Price: {business.price}</Text>
                <Flex justifyContent="space-between" alignItems="center">
                    <Badge colorScheme="green" fontSize="md">{business.categories.map((cat) => cat.title).join(', ')}</Badge>
                    <ChakraLink href={business.url} color="blue.500" isExternal>View on Yelp</ChakraLink>
                </Flex>
            </VStack>
        </Box>
    );
};

export default RestaurantDetails;
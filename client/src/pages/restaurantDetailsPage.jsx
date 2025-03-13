import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box,
    Heading,
    Text,
    Image,
    VStack,
    Spinner,
    Center,
    // Badge,
    Flex,
    Link as ChakraLink
} from "@chakra-ui/react";


const RestaurantDetails = () => {
    const [result, setResult] = useState(null);
    const { businessId } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            const fetchBusinessDetails = async () => {
            const url = `/api/results/business/${businessId}`;
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
                setResult(data.businessId);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBusinessDetails();
    }, [businessId]);
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
    if (!businessId) {
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
                <Heading as="h1" size="2xl" 
                color="teal.600">
                    {businessId.name}
                    </Heading>
                <Image
                    src={businessId.image_url}
                    alt={businessId.name}
                    borderRadius="lg"
                    boxShadow="md"
                    objectFit="cover"
                    width="200px"
                    maxH="400px"
                    />
                <Text fontSize="lg" color="gray.600">{businessId.display_address}</Text>
                <Text fontSize="lg" color="gray.600">Rating: {businessId.rating}</Text>
                <Text fontSize="lg" color="gray.600">Price: {businessId.price}</Text>
                <Text fontSize="lg" color="gray.600">Phone: {businessId.phone} </Text>
                <Text fontSize="lg" color="gray.600">Reviews: {businessId.review_count}</Text>
                <Text fontSize="lg" color="gray.600">Hours:</Text>
                {business.hours && business.hours[0].open.map((hours, index) => (
                    <Text key={`${hours.day}-${index}`} fontSize="lg" color="gray.600">
                        {`Day: ${hours.day}, Start: ${hours.start}, End: ${hours.end}`}
                    </Text>
                ))}
                <Text fontSize="lg" color="gray.600">Website: {business.url}</Text>
                <Flex justifyContent="space-between" alignItems="center">
                    {/* <Badge colorScheme="green" fontSize="md">{business.categories.map((cat) => cat.title).join(', ')}</Badge> */}
                    <ChakraLink href={business.url} color="blue.500" isExternal>View on Yelp</ChakraLink>
                </Flex>
            </VStack>
        </Box>
    );
};

export default RestaurantDetails;
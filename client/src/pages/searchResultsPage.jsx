import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Heading, Flex, Badge, VStack, Link as ChakraLink } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const term = searchParams.get('term');
  const location = searchParams.get('location');

  useEffect(() => {
    const fetchResults = async () => {
        if (!term) return;
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`/api/results?term=${term}&location=${location}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setResults(data.businesses || []);
        } catch (err) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    fetchResults();
  }, [term, location]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>
  if (!term) return <p>Please provide term</p>


  return (
    <VStack spacing={4} p={4}>
        {results.map((business) => (
            <ChakraLink
            key={business.id}
            as={RouterLink}
            to={`/restaurant/${business.id}`}
            _hover={{ textDecoration: 'none' }}
            >
            <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg="white"
                p={4}
                boxShadow="md"
                _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
                transition="all 0.2s"
            >
                <Image
                    src={business.image_url}
                    alt={business.name}
                    fallbackSrc="https://via.placeholder.com/150"
                    objectFit="cover"
                    height="150px"
                    width="100%"
                />
                <VStack p={4} align="start" spacing={2}>
                    <Heading as="h3" size="md" color="gray.800">
                        {business.name}
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                        {business.location.address1}, {business.location.city}
                    </Text>
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Badge colorScheme="green" fontSize="sm">
                            {business.rating} stars
                        </Badge>
                        <ChakraLink href={business.url} color="blue.500" isExternal>
                            View on Yelp
                        </ChakraLink>
                    </Flex>
                </VStack>
            </Box>
            </ChakraLink>
        )
        )};
    </VStack>
  );
};

export default SearchResultsPage;
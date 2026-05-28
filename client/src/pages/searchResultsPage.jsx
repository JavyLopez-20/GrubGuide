import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Heading, Flex, Badge, VStack, Link as ChakraLink, SimpleGrid } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');
  const near = searchParams.get('near');

  useEffect(() => {
    const fetchResults = async () => {
        if (!query) return;
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`/api/results?query=${query}&near=${near}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setResults(data.results || []);
        } catch (error) {
            console.error(error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    fetchResults();
  }, [query, near]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>
  if (!query) return <p>Please provide query</p>


  return (
    <Box>
    <SimpleGrid columns={4} gap='5px'>
        {results.map((business) => (
            <ChakraLink
            key={business.fsq_place_id}
            as={RouterLink}
            to={`/${business.fsq_place_id}`}
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
                    // src={business.image_url}
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
                        {business.location?.address}, {business.location?.post_town}
                    </Text>
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        {/* <Badge colorScheme="green" fontSize="sm">
                            {business?.store_id} stars
                        </Badge> */}
                        <ChakraLink href={business?.website} color="blue.500" isExternal>
                            View on website
                        </ChakraLink>
                    </Flex>
                </VStack>
            </Box>
            </ChakraLink>
        )
        )}
    </SimpleGrid>
    </Box>
  );
};

export default SearchResultsPage;
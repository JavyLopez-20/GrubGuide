import React, { useState, useEffect } from 'react';
import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

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
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Search Results for {term} in {location}
      </Text>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
        {results.map((business) => (
          <Box key={business.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={business.image_url} alt={business.name} />
            <VStack p={4} align="start">
              <Text fontWeight="bold">{business.name}</Text>
              <Text>{business.location.address},{business.location.city}</Text>
              <Text>Rating: {business.rating}</Text>
              <Text>Cuisine: {business.cuisine}</Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchResultsPage;
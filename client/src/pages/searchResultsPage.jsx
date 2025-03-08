import React from 'react';
import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
  const location = useLocation();
  const { restaurants } = location.state || { restaurants: [] };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Search Results
      </Text>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
        {restaurants.map((restaurant) => (
          <Box key={restaurant.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={restaurant.imageUrl} alt={restaurant.name} />
            <VStack p={4} align="start">
              <Text fontWeight="bold">{restaurant.name}</Text>
              <Text>{restaurant.address}</Text>
              <Text>Rating: {restaurant.rating}</Text>
              <Text>Cuisine: {restaurant.cuisine}</Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchResultsPage;
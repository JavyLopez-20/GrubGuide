import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Link,
  Flex,
  Badge,
} from '@chakra-ui/react';

const CardResults = ({ business }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      _hover={{ boxShadow: 'lg' }}
    >
      <Image
        src={business.image_url}
        alt={business.name}
        fallbackSrc="https://via.placeholder.com/150"
        objectFit="cover"
        height="150px"
        width="100%"
      />
      <Heading as="h3" size="md" mt={2}>
        {business.name}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {business.location.address1}, {business.location.city}
      </Text>
      <Flex justifyContent="space-between" alignItems="center" mt={2}>
        <Badge colorScheme="green" fontSize="sm">
          {business.rating} stars
        </Badge>
        <Link href={business.url} color="blue.500" isExternal>
          View on Yelp
        </Link>
      </Flex>
    </Box>
  );
};

export default CardResults;
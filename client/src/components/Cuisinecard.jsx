import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);

const CuisineCard = ({ name, image, description = "Explore delicious dishes!" }) => {
  return (
    <MotionBox
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      cursor="pointer"
      whileHover={{ scale: 1.05, boxShadow: "lg" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      _hover={{ borderColor: "teal.500", borderWidth: "1px" }}
    >
      <Image
        src={image}
        alt={`${name} cuisine`}
        h="150px"
        w="100%"
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/300x150?text=No+Image"
      />
      <VStack p={4} align="start" spacing={2}>
        <Text fontWeight="bold" fontSize="lg" color="gray.800">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.600" noOfLines={2}>
          {description}
        </Text>
      </VStack>
    </MotionBox>
  );
};

export default CuisineCard;
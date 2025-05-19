import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CuisineCard from "../components/Cuisinecard";
import React from "react";

const Home = () => {
    const cuisines = [
      {name: "Italian", image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?cs=srgb&dl=pexels-enginakyurt-1437267.jpg&fm=jpg", description: "In the mood for some Italian? Let's explore!"},
      {name: "Mexican", image: "https://wellfedbaker.com/wp-content/uploads/2024/04/tacos-de-carnitas-2.jpg", description: "Let's explore the many delicious dishes!"},
      {name: "Sushi", image: "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VzaGl8ZW58MHx8MHx8fDA%3D", description: "I'm in the mood for sushi!"},
      {name: "Indian", image: "https://static.vecteezy.com/system/resources/thumbnails/036/804/331/small/ai-generated-assorted-indian-food-on-dark-wooden-background-free-photo.jpg", description: "Let's explore!"},
      {name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww", description: "Let's explore!"},
      {name: "Snacks", image: "https://kitchenfunwithmy3sons.com/wp-content/uploads/2020/11/frito-pie-1.jpg", description: "Let's explore!"},
    ]
  return (
    <Box>
      <Heading as="h2" size="lg" textAlign="center" mb={8}>
          Explore Popular Cuisines
        </Heading>
    <SimpleGrid columns={[2, null, 3]} spacing={6}>
    {cuisines.map((cuisine, index) => (
            <motion.div
              key={cuisine.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <CuisineCard
                name={cuisine.name}
                image={cuisine.image}
                description={cuisine.description}
              />
            </motion.div>
          ))}
    </SimpleGrid>
    </Box>
  );
};

export default Home;
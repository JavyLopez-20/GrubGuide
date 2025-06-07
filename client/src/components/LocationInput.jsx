import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, Button, Box, Heading } from "@chakra-ui/react";

const LocationInput = () => {
  const { cuisineName } = useParams();
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
        navigate(`/results?term=${encodeURIComponent(cuisineName)}&location=${encodeURIComponent(location.trim())}`);
    }
  };

  return (
    <Box textAlign="center" mt={10}>
      <Heading as="h3" size="md" mb={4}>
        Where would you like to find {cuisineName} cuisine?
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your city or zip code"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          mb={4}
          width="300px"
        />
        <Button type="submit" colorScheme="teal">
          Search
        </Button>
      </form>
    </Box>
  );
};

export default LocationInput;

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, Button, Box, Heading } from "@chakra-ui/react";

const LocationInput = () => {
  const { query } = useParams();
  const [near, setNear] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (near.trim()) {
        navigate(`/results?query=${encodeURIComponent(query)}&near=${encodeURIComponent(near.trim())}`);
    }
  };

  return (
    <Box textAlign="center" mt={10}>
      <Heading as="h3" size="md" mb={4}>
        Where would you like to find {query} cuisine?
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your city or zip code"
          value={near}
          onChange={(e) => setNear(e.target.value)}
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

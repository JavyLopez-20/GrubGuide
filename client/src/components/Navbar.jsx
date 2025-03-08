import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Box,
    Flex,
    Input,
    Button,
    IconButton,
  } from '@chakra-ui/react';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu"
  import { FaHamburger } from "react-icons/fa";
  import { FaSearch } from "react-icons/fa";   

const Navbar = () => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSearchNearMe = async () => {
          if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
                navigate(`/results?term=${term}&lat=${latitude}&lon=${longitude}`)
          },
          (error) => {
            console.error('Error getting location:', error);
        }
        );
      }
      else {
        alert('Geolocaton is not supported by this browser')
      }
    };

    const handleSearchByLocation = async () => {
        if (term && location) {
          navigate(`/results?term=${term}&location=${location}`)
        }
        else {
            alert('Please enter term and location')
        }
    };

    return(
        <Box bg="teal.500" px={4} onSubmit={(e) => e.preventDefault()}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box fontWeight="bold" fontSize="xl" color="white">
            GrubGuide
          </Box>
        </Link>

        <Flex alignItems="center" flex={1} mx={4}>
          <Input
            placeholder="Search restaurant or cuisine"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            bg="white"
            color="black"
            mr={2}
          />
          <Input
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            bg="white"
            color="black"
            mr={2}
          />
          <Button leftIcon={<FaSearch />} onClick={handleSearchNearMe} colorScheme="teal" variant="solid">
            Search Near Me
          </Button>
          <Button ml={2} onClick={handleSearchByLocation} colorScheme="teal" variant="outline">
            Search by Location
          </Button>
        </Flex>
        
        {/* Login/Register Links */}
        <Flex alignItems="center">
          <Link to="/login">
            <Button colorScheme="teal" variant="ghost" mr={2}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button colorScheme="teal" variant="solid">
              Register
            </Button>
          </Link>
        </Flex>

        {/* Mobile Menu */}
        <Box display={{ base: 'block', md: 'none' }}>
          <MenuRoot>
            <MenuTrigger>
            <Button as={IconButton} icon={<FaHamburger />} variant="outline" />
            </MenuTrigger>
            <MenuContent>
              <MenuItem as={Link} to="/login">
                Login
              </MenuItem>
              <MenuItem as={Link} to="/register">
                Register
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </Box>
      </Flex>
    </Box>
    );
};


export default Navbar;
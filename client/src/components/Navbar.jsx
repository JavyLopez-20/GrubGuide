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
    const [searchTerm, setSearchTerm] = useState('');
    const [manualLocation, setManualLocation] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const handleSearchNearMe = async () => {
        if (!navigator.geolocation) {
           console.error('Geolocation is not supported by this browser')
          }
          setLoading(true);

          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(`/api/search?term=${searchTerm}&latitude=${latitude}&longitude=${longitude}`)
                    if (!response.ok) {
                        throw new Error(`Error: ${response.statusText}`)
                    }
                    const data = await response.json();
                    navigate('/search-results',  { state: { restaurants: data } });
                } catch (error) {
                    console.error(`Error fetching restaurants`, error)
                } finally {
                    setLoading(false);
                }
          },
          (error) => {
            console.error('Error getting location:', error);
            setLoading(false);
        }
        );
      };

    const handleSearchByLocation = async () => {
        if (!searchTerm || !manualLocation) {
          console.error(`Search term and location are required`)
        }
        setLoading(true);
        try {
            const response = await fetch(`/api/search?term=${searchTerm}&location=${manualLocation}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`)
            }
            const data = await response.json();
            navigate('/search-results', { state: { restaurants: data }});
        } catch (error) {
            console.error(`Error fetching restaurants`, error)
        } finally {
            setLoading(false)
        }
    };

    return(
        <Box bg="teal.500" px={4}>
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bg="white"
            color="black"
            mr={2}
          />
          <Input
            placeholder="Enter location"
            value={manualLocation}
            onChange={(e) => setManualLocation(e.target.value)}
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
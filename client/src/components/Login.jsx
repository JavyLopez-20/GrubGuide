import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Heading,
    Text,
    VStack,
    Input,
    Button,
    Link as ChakraLink,
    Field,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Auth';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext);

    const handleLogin = async () => {
            const response = await fetch(`/api/auth/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }
            if (data.token) {
            login(data.token)
            navigate('/profile');
            } else {
                console.error('Login failed:', data);
            }
        }
        const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            setError(null);
            const credentials = {
                email: e.target.value,
                password: e.target.value,
              };
              handleLogin(credentials)
        }
    return (
        <Box maxW="400px" mx="auto" mt={10} p={4}>
            <VStack spacing={4}>
                <Heading as="h2" size="lg">Login</Heading>
                {error && <Text color="red.500">{error}</Text>}
                <form onSubmit={handleSubmit}>
                    <Field.Root invalid={!!error}>
                        <Field.Label>Email</Field.Label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Field.ErrorText>{error}</Field.ErrorText>
                    </Field.Root>
                    <Field.Root invalid={!!error}>
                        <Field.Label>Password</Field.Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Field.ErrorText>{error}</Field.ErrorText>
                    </Field.Root>
                    <Button
                        type="submit"
                        isLoading={loading}
                        colorScheme="teal"
                        mt={4}
                    >
                        Login
                    </Button>
                </form>
                <Text>
                    Don't have an account?{' '}
                    <ChakraLink as={Link} to="/register" color="teal.500">
                        Register here
                    </ChakraLink>
                </Text>
            </VStack>
        </Box>
                       
    );
};
export default Login;
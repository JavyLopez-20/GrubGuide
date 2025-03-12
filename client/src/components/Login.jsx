import React, { useState } from 'react';
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

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/');
        }
        catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
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
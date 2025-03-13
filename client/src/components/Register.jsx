import React, { useState } from 'react';
import { useNavigate, Link, } from 'react-router-dom';
import { 
    Button,
    Field,
    Stack,
    Input,
} from '@chakra-ui/react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, username, password }),
            });
            const data = await response.json();
            setData(data);
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    }
    return (
        <Stack spacing={4} maxW="400px" mx="auto" mt="10" p={4}>
            <form onSubmit={handleSubmit}>
                <Field.Root invalid={!!error}>
                    <Field.Label>Username</Field.Label>
                    <Input
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <Field.ErrorText>{error}</Field.ErrorText>
                </Field.Root>
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
                <Button type="submit" isLoading={loading}>Register</Button>
            </form>
            {data && <p>{JSON.stringify(data)}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Link to="/login">
                <Button variant="link">Already have an account? Login</Button>
            </Link>
        </Stack>
        )
    };
export default Register;
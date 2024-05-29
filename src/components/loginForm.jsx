import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, createTheme, ThemeProvider, styled } from '@mui/material';
import '../styles/login.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === '123' && password === '123') {
            navigate('/');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <Container
            maxWidth = "false"
            className="login-container"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#383637',
            }}
        >
            <div>
              <h1 sx={{color: "white"}}>Login</h1>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                        className = "custom-textfield"
                        autoFocus = "true"
                        placeholder='enter username'
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                        className = "custom-textfield"
                    />
                    <Button variant="contained" style={{ backgroundColor: '#f1c41b', color: 'black', marginTop: "10px" }} type="submit">
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Select, MenuItem, InputLabel, FormControl, OutlinedInput } from '@mui/material';
import icon from '../assets/icon.png';

const RegisterForm = () => {
    const navigate = useNavigate();
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = () => {
        navigate('/');
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
                <div className='logoInLogin'>
                    <img src={icon}/>
                    <h1 className='nameInLogin'>LessonLab</h1>
                </div>
                <form onSubmit={handleRegister}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
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
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                        className = "custom-textfield"
                    />
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                        className = "custom-textfield"
                    />
                    <FormControl variant="outlined" fullWidth required margin="normal" className="dropdown">
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            labelId="role-label"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            input={<OutlinedInput label="Role" />}
                        >
                            <MenuItem value="teacher">Teacher</MenuItem>
                            <MenuItem value="student">Student</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" style={{ backgroundColor: '#f1c41b', color: 'black', marginTop: "10px" }} type="submit">
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default RegisterForm;
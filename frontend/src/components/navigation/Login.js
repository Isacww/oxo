import { Button, TextField, Box } from "@mui/material";
import React, { useState } from "react";
import { useUser } from "../../context/UserContext";

const Login = () => {
    const { user, login, logout } = useUser();
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        if (username.trim() !== "") {
            login(username);
        }
    };

    return (
        
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="1em" height="100vh" mt={-5}>
            {user ? (
                <>
                    <h3>Welcome, {user.username}!</h3>
                    <Button variant="contained" color="secondary" onClick={logout}>
                        Logout
                    </Button>
                </>
            ) : (
                <>
                    <TextField
                        label="Enter username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleLogin}>
                        Login
                    </Button>
                </>
            )}
        </Box>
    );
};

export default Login;

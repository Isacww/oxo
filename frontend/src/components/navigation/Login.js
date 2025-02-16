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
        <div>
            {user ? (
                <>
                    <h3>Welcome, {user.username}!</h3>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </>
            )}
        </div>
    );
};

export default Login;

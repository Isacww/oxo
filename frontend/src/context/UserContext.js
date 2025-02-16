import { createContext, useState, useContext } from "react";

const DEFAULT_RANK = 1000;

// Create User Context
const UserContext = createContext();

// Custom Hook for using User Context
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Stores the current logged-in user
    const [rank, setRank] = useState(DEFAULT_RANK);

    const login = (username, rank = DEFAULT_RANK) => {
        setUser({ username });
        setRank(rank);
        localStorage.setItem("user", username); // Store in localStorage for persistence
        localStorage.setItem("rank", rank);
    };

    const logout = () => {
        setUser(null);
        setRank(DEFAULT_RANK);
        localStorage.removeItem("user");
        localStorage.removeItem("rank");
    };

    return (
        <UserContext.Provider value={{ user, rank, setRank, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

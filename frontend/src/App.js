import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/NavBar";
import Home from "./components/navigation/Home";
import Play from "./components/navigation/Play";
import Ranks from "./components/navigation/Ranks";
import Leaderboard from "./components/navigation/Leaderboard";
import Rules from "./components/navigation/Rules";
import Login from "./components/navigation/Login";
import "./style.css";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Play" element={<Play />} />
            <Route path="/Ranks" element={<Ranks />} />
            <Route path="/Rules" element={<Rules />} />
            <Route path="/Leaderboard" element={<Leaderboard />} />
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;

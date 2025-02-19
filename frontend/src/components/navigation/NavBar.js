import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";

function Navbar() {
    return (
        <AppBar className="navbar">
            
            <ul>
                <li><Link to="/">Start</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Play">Play</Link></li>    
                <li><Link to="/Ranks">Ranks</Link></li>   
                <li><Link to="/Leaderboard">Leaderboard</Link></li>
                <li><Link to="/Rules">Rules</Link></li>     
                <li><h1>
                    <span className="letter1">O</span>
                    <span className="letter2">X</span>
                    <span className="letter3">O</span>
                </h1></li>
            </ul>
        </AppBar>
    );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Start</Link></li>
                <li><Link to="/Play">Play</Link></li>    
                <li><Link to="/Ranks">Ranks</Link></li>   
                <li><Link to="/Leaderboard">Leaderboard</Link></li>
                <li><Link to="/Rules">Rules</Link></li>   
            </ul>
        </nav>
    );
}

export default Navbar;

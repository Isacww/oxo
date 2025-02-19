import React, { useEffect } from "react";
import { Box } from "@mui/material";
import CustomCard from "../CustomCard";

function Rules() {
    useEffect(() => {
        document.title = "OXO - Rules";  // ✅ Change page title
    }, []);
    return (
        <Box display="flex" marginTop="5em">
            <CustomCard 
            title="Objective" 
            description="This is a 1 vs 1 game where players take turns placing markers (X and O).
                The first player to align 5 markers in a row (horizontally, vertically, or diagonally) wins." 
            image="https://source.unsplash.com/random/300x200"
            />
            <CustomCard 
            title="Winning condition" 
            description="The first player to get 5 of their markers
             in a row (horizontally, vertically, or diagonally) wins the game." 
            image="https://source.unsplash.com/random/300x200"
            />
            <CustomCard 
            title="Special Counter-Balance Mechanic" 
            description="The first marker placed by Player 1 is normal.
                    The second marker placed by Player 1 is temporarily placed, but Player 2 can move this marker by 1 adjacent node instead of placing their own.
                    This counter-balance mechanic only happens between Player 1's second move and Player 2's second move.
                    After Player 2 moves the marker, they place their own marker normally." 
            image="https://source.unsplash.com/random/300x200"
            />
            <CustomCard 
            title="Restrictions" 
            description="Players cannot place markers on occupied nodes.
                    The counter-balance move must be to an 
                    adjacent (horizontal, vertical, or diagonal) empty node." 
            image="https://source.unsplash.com/random/300x200"
            />
        </Box>    
    );
}

export default Rules;

import React, { useEffect } from "react";
import Board from "../board";
import useAutoScroll from "../../hooks/AutoScrollHook";
import { Box } from "@mui/material";

function Play() {
    const scrollRef = useAutoScroll();
    useEffect(() => {
        document.title = "OXO - Play";
    }, []);
    
    return (
        <Box>
            <Box ref={scrollRef}>
            <Board/>
            </Box>
        </Box>
    );
}

export default Play;

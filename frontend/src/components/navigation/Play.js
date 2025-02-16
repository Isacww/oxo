import React, { useEffect } from "react";
import Board from "../board";
import useAutoScroll from "../../hooks/AutoScrollHook";

function Play() {
    const scrollRef = useAutoScroll();
    useEffect(() => {
        document.title = "OXO - Play";
    }, []);
    
    return (
        <div>
            <h1>Play Tic-Tac-Toe</h1>
            <div ref={scrollRef}>
            <Board/>
            </div>
        </div>
    );
}

export default Play;

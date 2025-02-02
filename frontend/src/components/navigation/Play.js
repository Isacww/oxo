import React, { useEffect } from "react";

function Play() {
    useEffect(() => {
        document.title = "OXO - Play";  // ✅ Change page title
    }, []);
    return (
        <div>
            <h1>Play Tic-Tac-Toe</h1>
            <p>This is where you play the game.</p>
        </div>
    );
}

export default Play;

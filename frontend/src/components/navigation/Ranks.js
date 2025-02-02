import React, { useEffect } from "react";

function Ranks() {
    useEffect(() => {
        document.title = "OXO - Ranks"; 
    }, []);
    return (
        <div>
            <h1>Player Ranks</h1>
            <p>Check the best players here.</p>
        </div>
    );
}

export default Ranks;

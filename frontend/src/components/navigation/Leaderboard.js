import React, { useEffect } from "react";
function Leaderboard() {
    useEffect(() => {
        document.title = "OXO - Leaderboard";  // ✅ Change page title
    }, []);
    return (
        <div>
            <h1>Leaderboard</h1>
            <p>Here are the top scores!</p>
        </div>
    );
}

export default Leaderboard;

import React, { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "OXO - Home";  
    }, []);

    return (
        <div>
            <h1>Welcome to Tic-Tac-Toe</h1>
            <p>This is the homepage.</p>
        </div>
    );
}

export default Home;

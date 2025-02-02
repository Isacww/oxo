import React from "react";
// app.js -> Core game logic (e.g., Tic-Tac-Toe mechanics)
function App() {
  return <h1>Hello, Tic-Tac-Toe!</h1>;
}

class Game {
    static rules() {
        console.log("Align 5 markers in a row to win!");
    }
}

export default App;

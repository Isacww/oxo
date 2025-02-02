import React, { useState } from "react";
import "../style.css";
const Board = ({ size }) => {
    // State to track the board
    const [board, setBoard] = useState(Array(size * size).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");

    // Handle cell click
    const handleClick = (index) => {
        if (board[index] !== null) return; // Prevent overwriting
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X"); // Toggle player
    };

    return (
        <div className="board">
            {board.map((cell, index) => (
                <div 
                    key={index} 
                    className={`cell ${cell ? "active" : ""}`} 
                    onClick={() => handleClick(index)}
                >
                    {cell}
                </div>
            ))}
        </div>
    );
};

export default Board;

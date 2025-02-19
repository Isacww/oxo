import React, { useState, useEffect } from "react";
import "../style.css";
import useGameLogic from "../hooks/GameLogicHook";
import { useUser } from "../context/UserContext";
import { TextField } from "@mui/material";
import CustomCard from "./CustomCard";

const DEFAULT_RANK = 1000; // Default rank if none is set

const Board = () => {
    const { board, fullSize, currentPlayer, winner, activeSize, activeTopLeft, handleClick, resetGame } = useGameLogic();
    const { user } = useUser();

    // Player states
    const [playerX, setPlayerX] = useState(user?.username || "Player 1");
    const [playerXRank, setPlayerXRank] = useState(user?.rank || DEFAULT_RANK);
    const [playerO, setPlayerO] = useState("Player 2");
    const [playerORank, setPlayerORank] = useState(DEFAULT_RANK);

    // Update Player X when user logs in
    useEffect(() => {
        if (user?.username) {
            setPlayerX(user.username);
            setPlayerXRank(user.rank || DEFAULT_RANK);
        }
    }, [user]);

    // Update the winner's rank when the game is won
    useEffect(() => {
        if (winner) {
            if (winner === "X") {
                setPlayerXRank((prevRank) => prevRank + 10);
            } else {
                setPlayerORank((prevRank) => prevRank + 10);
            }
        }
    }, [winner]);

    return (
        <div className="game-container">
            {/* Left Panel for player names, ranks & game status */}
            <div className="left-panel">
                <h3>Players</h3>
                <CustomCard 
                    title={`${playerX}`} 
                    description={`${playerXRank}`}
                    image={`../../cross.png`}
                    layout = "background"
                />
                <CustomCard 
                    title={`Opponent`} 
                    description={`${playerORank}`}
                    image={`../../circle.png`} // Image stored in public/images
                    layout = "background"
                />
            </div>
            
            {/* Middle Panel - Game Board */}
            <div className="board-container" style={{ 
                display: "grid",
                gridTemplateColumns: `repeat(${activeSize}, 1fr)`,
                gridTemplateRows: `repeat(${activeSize}, 1fr)`,
            }}>
                {Array.from({ length: activeSize * activeSize }).map((_, index) => {
                    const row = Math.floor(index / activeSize) + activeTopLeft.row;
                    const col = (index % activeSize) + activeTopLeft.col;
                    const fullIndex = row * fullSize + col; 

                    return (
                        <div key={index} className="cell-container">
                            <div
                                className={`cell ${board[fullIndex] ? "active" : ""}`}
                                onClick={() => { if (!winner) handleClick(index); }}
                            >
                                {board[fullIndex]}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Right Panel - Game Controls */}
            <div className="right-panel">
                <h3>Game Info</h3>
                <CustomCard 
                    title={winner 
                        ? `Winner: ${winner === "X" ? playerX : playerO}!` 
                        : `Current Turn: ${currentPlayer === "X" ? playerX : playerO}`
                    } 
                    description={winner ? "Congratulations!" : "Make your move!"}
                    image={winner ? (currentPlayer === "X" ? "/cross.png" : "/circle.png") : null} 
                    layout = "background"
                />

                <button onClick={resetGame} className="reset-btn">Restart</button>
            </div>
        </div>
    );
};

export default Board;

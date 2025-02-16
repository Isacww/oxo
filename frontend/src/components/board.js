import React from "react";
import "../style.css";
import useGameLogic from "../hooks/GameLogicHook";

const Board = () => {
    const { board, fullSize, currentPlayer, winner, activeSize, activeTopLeft, handleClick, resetGame } = useGameLogic();

    return (
        <div className="game-container">
            {/* Left Panel for stats, player info, etc. */}
            <div className="left-panel">
                <h3>Player Info</h3>
                <h2>{winner ? `Winner: ${winner}!` : `Current Player: ${currentPlayer}`}</h2>
            </div>
            
            {/* Middle Panel for the Game Board */}
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
                        <div className="cell-container">
                            <div
                                key={index} 
                                className={`cell ${board[fullIndex] ? "active" : ""}`}
                                onClick={() => {!winner && handleClick(index)
                                    ;}}
                            >
                                {board[fullIndex]}
                            </div>
                        </div>
                    );
                })}
                
            </div>
            {/* Right Panel for additional content */}
            <div className="right-panel">
                <h3>Game Info</h3>
                <button onClick={resetGame} className="reset-btn">Restart</button>
            </div>
        </div>
    );
};

export default Board;

import { useState } from "react";
import { useUser } from "../context/UserContext"; // ✅ Import here

const DEFAULT_FULL_SIZE = 40;
const INITIAL_ACTIVE_SIZE = 9;
const EXPANSION_STEP = 2;

const useGameLogic = (fullSize = DEFAULT_FULL_SIZE) => {
    if (!Number.isInteger(fullSize) || fullSize <= 0) {
        throw new Error("Invalid fullSize value. Must be a positive integer.");
    }

    const { user, setRank } = useUser(); // ✅ Use inside function

    const [board, setBoard] = useState(Array(fullSize * fullSize).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);

    const [activeTopLeft, setActiveTopLeft] = useState({
        row: Math.floor((fullSize - INITIAL_ACTIVE_SIZE) / 2),
        col: Math.floor((fullSize - INITIAL_ACTIVE_SIZE) / 2),
    });

    const [activeSize, setActiveSize] = useState(INITIAL_ACTIVE_SIZE);

    const handleClick = (index) => {
        if (winner) return; // Stop clicks after win

        // Convert active board index to row/col
        const row = Math.floor(index / activeSize);
        const col = index % activeSize;

        // Map to full board space
        const fullRow = activeTopLeft.row + row;
        const fullCol = activeTopLeft.col + col;
        const fullIndex = fullRow * fullSize + fullCol;

        if (board[fullIndex] !== null) return; // Prevent overwriting

        // Update board state
        const newBoard = [...board];
        newBoard[fullIndex] = currentPlayer;
        setBoard(newBoard);

        // Check for a winner
        if (checkWinner(newBoard, currentPlayer)) {
            setWinner(currentPlayer);
            updateRank();
            return;
        }

        // Expand board if needed
        if (
            row < EXPANSION_STEP || col < EXPANSION_STEP ||
            row >= activeSize - EXPANSION_STEP || col >= activeSize - EXPANSION_STEP
        ) {
            expandActiveBoard();
        }

        // Change turn only if there's no winner
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    };

    const expandActiveBoard = () => {
        if (activeSize + EXPANSION_STEP * 2 <= fullSize) {
            setActiveSize(activeSize + EXPANSION_STEP * 2);
            setActiveTopLeft({
                row: Math.max(activeTopLeft.row - EXPANSION_STEP, 0),
                col: Math.max(activeTopLeft.col - EXPANSION_STEP, 0),
            });
        }
    };

    const checkWinner = (board, currentPlayer) => {
        const grid = [];
        for (let row = 0; row < fullSize; row++) {
            grid.push(board.slice(row * fullSize, (row + 1) * fullSize));
        }

        const checkLine = (cells) => {
            for (let i = 0; i <= cells.length - 5; i++) {
                if (cells.slice(i, i + 5).every(cell => cell === currentPlayer)) {
                    return true;
                }
            }
            return false;
        };

        for (let row = activeTopLeft.row; row < activeTopLeft.row + activeSize; row++) {
            if (checkLine(grid[row].slice(activeTopLeft.col, activeTopLeft.col + activeSize))) return true;
        }

        for (let col = activeTopLeft.col; col < activeTopLeft.col + activeSize; col++) {
            let column = grid.map(row => row[col]).slice(activeTopLeft.row, activeTopLeft.row + activeSize);
            if (checkLine(column)) return true;
        }

        for (let startRow = activeTopLeft.row; startRow <= activeTopLeft.row + activeSize - 5; startRow++) {
            for (let startCol = activeTopLeft.col; startCol <= activeTopLeft.col + activeSize - 5; startCol++) {
                let mainDiagonal = [];
                let antiDiagonal = [];

                for (let i = 0; i < 5; i++) {
                    mainDiagonal.push(grid[startRow + i]?.[startCol + i]);
                    antiDiagonal.push(grid[startRow + i]?.[startCol + 4 - i]);
                }

                if (checkLine(mainDiagonal) || checkLine(antiDiagonal)) return true;
            }
        }
        return false;
    };

    const updateRank = () => {
        if (!setRank) return;
        setRank((prevRank) => prevRank + 10); // ✅ Increase rank by 10 (or any logic)
    };

    const resetGame = () => {
        setBoard(Array(fullSize * fullSize).fill(null));
        setCurrentPlayer("X");
        setWinner(null);
        setActiveSize(INITIAL_ACTIVE_SIZE);
        setActiveTopLeft({
            row: Math.floor((fullSize - INITIAL_ACTIVE_SIZE) / 2),
            col: Math.floor((fullSize - INITIAL_ACTIVE_SIZE) / 2),
        });
    };

    return { board, fullSize, currentPlayer, winner, activeSize, activeTopLeft, handleClick, resetGame };
};

export default useGameLogic;

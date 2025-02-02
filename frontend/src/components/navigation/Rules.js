import React, { useEffect } from "react";

function Rules() {
    useEffect(() => {
        document.title = "OXO - Rules";  // ✅ Change page title
    }, []);
    return (
        <div class="maindivRules">
        <h3>This is the page for the game rules</h3>
            <div>
            <p>
                Objective: 
                This is a 1 vs 1 game where players take turns placing markers (X and O).
                The first player to align 5 markers in a row (horizontally, vertically, or diagonally) wins.
            </p>
            </div>
            <div>
                <p>
                    Winning Condition: 
                    The first player to get 5 of their markers in a row (horizontally, vertically, or diagonally) wins the game.
                </p>
            </div>
            <div>
                <p>
                    Special Counter-Balance Mechanic: 
                    The first marker placed by Player 1 is normal.
                    The second marker placed by Player 1 is temporarily placed, but Player 2 can move this marker by 1 adjacent node instead of placing their own.
                    This counter-balance mechanic only happens between Player 1's second move and Player 2's second move.
                    After Player 2 moves the marker, they place their own marker normally.
                </p>
            </div>

            <div>
                <p>
                    Restrictions: 
                    Players cannot place markers on occupied nodes.
                    The counter-balance move must be to an adjacent (horizontal, vertical, or diagonal) empty node.
                </p>
            </div>
        </div>
    );
}

export default Rules;

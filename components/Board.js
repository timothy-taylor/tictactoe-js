import { useState } from "react";

export function Board() {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState(0);

    const x_or_o = () => {
        return ( (turn % 2 == 1) ? 'O' : 'X' );
    };

    const playTurn = (i) => {
        if (squares[i] == "X" || squares[i] == "O") return;

        const tempSquares = squares.slice();
        tempSquares[i] = x_or_o();
        setSquares(tempSquares);

        setTurn(turn => turn + 1);
    };

    const renderSquare = (i, gameover) => {
        if (gameover) {
            return (
                <>
                <div id="box">
                    {squares[i]}
                </div>
                </>
            )
        } else {
            return (
                <>
                <button id="box" onClick={() => {playTurn(i)}}>
                    {squares[i]}
                </button>
                </>
            );
        }
    };

    const clearBoard = () => {
        const tempSquares = squares.slice();
        tempSquares.fill("");
        setSquares(tempSquares);
        setTurn(0);
    };

    const winner = calculateWinner(squares);
    const tie = calculateTie(turn);
    let status;
    let game_status = false;
    if (winner) {
        status = 'winner: ' + winner;
        game_status = true;
    } else if (tie){
        status = 'tie!';
        game_status = true;
    } else {
        status = 'next player: ' + x_or_o();
    }

    return (
        <>    
        <button onClick={clearBoard} className="hover:underline">
            click to start over!
        </button>
        <div id="spacer" className="py-5"></div>
        <div id="board" className="shadow-lg">
            <div id="row">
                {renderSquare(0, game_status)}
                {renderSquare(1, game_status)} 
                {renderSquare(2, game_status)}
            </div>
            <div id="row">
                {renderSquare(3, game_status)}
                {renderSquare(4, game_status)}
                {renderSquare(5, game_status)}
            </div>
            <div id="row">
                {renderSquare(6, game_status)}
                {renderSquare(7, game_status)}
                {renderSquare(8)}
            </div>
        </div>
        <div id="spacer" className="py-5"></div>
        <div id="status">{status}</div>
        </>
    );
}

function calculateWinner(squares) {
    const winning_combos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winning_combos.length; i++) {
        const [a, b, c] = winning_combos[i];
        if
        (
            squares[a] && 
            squares[a] === squares[b] && 
            squares[a] === squares[c]
        )
        {
            return squares[a];
        }
    }
    return null;
}

function calculateTie(turns){
    return (turns >= 9)
}

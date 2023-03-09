import { useState } from "react";
import Board from "./Board";
import Result from "./Result";

const TURNS = {
  x: "x",
  o: "o",
};

const WINNER_POS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Layout = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);
  //null= game did not end, false= game draw
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    console.log(boardToCheck);

    let winner;

    for (const combo of WINNER_POS) {
      const [a, b, c] = combo;
      //check it all
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]
      ) {
        winner = boardToCheck[a];
        setWinner(winner);
        console.log("winner is:", winner);
      }
    }
    if (!boardToCheck.includes(null)) {
      // console.log("DRAW");
      setWinner(false);
    }
  };

  const handleTurn = (clickedIndex) => {
    //chec if square already have a value;
    if (squares[clickedIndex] !== null) return;
    //insert new move
    const newBoard = [...squares];
    newBoard[clickedIndex] = turn;
    setSquares(newBoard);
    // console.log(newBoard);
    //check if there is a winner
    checkWinner(newBoard);
    //handle next turn
    const nextTurn = turn === "x" ? TURNS.o : TURNS.x;
    setTurn(nextTurn);
    // console.log(nextTurn);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
  };

  return (
    <>
      <div className="w-full border-2 border-slate-200 p-6 rounded-xl flex flex-col text-center gap-4 justify-center items-center">
        <h1 className="text-4xl text-white font-bold">Tic Tac Toe</h1>
        <div className="w-[300px] h-[300px]">
          <Board data={{ squares, handleTurn, winner }} />
        </div>
        <div>
          <Result result={winner} />
        </div>
        <div className="w-full flex justify-center items-center">
          {(winner === "x" || winner === "o") && (
            <button
              className="rounded-2xl bg-yellow-800 p-2 uppercase text-xl text-white font-bold"
              onClick={resetGame}
            >
              Play Again
            </button>
          )}
          {winner === null && (
            <div className="flex justify-center items-center">
              <p className="text-xl text-white">Turn: </p>
              <span className="ml-1 text-3xl font-bold text-white uppercase">
                {turn}
              </span>
            </div>
          )}
          {winner === false && (
            <div className="w-full flex justify-center">
              <button
                className="rounded-2xl bg-yellow-800 p-2 uppercase text-xl text-white font-bold"
                onClick={resetGame}
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;

import React, { useState } from "react";
import "./Game.css";

import Board from "../Board/Board";
import Moves from "../Moves/Moves";

function Game() {
  const [nextX, setNextX] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  return (
    <div className="game">
      <Board nextX={nextX} squares={currentSquares} onClick={gameHandle} />
      <Moves
        history={history}
        setNextX={setNextX}
        setCurrentMove={setCurrentMove}
        currentMove={currentMove}
      />
    </div>
  );

  function gameHandle(newSquare) {
    setNextX(!nextX);

    // setHistory([...history, newSquare]);
    setCurrentMove(currentMove + 1);
    setHistory([...history.slice(0, currentMove + 1), newSquare]);
  }
}

export default Game;

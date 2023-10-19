import React, { useState } from "react";
import "./Game.css";

import Board from "../Board/Board";
import Moves from "../Moves/Moves";

function Game() {
  const [nextX, setNextX] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  return (
    <div className="game">
      <Board nextX={nextX} squares={currentSquares} onClick={gameHandle} />
      <Moves history={history} />
    </div>
  );

  function gameHandle(newSquare) {
    setNextX(!nextX);

    // ... to get new history array with newSquare on the end
    setHistory([...history, newSquare]);
  }
}

export default Game;

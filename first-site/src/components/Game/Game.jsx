import React, { useState } from "react";

import Board from "../Board/Board";
// import "./Game.css";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);

  return (
    <div className="game">
      <Board />

      <div className="game-history"></div>
    </div>
  );
}

export default Game;

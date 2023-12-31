import React, { useState } from "react";
import "./Game.css";

import Board from "../Board/Board";
import Moves from "../Moves/Moves";
import RestartButton from "../RestartButton/RestartButton";

function Game() {
  const {
    gameRestart,
    gameHandle,
    currentSquares,
    history,
    nextX,
    setNextX,
    setCurrentMove,
    currentMove,
  } = useGame();

  return (
    <div className="game">
      <RestartButton onClick={gameRestart} />
      <Board nextX={nextX} squares={currentSquares} onClick={gameHandle} />
      <Moves
        history={history}
        setNextX={setNextX}
        setCurrentMove={setCurrentMove}
        currentMove={currentMove}
      />
    </div>
  );
}

function useGame() {
  const [nextX, setNextX] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function gameHandle(newSquare) {
    setNextX(!nextX);
    setCurrentMove(currentMove + 1);
    setHistory([...history.slice(0, currentMove + 1), newSquare]);
  }

  function gameRestart() {
    setNextX(true);
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return {
    gameRestart,
    gameHandle,
    currentSquares,
    history,
    nextX,
    setNextX,
    setCurrentMove,
    currentMove,
  };
}

export default Game;

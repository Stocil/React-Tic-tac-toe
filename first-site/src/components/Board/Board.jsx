import React, { useState } from "react";
import "./Board.css";

import Square from "../Square/Square";

const lines = [1, 4, 7];

function BoardRow() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextX, setNextX] = useState(true);

  function handleSquareClick(number) {
    const nextSquares = squares.slice();

    if (squares[number] !== null) {
      return;
    }

    if (nextX) {
      nextSquares[number] = "X";
    } else {
      nextSquares[number] = "O";
    }

    setNextX(!nextX);
    setSquares(nextSquares);
  }

  return lines.map((line, index) => (
    <div key={index} className="board-row">
      <Square
        value={squares[line - 1]}
        onSquareClick={() => handleSquareClick(line - 1)}
      />
      <Square
        value={squares[line]}
        onSquareClick={() => handleSquareClick(line)}
      />
      <Square
        value={squares[line + 1]}
        onSquareClick={() => handleSquareClick(line + 1)}
      />
    </div>
  ));
}

function Board() {
  return (
    <div className="board">
      <BoardRow />
    </div>
  );
}

export default Board;

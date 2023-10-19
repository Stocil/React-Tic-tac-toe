import React, { useState } from "react";

import BoardRow from "../BoardRow/BoardRow";
import BoardText from "../BoardText/BoardText";

function Board(props) {
  // const {history} = props

  const [nextX, setNextX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  let isOver = false;

  let nullCount = 0;
  let draw = false;
  for (let square of squares) {
    if (square === null) {
      nullCount++;
    }
  }

  if (nullCount === 0) {
    draw = true;
    console.log("fjfjhfj");
  }

  const winner = calculateWinner(squares);
  let boardText = `Next turn is ${nextX ? "X" : "O"}`;

  if (draw) {
    isOver = true;
    boardText = `Draw `;
  }

  if (winner) {
    isOver = true;
    boardText = `Winner is ${winner}`;
  }

  const textColor = nextX ? "#689ee4" : "#d6a1eb";

  return (
    <div className="game-board">
      <BoardText
        text={boardText}
        textColor={textColor}
        winner={winner}
        isDraw={draw}
      />
      <BoardRow
        squares={squares}
        handleSquareClick={handleSquareClick}
        isOver={isOver}
        turn={nextX}
      />
    </div>
  );

  function handleSquareClick(number) {
    const nextSquares = squares.slice();

    if (squares[number] || winner) {
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

  function calculateWinner(squares) {
    const xLines = [];
    const oLines = [];

    const winlines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let square = 0; square < squares.length; square++) {
      if (squares[square] === "X") {
        xLines.push(square);
      } else if (squares[square] === "O") {
        oLines.push(square);
      }
    }

    for (let line of winlines) {
      if (
        xLines.join("").includes(line[0]) &&
        xLines.join("").includes(line[1]) &&
        xLines.join("").includes(line[2])
      ) {
        return "X";
      } else if (
        oLines.join("").includes(line[0]) &&
        oLines.join("").includes(line[1]) &&
        oLines.join("").includes(line[2])
      ) {
        return "O";
      }
    }
  }
}

export default Board;

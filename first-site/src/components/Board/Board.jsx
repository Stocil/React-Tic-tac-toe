import React, { useState } from "react";

import BoardRow from "../BoardRow/BoardRow";
import BoardText from "../BoardText/BoardText";

function Board() {
  const [nextX, setNextX] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  let isOver = false;

  const winner = calculateWinner(squares);
  let boardText = `Next turn is ${nextX ? "X" : "O"}`;

  if (winner) {
    isOver = true;
    boardText = `Winner is ${winner}`;
  }

  const textColor = nextX ? "#689ee4" : "#d6a1eb";

  return (
    <div className="board">
      <BoardText text={boardText} textColor={textColor} winner={winner} />
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
      // if (line.toString() === xLines.toString()) {
      //   return "X";
      // } else if (line.toString() === oLines.toString()) {
      //   return "O";
      // }
    }

    // 2 Способ
    // for (let square = 0; square < squares.length; square++) {
    //   if (squares[square] === "X") {
    //     xLines.push(square);
    //   } else if (squares[square] === "O") {
    //     oLines.push(square);
    //   }
    // }

    // if (isWin(xLines) || isWin(oLines)) {
    //   if (isWin(xLines)) return "X";
    //   else return "O";
    // } else {
    //   return null;
    // }

    // function isWin(lines) {
    //   let maxLength = 0;
    //   let length = 1;

    //   for (let index = 0; index < lines.length - 1; index++) {
    //     if (lines[index] + 1 === lines[index + 1]) {
    //       length++;

    //       if (length > maxLength) {
    //         maxLength = length;
    //         if (maxLength === 3) return true;
    //       }
    //     } else {
    //       length = 1;
    //     }
    //   }

    //   let maxColumnLenght = 0;
    //   let columnLength = 1;

    //   for (let index = 0; index < lines.length - 1; index++) {
    //     if (lines[index] + 3 === lines[index + 1]) {
    //       columnLength++;

    //       if (columnLength > maxColumnLenght) {
    //         maxColumnLenght = columnLength;
    //         if (maxColumnLenght === 3) return true;
    //       }
    //     } else {
    //       columnLength = 1;
    //     }
    //   }

    // }
  }
}

export default Board;

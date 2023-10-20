import React from "react";
import "./BoardRow.css";

import Square from "../Square/Square";

const lines = [1, 4, 7];

function BoardRow(props) {
  const { squares, handleSquareClick, isOver, turn } = props;

  return lines.map((line, index) => (
    <div key={index} className="board-row">
      <Square
        value={squares[line - 1]}
        onSquareClick={() => handleSquareClick(line - 1)}
        isOver={isOver}
        turn={turn}
        squares={squares}
      />
      <Square
        value={squares[line]}
        onSquareClick={() => handleSquareClick(line)}
        isOver={isOver}
        turn={turn}
        squares={squares}
      />
      <Square
        value={squares[line + 1]}
        onSquareClick={() => handleSquareClick(line + 1)}
        isOver={isOver}
        turn={turn}
        squares={squares}
      />
    </div>
  ));
}

export default BoardRow;

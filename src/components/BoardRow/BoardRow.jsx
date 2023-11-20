import React from "react";
import "./BoardRow.css";

import Square from "../Square/Square";

const lines = [1, 4, 7];

function BoardRow(props) {
  const { squares, handleSquareClick, turn, colors } = props;

  return lines.map((line, index) => (
    <div key={index} className="board-row">
      <Square
        value={squares[line - 1]}
        onSquareClick={() => handleSquareClick(line - 1)}
        turn={turn}
        index={line - 1}
        colors={colors}
      />
      <Square
        value={squares[line]}
        onSquareClick={() => handleSquareClick(line)}
        turn={turn}
        index={line}
        colors={colors}
      />
      <Square
        value={squares[line + 1]}
        onSquareClick={() => handleSquareClick(line + 1)}
        turn={turn}
        index={line + 1}
        colors={colors}
      />
    </div>
  ));
}

export default BoardRow;

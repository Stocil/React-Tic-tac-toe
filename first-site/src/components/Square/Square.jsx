import React, { useState } from "react";
import "./Square.css";

function Square(props) {
  const { value, onSquareClick, isOver, turn } = props;
  const [color, setColor] = useState();

  const buttonClass = turn ? "squareX" : "squareO";

  function handleClick() {
    onSquareClick();

    if (!isOver) {
      if (turn) setColor({ backgroundColor: "#689ee4" });
      else setColor({ backgroundColor: "#e5c1f3" });
    }
  }

  return (
    <button className={buttonClass} onClick={handleClick} style={color}>
      {value}
    </button>
  );
}

export default Square;

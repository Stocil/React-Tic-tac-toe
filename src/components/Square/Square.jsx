import React from "react";
import "./Square.css";

function Square(props) {
  const { value, onSquareClick, turn, index, colors } = props;

  const currentColor = colors[index];

  let buttonClass;

  if (currentColor === "#689ee4") {
    buttonClass = "square squareX";
  } else if (currentColor === "#e5c1f3") {
    buttonClass = "square squareO";
  } else {
    buttonClass = turn ? "square squareHoverO" : "square squareHoverX";
  }

  function handleClick() {
    onSquareClick();
  }

  return (
    <button className={buttonClass} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Square;

import React, { useState } from "react";
import "./Square.css";

function Square(props) {
  const { value, onSquareClick } = props;
  const [color, setColor] = useState();

  function handleClick() {
    onSquareClick();
    setColor({ backgroundColor: "#689ee4" });
  }

  return (
    <button className="square" onClick={handleClick} style={color}>
      {value}
    </button>
  );
}

export default Square;

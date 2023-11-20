import React from "react";
import "./BoardText.css";

function BoardText(props) {
  const { text, textColor, winner, isDraw } = props;

  let textStyle = {
    color: textColor,
  };

  if (winner === "X") {
    textStyle.color = "#689ee4";
    textStyle.fontSize = "70px";
  } else if (winner === "O") {
    textStyle.color = "#d6a1eb";
    textStyle.fontSize = "70px";
  }

  return (
    <p className={isDraw ? "draw" : "board__text"} style={textStyle}>
      {text}
    </p>
  );
}

export default BoardText;

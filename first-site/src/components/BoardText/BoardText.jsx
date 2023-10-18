import React from "react";
import "./BoardText.css";

function BoardText(props) {
  const { text, textColor, winner } = props;

  let textStyle = {
    color: textColor,
  };

  if (winner === "X") {
    textStyle.color = "#689ee4";
    textStyle.fontSize = "50px";
  } else if (winner === "O") {
    textStyle.color = "#d6a1eb";
    textStyle.fontSize = "70px";
  }

  return (
    <p className="board__text" style={textStyle}>
      {text}
    </p>
  );
}

export default BoardText;

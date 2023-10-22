import React from "react";
import "./RestartButton.css";

function RestartButton({ onClick }) {
  return <button className="restart-button" onClick={onClick}></button>;
}

export default RestartButton;

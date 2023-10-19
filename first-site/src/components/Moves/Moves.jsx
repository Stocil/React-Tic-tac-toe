import React from "react";
import "./Moves.css";

function Moves(props) {
  const { history } = props;

  const moves = history.map((move, index) => {
    let description;

    if (index === 0) {
      description = "Go to game start";
    } else {
      description = `Go to move #${index}`;
    }

    return (
      <li key={index} className="game-history__item">
        <button
          className="game-history__button"
          onClick={() => backToTurn(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game-history">
      <ul className="game-history__list">{moves}</ul>
    </div>
  );

  function backToTurn(moveHistory) {
    console.log(moveHistory);
  }
}

export default Moves;

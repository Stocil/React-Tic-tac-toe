import React from "react";
import "./Moves.css";

function Moves(props) {
  const { history, setNextX, setCurrentMove, currentMove } = props;

  const moves = history.map((move, index) => {
    let description;

    if (index === 0) {
      description = "Go to game start";
    } else {
      description = `Go to move #${index}`;
    }

    console.log(index, currentMove);

    const className =
      index === currentMove
        ? "game-history__button game-history__button_active"
        : "game-history__button";

    return (
      <li key={index} className="game-history__item">
        <button className={className} onClick={() => backToTurn(index)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game-history">
      <p className="game-history__text">History </p>
      <ul className="game-history__list">{moves}</ul>
    </div>
  );

  function backToTurn(moveIndex) {
    setCurrentMove(moveIndex);
    setNextX(moveIndex % 2 === 0);
  }
}

export default Moves;

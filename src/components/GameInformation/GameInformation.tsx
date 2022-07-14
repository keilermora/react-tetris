import React from 'react';
import './GameInformation.css';

const GameInformation = () => {
  // @TODO Update with true values
  const currentScore = 0;
  const currentLevel = 0;

  // @TODO Create onClick event

  return (
    <div className="game-information">
      <dl>
        <dt>Score: {currentScore}</dt>
        <dt>Level: {currentLevel}</dt>
      </dl>
      <button onClick={console.log}>Pause</button>
    </div>
  );
};

export { GameInformation };

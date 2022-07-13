import React from 'react';
import './GameInformation.css';

const GameInformation = () => {
  // @TODO Update with true values
  const currentScore = 0;
  const currentLevel = 0;
  const isPaused = false;

  // @TODO Create onClick events

  return (
    <div className="game-information">
      <dl>
        <dt>Score: {currentScore}</dt>
        <dt>Level: {currentLevel}</dt>
      </dl>
      <button className="game-information__button" onClick={console.log}>
        {!isPaused ? 'Pause' : 'Resume'}
      </button>
      <button className="game-information__button" onClick={console.log}>
        Restart
      </button>
    </div>
  );
};

export { GameInformation };

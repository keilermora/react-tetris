import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { pause } from '../../state/actions';
import './GameInformation.css';

const GameInformation = () => {
  const { state, dispatch } = useGameState();

  const pauseGame = () => {
    dispatch(pause());
  };

  return (
    <div className="game-information">
      <dl>
        <dt>Score: {state.currentScore}</dt>
        <dt>Level: {state.currentLevel}</dt>
      </dl>
      <button onClick={pauseGame}>Pause</button>
    </div>
  );
};

export { GameInformation };

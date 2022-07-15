import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { Button } from '../../../layout/Button';
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
      <Button onClick={pauseGame}>Pause</Button>
    </div>
  );
};

export { GameInformation };

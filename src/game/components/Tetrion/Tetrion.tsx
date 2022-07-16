import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { Controls } from '../Controls';
import { GameInformation } from '../GameInformation';
import { GameOverMenu } from '../GameOverMenu';
import { Matrix } from '../Matrix';
import { NextQueue } from '../NextQueue';
import { PauseMenu } from '../PauseMenu';
import './Tetrion.css';

const Tetrion = () => {
  const { state } = useGameState();

  return (
    <div className="tetrion">
      <div className="tetrion__game-information">
        <GameInformation />
      </div>
      <div className="tetrion__matrix">
        <Matrix />
      </div>
      <div className="tetrion__next-queue">
        <NextQueue />
      </div>
      <div className="tetrion__controls">
        <Controls />
      </div>
      {state.isPaused && <PauseMenu />}
      {state.gameOver && <GameOverMenu />}
    </div>
  );
};

export { Tetrion };

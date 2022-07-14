import React from 'react';
import { Controls } from '../Controls';
import { GameInformation } from '../GameInformation';
import { Matrix } from '../Matrix';
import { NextQueue } from '../NextQueue';
import { PauseMenu } from '../PauseMenu';
import './Tetrion.css';

const Tetrion = () => {
  // @TODO Do something to pause the game
  const isPaused = false;

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
      {isPaused && <PauseMenu />}
    </div>
  );
};

export { Tetrion };

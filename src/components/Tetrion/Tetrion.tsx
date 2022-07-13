import React from 'react';
import { GameInformation } from '../GameInformation';
import { Matrix } from '../Matrix';
import { NextQueue } from '../NextQueue';
import './Tetrion.css';

const Tetrion = () => {
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
    </div>
  );
};

export { Tetrion };

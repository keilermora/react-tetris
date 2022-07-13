import React from 'react';
import { GameInformation } from '../GameInformation';
import { Matrix } from '../Matrix';
import { NextQueue } from '../NextQueue';
import './Tetrion.css';

const Tetrion = () => {
  return (
    <div className="tetrion">
      <Matrix />
      <NextQueue />
      <GameInformation />
    </div>
  );
};

export { Tetrion };

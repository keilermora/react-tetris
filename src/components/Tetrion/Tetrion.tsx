import React from 'react';
import { Matrix } from '../Matrix';
import { NextQueue } from '../NextQueue';
import './Tetrion.css';

const Tetrion = () => {
  return (
    <div className="tetrion">
      <Matrix />
      <NextQueue />
    </div>
  );
};

export { Tetrion };

import React from 'react';
import './Tetrion.css';
import { PiecePreview } from '../PiecePreview';
import { Playfield } from '../Playfield';

const Tetrion = () => {
  return (
    <div className="tetrion">
      <Playfield />
      <PiecePreview />
    </div>
  );
};

export { Tetrion };

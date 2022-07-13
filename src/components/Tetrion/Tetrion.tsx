import React from 'react';
import { PiecePreview } from '../PiecePreview/PiecePreview';
import { Playfield } from '../Playfield/Playfield';

const Tetrion = () => {
  return (
    <div className="tetrion">
      <Playfield />
      <PiecePreview />
    </div>
  );
};

export { Tetrion };

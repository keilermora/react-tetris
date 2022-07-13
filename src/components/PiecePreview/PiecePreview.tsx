import React from 'react';
import { PlayfieldCell } from '../PlayfieldCell/PlayfieldCell';

import './PiecePreview.css';

const PiecePreview = () => {
  // @TODO Draw a real piece
  const piece = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  // Map the block to the grid
  const grid = piece.map((rowArray, row) => {
    return rowArray.map((value, col) => {
      return <PlayfieldCell key={`${row}${col}`} colorNumber={value} />;
    });
  });

  return <div className="piece-preview">{grid}</div>;
};

export { PiecePreview };

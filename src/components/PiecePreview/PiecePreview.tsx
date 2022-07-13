import React from 'react';
import './PiecePreview.css';
import { PlayfieldCell } from '../PlayfieldCell';

const PiecePreview = () => {
  // @TODO Draw a real piece
  const piece = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const grid = piece.map((rowArray, row) => {
    return rowArray.map((value, col) => {
      return <PlayfieldCell key={`${row}${col}`} colorNumber={value} />;
    });
  });

  return <div className="piece-preview">{grid}</div>;
};

export { PiecePreview };

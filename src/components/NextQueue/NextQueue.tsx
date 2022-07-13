import React from 'react';
import { MatrixCell } from '../MatrixCell';
import './NextQueue.css';

const NextQueue = () => {
  // @TODO Draw a real Tetrimino
  const tetrimino = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const nextQueueGrid = tetrimino.map((rowArray, row) => {
    return rowArray.map((value, col) => {
      return <MatrixCell key={`${row}${col}`} colorNumber={value} />;
    });
  });

  return <div className="piece-preview">{nextQueueGrid}</div>;
};

export { NextQueue };

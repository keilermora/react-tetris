import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { MatrixCell } from '../MatrixCell';
import './NextQueue.css';

const NextQueue = () => {
  const { state } = useGameState();
  const { nextTetrimino } = state;

  const tetriminoShape = nextTetrimino.shapes[0];

  const nextQueueGrid = tetriminoShape.map((rowArray, row) => {
    return rowArray.map((value, col) => {
      return (
        <MatrixCell
          key={`${row}${col}`}
          colorNumber={value ? nextTetrimino.colorNumber : 0}
        />
      );
    });
  });

  return <div className="piece-preview">{nextQueueGrid}</div>;
};

export { NextQueue };

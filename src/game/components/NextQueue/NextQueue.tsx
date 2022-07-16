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

  const styles = {
    gridTemplateColumns: `repeat(${tetriminoShape[0].length}, var(--tile-size))`,
  };

  return (
    <div className="piece-preview">
      <span className="piece-preview__next-label">Next:</span>
      <div className="piece-preview__grid" style={styles}>
        {nextQueueGrid}
      </div>
    </div>
  );
};

export { NextQueue };

import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import './MatrixCell.css';

interface MatrixCellProps {
  colorNumber: number;
}

const MatrixCell = ({ colorNumber }: MatrixCellProps) => {
  const { state } = useGameState();

  // There shouldn't be Minos in the Matrix if the game is paused
  if (state.isPaused && colorNumber) {
    colorNumber = 0;
  }

  const classes = `matrix-cell matrix-cell--color-${colorNumber}`;
  return <div className={classes} />;
};

export { MatrixCell };

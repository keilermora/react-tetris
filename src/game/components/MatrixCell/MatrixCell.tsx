import React from 'react';
import './MatrixCell.css';

interface MatrixCellProps {
  colorNumber: number;
}

const MatrixCell = ({ colorNumber }: MatrixCellProps) => {
  const classes = `matrix-cell matrix-cell--color-${colorNumber}`;
  return <div className={classes} />;
};

export { MatrixCell };

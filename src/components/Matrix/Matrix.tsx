import React from 'react';
import { MatrixCell } from '../MatrixCell';
import './Matrix.css';

const Matrix = () => {
  // @TODO Matrix dimensions shouldn't be hardcoded
  const rows = 18;
  const cols = 10;

  const matrixGrid: JSX.Element[][] = [];
  for (let row = 0; row < rows; row++) {
    matrixGrid.push([]);
    for (let col = 0; col < cols; col++) {
      matrixGrid[row].push(<MatrixCell key={`${col}${row}`} colorNumber={1} />);
    }
  }

  return <div className="matrix">{matrixGrid}</div>;
};

export { Matrix };

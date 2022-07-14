import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { MatrixCell } from '../MatrixCell';
import './Matrix.css';

const Matrix = () => {
  const { state } = useGameState();
  const { matrixGrid, tetriminoInPlay } = state;

  const tetriminoShape =
    tetriminoInPlay.tetrimino.shapes[tetriminoInPlay.rotation];
  const tetriminoColorNumber = tetriminoInPlay.tetrimino.colorNumber;

  const gridCells = matrixGrid.map((rowArray, row) => {
    return rowArray.map((cellValue, col) => {
      // Place the cell on the grid
      const cellX = col - tetriminoInPlay.x;
      const cellY = row - tetriminoInPlay.y;
      let colorNumber = cellValue;

      // Define if the cell color will be:
      // - Empty
      // - Tetrimino in play
      // - Any other Mino in the Matrix
      if (
        cellX >= 0 &&
        cellX < tetriminoShape.length &&
        cellY >= 0 &&
        cellY < tetriminoShape.length
      ) {
        colorNumber =
          tetriminoShape[cellY][cellX] === 0
            ? colorNumber
            : tetriminoColorNumber;
      }

      return <MatrixCell key={`${col}${row}`} colorNumber={colorNumber} />;
    });
  });

  return <div className="matrix">{gridCells}</div>;
};

export { Matrix };

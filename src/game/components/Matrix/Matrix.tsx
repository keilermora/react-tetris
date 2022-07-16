import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { moveDown } from '../../state/actions';
import { MatrixCell } from '../MatrixCell';
import './Matrix.css';

const Matrix = () => {
  const { state, dispatch } = useGameState();
  const {
    currentSpeed,
    isPaused,
    gameOver,
    matrixGrid,
    showsAbout,
    tetriminoInPlay,
  } = state;

  const requestRef = React.useRef(0); // Holds a reference to requestAnimationFrame
  const lastUpdateTimeRef = React.useRef(0); // Tracks the time of the last update
  const progressTimeRef = React.useRef(0); // Tracks the total time between updates

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused, gameOver, showsAbout]);

  const update = (time: number) => {
    requestRef.current = requestAnimationFrame(update);
    if (isPaused || gameOver || showsAbout) {
      return;
    }

    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time;
    }
    const deltaTime = time - lastUpdateTimeRef.current;
    progressTimeRef.current += deltaTime;
    if (progressTimeRef.current > currentSpeed) {
      dispatch(moveDown());
      progressTimeRef.current = 0;
    }
    lastUpdateTimeRef.current = time;
  };

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

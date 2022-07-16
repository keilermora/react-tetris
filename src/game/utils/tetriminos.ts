import { tetriminos } from '../constants/tetriminos';
import TetriminoInPlay from '../interfaces/tetriminoInPlay';

export const getNextTetriminoRotation = (tetriminoInPlay: TetriminoInPlay) => {
  return (
    (tetriminoInPlay.rotation + 1) % tetriminoInPlay.tetrimino.shapes.length
  );
};

export const getRandomTetrimino = () => {
  const min = 0;
  const max = tetriminos.length - 1;
  const index = Math.floor(Math.random() * (max - min + 1)) + min;
  return tetriminos[index];
};

export const validateMove = (
  tetriminoInPlay: TetriminoInPlay,
  matrixGrid: number[][]
) => {
  const currentShape =
    tetriminoInPlay.tetrimino.shapes[tetriminoInPlay.rotation];

  for (let row = 0; row < currentShape.length; row++) {
    for (let col = 0; col < currentShape[row].length; col++) {
      // look for a Mino
      if (currentShape[row][col] !== 0) {
        const proposedX = col + tetriminoInPlay.x; // x offset on grid
        const proposedY = row + tetriminoInPlay.y; // y offset on grid

        if (proposedY < 0) {
          continue;
        }

        // Get the row on the grid
        const possibleRow = matrixGrid[proposedY];

        if (possibleRow) {
          // Check if this column in the row is undefined, if it's off the edges, 0, and empty
          if (
            possibleRow[proposedX] === undefined ||
            possibleRow[proposedX] !== 0
          ) {
            // undefined or not 0 and it's occupied we can't move here.
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

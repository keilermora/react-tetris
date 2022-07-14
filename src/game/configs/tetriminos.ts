import { TetriminoNames } from '../constants/tetriminoNames';
import Tetrimino from '../interfaces/tetrimino';
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
  grid: number[][],
  x: number,
  y: number,
  rotation: number
) => {
  const currentShape = tetriminoInPlay.tetrimino.shapes[rotation];

  for (let row = 0; row < currentShape.length; row++) {
    for (let col = 0; col < currentShape[row].length; col++) {
      // look for a Mino (1)
      if (currentShape[row][col] !== 0) {
        const proposedX = col + x; // x offset on grid
        const proposedY = row + y; // y offset on grid

        if (proposedY < 0) {
          continue;
        }

        // Get the row on the grid
        const possibleRow = grid[proposedY];

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

export const tetriminos: Tetrimino[] = [
  {
    // I-Tetrimino: light blue; shaped like a capital I; four blocks in a straight line.
    name: TetriminoNames.I,
    colorNumber: 1,
    shapes: [
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
      ],
    ],
  },
  {
    // J-Tetrimino: dark blue; shaped like a capital J; a row of three blocks with one added above
    // the left side.
    name: TetriminoNames.J,
    colorNumber: 2,
    shapes: [
      [
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
      ],
    ],
  },
  {
    // L-Tetrimino: orange; shaped like a capital L; a row of three blocks with one added above the
    // right side.
    name: TetriminoNames.L,
    colorNumber: 3,
    shapes: [
      [
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
    ],
  },
  {
    // O-Tetrimino: yellow; a square shape; four blocks in a 2×2 square.
    name: TetriminoNames.O,
    colorNumber: 4,
    shapes: [
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
    ],
  },
  {
    // S-Tetrimino: green; shaped like a capital S; two stacked horizontal dominoes with the top one
    // offset to the right.
    name: TetriminoNames.S,
    colorNumber: 5,
    shapes: [
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ],
    ],
  },
  {
    // T-Tetrimino: purple; shaped like a capital T; a row of three blocks with one added above the
    // center
    name: TetriminoNames.T,
    colorNumber: 6,
    shapes: [
      [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
    ],
  },
  {
    // Z-Tetrimino: red; shaped like a capital Z; two stacked horizontal dominoes with the top one
    // offset to the left.
    name: TetriminoNames.Z,
    colorNumber: 7,
    shapes: [
      [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
      ],
    ],
  },
];

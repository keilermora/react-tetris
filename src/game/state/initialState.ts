import { getMatrixGrid } from '../configs/matrix';
import { getRandomTetrimino } from '../configs/tetriminos';
import Tetrimino from '../interfaces/tetrimino';
import TetriminoInPlay from '../interfaces/tetriminoInPlay';

export type GameState = {
  matrixGrid: number[][];
  tetriminoInPlay: TetriminoInPlay;
  nextTetrimino: Tetrimino;
  currentScore: number;
  currentLevel: number;
  isRunning: boolean;
  gameOver: boolean;
};

export const getInitialState = (): GameState => {
  return {
    matrixGrid: getMatrixGrid(),
    tetriminoInPlay: {
      tetrimino: getRandomTetrimino(),
      rotation: 0,
      x: 3,
      y: -4, // Generate tetrimino above the Skyline
    },
    nextTetrimino: getRandomTetrimino(),
    currentScore: 0,
    currentLevel: 1,
    isRunning: true,
    gameOver: false,
  };
};

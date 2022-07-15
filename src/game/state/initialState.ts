import { getMatrixGrid } from '../utils/matrix';
import { getRandomTetrimino } from '../utils/tetriminos';
import Tetrimino from '../interfaces/tetrimino';
import TetriminoInPlay from '../interfaces/tetriminoInPlay';
import { getFallSpeed } from '../utils/fallSpeed';

export type GameState = {
  matrixGrid: number[][];
  tetriminoInPlay: TetriminoInPlay;
  nextTetrimino: Tetrimino;
  currentScore: number;
  currentLevel: number;
  currentSpeed: number;
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
      y: -2, // Generate tetrimino above the Skyline
    },
    nextTetrimino: getRandomTetrimino(),
    currentScore: 0,
    currentLevel: 5,
    currentSpeed: getFallSpeed(5),
    isRunning: true,
    gameOver: false,
  };
};

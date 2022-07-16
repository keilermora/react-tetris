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
  isPaused: boolean;
  gameOver: boolean;
  showsAbout: boolean;
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
    currentLevel: 6,
    currentSpeed: getFallSpeed(6),
    isPaused: false,
    gameOver: false,
    showsAbout: false,
  };
};

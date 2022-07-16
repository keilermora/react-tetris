import { getMatrixGrid } from '../utils/matrix';
import { getRandomTetrimino } from '../utils/tetriminos';
import Tetrimino from '../interfaces/tetrimino';
import TetriminoInPlay from '../interfaces/tetriminoInPlay';
import { getFallSpeed } from '../utils/fallSpeed';
import { KeyItems } from '../constants/keyItems';

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
  isMusicMuted: boolean;
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
    currentLevel: 1,
    currentSpeed: getFallSpeed(1),
    isPaused: false,
    gameOver: false,
    showsAbout: false,
    isMusicMuted: !!localStorage.getItem(KeyItems.IS_MUSIC_MUTED),
  };
};

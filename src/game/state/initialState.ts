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
  currentLevel: number;
  currentScore: number;
  currentSpeed: number;
  gameOver: boolean;
  highScore: number;
  isMusicMuted: boolean;
  isPaused: boolean;
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
    currentLevel: 6,
    currentScore: 0,
    currentSpeed: getFallSpeed(6),
    highScore: parseInt(localStorage.getItem(KeyItems.HIGH_SCORE) || '0'),
    isPaused: false,
    isMusicMuted: !!localStorage.getItem(KeyItems.IS_MUSIC_MUTED),
    gameOver: false,
    showsAbout: false,
  };
};

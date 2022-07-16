import {
  getNextTetriminoRotation,
  getRandomTetrimino,
  validateMove,
} from '../utils/tetriminos';
import { GameActions } from '../constants/gameActions';
import GameAction from '../interfaces/gameAction';
import { GameState, getInitialState } from './initialState';
import {
  addTetriminoToMatrixGrid,
  clearHorizontalLines,
} from '../utils/matrix';
import TetriminoInPlay from '../interfaces/tetriminoInPlay';
import { getScorePoints } from '../utils/score';
import {
  blockSound,
  gameOverSound,
  moveSound,
  pauseSound,
  placeSound,
  resumeSound,
  rotateSound,
  scoreSound,
  tetrisThemeMusic,
} from '../utils/sounds';

const gameReducer = (state = getInitialState(), action: GameAction) => {
  const { currentLevel, currentScore, matrixGrid, tetriminoInPlay } = state;
  const { x, y } = tetriminoInPlay;
  tetrisThemeMusic.play();

  switch (action.type) {
    case GameActions.ROTATE_CLOCKWISE: {
      const newTetriminoInPlay = {
        ...tetriminoInPlay,
        rotation: getNextTetriminoRotation(tetriminoInPlay),
      };
      if (validateMove(tetriminoInPlay, matrixGrid)) {
        rotateSound.play();
        return {
          ...state,
          tetriminoInPlay: newTetriminoInPlay,
        };
      }
      blockSound.play();
      return state;
    }
    case GameActions.MOVE_RIGHT: {
      const newTetriminoInPlay = { ...tetriminoInPlay, x: x + 1 };
      if (validateMove(newTetriminoInPlay, matrixGrid)) {
        moveSound.play();
        return {
          ...state,
          tetriminoInPlay: newTetriminoInPlay,
        };
      }
      blockSound.play();
      return state;
    }
    case GameActions.MOVE_LEFT: {
      const newTetriminoInPlay = { ...tetriminoInPlay, x: x - 1 };
      if (validateMove(newTetriminoInPlay, matrixGrid)) {
        moveSound.play();
        return {
          ...state,
          tetriminoInPlay: newTetriminoInPlay,
        };
      }
      blockSound.play();
      return state;
    }
    case GameActions.MOVE_DOWN: {
      // Check if the Tetrimino in play can move here
      const maybeNewTetriminoInPlay = { ...tetriminoInPlay, y: y + 1 };
      if (validateMove(maybeNewTetriminoInPlay, matrixGrid)) {
        // If so move it
        return {
          ...state,
          tetriminoInPlay: maybeNewTetriminoInPlay,
        };
      }

      // If not, place the Tetrimino and check if the game is currently over
      let newMatrixGrid = addTetriminoToMatrixGrid(tetriminoInPlay, matrixGrid);

      // Update the score based on if rows were completed or not
      const newScore =
        currentScore + getScorePoints(newMatrixGrid, currentLevel);

      if (newScore !== currentScore) {
        newMatrixGrid = clearHorizontalLines(newMatrixGrid);
        scoreSound.play();
      } else {
        placeSound.play();
      }

      // Reset values
      const newTetriminoInPlay: TetriminoInPlay = {
        tetrimino: state.nextTetrimino,
        rotation: 0,
        x: 3,
        y: -2,
      };

      if (!validateMove(newTetriminoInPlay, newMatrixGrid)) {
        tetrisThemeMusic.pause();
        gameOverSound.play();
        return { ...state, gameOver: true };
      }

      const newState: GameState = {
        ...state,
        matrixGrid: newMatrixGrid,
        tetriminoInPlay: newTetriminoInPlay,
        nextTetrimino: getRandomTetrimino(),
        currentScore: newScore,
      };

      return newState;
    }
    case GameActions.RESUME:
      resumeSound.play();
      tetrisThemeMusic.play();
      return { ...state, isRunning: true };
    case GameActions.PAUSE:
      tetrisThemeMusic.pause();
      pauseSound.play();
      return { ...state, isRunning: false };
    case GameActions.GAME_OVER:
      return state;
    case GameActions.RESTART:
      tetrisThemeMusic.play();
      return getInitialState();
    default:
      return state;
  }
};

export default gameReducer;

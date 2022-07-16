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
import { KeyItems } from '../constants/keyItems';

const gameReducer = (state = getInitialState(), action: GameAction) => {
  const {
    currentLevel,
    currentScore,
    isMusicMuted,
    matrixGrid,
    tetriminoInPlay,
  } = state;
  const { x, y } = tetriminoInPlay;
  if (!isMusicMuted) {
    tetrisThemeMusic.play();
  }

  switch (action.type) {
    case GameActions.ROTATE_CLOCKWISE: {
      const newTetriminoInPlay = {
        ...tetriminoInPlay,
        rotation: getNextTetriminoRotation(tetriminoInPlay),
      };
      if (validateMove(newTetriminoInPlay, matrixGrid)) {
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
    case GameActions.PAUSE:
      tetrisThemeMusic.pause();
      pauseSound.play();
      return { ...state, isPaused: true };

    case GameActions.RESUME:
      resumeSound.play();
      if (!isMusicMuted) {
        tetrisThemeMusic.play();
      }
      return { ...state, isPaused: false };

    case GameActions.GAME_OVER:
      return state;
    case GameActions.RESTART:
      if (!isMusicMuted) {
        tetrisThemeMusic.play();
      }
      return getInitialState();

    case GameActions.SHOW_ABOUT_DIALOG:
      return { ...state, showsAbout: true };

    case GameActions.HIDE_ABOUT_DIALOG:
      return { ...state, showsAbout: false };

    case GameActions.MUTE_MUSIC:
      tetrisThemeMusic.pause();
      localStorage.setItem(KeyItems.IS_MUSIC_MUTED, 'true');
      return { ...state, isMusicMuted: true };

    case GameActions.UNMUTE_MUSIC:
      tetrisThemeMusic.play();
      localStorage.removeItem(KeyItems.IS_MUSIC_MUTED);
      return { ...state, isMusicMuted: false };

    default:
      return state;
  }
};

export default gameReducer;

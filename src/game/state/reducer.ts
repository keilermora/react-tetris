import {
  getNextTetriminoRotation,
  getRandomTetrimino,
  validateMove,
} from '../utils/tetriminos';
import { GameActions } from '../constants/gameActions';
import GameAction from '../interfaces/gameAction';
import { GameState, getInitialState } from './initialState';
import { addTetriminoToMatrixGrid } from '../utils/matrix';
import TetriminoInPlay from '../interfaces/tetriminoInPlay';
import { getScorePoints } from '../utils/score';

const gameReducer = (state = getInitialState(), action: GameAction) => {
  const { currentLevel, currentScore, matrixGrid, tetriminoInPlay } = state;
  const { x, y } = tetriminoInPlay;

  switch (action.type) {
    case GameActions.ROTATE: {
      const newTetriminoInPlay = {
        ...tetriminoInPlay,
        rotation: getNextTetriminoRotation(tetriminoInPlay),
      };
      if (validateMove(tetriminoInPlay, matrixGrid)) {
        return {
          ...state,
          tetriminoInPlay: newTetriminoInPlay,
        };
      }
      return state;
    }
    case GameActions.MOVE_RIGHT: {
      const newTetriminoInPlay = { ...tetriminoInPlay, x: x + 1 };
      if (validateMove(newTetriminoInPlay, matrixGrid)) {
        return {
          ...state,
          tetriminoInPlay: newTetriminoInPlay,
        };
      }
      return state;
    }
    case GameActions.MOVE_LEFT: {
      const newTetriminoInPlay = { ...tetriminoInPlay, x: x - 1 };
      if (validateMove(newTetriminoInPlay, matrixGrid)) {
        return {
          ...state,
          tetriminoInPlay: newTetriminoInPlay,
        };
      }
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

      // If not, place the Tetrimino
      const newMatrixGrid = addTetriminoToMatrixGrid(
        tetriminoInPlay,
        matrixGrid
      );

      // Update the score based on if rows were completed or not
      const newScore =
        currentScore + getScorePoints(newMatrixGrid, currentLevel);

      // Reset values
      const newTetriminoInPlay: TetriminoInPlay = {
        tetrimino: state.nextTetrimino,
        rotation: 0,
        x: 3,
        y: -4,
      };

      if (!validateMove(newTetriminoInPlay, newMatrixGrid)) {
        // Game Over
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
      return state;
    case GameActions.PAUSE:
      return state;
    case GameActions.GAME_OVER:
      return state;
    case GameActions.RESTART:
      return state;
    default:
      return state;
  }
};

export default gameReducer;

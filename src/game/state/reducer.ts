import { getNextTetriminoRotation, validateMove } from '../configs/tetriminos';
import { GameActions } from '../constants/gameActions';
import GameAction from '../interfaces/gameAction';
import { getInitialState } from './initialState';

const gameReducer = (state = getInitialState(), action: GameAction) => {
  const { matrixGrid, tetriminoInPlay } = state;

  switch (action.type) {
    case GameActions.ROTATE: {
      const newRotation = getNextTetriminoRotation(tetriminoInPlay);
      const { x, y } = tetriminoInPlay;
      if (validateMove(tetriminoInPlay, matrixGrid, x, y, newRotation)) {
        return {
          ...state,
          tetriminoInPlay: {
            ...tetriminoInPlay,
            rotation: newRotation,
          },
        };
      }
      return state;
    }
    case GameActions.MOVE_RIGHT:
      if (
        validateMove(
          tetriminoInPlay,
          matrixGrid,
          tetriminoInPlay.x + 1,
          tetriminoInPlay.y,
          tetriminoInPlay.rotation
        )
      ) {
        return {
          ...state,
          tetriminoInPlay: {
            ...tetriminoInPlay,
            x: tetriminoInPlay.x + 1,
          },
        };
      }
      return state;
    case GameActions.MOVE_LEFT:
      if (
        validateMove(
          tetriminoInPlay,
          matrixGrid,
          tetriminoInPlay.x - 1,
          tetriminoInPlay.y,
          tetriminoInPlay.rotation
        )
      ) {
        return {
          ...state,
          tetriminoInPlay: {
            ...tetriminoInPlay,
            x: tetriminoInPlay.x - 1,
          },
        };
      }
      return state;
    case GameActions.MOVE_DOWN:
      return state;
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

import {
  getNextTetriminoRotation,
  validateRotation,
} from '../configs/tetriminos';
import { GameActions } from '../constants/gameActions';
import GameAction from '../interfaces/gameAction';
import { getInitialState } from './initialState';

const gameReducer = (state = getInitialState(), action: GameAction) => {
  const { matrixGrid, tetriminoInPlay } = state;

  switch (action.type) {
    case GameActions.ROTATE: {
      const newRotation = getNextTetriminoRotation(tetriminoInPlay);
      const { rotation, x, y } = tetriminoInPlay;
      const canRotate = validateRotation(
        rotation,
        matrixGrid,
        x,
        y,
        newRotation
      );
      if (canRotate) {
        const newTetriminoInPlay = {
          ...tetriminoInPlay,
          rotation: newRotation,
        };

        return { ...state, tetriminoInPlay: newTetriminoInPlay };
      }
      return state;
    }
    case GameActions.MOVE_RIGHT:
      return state;
    case GameActions.MOVE_LEFT:
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

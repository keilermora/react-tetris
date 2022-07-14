import { GameActions } from '../constants/gameActions';

export const moveDown = () => {
  return { type: GameActions.MOVE_DOWN };
};

export const moveLeft = () => {
  return { type: GameActions.MOVE_LEFT };
};

export const moveRight = () => {
  return { type: GameActions.MOVE_RIGHT };
};

export const rotate = () => {
  return { type: GameActions.ROTATE };
};

export const pause = () => {
  return { type: GameActions.PAUSE };
};

export const restart = () => {
  return { type: GameActions.RESTART };
};

export const resume = () => {
  return { type: GameActions.RESUME };
};

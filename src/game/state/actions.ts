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

export const rotateClockwise = () => {
  return { type: GameActions.ROTATE_CLOCKWISE };
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

export const showAboutDialog = () => {
  return { type: GameActions.SHOW_ABOUT_DIALOG };
};

export const hideAboutDialog = () => {
  return { type: GameActions.HIDE_ABOUT_DIALOG };
};

import { GameActions } from '../constants/gameActions';

interface GameAction {
  type: GameActions;
  payload: boolean;
}

export default GameAction;

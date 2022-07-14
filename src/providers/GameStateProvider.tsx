import React from 'react';
import GameAction from '../game/interfaces/gameAction';
import { GameState, getInitialState } from '../game/state/initialState';
import gameReducer from '../game/state/reducer';

interface GameStateProviderProps {
  children: React.ReactNode;
}

const GameStateCtx = React.createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

const GameStateProvider = ({ children }: GameStateProviderProps) => {
  const [state, dispatch] = React.useReducer(gameReducer, getInitialState());

  return (
    <GameStateCtx.Provider value={{ state, dispatch }}>
      {children}
    </GameStateCtx.Provider>
  );
};

export { GameStateCtx, GameStateProvider };

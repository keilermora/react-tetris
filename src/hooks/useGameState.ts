import React from 'react';
import { GameStateCtx } from '../providers/GameStateProvider';

export const useGameState = () => {
  const ctx = React.useContext(GameStateCtx);

  if (!ctx) {
    throw new Error('useGameState must be used within the GameStateCtx');
  }

  return ctx;
};

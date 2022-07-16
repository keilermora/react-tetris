import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { Button } from '../../../layout/Button';
import { pause, muteMusic, unmuteMusic } from '../../state/actions';
import './GameInformation.css';

const GameInformation = () => {
  const { state, dispatch } = useGameState();
  const { currentLevel, currentScore, isMusicMuted } = state;

  const onPauseGame = () => {
    dispatch(pause());
  };

  const onMuteMusic = () => {
    dispatch(muteMusic());
  };

  const onUnmuteMusic = () => {
    dispatch(unmuteMusic());
  };

  return (
    <div className="game-information">
      <dl>
        <dt>
          Score:
          <br />
          <span className="game-information__value">{currentScore}</span>
        </dt>
        <dt>
          Level:
          <br />
          <span className="game-information__value">{currentLevel}</span>
        </dt>
      </dl>
      <Button onClick={onPauseGame}>Pause</Button>
      {!isMusicMuted && <Button onClick={onMuteMusic}>Mute</Button>}
      {isMusicMuted && <Button onClick={onUnmuteMusic}>Music</Button>}
    </div>
  );
};

export { GameInformation };

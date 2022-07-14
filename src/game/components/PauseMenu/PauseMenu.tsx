import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { Dialog } from '../../../layout/Dialog';
import { restart, resume } from '../../state/actions';
import './PauseMenu.css';

const PauseMenu = () => {
  const { dispatch } = useGameState();

  const onResume = () => {
    dispatch(resume());
  };

  const onRestart = () => {
    dispatch(restart());
  };

  return (
    <Dialog>
      <div className="pause-menu">
        <h2>Paused</h2>
        <button onClick={onResume}>Resume</button>
        <button onClick={onRestart}>Restart</button>
        <button onClick={console.log}>Quit</button>
      </div>
    </Dialog>
  );
};

export { PauseMenu };

import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { Button } from '../../../layout/Button';
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
        <Button onClick={onResume}>Resume</Button>
        <Button onClick={onRestart}>Restart</Button>
      </div>
    </Dialog>
  );
};

export { PauseMenu };

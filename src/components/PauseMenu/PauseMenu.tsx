import React from 'react';
import { Dialog } from '../Dialog';
import './PauseMenu.css';

const PauseMenu = () => {
  // @TODO Make buttons work

  return (
    <Dialog>
      <div className="pause-menu">
        <h2>Paused</h2>
        <button onClick={console.log}>Resume</button>
        <button onClick={console.log}>Restart</button>
        <button onClick={console.log}>Quit</button>
      </div>
    </Dialog>
  );
};

export { PauseMenu };

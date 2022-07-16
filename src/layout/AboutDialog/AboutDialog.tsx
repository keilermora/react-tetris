import React from 'react';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import './AboutDialog.css';

interface AboutDialogProps {
  closeAboutDialog: () => void;
}

const AboutDialog = ({ closeAboutDialog }: AboutDialogProps) => {
  return (
    <Dialog>
      <div className="about-dialog">
        <h2>Tetris React</h2>
        <p>A game clone built in React as a learning project.</p>
        <p>
          The source code is available at{' '}
          <a
            href="https://github.com/keilermora/tetris-react"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </p>
        <Button onClick={closeAboutDialog}>Ok</Button>
      </div>
    </Dialog>
  );
};

export { AboutDialog };

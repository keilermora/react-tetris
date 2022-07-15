import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { ArcadeButton } from '../../../layout/ArcadeButton';
import { moveDown, moveLeft, moveRight, rotate } from '../../state/actions';
import './Controls.css';

const Controls = () => {
  const { state, dispatch } = useGameState();
  const { gameOver, isRunning } = state;

  const onMoveLeft = () => {
    if (!gameOver && isRunning) {
      dispatch(moveLeft());
    }
  };

  const onMoveRight = () => {
    if (!gameOver && isRunning) {
      dispatch(moveRight());
    }
  };

  const onRotate = () => {
    if (!gameOver && isRunning) {
      dispatch(rotate());
    }
  };

  const onMoveDown = () => {
    if (!gameOver && isRunning) {
      dispatch(moveDown());
    }
  };

  return (
    <div className="controls">
      <div className="controls__move-buttons">
        <div className="controls__button-group">
          <ArcadeButton
            disabled={gameOver || !isRunning}
            onClick={onMoveLeft}
            size={'small'}
          >
            {' '}
          </ArcadeButton>
          <span>Left</span>
        </div>
        <div className="controls__button-group">
          <ArcadeButton
            disabled={gameOver || !isRunning}
            onClick={onMoveDown}
            size={'small'}
          >
            {' '}
          </ArcadeButton>
          <span>Down</span>
        </div>
        <div className="controls__button-group">
          <ArcadeButton
            disabled={gameOver || !isRunning}
            onClick={onMoveRight}
            size={'small'}
          >
            {' '}
          </ArcadeButton>
          <span>Right</span>
        </div>
      </div>
      <div className="controls__rotate-button">
        <div className="controls__button-group">
          <ArcadeButton
            disabled={gameOver || !isRunning}
            onClick={onRotate}
            size={'large'}
          >
            {' '}
          </ArcadeButton>
          <span>Rotate</span>
        </div>
      </div>
    </div>
  );
};

export { Controls };

import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { Button } from '../../../layout/Button';
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
      <Button disabled={gameOver || !isRunning} onClick={onMoveLeft}>
        Left
      </Button>
      <Button disabled={gameOver || !isRunning} onClick={onMoveRight}>
        Right
      </Button>
      <Button disabled={gameOver || !isRunning} onClick={onRotate}>
        Rotate
      </Button>
      <Button disabled={gameOver || !isRunning} onClick={onMoveDown}>
        Down
      </Button>
    </div>
  );
};

export { Controls };

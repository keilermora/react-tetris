import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { moveDown, moveLeft, moveRight, rotate } from '../../state/actions';
import './Controls.css';

const Controls = () => {
  const { dispatch } = useGameState();

  const onMoveLeft = () => {
    dispatch(moveLeft());
  };

  const onMoveRight = () => {
    dispatch(moveRight());
  };

  const onRotate = () => {
    dispatch(rotate());
  };

  const onMoveDown = () => {
    dispatch(moveDown());
  };

  return (
    <div className="controls">
      <button onClick={onMoveLeft}>Left</button>
      <button onClick={onMoveRight}>Right</button>
      <button onClick={onRotate}>Rotate</button>
      <button onClick={onMoveDown}>Down</button>
    </div>
  );
};

export { Controls };

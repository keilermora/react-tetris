import React from 'react';
import { useGameState } from '../../../hooks/useGameState';
import { ArcadeButton } from '../../../layout/ArcadeButton';
import {
  moveDown,
  moveLeft,
  moveRight,
  rotateClockwise,
} from '../../state/actions';
import './Controls.css';

const Controls = () => {
  const { state, dispatch } = useGameState();
  const { gameOver, isPaused } = state;

  const handleUserKeyPress = React.useCallback((event: KeyboardEvent) => {
    const { key } = event;

    if (key === 'ArrowLeft') {
      onMoveLeft();
    } else if (key === 'ArrowRight') {
      onMoveRight();
    } else if (key === 'ArrowDown') {
      onMoveDown();
    } else if (key === 'ArrowUp' || key === 'x') {
      onRotate();
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const onMoveLeft = () => {
    if (!gameOver && !isPaused) {
      dispatch(moveLeft());
    }
  };

  const onMoveRight = () => {
    if (!gameOver && !isPaused) {
      dispatch(moveRight());
    }
  };

  const onRotate = () => {
    if (!gameOver && !isPaused) {
      dispatch(rotateClockwise());
    }
  };

  const onMoveDown = () => {
    if (!gameOver && !isPaused) {
      dispatch(moveDown());
    }
  };

  return (
    <div className="controls">
      <div className="controls__move-buttons">
        <div className="controls__button-group">
          <ArcadeButton onClick={onMoveLeft} size={'small'}>
            {' '}
          </ArcadeButton>
          <span>Left</span>
        </div>
        <div className="controls__button-group">
          <ArcadeButton onClick={onMoveDown} size={'small'}>
            {' '}
          </ArcadeButton>
          <span>Down</span>
        </div>
        <div className="controls__button-group">
          <ArcadeButton onClick={onMoveRight} size={'small'}>
            {' '}
          </ArcadeButton>
          <span>Right</span>
        </div>
      </div>
      <div className="controls__rotate-button">
        <div className="controls__button-group">
          <ArcadeButton onClick={onRotate} size={'large'}>
            {' '}
          </ArcadeButton>
          <span>Rotate</span>
        </div>
      </div>
    </div>
  );
};

export { Controls };

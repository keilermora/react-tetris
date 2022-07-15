import React from 'react';
import './ArcadeButton.css';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: 'small' | 'large';
}

const ArcadeButton = ({ children, disabled, onClick, size }: ButtonProps) => {
  const classNames = `arcade-button arcade-button--${size}`;
  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export { ArcadeButton };

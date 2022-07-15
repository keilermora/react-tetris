import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, disabled, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export { Button };

import React from 'react';
import './PlayfieldCell.css';

interface PlayfieldCellProps {
  colorNumber: number;
}

const PlayfieldCell = ({ colorNumber }: PlayfieldCellProps) => {
  const classes = `playfield-cell playfield-cell--color-${colorNumber}`;
  return <div className={classes} />;
};

export { PlayfieldCell };

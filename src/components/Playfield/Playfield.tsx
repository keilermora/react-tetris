import React from 'react';
import { PlayfieldCell } from '../PlayfieldCell/PlayfieldCell';

import './Playfield.css';

const Playfield = () => {
  // @TODO Playfield rows & cols shouldn't be hardcoded
  const rows = 18;
  const cols = 10;

  const playfieldGrid: JSX.Element[][] = [];
  for (let row = 0; row < rows; row++) {
    playfieldGrid.push([]);
    for (let col = 0; col < cols; col++) {
      playfieldGrid[row].push(
        <PlayfieldCell key={`${col}${row}`} colorNumber={1} />
      );
    }
  }

  return <div className="playfield">{playfieldGrid}</div>;
};

export { Playfield };

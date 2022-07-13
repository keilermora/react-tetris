import React from 'react';
import './Controls.css';

const Controls = () => {
  return (
    <div className="controls">
      <button onClick={console.log}>Left</button>
      <button onClick={console.log}>Right</button>
      <button onClick={console.log}>Rotate</button>
      <button onClick={console.log}>Down</button>
    </div>
  );
};

export { Controls };

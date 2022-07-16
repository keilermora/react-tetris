import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      Tetris © 1985~{currentYear}
      <br />
      Tetris theme song and Tetriminos are trademarks of Tetris Holding.
      <br />
      Tetris Game Design by Alexey Pajitnov.
      <br />
      All Rights Reserved.
    </footer>
  );
};

export { Footer };

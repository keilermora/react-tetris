import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <footer className="footer">© 1985~{currentYear}</footer>;
};

export { Footer };

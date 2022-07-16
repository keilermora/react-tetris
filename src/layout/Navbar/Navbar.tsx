import React from 'react';
import githubLogo from '../../assets/images/github-logo.png';
import linkedinLogo from '../../assets/images/linkedin-logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Tetris React</h1>
      <ul>
        <li>
          <a
            href="https://github.com/keilermora/tetris-react"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="" width={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/keilermora/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinLogo} alt="" width={32} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };

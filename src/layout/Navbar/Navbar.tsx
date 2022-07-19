import React from 'react';
import githubLogo from '../../assets/images/github-logo.png';
import linkedinLogo from '../../assets/images/linkedin-logo.png';
import { hideAboutDialog, showAboutDialog } from '../../game/state/actions';
import { useGameState } from '../../hooks/useGameState';
import { AboutDialog } from '../AboutDialog';
import './Navbar.css';

const Navbar = () => {
  const { state, dispatch } = useGameState();

  const closeAboutDialog = () => {
    dispatch(hideAboutDialog());
  };

  return (
    <nav className="navbar">
      <h1>Tetris React</h1>
      <ul>
        <li>
          <button
            className="navbar__about-button"
            onClick={() => {
              dispatch(showAboutDialog());
            }}
          >
            About
          </button>
        </li>
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
      {state.showsAbout && <AboutDialog closeAboutDialog={closeAboutDialog} />}
    </nav>
  );
};

export { Navbar };

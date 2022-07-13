import React from 'react';
import { Tetrion } from './components/Tetrion/Tetrion';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="app">
      <header className="app__header">
        <h1>Tetris React</h1>
      </header>

      <div className="app__tetrion">
        <Tetrion />
      </div>

      <footer className="app__footer">© 1985~{currentYear}</footer>
    </div>
  );
}

export default App;

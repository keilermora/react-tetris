import React from 'react';
import './App.css';
import { Tetrion } from './game/components/Tetrion';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';
import { GameStateProvider } from './providers/GameStateProvider';

function App() {
  return (
    <div className="app">
      <GameStateProvider>
        <Navbar />
        <div className="app__tetrion">
          <Tetrion />
        </div>
        <Footer />
      </GameStateProvider>
    </div>
  );
}

export default App;

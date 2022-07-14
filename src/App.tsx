import React from 'react';
import './App.css';
import { Tetrion } from './game/components/Tetrion';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';
import { GameStateProvider } from './providers/GameStateProvider';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__tetrion">
        <GameStateProvider>
          <Tetrion />
        </GameStateProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;

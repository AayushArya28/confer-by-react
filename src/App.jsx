import Nav from './components/Nav';
import './components/Header.css';
import './components/Hero.css'; // Make sure this is included
import Photobanner from './components/Photobanner';
import Hero from './components/Hero';
import React from 'react';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Photobanner />
      <Hero />
    </div>
  );
}

export default App;

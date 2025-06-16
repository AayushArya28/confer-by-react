import Nav from './components/Nav';
import './components/Header.css';
import './components/Hero.css'; // Make sure this is included
import Photobanner from './components/Photobanner';
import Hero from './components/Hero';
import React from 'react';

function App() {
  return (
    <>
      <Nav />
      <Photobanner />
      <Hero />
    </>
  );
}

export default App;

import React from 'react';
import logo from './assets/planet.png';

export default function Header() {
  return (
    <header className="App-header">
      <div className="flex">
        <img src={logo} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <nav />
    </header>
  );
}

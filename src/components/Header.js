import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

export default function Header() {
  return (
    <header className="App-header">
      <div className="flex">
        <img src={logo} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <nav>
        <ul>
          <NavLink to="/">Rockets</NavLink>
          <NavLink to="missions">Missions</NavLink>
          <NavLink to="MyProfile">My Profile</NavLink>
        </ul>
      </nav>
    </header>
  );
}

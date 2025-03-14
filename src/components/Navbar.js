import React from 'react';
import '../styles/Navbar.css';

function Navbar({ toggleDrawer, darkMode, toggleTheme }) {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-button" onClick={toggleDrawer}>
          ☰
        </button>
        <h2>My App</h2>
      </div>
      <div className="navbar-right">
        <button className="theme-toggle-nav" onClick={toggleTheme}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
}

export default Navbar;

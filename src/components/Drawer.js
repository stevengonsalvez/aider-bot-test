import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Drawer.css';

function Drawer({ isOpen, toggleDrawer }) {
  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3>Navigation</h3>
          <button className="close-drawer" onClick={toggleDrawer}>×</button>
        </div>
        <nav className="drawer-nav">
          <ul>
            <li><Link to="/" onClick={toggleDrawer}>Home</Link></li>
            <li><Link to="/dashboard" onClick={toggleDrawer}>Dashboard</Link></li>
            <li><Link to="/profile" onClick={toggleDrawer}>Profile</Link></li>
            <li><Link to="/settings" onClick={toggleDrawer}>Settings</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Drawer;

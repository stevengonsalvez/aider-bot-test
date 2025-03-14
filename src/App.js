import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/Pages.css';

// Components
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-theme' : 'light-theme'}`}>
        <Navbar 
          toggleDrawer={toggleDrawer} 
          darkMode={darkMode} 
          toggleTheme={toggleTheme} 
        />
        <Drawer 
          isOpen={drawerOpen} 
          toggleDrawer={toggleDrawer} 
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home count={count} setCount={setCount} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings darkMode={darkMode} toggleTheme={toggleTheme} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

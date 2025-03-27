import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import NavigationDrawer from './components/Drawer/NavigationDrawer';
import Home from './pages/Home';
import RandomDog from './pages/Dogs/RandomDog';
import DogBreeds from './pages/Dogs/DogBreeds';
import RandomCat from './pages/Cats/RandomCat';
import CatFacts from './pages/Cats/CatFacts';
import './App.css';

// New HeroBanner component
function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to Our Amazing Platform</h1>
        <p>Discover the easiest way to manage your tasks and boost productivity</p>
        <div className="cta-buttons">
          <button className="cta-primary">Get Started</button>
          <button className="cta-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-theme' : 'light-theme'}`}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <NavigationDrawer darkMode={darkMode} />
          <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
            <Toolbar /> {/* This creates space below the AppBar */}
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/dogs/random" element={<RandomDog darkMode={darkMode} />} />
              <Route path="/dogs/breeds" element={<DogBreeds darkMode={darkMode} />} />
              <Route path="/cats/random" element={<RandomCat darkMode={darkMode} />} />
              <Route path="/cats/facts" element={<CatFacts darkMode={darkMode} />} />
            </Routes>
          </Box>
        </Box>
        <div className="theme-toggle">
          <button onClick={toggleTheme}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;

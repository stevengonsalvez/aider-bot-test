import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box, Toolbar } from '@mui/material';
import NavigationDrawer from './components/NavigationDrawer';
import Home from './pages/Home';
import RandomDog from './pages/RandomDog';
import DogBreeds from './pages/DogBreeds';
import RandomCat from './pages/RandomCat';
import CatFacts from './pages/CatFacts';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#dc004e',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <NavigationDrawer darkMode={darkMode} toggleTheme={toggleTheme} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dogs/random" element={<RandomDog />} />
              <Route path="/dogs/breeds" element={<DogBreeds />} />
              <Route path="/cats/random" element={<RandomCat />} />
              <Route path="/cats/facts" element={<CatFacts />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

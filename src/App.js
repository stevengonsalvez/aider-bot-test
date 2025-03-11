import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <header className="App-header">
        <div className="theme-toggle">
          <button onClick={toggleTheme}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        <h1>Welcome to Aider Bot Test</h1>
        <p>A simple React application</p>
        <div className="counter-container">
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;

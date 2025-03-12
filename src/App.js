import React, { useState } from 'react';
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

  return (
    <div className="App">
      {/* Add the HeroBanner component here */}
      <HeroBanner />
      
      <header className="App-header">
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

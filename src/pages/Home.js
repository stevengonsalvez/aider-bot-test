import React from 'react';
import HeroBanner from '../components/HeroBanner';

function Home({ count, setCount }) {
  return (
    <div className="page home-page">
      <HeroBanner />
      <div className="content-section">
        <h1>Welcome to Our App</h1>
        <p>A simple React application with navigation</p>
        <div className="counter-container">
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

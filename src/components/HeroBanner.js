import React from 'react';

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

export default HeroBanner;

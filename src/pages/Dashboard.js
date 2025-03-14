import React from 'react';

function Dashboard() {
  return (
    <div className="page dashboard-page">
      <h1>Dashboard</h1>
      <p>This is the dashboard page where you can view your statistics and data.</p>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p className="stat-value">24</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p className="stat-value">16</p>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <p className="stat-value">8</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

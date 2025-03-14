import React from 'react';

function Settings({ darkMode, toggleTheme }) {
  return (
    <div className="page settings-page">
      <h1>Settings</h1>
      <div className="settings-container">
        <div className="settings-group">
          <h3>Appearance</h3>
          <div className="setting-item">
            <span>Dark Mode</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={darkMode} 
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        
        <div className="settings-group">
          <h3>Notifications</h3>
          <div className="setting-item">
            <span>Email Notifications</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="setting-item">
            <span>Push Notifications</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

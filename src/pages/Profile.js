import React from 'react';

function Profile() {
  return (
    <div className="page profile-page">
      <h1>User Profile</h1>
      <div className="profile-container">
        <div className="profile-avatar">
          <div className="avatar-placeholder">
            <span>JD</span>
          </div>
        </div>
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>john.doe@example.com</p>
          <p>Member since: January 2023</p>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

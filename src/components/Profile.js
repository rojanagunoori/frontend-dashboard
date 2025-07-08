import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = ({ user }) => (
  <div className="profile-container">
    <div className="profile-card">
      <h2><Link style={{textDecoration:"none"}} to="/dashboard">←</Link> Welcome, {user.name}</h2>
      <div className="profile-info">
        <div className="profile-avatar">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="profile-fields">
        <div className="field">
          <label>User ID</label>
          <input value={user.id} readOnly />
        </div>
        <div className="field">
          <label>Name</label>
          <input value={user.name} readOnly />
        </div>
        <div className="field">
          <label>Email ID</label>
          <input value={user.email} readOnly />
        </div>
        <div className="field">
          <label>Address</label>
          <input value={`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`} readOnly />
        </div>
        <div className="field">
          <label>Phone</label>
          <input value={user.phone} readOnly />
        </div>
      </div>
    </div>
  </div>
);

export default Profile;

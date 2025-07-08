// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/dashboard" className="go-back">Go to Dashboard</Link>
    </div>
  );
}

export default NotFound;

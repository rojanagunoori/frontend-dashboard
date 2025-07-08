import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ username, user }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  let hoverTimeout = null;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handlers for hover
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // slight delay
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <svg
          className="logo-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <path d="M0 0 H30 L40 40 H0 Z" fill="#22C55E" />
          <text
            x="12"
            y="26"
            fontSize="22"
            fontFamily="Arial, sans-serif"
            fill="white"
          >
            S
          </text>
        </svg>
        <span className="logo-text">WIFT</span>
      </div>

      <div
        className="user-info-container"
        ref={dropdownRef}
        onClick={() => setShowDropdown(true)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="user-info">
          <div className="avatar-circle">
            {username
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()}
          </div>
          <span className="user-name">{username}</span>
        </div>

        {showDropdown && (
  <div className="dropdown-menu">
    <p>{user.name}</p>
    <p>{user.email}</p>
    <hr style={{ margin: '10px 0', borderColor: '#eee' }} />
    <Link to="/profile" className="view-profile-link">View Profile</Link>
  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;

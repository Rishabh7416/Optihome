import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/optihome-logo.png" alt="OptiHome Logo" />
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;


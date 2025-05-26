import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this file for styling
import logo from '../../assets/logo2.jpg'; // Update path as needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>

        {/* Navigation Links */}
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

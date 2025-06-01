import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/LOGO1.png";
import { FaFacebook } from "react-icons/fa"; // Using react-icons for Facebook logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={Logo} alt="Company Logo" className="logo-img" />
        </div>

        {/* Navigation Links - Centered */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>

        {/* Facebook Icon */}
        <div className="social-icon">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="facebook-icon" />
          </a>
        </div>

        {/* Hamburger menu for mobile */}
        <div 
          className={`hamburger ${isOpen ? "open" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
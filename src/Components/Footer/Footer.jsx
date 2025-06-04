import React from 'react';
import { FaFacebook, FaInstagram, FaTripadvisor, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="hotel-footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>Himalayan Retreat</h3>
          <p>Experience authentic Nepali hospitality amidst the breathtaking beauty of the Himalayas. Our hotel combines modern comfort with traditional charm.</p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://tripadvisor.com" aria-label="TripAdvisor"><FaTripadvisor /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/rooms">Rooms & Suites</a></li>
            <li><a href="/dining">Dining</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> Thamel, Kathmandu, Nepal</li>
            <li><FaPhone /> +977-1-4223344, +977-9851023456</li>
            <li><FaEnvelope /> info@himalayanretreat.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe for special offers and updates</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Himalayan Retreat. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
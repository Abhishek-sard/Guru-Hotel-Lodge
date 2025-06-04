import React from 'react';
import './Contact.css';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Guru Hotel and Lodge</h1>
        <p>We'd love to hear from you! Reach out through any of these channels</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <h3>Phone</h3>
            <p>+977 1-1234567</p>
            <p>+977 9876543210</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Address</h3>
            <p>Thamel, Kathmandu</p>
            <p>Nepal</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>info@guruhotel.com</p>
            <p>reservations@guruhotel.com</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaClock />
            </div>
            <h3>Opening Hours</h3>
            <p>24/7 Reception</p>
            <p>Restaurant: 6AM - 10PM</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send us a message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="social-media">
        <h2>Connect With Us</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com/guruhotelandlodge" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Guru Hotel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.456715477774!2d85.31055731506208!3d27.70592338279391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908434cb3c7%3A0x1fdf1a6d41d2515e!2sThamel%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1621234567890!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
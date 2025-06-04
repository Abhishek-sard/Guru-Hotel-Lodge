// About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        
        <div className="about-grid">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2023, we started as a small team passionate about creating 
              meaningful digital experiences. Today, we've grown into a full-service 
              development agency serving clients worldwide.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              We believe in building technology that improves people's lives. 
              Our mission is to deliver innovative solutions that are both 
              beautiful and functional, while maintaining the highest standards 
              of quality and ethics.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Our Team</h2>
            <p>
              Our diverse team of designers, developers, and strategists brings 
              together decades of experience across industries. We're united by 
              our commitment to excellence and our love for solving complex problems.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li>Integrity in everything we do</li>
              <li>Continuous learning and improvement</li>
              <li>User-centered design</li>
              <li>Sustainable business practices</li>
              <li>Community engagement</li>
            </ul>
          </section>
        </div>
        
        <div className="about-cta">
          <h2>Want to learn more?</h2>
          <button className="cta-button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default About;
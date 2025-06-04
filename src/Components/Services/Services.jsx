import React from 'react';
import './Services.css';
import { FaWifi, FaSwimmingPool, FaParking, FaUtensils, FaConciergeBell, FaSnowflake, FaTv, FaCoffee } from 'react-icons/fa';
import { GiWaterBottle, GiLaurelsTrophy } from 'react-icons/gi';
import { MdMeetingRoom, MdRoomService } from 'react-icons/md';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services & Amenities</h1>
        <p>Experience unparalleled hospitality with our wide range of services</p>
      </div>

      <div className="services-grid">
        {/* Accommodation */}
        <div className="service-card">
          <div className="service-icon">
            <MdMeetingRoom size={40} />
          </div>
          <h3>Luxurious Accommodation</h3>
          <ul>
            <li>Spacious Deluxe Rooms</li>
            <li>Premium Suites with Mountain Views</li>
            <li>24/7 Room Service</li>
            <li>Daily Housekeeping</li>
          </ul>
        </div>

        {/* Dining */}
        <div className="service-card">
          <div className="service-icon">
            <FaUtensils size={40} />
          </div>
          <h3>Dining Experience</h3>
          <ul>
            <li>Multi-cuisine Restaurant</li>
            <li>Daily Breakfast Buffet</li>
            <li>Specialty Local Cuisine</li>
            <li>24/7 Coffee Shop</li>
          </ul>
        </div>

        {/* Facilities */}
        <div className="service-card">
          <div className="service-icon">
            <FaConciergeBell size={40} />
          </div>
          <h3>Hotel Facilities</h3>
          <ul>
            <li><FaSwimmingPool /> Outdoor Swimming Pool</li>
            <li><FaWifi /> High-speed WiFi</li>
            <li><FaParking /> Secure Parking</li>
            <li><FaSnowflake /> Air Conditioning</li>
            <li><FaTv /> Satellite TV</li>
          </ul>
        </div>

        {/* Business Services */}
        <div className="service-card">
          <div className="service-icon">
            <GiLaurelsTrophy size={40} />
          </div>
          <h3>Business Services</h3>
          <ul>
            <li>Conference Hall</li>
            <li>Business Center</li>
            <li>Meeting Rooms</li>
            <li>Secretarial Services</li>
          </ul>
        </div>

        {/* Additional Services */}
        <div className="service-card">
          <div className="service-icon">
            <MdRoomService size={40} />
          </div>
          <h3>Additional Services</h3>
          <ul>
            <li>Laundry & Dry Cleaning</li>
            <li>Travel Desk & Tour Arrangements</li>
            <li>Doctor on Call</li>
            <li>Car Rental Services</li>
          </ul>
        </div>

        {/* Special Offers */}
        <div className="service-card">
          <div className="service-icon">
            <GiWaterBottle size={40} />
          </div>
          <h3>Special Packages</h3>
          <ul>
            <li>Honeymoon Packages</li>
            <li>Family Vacation Deals</li>
            <li>Weekend Getaways</li>
            <li>Corporate Discounts</li>
          </ul>
        </div>
      </div>

      <div className="services-cta">
        <h2>Ready to Experience Our Hospitality?</h2>
        <button className="cta-button">Book Your Stay Now</button>
      </div>
    </div>
  );
};

export default Services;
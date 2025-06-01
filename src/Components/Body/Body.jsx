import React from "react";
import "./body.css";
import Building from "../../assets/building-photo.png";

const Body = () => {
  return (
    <div className="body-app">
      <div className="body-container">
        <div className="text-content">
          <h1>Experience Luxury at Gurukul Hotel & Lodge</h1>
          {/* <p className="tagline">Where timeless elegance meets modern comfort in perfect harmony</p> */}
          <p className="attraction-text">
            <span className="highlight-bg">Nestled in the vibrant heart of the city, just moments from major attractions</span>
          </p>
          <p className="rating-text">★★★★★ Rated "Excellent" by 500+ guests</p>
          <button className="cta-button">Book Now</button>
        </div>
        <div className="image-content">
          <img
            src={Building}
            alt="Gurukul Hotel and Lodge"
            className="featured-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
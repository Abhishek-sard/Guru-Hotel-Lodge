import React from 'react';
import './ImageHolder.css'; // We'll create this CSS file

const ImageHolder = () => {
  // Sample data for the grid
  const gridData = [
    { id: 1, title: 'Mountain View', text: 'Enjoy Himalayan scenery' },
    { id: 2, title: 'Luxury Rooms', text: 'Premium accommodations' },
    { id: 3, title: 'Spa Services', text: 'Relax and rejuvenate' },
    { id: 4, title: 'Local Cuisine', text: 'Authentic Nepali food' },
    { id: 5, title: 'Adventure Tours', text: 'Explore Nepal' },
    { id: 6, title: 'Cultural Shows', text: 'Traditional performances' },
    { id: 7, title: 'Swimming Pool', text: 'Refresh yourself' },
    { id: 8, title: 'Yoga Classes', text: 'Find your balance' },
    { id: 9, title: 'City Center', text: 'Easy access to attractions' }
  ];

  return (
    <div className="grid-container">
      <h2>Our Hotel Features</h2>
      <div className="image-grid">
        {gridData.map((item) => (
          <div className="grid-item" key={item.id}>
            <div className="image-placeholder"></div> {/* This acts as our image */}
            <div className="text-overlay">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageHolder;
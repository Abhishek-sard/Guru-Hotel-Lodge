import React from 'react';
import './ImageHolder.css';

// Import your images (adjust the paths according to your project structure)
import image1 from '../../../assets/bed1.jpg';
import image2 from '../../../assets/bed2.jpg';
import image3 from '../../../assets/bed3.jpg';
import image4 from '../../../assets/bed4.jpg';
import image5 from '../../../assets/bed5.jpg';
import image6 from '../../../assets/bed6.jpg';
import image7 from '../../../assets/bed7.jpg';
import image8 from '../../../assets/bed8.jpg';
import image9 from '../../../assets/bed9.jpg';

const ImageHolder = () => {
  // Grid data with actual image imports
  const gridData = [
    { id: 1, title: 'Bed 1', text: 'Enjoy Himalayan scenery', image: image1 },
    { id: 2, title: 'Bed 2', text: 'Premium accommodations', image: image2 },
    { id: 3, title: 'Bed 3', text: 'Relax and rejuvenate', image: image3 },
    { id: 4, title: 'Bed 4', text: 'Authentic Nepali food', image: image4 },
    { id: 5, title: 'Bed 5', text: 'Explore Nepal', image: image5 },
    { id: 6, title: 'Bed 6', text: 'Traditional performances', image: image6 },
    { id: 7, title: 'Bed 7', text: 'Refresh yourself', image: image7 },
    { id: 8, title: 'Bed 8', text: 'Find your balance', image: image8 },
    { id: 9, title: 'Bed 9', text: 'Easy access to attractions', image: image9 }
  ];

  return (
    <div className="grid-container">
      <h2>Our Hotel Rooms</h2>
      <div className="image-grid">
        {gridData.map((item) => (
          <div className="grid-item" key={item.id}>
            <img 
              src={item.image} 
              alt={item.title} 
              className="grid-image"
              loading="lazy" // For better performance
            />
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
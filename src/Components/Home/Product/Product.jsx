import React from 'react';
import './Product.css';

//importing image from assets folder
import image11 from '../../../assets/night1.jpg';
import image12 from '../../../assets/night2.jpg';
import image13 from '../../../assets/night3.jpg';
import image14 from '../../../assets/night4.jpg';
import image15 from '../../../assets/night5.jpg';
import image16 from '../../../assets/night6.jpg';
import image17 from '../../../assets/night7.jpg';
import image18 from '../../../assets/night8.jpg';
import image19 from '../../../assets/night9.jpg';
import image20 from '../../../assets/night10.jpg';

const Product = () => {

    //grid data with actual image imports

    const gridData = [
        {id: 1, image: image11},
        {id: 2, image: image12},
        {id: 3, image: image13},
        {id: 4, image: image14},
        {id: 5, image: image15},
        {id: 6, image: image16},
        {id: 7, image: image17},
        {id: 8, image: image18},
        {id: 9, image: image19},
        {id: 10, image: image20},
    ]
  return (
    <div className = "grid-container">
        {gridData.map((item) => (
            <div key={item.id} className="grid-item">
                <img src={item.image} alt="product" />
        }

      
    </div>
  )
}

export default Product

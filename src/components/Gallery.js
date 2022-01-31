import React from 'react';

import '../styles/gallery_styles.css';
import sunset from '../images/sunset.jpg';
import legos from '../images/legos.jpg';
import salad from '../images/salad.jpg';
import silly from '../images/silly.jpg';


function Gallery() {
  return (
    <div className='post_image_gallery'>
        <div className='gallery_image'>
            <img src={sunset} alt='' />
        </div>
        <div className='gallery_image'>
            <img src={legos} alt='' />
        </div>
        <div className='gallery_image'>
            <img src={silly} alt='' />
        </div>
        <div className='gallery_image'>
            <img src={salad} alt='' />
        </div>
    </div>
  )
};

export default Gallery;


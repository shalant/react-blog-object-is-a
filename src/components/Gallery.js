import React from 'react';

import '../styles/gallery_styles.css';

function Gallery() {
  return (
    <div className='post_image_gallery'>
        <div className='gallery_image'>
            <img src='https://picsum.photos/200/301' alt='' />
        </div>
        <div className='gallery_image'>
            <img src='https://picsum.photos/200/302' alt='' />
        </div>
        <div className='gallery_image'>
            <img src='https://picsum.photos/200/303' alt='' />
        </div>
        <div className='gallery_image'>
            <img src='https://picsum.photos/200/304' alt='' />
        </div>
    </div>
  )
};

export default Gallery;


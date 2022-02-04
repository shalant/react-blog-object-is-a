import React from 'react';

import '../styles/gallery_styles.css';

function Gallery(props) {
    function render_images() {
        return props.images.map((image_path, i) => {
            return (
                <div className='gallery_image' key={i} >
                    <img src={image_path} alt='' />
                </div>
            )
            
        });
    }

    return (
        <div className='post_image_gallery'>
            {render_images()}
        </div>
    )
};

export default Gallery;


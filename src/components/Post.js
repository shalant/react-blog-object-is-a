import React from 'react';

import '../styles/post_styles.css';

function Post() {
    return (
        <div className='blog_post'>
            <div className='section section1'>
                <div className='post_title'>
                    <span>Title</span>
                </div>
                <div className='post_subtitle'>
                    <span>Subtitle</span>
                </div>
            </div>

            <div className='section section2'>
                Lorem10
                {/* WriteUp */}
            </div>

            <div className='section section3'>
                lorem30
                {/* Gallery */}
            </div>

            <div className='section section4'>
                Lorem10
                {/* WriteUp */}
            </div>

            <div className='section section5'>
                Lorem10
                {/* PrimaryAsset */}
            </div>

        </div>
    )
}

export default Post;

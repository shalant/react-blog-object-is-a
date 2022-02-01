import React from 'react';

import '../styles/post_styles.css';
import Gallery from './Gallery.js';
import PrimaryAsset from './PrimaryAsset.js';
import WriteUp from './WriteUp.js';

function Post(props) {
    return (
        <div className='blog_post'>
            <div className='section section1'>
                <div className='post_title'>
                    <span>{props.post.title}</span>
                </div>
                <div className='post_subtitle'>
                    <span>Subtitle</span>
                </div>
            </div>

            <div className='section section2'>
                <WriteUp />
            </div>

            <div className='section section3'>
                <Gallery />
            </div>

            <div className='section section4'>
                <WriteUp />
            </div>

            <div className='section section5'>
                <PrimaryAsset />
            </div>

        </div>
    )
}

export default Post;

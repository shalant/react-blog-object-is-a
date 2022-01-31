import React from 'react';

import '../styles/blog_page_styles.css'
import Post from './Post';
import Separator from './Separator.js';

function BlogPage() {
    return (
        <div className='blog_page'>
            <div className='site_header' style={{ backgroundImage: "url('/images/drd7.png')" }}>
                <img src='/images/drd7.png' alt='' />
            </div>
            <div className='page_name'>
                Developer Blog
            </div>

            <div className='container'>
                <div className='left_side'>
                    <div className='blog_posts'>
                        <Post />
                        <Separator />
                        <Post />
                    </div>
                </div>
                <div className='right_side'>
                    <div className='blog_index'>
                        <ul>
                            <li>
                                <a href='https://localhost'>Lorem, ipsum.</a>
                            </li>
                            <li>
                                <a href='https://localhost'>Lorem, ipsum.</a>
                            </li>
                            <li>
                                <a href='https://localhost'>Lorem, ipsum.</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BlogPage;

import React, { Fragment } from 'react';

import '../styles/blog_page_styles.css';

import { blog_posts } from '../copywrite/blog_posts.js';

import Post from './Post';
import Separator from './Separator.js';

function BlogPage() {
    function render_posts() {
        return blog_posts.map((post, i) => {
            return (
                <Fragment key={i}>
                    <Post post={post} />
                    {i === blog_posts.length - 1 ? null : <Separator />}
                </Fragment>
            )
        });
    }
    function render_index() {

    }

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
                        {render_posts}
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

import React from 'react';
import '../css/blogcomponent.css';

const BlogComponent = ({ title, image, link, date }) => {
    const baseURL = "https://www.thedroptimes.com"
    return (
        <div class="blog-post-contents">
            <div class="blog-post-image">
                <img src={baseURL + image} alt="image" />
            </div>
            <div class="blog-post-info">
                <h2 class="blog-post-title">{title}</h2>
                <p class="blog-post-date">{date}</p>
                <a href={link} class="blog-post-link">Read More</a>
            </div>
        </div>
    );
};

export default BlogComponent;
import React from 'react';

const BlogComponent = ({title, image, link, date}) => {
    return (
        <div className="blog-post-contents">
            <img src={image} alt="image"></img>
            <div className="blog-post-info">
                <h2>{title}</h2>
                <p className="blog-post-date">{date}</p>
                <a href={link}>Read more</a>
            </div>
        </div>
    );
};

export default BlogComponent;
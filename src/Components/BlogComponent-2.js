import React from 'react';
import '../css/blogcomponent2.css';

const BlogComponent__ = ({ title, image, link, date }) => {
    const baseUrl = "https://www.thedroptimes.com"
    return (
        <div className="style-1">
            <div className="style-2">
                <div className="style-8">
                    <ul className="style-9">
                        <li className="style-10">
                            <a href={link} data-omtr-intcmp="fnhprr_watch_fnc" target="_blank" className="style-11">
                                <div className="style-12">
                                    <span className="style-13"><img src={baseUrl + image} alt="Image"></img></span>
                                    <p className="style-14">{title}<br className="style-15" /> <small className="style-16">{date}</small> </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogComponent__;
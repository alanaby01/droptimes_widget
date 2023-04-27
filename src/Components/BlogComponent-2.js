import React from 'react';
import '../css/blogcomponent2.css';

const BlogComponent__ = ({ title, image, link, date }) => {
    const baseUrl = "https://www.thedroptimes.com"
    return (
        <div class="style-1">
            <div class="style-2">
                <div class="style-8">
                    <ul class="style-9">
                        <li class="style-10">
                            <a href={link} data-omtr-intcmp="fnhprr_watch_fnc" target="_blank" class="style-11">
                                <div class="style-12">
                                    <span class="style-13"><img src={baseUrl + image} alt="Image"></img></span>
                                    <p class="style-14">{title}<br class="style-15" /> <small class="style-16">{date}</small> </p>
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
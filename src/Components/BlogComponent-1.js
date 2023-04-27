import React from 'react';
import '../css/blogcomponent1.css';

const BlogComponent_ = ({ title, image, link, date }) => {
    return (
        <div class="style-0" data-tracker="cb=1">
            <ul class="style-1">
                <li class="style-3">
                    <div class="style-4">
                        <svg aria-hidden="true" class="style-5" width="14" height="14" viewBox="0 0 14 14">
                            <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z" class="style-6"></path>
                        </svg>
                    </div>
                    <div class="style-7">
                        <a href={link} class="style-8">{title}</a>
                    </div>
                </li>
            </ul>
        </div>
                );
};

export default BlogComponent_;
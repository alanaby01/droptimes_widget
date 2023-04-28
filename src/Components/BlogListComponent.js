import React from 'react';
import axios from 'axios';
import BlogComponent__ from './BlogComponent-2';
import data from '../data.json';

const BlogListComponent = () => {

  // async function getJSON() {
  //     let reqInstance = axios.create({
  //         headers: {
  //             "Accept": "application/json",
  //             'Access-Control-Allow-Origin': '*'
  //         }
  //     })
  //     const data = await reqInstance.get("https://www.thedroptimes.com/feeds/widgets/latest-news.json");
  //     data    
  //     .then(result => console.log(result))
  //     .catch(error => console.log(error))
  //     console.log(data)
  // }
  // getJSON();  
  return (
    <div className="style-0" data-tracker="cb=1">
      {data.map((post) => <BlogComponent__ title={post.title} image={post.field_image} link={post.view_node} date={post.created} />)}
    </div>
  );
}

export default BlogListComponent;
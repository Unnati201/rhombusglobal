import React from 'react';
import './NewsBlog.css'; 
import {BsArrowRightShort} from "react-icons/bs"

const NewsBlog = () => {
  return (
    <div className='blog_body'>
      <h1 className='newblog_h1'>Top Heading Blog &amp; News</h1>
      <div className="blog-container">
        <div className="blog-card">
          <div className='new-imgs'>
          <img  src="asserts/blog-1.jpg" alt=""></img>
          </div>
          <p className='blog_p2'>Blog|May22,2023</p>
          <h2>The future of the data driven</h2>
          <p className='blog_p1'>This is the content of Card 1.</p>
          <a classname= "blog_a" href="#">Learn More</a>
          <BsArrowRightShort className="blog_arrow"/>
        </div>
        <div className="blog-card">
          <div className='new-imgs'>
          <img  src="asserts/blog-2.jpg" alt=""></img>
          </div>
          <p className='blog_p2'>Blog|May22,2023</p>
          <h2>Card 2 Title</h2>
          <p className='blog_p1'>This is the content of Card 2.</p>
          <a  classname= "blog_a" href="#">Learn More</a>
          
          <BsArrowRightShort className="blog_arrow"/>
        </div>
        <div className="blog-card">
        <p className='blog_p2'>Blog|May22,2023</p>
          <h2>Card 3 Title</h2>
          <p className='blog_p1'>This is the content of Card 3.</p>
          <a  classname= "blog_a" href="#">Learn More</a>
         
          <BsArrowRightShort className="blog_arrow3"/>
        </div>
        <div className="blog-card">
        <p className='blog_p2'>Blog|May22,2023</p>
          <h2>Card 4 Title</h2>
          <p className='blog_p1'>This is the content of Card 4.</p>
          <a  classname= "blog_a" href="#">Learn More</a>
          <BsArrowRightShort className="blog_arrow3"/>
        </div>
      </div>
    </div>
  );
};

export default NewsBlog;

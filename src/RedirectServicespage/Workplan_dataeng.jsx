import React from 'react';
import './Workplan.css'; 
import {BsArrowRightShort} from "react-icons/bs"

const Workplan = () => {
  return (
    <div className='dataeng_blog_body'>
      <h1 className='dataeng_newblog_h1'> Work Example</h1>
      <div className="dataeng_blog-container">
        <div className="dataeng_blog-card">
            
          <div className='dataeng_new-imgs'>
            
          <img  src="asserts/blog-1.jpg" alt=""></img>
          </div>
         
          <h2>"Big Data Platform for a Travel Company</h2>
          <p className='dataeng_blog_p1'>Our scalable architecture enabled a significant increase in revenue and profitability. With a real-time unified view of the customer, we gained valuable insights .</p>
          <a classname= "dataeng_blog_a" href="#">Learn More</a>
          <BsArrowRightShort className="dataeng_blog_arrow"/>
        </div>
        <div className="dataeng_blog-card">
          <div className='dataeng_new-imgs'>
          <img  src="asserts/blog-2.jpg" alt=""></img>
          </div>
          
          <h2>Digital Marketplace for a Services Company</h2>
          <p className='dataeng_blog_p1'>Our full automated wealth management process provided a seamless experience for both B2B and B2C markets. With our omni-channel solution .</p>
          <a  classname= "dataeng_blog_a" href="#">Learn More</a>
          
          <BsArrowRightShort className="dataeng_blog_arrow"/>
        </div>
      
       
      </div>
    </div>
  );
};

export default Workplan;

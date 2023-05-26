import React from 'react';
import imageSrc from '../../asserts/leadership-banner.jpeg';
import "./AboutSec.css";

const AboutSec = () => {
  return (
    <div className="new_abouts-banner">
    <img className='about_data_new_img'  src={imageSrc} alt="" />
    <div className="new_abouts-overlay"></div>
    
    <div className="new_abouts-content">
    <h1 className="new_abouts-title">Our Focus</h1>
    <p className="new_abouts-description">
    At Rhombus global services, delivered data ,digital and cloud 
              <b> Technology and transformation.</b> and services from strategy to implementation
              <br />
              <br />
             We enable innovative solution across variety of industry segment 
             and cater to organisation of various sizes.
             we believe in long term partnership and our services 
             are design for value and specific need of our client
    </p>
    <button className="new_abouts-button">Get in Touch</button>
    </div>
    </div>
  )
}

export default AboutSec
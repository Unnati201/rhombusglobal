import React from 'react';
import imageSrc_successst from "../../asserts/hero4.jpg";
import ourapproach_image  from "../../asserts/ourfocus.jpg";
import "./Aboutpage.css"
import Contact from '../../components/Contactdata/Contact';
import Footer from '../NewFooter/Footer';
import OurTeam from './OurTeam';

const Aboutpage = () => {
   
 

  
  return (
    <div className="aboutUs_story-banner">
    <img className='image_aboutus'  src={imageSrc_successst} alt="" />
<div className="aboutUs_story-overlay"></div>

<div className="aboutUs_story-content">
  <h1 className="aboutUs_story-title">Rhombus Global Services Technologies
 
</h1>
  
  

 
</div>

<div className='aboutus_vision_body'>
    <h1 className='our_focs_page'>Our Focus</h1>
    <p className='aboutus_p_data'>At Rhombus Global Services, we deliver data, digital and cloud technology transformation and  services from strategy to implementation.
We enable innovative solutions across  variety of industry segments and cater to organizations of various sizes.  
We believe in long-term partnerships, and our services are designed for value and the specific needs of our clients</p>
</div>

<br/><br/><br/>

{/* Our Approach Section */}

 
<div className="aboutUs_story-banner_ourapproach">
    <img className='image_aboutus_ourapproach'  src={ourapproach_image} alt="" />
<div className="aboutUs_story-overlay_ourapproach"></div>

<div className="aboutUs_story-content_ourapproach">
  <h1 className="aboutUs_story-title_ourapproach">Our Approach
</h1><br/>
  
  <div className='aboutus_desc_body'>
  <p className='aboutUs_story-description_ourapproach'>At Rhombus Global Services, we prioritize clients, deliver tailored solutions. Data-driven insights inform decisions, uncover opportunities. We guide digital transformation, fuel innovation, optimize processes. Automation and optimization streamline workflows, drive growth..
</p>
</div>

<br/><br/>
 
</div>










      <div className="ourapp_card-row">
        <div className="ourapp_card">Card 1</div>
        <div className="ourapp_card">Card 2</div>
        <div className="ourapp_card">Card 3</div>
      </div>
      <div className="ourapp_card-row">
        <div className="ourapp_card">Card 4</div>
        <div className="ourapp_card">Card 5</div>
        <div className="ourapp_card">Card 6</div>
      </div>


      </div>

{/* Our Vision */}

  <h1  className="aboutUs_story-title_ourvision">Our Vision</h1>
  <p className='aboutus_p_data'> To be unique in every part of the business we operate and provide exceptional value.
We specialize in helping organize eliminate blind spots by uncovering data and business insights, accelerating digital transformation, leveraging automation for optimization and ROI and taking a quantum leap in growth.
</p>
 <br/><br/><br/>


<OurTeam/>

<Contact/>
<Footer/>

  </div>
  )
}

export default Aboutpage;
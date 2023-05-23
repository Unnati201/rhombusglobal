import React from 'react';
import "./ServicesCard.css";
import {BsArrowRightShort} from "react-icons/bs"

const ServicesCard = () => {
  return (
    <div className='serv_body'>
      <div className='serv_container'>
<div className='serv_card'>
   <div className='serv_imgBox'>
  <img src="asserts/dataeng.png" alt=""/>
  <h1 className='service_h1'>Data Engineering and Solutions</h1>
   </div>
<div className='serv_contentBox'>
    <div className='servc_content'>
        <h3 className='servc_h3'>Data Engineering and Solutions</h3>
        <p className='servc_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed esse doloremque, facere dolorum porro quas quis voluptatibus quasi quos animi at a.</p>

        <button className="learn-more-btn">Learn More</button>
         
          <BsArrowRightShort className="ind_arrow"/>
    </div>
</div>
</div>


<div className='serv_card'>
   <div className='serv_imgBox'>
  <img src="asserts/digitaltransformation3.jpg" alt=""/>
  <h1 className='service_h1'>Digital Engineering and Transformation</h1>
   </div>
<div className='serv_contentBox'>
    <div className='servc_content'>
        <h3 className='servc_h3'>Digital Engineering and Transformation</h3>
        <p className='servc_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed esse doloremque, facere dolorum porro quas quis voluptatibus quasi quos animi at a.</p>
        <button className="learn-more-btn">Learn More</button>
         
          <BsArrowRightShort className="ind_arrow"/>
    </div>
</div>
</div>



<div className='serv_card'>

   <div className='serv_imgBox'>
  <img src="asserts/cloudengineering.png" alt=""/>
  <h1 className='service_h1'>Cloud Engineering and Platform</h1>
   </div>
<div className='serv_contentBox'>
    <div className='servc_content'>
        <h3 className='servc_h3'>Cloud Engineering and Platform</h3>
        <p className='servc_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed esse doloremque, facere dolorum porro quas quis voluptatibus quasi quos animi at a.</p>
        <button className="learn-more-btn">Learn More</button>
         
          <BsArrowRightShort className="ind_arrow"/>
    </div>
</div>
</div>



<div className='serv_card'>
   <div className='serv_imgBox'>
  <img src="asserts/consulty.jpg" alt=""/>
  <h1 className='service_h1'>Consulting and Advisory</h1>
   </div>
<div className='serv_contentBox'>
    <div className='servc_content'>
        <h3 className='servc_h3'>Consulting and Advisory</h3>
        <p className='servc_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed esse doloremque, facere dolorum porro quas quis voluptatibus quasi quos animi at a.</p>
        <button className="learn-more-btn">Learn More</button>
         
          <BsArrowRightShort className="ind_arrow"/>
    </div>
</div>
</div>
      </div>
    </div>
  )
}

export default ServicesCard
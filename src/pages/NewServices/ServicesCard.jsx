import React from 'react';
import "./ServicesCard.css";
import {BsArrowRightShort} from "react-icons/bs"

const ServicesCard = () => {
  return (
    <div className='serv_body'>
      <div className='serv_container'>
<div className='serv_card'>
   <div className='serv_imgBox'>
  <img src="asserts/digitaltransformation3.jpg" alt=""/>
  <h1 className='service_h1'>Data Engineering</h1>
   </div>
<div className='serv_contentBox'>
    <div className='servc_content'>
        <h3 className='servc_h3'>Data</h3>
        <p className='servc_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed esse doloremque, facere dolorum porro quas quis voluptatibus quasi quos animi at a.</p>

        <button className="learn-more-btn">Learn More</button>
         
          <BsArrowRightShort className="ind_arrow"/>
    </div>
</div>
</div>


<div className='serv_card'>
   <div className='serv_imgBox'>
  <img src="asserts/cloudengineering.png" alt=""/>
  <h1 className='service_h1'>Digital Engineering</h1>
   </div>
<div className='serv_contentBox'>
    <div className='servc_content'>
        <h3 className='servc_h3'>Digital</h3>
        <p className='servc_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed esse doloremque, facere dolorum porro quas quis voluptatibus quasi quos animi at a.</p>
        <button className="learn-more-btn">Learn More</button>
         
          <BsArrowRightShort className="ind_arrow"/>
    </div>
</div>
</div>



<div className='serv_card'>

   <div className='serv_imgBox'>
  <img src="asserts/digitaltransformation3.jpg" alt=""/>
  <h1 className='service_h1'>Cloud Engineering</h1>
   </div>
<div className='serv_contentBox'>
    <div className='servc_content'>
        <h3 className='servc_h3'>Cloud</h3>
        <p className='servc_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed esse doloremque, facere dolorum porro quas quis voluptatibus quasi quos animi at a.</p>
        <button className="learn-more-btn">Learn More</button>
         
          <BsArrowRightShort className="ind_arrow"/>
    </div>
</div>
</div>



<div className='serv_card'>
   <div className='serv_imgBox'>
  <img src="asserts/consulting.png" alt=""/>
  <h1 className='service_h1'>Consulty</h1>
   </div>
<div className='serv_contentBox'>
    <div className='servc_content'>
        <h3 className='servc_h3'>Consulty</h3>
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
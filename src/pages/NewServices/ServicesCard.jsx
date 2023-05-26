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
        <p className='servc_p'>Data Integrity Solution. <br/>
        Master Data Management <br/>
        Analytics and AI</p>

        <button className="learn-more-btns-ser">Learn More</button>
         
          <BsArrowRightShort className="ind_serv_arrow"/>
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
        <h3 className='servc_h3'>Digital Engineering and Transformation</h3><br/>
        <p className='servc_p'>Customer Experience Management <br/>
        Product Design and Engineering <br/>
        App Development and Support</p>
        <button className="learn-more-btns-ser">Learn More</button>
         
          <BsArrowRightShort className="ind_serv_arrow"/>
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
        <h3 className='servc_h3'>Cloud Engineering and Platfor</h3>
        <p className='servc_p'>Cloud Engineering and Migration<br/>
        Managed hosting and support services
        </p>
        <button className="learn-more-btns-ser">Learn More</button>
         
          <BsArrowRightShort className="ind_serv_arrow"/>
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
        <p className='servc_p'>Business Consulting <br/>
        Technology Consulting <br/>
        Cloud and Network Consulting</p>
        <button className="learn-more-btns-ser">Learn More</button>
         
          <BsArrowRightShort className="ind_serv_arrow"/>
    </div>
</div>
</div>
      </div>
    </div>
  )
}

export default ServicesCard
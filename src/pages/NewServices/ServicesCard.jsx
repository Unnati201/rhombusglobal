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
        <h3 className='servc_h3'>Data Engineering and Solutions
        
   </h3>
      {/* <span className="arrow-symbol">&#10148;</span> */}
   
        <p className='servc_p'>
        <li className="list-item"> Data Integrity Solutions</li> 

        <li className="list-item">Master Data Management </li>
        <li className="list-item"> Analytics and AI</li></p>

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
        <h3 className='servc_h3'>Digital Engineering and Transformation</h3>
        <p className='servc_p'>
        <li className="list-item">Customer Experience Management </li>
        <li className="list-item"> Product Design and Engineering </li>
        <li className="list-item"> App Development and Support</li>
        </p>
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
        <h3 className='servc_h3'>Cloud Engineering and Platform</h3>
        <p className='servc_p'>
        <li className="list-item">Cloud Engineering and Migration</li>
        <li className="list-item">Cloud Native Development</li>
        <li className="list-item">Managed hosting and support services</li>
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
        <h3 className='servc_h3'>Advisory &Consulting </h3>
        <p className='servc_p'>
        <li className="list-item">Business Consulting</li> 
        <li className="list-item">Technology Consulting </li>
        <li className="list-item">
        Cloud and Network Consulting</li></p>
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
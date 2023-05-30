import React from 'react'
import Footer from '../pages/NewFooter/Footer'
import Contact from '../components/Contactdata/Contact';
import cloudimg from ".././asserts/cloudbanner.jpg";
import cloudimg2 from ".././asserts/cloud2.jpg";
import cloudimg3 from ".././asserts/cloud3.jpg";
import cloudimg4 from ".././asserts/cloud4.png";

import CloudWorkexp from './CloudWorkexp';
import "./CloudEngineering.css"

const CloudEngineering = () => {
  return (
    <div className="DataEng-banner">
    <img  src={cloudimg} alt="" />
<div className="dataeng-overlay"></div>

<div className="dataeng-content">
  <h1 className="dataeng-title">Cloud Engineering and Platform</h1>
  <p className="dataeng-description">
  Harness the power of data to drive innovation and accelerate your business outcomes
  </p>
 


  

 

</div>
 {/* What we are offering page */}
 <div className='whatoffer_data_eng'>
<h1 className='what_offer_h1'>What We Offer</h1>
<p className='what_offer_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur odit velit neque. Veniam enim hic eos commodi, quibusdam soluta aut, esse ipsam doloribus consectetur earum amet laudantium expedita doloremque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nobis nostrum dolorum repellendus. Aliquid assumenda sit quo vitae alias exercitationem.</p>
</div>




{/* three offering content */}

<div className="threeoffer_container">
<div className="dataoffers_column">
  <hr className="dataoffers_line" />
 
  <div className="dataoffers_content">
    <h3 className="dataoffer_h3">Cloud Engineering and Migration </h3>
    <div className="arrow">&#8594;</div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde optio autem non at repellat! Corrupti modi voluptatibus debitis ab repudiandae nesciunt aliquam iusto!</p>
  </div>
  <hr className="dataoffers_line" />
</div>

<div className="dataoffers_column">
  <hr className="dataoffers_line" />
  <div className="dataoffers_content">
    <h3 className="dataoffer_h3">Cloud Native Development</h3>
    <div className="arrow">&#8594;</div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde optio autem non at repellat! Corrupti modi voluptatibus debitis ab repudiandae nesciunt aliquam iusto!.</p>
  </div>
  <hr className="dataoffers_line" />
</div>

<div className="dataoffers_column">
  <hr className="dataoffers_line" />
  <div className="dataoffers_content">
    <h3 className="dataoffer_h3">Managed hosting and Support Services</h3>
    <div className="arrow">&#8594;</div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde optio autem non at repellat! Corrupti modi voluptatibus debitis ab repudiandae nesciunt aliquam iusto!.</p>
  </div>
  <hr className="dataoffers_line" />
</div>
</div>


{/* Data Engineering where we can Help page  */}

<div className='dataeng_help_pg_container'>
  <h1 className='what_offer_h1' >Where We Can Help You</h1>
  <p className="what_offer_p">RgsTech can help you build a business intelligence system that delivers quick, easy-to-digest insights about your organization and customers. We enable our customers to accelerate the pace of innovation and reduce time to value realization.</p>


 

  <div className="data_eng_helpingpage_container">
<div className="row">
  <div className="left">
    <img className='datahelp_img' src={cloudimg2} alt="" />
  </div>
  <div className="right">
    <h2 className="dataoffer_helping_h3">Cloud Engineering and Migration</h2>
    <p className='data_eng_helpg_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quis sunt doloribus dolorum? Dolore temporibus voluptate eos itaque obcaecati ipsum, qui aut laudantium ea. Officia fugit laboriosam eaque eum. Non alias sit maxime hic!</p>
  </div>
</div>
<div className="row">
  <div className="left">
    <h2 className="dataoffer_helping_h3">Cloud Native Development</h2>
    <p className='data_eng_helpg_p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, fugit veritatis saepe consequatur architecto doloremque repellendus delectus ipsam repudiandae porro accusantium odit laboriosam nobis ducimus est amet cupiditate! Molestiae eaque iure nihil labore neque!</p>
  </div>
  <div className="right">
    <img  className='datahelp_img' src={cloudimg3} alt="" />
  </div>
</div>
<div className="row">
  <div className="left">
    <img className='datahelp_img' src={cloudimg4} alt="" />
  </div>
  <div className="right">
    <h2 className="dataoffer_helping_h3">Managed hosting and Support Services</h2>
    <p className='data_eng_helpg_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor expedita ducimus doloremque, necessitatibus odit at aliquam nobis sunt, quisquam, laudantium repellat corrupti excepturi fugiat commodi officiis quas nesciunt? Reiciendis deserunt incidunt labore veritatis.</p>
  </div>
</div>

</div>

<CloudWorkexp/>
<Contact/>
<Footer/>
</div>




</div>
  )
}

export default CloudEngineering

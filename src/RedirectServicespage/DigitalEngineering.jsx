import React from 'react';
import "./DigitalEngineering.css"
import Contact from '../components/Contactdata/Contact'
import Footer from '../pages/NewFooter/Footer';
import digitalimg from ".././asserts/digital engineering and transformation.jpg";
import digitalprod1 from ".././asserts/product.jpg";
import digitalprod2 from ".././asserts/product2.jpg";
import digitalprod3 from ".././asserts/product3.jpg";
import DigitalWorkexp from './DigitalWorkexp';

const DigitalEngineering = () => {
  return (
    <div className="DataEng-banner">
    <img  src={digitalimg} alt="" />
<div className="dataeng-overlay"></div>

<div className="dataeng-content">
  <h1 className="dataeng-title">Digital Engineering & Transformation</h1>
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
    <h3 className="dataoffer_h3">Customer Experience Management</h3>
    <div className="arrow">&#8594;</div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde optio autem non at repellat! Corrupti modi voluptatibus debitis ab repudiandae nesciunt aliquam iusto!</p>
  </div>
  <hr className="dataoffers_line" />
</div>

<div className="dataoffers_column">
  <hr className="dataoffers_line" />
  <div className="dataoffers_content">
    <h3 className="dataoffer_h3">Product Design and Engineering</h3>
    <div className="arrow">&#8594;</div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde optio autem non at repellat! Corrupti modi voluptatibus debitis ab repudiandae nesciunt aliquam iusto!.</p>
  </div>
  <hr className="dataoffers_line" />
</div>

<div className="dataoffers_column">
  <hr className="dataoffers_line" />
  <div className="dataoffers_content">
    <h3 className="dataoffer_h3">App Develpment and Support</h3>
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
    <img className='datahelp_img' src={digitalprod1} alt="" />
  </div>
  <div className="right">
    <h2 className="dataoffer_helping_h3">Customer Experience Management</h2>
    <p className='data_eng_helpg_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quis sunt doloribus dolorum? Dolore temporibus voluptate eos itaque obcaecati ipsum, qui aut laudantium ea. Officia fugit laboriosam eaque eum. Non alias sit maxime hic!</p>
  </div>
</div>
<div className="row">
  <div className="left">
    <h2 className="dataoffer_helping_h3">Product Design and Engineering</h2>
    <p className='data_eng_helpg_p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, fugit veritatis saepe consequatur architecto doloremque repellendus delectus ipsam repudiandae porro accusantium odit laboriosam nobis ducimus est amet cupiditate! Molestiae eaque iure nihil labore neque!</p>
  </div>
  <div className="right">
    <img  className='datahelp_img' src={digitalprod2} alt="" />
  </div>
</div>
<div className="row">
  <div className="left">
    <img className='datahelp_img' src={digitalprod3} alt="" />
  </div>
  <div className="right">
    <h2 className="dataoffer_helping_h3">App Develpment and Support</h2>
    <p className='data_eng_helpg_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor expedita ducimus doloremque, necessitatibus odit at aliquam nobis sunt, quisquam, laudantium repellat corrupti excepturi fugiat commodi officiis quas nesciunt? Reiciendis deserunt incidunt labore veritatis.</p>
  </div>
</div>

</div>

<DigitalWorkexp/>
<Contact/>
<Footer/>
</div>




</div>
  )
}

export default DigitalEngineering;

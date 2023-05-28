import React from 'react';
import banking1 from '../../asserts/banksind.jpg';
import "./banking.css";
import Contact from '../../components/Contactdata/Contact';
import Footer from '../NewFooter/Footer';
import ourapproach_image  from "../../asserts/ourfocus.jpg";

import BankOfferService from './BankOfferService';

const BankingIndustry = () => {
  return (
    <div className="banking-banner">
      <div className='bank_img_first'>
    <img className='bank_data' src={banking1} alt="" />
    </div>
<div className="banking-overlay"></div>

<div className="banking-content">
  <h1 className="dataeng-title">Banking Insurance and Financial Services</h1>
  {/* <p className="dataeng-description"> */}

  <button className="dataeng-button">Get in Touch</button>



  

 

</div>

<div className='whatoffer_data_eng'>
      <h1 className='what_offer_h1'>What We Offer</h1>
      <p className='what_offer_p'>Our BFSI solutions are designed to help your business meet the challenges of the rapidly
changing financial landscape. We offer a range of services, including digital transformation,
customer experience design, risk management, and regulatory compliance.</p>
      </div>


<BankOfferService/>







{/* What we offer in banking listing */}

      <div className='bank_offer_body'>
      <h1 className='banking_what_offer_h1' >Where We Can Help You</h1>

      




<div className="bank_offer_container">
      <div className="bank_column">
        <h2>Banking</h2>
        <ol>
          <li > Customer Relationship Management</li>
          <li>Risk Management and Compliance



</li>
          <li>Core Banking Systems</li>
          <li>Wealth Management</li>
          <li>Business Banking</li>
        </ol>
      </div>
      <div className="bank_column">
        <h2>Insurance</h2>
        <ol>
          <li>Policy Administration</li>
          <li>Customer Relationship Management</li>
          <li>Fraud Detection and Prevention</li>
          <li>Underwriting and Risk Management</li>
          <li>Digital Transformation</li>
        </ol>
      </div>
      <div className="bank_column">
        <h2>Finance</h2>
        <ol>
          <li>Trading and Risk Management</li>
         
          <li>Wealth Management</li>
          <li>Accounting and Financial Management</li>
          <li>Payments and Settlements</li>
          <li>Risk Management and Compliance</li>
        </ol>
      </div>
    </div>

{/* Our Approach */}

   
   
 
<div className="aboutUs_story-banner_ourapproach">
    <img className='image_aboutus_ourapproach'  src={ourapproach_image} alt="" />
<div className="aboutUs_story-overlay_ourapproach_bankind"></div>

<div className="aboutUs_story-content_ourapproach">
  <h1 className="aboutUs_story-title_ourapproach">Our Approach
</h1><br/>
  
  <div className='aboutus_desc_body'>
  <p className='aboutUs_story-description_ourapproach'>At Rhombus Global Services, we prioritize clients, deliver tailored solutions. Data-driven insights inform decisions, uncover opportunities. We guide digital transformation, fuel innovation, optimize processes. Automation and optimization streamline workflows, drive growth..
</p>
</div>


 
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


   
<div className="bank_detail_all_contct">
    <Contact/>
<Footer/>
</div>
</div>

</div>


  )
}

export default BankingIndustry;
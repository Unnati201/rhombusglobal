import React from 'react';
import healthimg from "../../asserts/healthcare.jpg";
import "./HealthcareInd.css"
import Contact from '../../components/Contactdata/Contact';
import Footer from '../NewFooter/Footer';
import Healthcare from './Healthcare&science';
import ourapproach_image  from "../../asserts/ourfocus.jpg";

const HealthcareInd = () => {
  return (
    <div className="healthcare-banner">
    <div className="healthcare_img_first">
  <img className="healthcare_data" src={healthimg} alt="" />
  </div>
<div className="healthcare-overlay"></div>

<div className="healthcare-content">
<h1 className="healthcare-title">Healthcare ,Pharma and Lifescience</h1>
{/* <p className="dataeng-description"> */}

<button className="dataeng-button">Get in Touch</button>







</div>

<div className='whatoffer_data_eng'>
    <h1 className='what_offer_h1'>What We Offer</h1>
    <p className='what_offer_p'>Our BFSI solutions are designed to help your business meet the challenges of the rapidly
changing financial landscape. We offer a range of services, including digital transformation,
customer experience design, risk management, and regulatory compliance.</p>
    </div>


<Healthcare  />







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
<div className="aboutUs_story-overlay_ourapproach_healthcare"></div>

<div className="aboutUs_story-content_ourapproach">
<h1 className="aboutUs_story-title_ourapproach">Our Approach
</h1><br/>

<div className='aboutus_desc_body'>
<p className='aboutUs_story-description_ourapproach'>At Rhombus Global Services, we prioritize clients, deliver tailored solutions. Data-driven insights inform decisions, uncover opportunities. We guide digital transformation, fuel innovation, optimize processes. Automation and optimization streamline workflows, drive growth..
</p>
</div>



</div>










<div className="ourapp_card-row">
        <div className="ourapp_card">
          <p className='ourapprch_p'>Agile and Iterative Approach</p>
          </div>
        <div className="ourapp_card">
        <p className='ourapprch_p'>Quality that Delights</p>
        </div>

        <div className="ourapp_card">
        <p className='ourapprch_p'>Inclusion,Diversity and Respect</p>
        
        </div>
      </div>


      <div className="ourapp_card-row">
        <div className="ourapp_card">
        <p className='ourapprch_p'>Customer Centricity and Empathy</p>
        
        </div>

        <div className="ourapp_card">
        <p className='ourapprch_p'>Sustained Innovation and Value</p>

        </div>

        <div className="ourapp_card">
        <p className='ourapprch_p'>Ownership,Agility and Flexibility</p>

        </div>
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

export default HealthcareInd;
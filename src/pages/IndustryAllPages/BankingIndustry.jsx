import React from 'react';
import banking1 from '../../asserts/banksind.jpg';
import "./banking.css";
import Contact from '../../components/Contactdata/Contact';
import Footer from '../NewFooter/Footer';

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
    <Contact/>
<Footer/>
</div>

</div>


  )
}

export default BankingIndustry;
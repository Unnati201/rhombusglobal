import React, { useState } from 'react';
import './Contact.css';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [termsChecked, setTermsChecked] = useState(false);
  const [subscribeChecked, setSubscribeChecked] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const handleTermsCheckboxChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleSubscribeCheckboxChange = () => {
    setSubscribeChecked(!subscribeChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className='contact_body'>
      <div className='contct_container'>
        <h2 className='cont_h2'>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className='contct_wrapper'>
            <div className='contct_box'>
              <input type='text' name='fname' id='fname' required />
              <label htmlFor='fname'>First Name*</label>
            </div>
            <div className='contct_box'>
              <input type='text' name='lname' id='lname' required />
              <label htmlFor='lname'>Last Name*</label>
            </div>
          </div>

          <div className='contct_wrapper'>
            <div className='contct_box'>
              <input type='email' name='email' id='email' required />
              <label htmlFor='email'>Work Email*</label>
            </div>
            <div className='contct_box'>
              <input type='number' name='mob' id='mob' required />
              <label htmlFor='mob'>Phone number*</label>
            </div>
          </div>

          <div className='contct_wrapper'>
            <div className='contct_box'>
              <input type='text' name='companyName' id='companyName' required />
              <label htmlFor='companyName'>Company Name*</label>
            </div>
            <div className='contct_box'>
              <input type='text' name='companyUrl' id='companyUrl' required />
              <label htmlFor='companyUrl'>Company URL*</label>
            </div>
          </div>

          
          <div className='contct_wrapper'>
            <div className='contct_box'>
              <textarea id='msg' required />
              <label className='label-text-msg' htmlFor='msg'>How can we help you?</label>
            </div>
          </div>


          <div className='contct_wrapper'>
  <div className='contct_box checkbox'>
    <input
      type='checkbox'
      id='termsAndConditions'
      checked={termsChecked}
      onChange={handleTermsCheckboxChange}
    />
    <label className='check_label' htmlFor='termsAndConditions'>I agree to the privacy policy <span className='terms_and_conditions'>Terms and Conditions</span></label>
  </div>
</div>

<div className='contct_wrapper'>
  <div className='contct_box checkbox'>
    <input
      type='checkbox'
      id='subscribe'
      checked={subscribeChecked}
      onChange={handleSubscribeCheckboxChange}
    />
    <label  className='check_label'  htmlFor='subscribe'><span className='subscribe_text'>Subscribe me to RGS latest thought leadership, blogs and updates.</span></label>
  </div>
</div>


           <div className='contct_wrapper'>
            <div className='contct_box'>
              <ReCAPTCHA
                sitekey="6LeXjUkmAAAAAKIKoNhFhtb7kjCKFiqWkXuew3Fz"
                // server site key
                // 6LeXjUkmAAAAABEXrc7-LeS4gUwsFffFt3alwfSu
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>
          </div> 

          <div className='contact-submit-btn'>
            <button
              className='cont_submit'
              type='submit'
              disabled={!termsChecked}
>
Submit
</button>


        <button className='contact-submit-btn contact_submit1'>Book a Call</button>
      </div>
    </form>
  </div>
</div>
);
};

export default Contact;

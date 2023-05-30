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
              <input type='text' name='mob' id='mob' required />
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


<div className='check-desg'>
          <input className='box_size_contct'  type="checkbox" id="term&cond" name="term" value="terms"/>
  <label for="terms&cond"> I agree to the privacy policy</label><br/>
  <input className='box_size_contct' type="checkbox" id="subscribe" name="subscribe" value="subs"/>
  <label for="subscribe"> Subscribe me to Persistence's latest thought leadership, blogs and updates</label>
  </div>

           <div className='contct_wrapper'>
            <div className='contct_box'>
              <ReCAPTCHA className='recaptcha_sty'
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

     &nbsp; OR
        <button className='contact-submit-btn contact_submit1'>Book a Call</button>
      </div>
    </form>
  </div>
</div>
);
};

export default Contact;

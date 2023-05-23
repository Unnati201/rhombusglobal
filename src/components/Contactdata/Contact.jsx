import React, { useState } from 'react';
import './Contact.css'
import ReCAPTCHA from "react-google-recaptcha"; 

const Contact = () => {
  const [termsChecked, setTermsChecked] = useState(false);
const [subscribeChecked, setSubscribeChecked] = useState(false);
const [captchaToken, setCaptchaToken] = useState("");


  return (
    <div className='contact_body'>
        <div className='contct_container'>
        <h2 className='cont_h2'>Contact Us</h2>
        <form>
          <div className='contct_wrapper'>
               <div className='contct_box'>
                <input type = "text" name ="fname" id="fname" required/>
                <label for="fname">First Name*</label>
               </div>


               <div className='contct_box'>
                <input type = "text" name ="lname" id="lname" required/>
                <label for="lname">Last Name*</label>
               </div>
          </div>


          <div className='contct_wrapper'>
               <div className='contct_box'>
                <input type = "email" name ="email" id="email" required/>
                <label for="email">Work Email*</label>
               </div>

               <div className='contct_box'>
                <input type = "number" name ="mob" id="mob" required/>
                <label for="mob">Phone number*</label>
               </div>
               </div>

               <div className='contct_wrapper'>
               <div className='contct_box'>
                <input type = "text" name ="mob" id="mob" required/>
                <label for="mob">Company Name*</label>
               </div>


               <div className='contct_box'>
                <input type = "number" name ="mob" id="mob" required/>
                <label for="mob">Company Url*</label>
               </div>



          </div>


          <div className='contct_wrapper'>
               <div className='contct_box'>
               <textarea id="msg" required/>
                <label className='label-text-msg' for="msg">How can we help you?</label>
               </div>

</div>
{/* <div className='contact-submit-btn'> 
<button className='cont_submit'  type='submit'>Submit</button>
</div>  */}

        </form>

        



{/*<div className='contct_wrapper'>
  <div className='contct_box'>
    <ReCAPTCHA
      sitekey="YOUR_RECAPTCHA_SITE_KEY"
      onChange={(token) => setCaptchaToken(token)}
    />
  </div>
</div>*/}

<div className='contact-submit-btn'>
  <button
    className='cont_submit'
    type='submit'
   /* disabled={!termsChecked || !captchaToken}*/
  >
    Submit
  </button>

  <button className="contact-submit-btn contact_submit1">Book a Call</button>

        </div>
    </div>
</div>

  )
}

export default Contact;
import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact_body'>
        <div className='contct_container'>
        <h2 className='cont_h2'>Contact us</h2>
        <form>
          <div className='contct_wrapper'>
               <div className='contct_box'>
                <input type = "text" name ="fname" id="fname" required/>
                <label for="fname">First Name</label>
               </div>


               <div className='contct_box'>
                <input type = "text" name ="lname" id="lname" required/>
                <label for="lname">Last Name</label>
               </div>
          </div>


          <div className='contct_wrapper'>
               <div className='contct_box'>
                <input type = "email" name ="email" id="email" required/>
                <label for="email">Work Email</label>
               </div>

               <div className='contct_box'>
                <input type = "text" name ="mob" id="mob" required/>
                <label for="mob">Phone number(optional)</label>
               </div>
          </div>


          <div className='contct_wrapper'>
               <div className='contct_box'>
               <textarea id="msg" required/>
                <label for="msg">How can we help you?</label>
               </div>

</div>

<input type="submit" name="" value="Submit"/>
        </form>
        </div>
    </div>
  )
}

export default Contact
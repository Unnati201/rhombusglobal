import React from 'react';
import "./OurTeam.css";
 import ourteam_image  from "../../asserts/ourfocus.jpg";
 import img_ourteam1  from "../../asserts/team3.jpg";

 import img_ourteam2  from "../../asserts/team2.jpg";
 import img_ourteam3  from "../../asserts/team1.jpg";

const OurTeam = () => {
  return (
    <div className="aboutUs_story-banner_ourteam">
    <img className='image_aboutus_ourteam'  src={ourteam_image} alt="" />
<div className="aboutUs_story-overlay_ourteam"></div>

<div className="aboutUs_story-content_ourteam">
  <h1 className="aboutUs_story-title_ourteam">Our Team
</h1><br/>
  
  <div className='aboutus_desc_body'>
  <p className='aboutUs_story-description_ourteam'>To be unique in every part of the business we operate and provide exceptional value.
We specialize in helping organize eliminate blind spots by uncovering data and business insights, accelerating digital transformation, leveraging automation for optimization and ROI and taking a quantum leap in growth.
</p>
</div>


 
</div>


{/* Photo Card */}

<div className='photo_ourteam_container'>
    <div className='ourteam_row'>
    <div className='ourteam_col'>
        <img className='ourteam_imgs' src={img_ourteam1} alt=""></img>
        <div className='ourteam_info'>
          <h2 className='ourteam_h2'>Vinod Rao</h2>
          <p className='ourteam_p'>Founder/CEO</p>
        </div>
    </div>
    <div className='ourteam_col'>
    <img className='ourteam_imgs' src={img_ourteam2} alt=""></img>
    <div className='ourteam_info'>
          <h2 className='ourteam_h2'>Roshani Andotra</h2>
          <p className='ourteam_p'>HR/Admin</p>
        </div>
    </div>
    
    <div className='ourteam_col'>
    <img className='ourteam_imgs' src={img_ourteam3} alt=""></img>
    <div className='ourteam_info'>
          <h2 className='ourteam_h2'>Manish</h2>
          <p className='ourteam_p'>Project Manager</p>
        </div>
    </div>
    </div>
</div>
    </div>


  
  )
}

export default OurTeam

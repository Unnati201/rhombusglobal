import React from 'react';
import './Ourpartner.css';
import img1 from '../image/precisely.png';
import img2 from '../image/equinix.png';
import img3 from '../image/apache_spark.svg';
import img4 from '../image/org_group.jpg';
import img5 from '../image/microsoft_azure.svg';
//  import img6 from '../image/hadoop.png';
import img7 from '../image/tableau-logo.svg';
// import img8 from '../image/django.webp';
import Marquee from 'react-fast-marquee';
import img9 from '../image/aws.png';

const NewPartner = () => {
  return (
    <div className='our-partner-datas'>
      <h2 className='our-part-h2'>Our Partner Ecosystem and Technology</h2>
      <Marquee direction='right' speed={50} delay={5}>
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img1} alt='' />
        </div>
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img2} alt='' />
        </div>
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img3} alt='' />
        </div>
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img4} alt='' />
        </div>
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img5} alt='' />
        </div>
        {/* <div className='our_part_image_wrap'> 
          <img className='our-img-sty' src={img6} alt='' />
        </div> */}
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img7} alt='' />
        </div>
        {/* <div className='our_part_image_wrap'> 
          <img className='our-img-sty' src={img8} alt='' />
        </div>*/}
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img9} alt='' />
        </div>
      </Marquee>
    </div>
  );
};

export default NewPartner;

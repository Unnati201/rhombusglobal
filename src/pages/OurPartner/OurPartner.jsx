import React from 'react';
import './Ourpartner.css';
import img1 from '../image/prec.jpeg';
import img2 from '../image/equinix-logo.png';
import img3 from '../image/apache.png';
import img4 from '../image/ors.png';
import img5 from '../image/Microsof.png';

import img6 from '../image/hadoop.png';
import img7 from '../image/tableu.png';
import img8 from '../image/django.webp';

import Marquee from 'react-fast-marquee';
import img9 from '../image/awss.png';

const NewPartner = () => {
  return (
    <div className='our-partner-datas'>
      <h2 className='our-part-h2'>Our Partner Ecosystem and Technology</h2>
      <Marquee direction='right' speed={60} delay={5}>
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img1} alt='' />
        </div>
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img2} alt='' />
        </div>
        <div className='our_part_image_wrap'>
          <img src={img3} alt='' />
        </div>
        <div className='our_part_image_wrap'>
          <img src={img4} alt='' />
        </div>
        <div>
          <img className='our-img-sty' src={img5} alt='' />
        </div>
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img6} alt='' />
        </div>
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img7} alt='' />
        </div>
        <div className='our_part_image_wrap'>
          <img className='our-img-sty' src={img8} alt='' />
          <div className='our_part_image_wrap'>
            <img className='our-img-sty' src={img9} alt='' />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default NewPartner;

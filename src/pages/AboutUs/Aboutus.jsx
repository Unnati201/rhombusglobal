import React from 'react';
import "./about.css"

// import motion
import { motion } from 'framer-motion';

const Aboutus = () => {
  
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      className='section'
    >
      <div className='about-data-container mx-4 sm:mx-auto'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-22 mx-30'
        >
          <div className='flex-1 max-h-55 lg:max-h-max order-4 lg:order-none overflow-hidden absolute right-0 mt-20 mr-20' // Added mr-4 class for right margin
          >
            <div className="relative h-auto bg-[#030f27]"
            >
              <img
                src="asserts/aboutus.png"
                alt=""
                className="aboutus_imgs"
              />
              <div className="absolute top-0 left-0 w-1/2 h-full"></div>
            </div>
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1_aboutsdt'>About Us</h1>
           <br/><br/><br/><br/>

            <h1 className='text-3xl font-bold mb-6 mx-w-xs'>Our Focus</h1>
            <p className='mb-12 max-w-2xl ml-24'>
              At Rhombus global services, delivered data, digital, and cloud 
               Technology <br/> and transformation. and services from strategy to implementation
              <br />
              <br />
              We enable innovative solutions across a variety of industry segments <br/>
              and cater to organizations  of various sizes.
              We believe in long-term <br/> partnerships and our services 
              are designed for the value and specific needs of <br/> our clients
            </p>
            <button className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-8 ml-20 rounded-3xl">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Aboutus;


import React from 'react';

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
      <div
        
        className='container mx-auto h-full relative bg-[#fff]'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-22 mx-20 '>
         
          <div className=' flex-1 max-h-55 lg:max-h-max order-4 lg:order-none overflow-hidden absolute right-0 mt-20 '>
          
            <div className="relative h-auto bg-[#030f27] " >
      <img
        src="asserts/aboutus.jpg"
        alt=""
        className="w-full h-96"
      />
      <div className="absolute top-0 left-0 w-1/2 h-full" ></div>
    </div>

          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='text-2xl font-bold mx-auto '>About Us</h1>
            <p className='mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ipsa.</p><br/><br/><br/>

            <h1 className='text-2xl font-bold mb-6  mx-w-xs'>Comprehensive Data and  Digital Solution <br/>for Business</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
            <button class="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
  Learn About More 
</button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Aboutus;
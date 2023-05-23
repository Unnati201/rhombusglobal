import React, { useState, useEffect } from 'react';
import './SuccessStorys.css'; // this is a  CSS import file

const testimonialsData = [
  {
    name: "Big Data Platform for a Travel Company ",
    description: " Our scalable architecture enabled a significant increase in revenue and profitability. With a real-time unified view of the customer, we gained valuable insights and leveraged intelligent reporting and analytics for informed decision-making.",
    image: "asserts/big-data.png"
  },
  {
    name: "Digital Marketplace for a Services Company",
    description: "Our full automated wealth management process provided a seamless experience for both B2B and B2C markets. With our omni-channel solution across web and mobile, we achieved faster time to market and expanded our reach to customers, resulting in increased efficiency and satisfaction.",
    image: "asserts/finance.jpg"
  },
  {
    name: "Cloud Platform for a MultiBrand Car Rental License Association",
    description: "Integer consectetur lectus at eleifend finibus In nec odio sem. Fusce in nunc at est ullamcorper euismod. Our cloud platform enabled the MultiBrand Car Rental License Association to seamlessly coordinate reservations",
    image: "asserts/cloud_plat.jpeg"
  },
/*  {
    name: "Car Manufacuring",
    description: "Integer consectetur lectus at eleifend finibus In nec odio sem. Fusce in nunc at est ullamcorper euismod.",
    image: "asserts/car.png"
  } */
];

const SuccessStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="testimonials-container"><br/>
      <h2 className='success_h1'>Success Stories</h2><br/>
      <p>Hear from our satisfied client and discover how we help them achieve success</p><br/>
      
      <div className="testimonials-carousel">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            style={{ width: '1220px', height: '400px' }}
          >
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.description}</p>
           
            <button>See Success Story</button>
           
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;

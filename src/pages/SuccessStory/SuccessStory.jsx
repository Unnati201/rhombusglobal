import React, { useState, useEffect } from 'react';
import './SuccessStorys.css'; // this is a  CSS import file

const testimonialsData = [
  {
    name: "TrailHive",
    description: "Integer consectetur lectus at eleifend finibus In nec odio sem. Fusce in nunc at est ullamcorper euismod.",
    image: "asserts/success.png"
  },
  {
    name: "Cloud Security",
    description: "Integer consectetur lectus at eleifend finibus In nec odio sem. Fusce in nunc at est ullamcorper euismod.",
    image: "asserts/cloud.png"
  },
  {
    name: "Cargo Logistics",
    description: "Integer consectetur lectus at eleifend finibus In nec odio sem. Fusce in nunc at est ullamcorper euismod.",
    image: "asserts/logisticsuccess.png"
  },
  {
    name: "Car Manufacuring",
    description: "Integer consectetur lectus at eleifend finibus In nec odio sem. Fusce in nunc at est ullamcorper euismod.",
    image: "asserts/car.png"
  }
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
      <h2>_______Success Story________</h2><br/>
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

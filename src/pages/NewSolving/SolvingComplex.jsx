import React from 'react';
import Solvingcontent from './Solvingcontent';
import "./SolvingComplex.css"

const services = [
  {
    title: 'Service 1',
    icon: 'icon1.png',
    color: 'white',
  },
  {
    title: 'Service 2',
    icon: 'icon2.png',
    color: 'white',
  },
  {
    title: 'Service 3',
    icon: 'icon3.png',
    color: 'white',
  },
  {
    title: 'Service 4',
    icon: 'icon4.png',
    color: 'white',
  },
];

const SolvingComplex = () => {
  return (
    <div className="services-page">
      <h1 className="services-heading">Our Services</h1>
      <p className="services-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="service-cards">
        {services.map((service, index) => (
          <Solvingcontent key={index} title={service.title} icon={service.icon} color={service.color} />
        ))}
      </div>
    </div>
  );
};

export default SolvingComplex;

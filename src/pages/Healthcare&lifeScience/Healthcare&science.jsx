import React from 'react';
import './hlifescience.css';
import { FaArrowRight } from 'react-icons/fa';




const Card = ({ title }) => {
  return (
    <div className="bankoffer_card">
      <h2>{title}</h2>
      <button className="bankoffer_arrow"> <FaArrowRight className="bankoffrs_arrow" /></button>
    </div>
  );
};

const Healthcare = () => {
  return (
    <div>
      <h1 className='bankoffer_serv'>Our Expertise</h1>
      <div className="bankoffer_card-container">
        <div className="bankoffer_top-row">
          <Card title="Digital Transformation" />
          <Card title="Legacy Modernization" />
          <Card title="Business Analytics" />
        </div>
        <div className="bankoffer_bottom-row">
          <Card title="AI and ML" />
          <Card title="Cloud Engineering" />
          <Card title="Data Analytics" />
        </div>
      </div>
    </div>
  );
};

export default Healthcare;

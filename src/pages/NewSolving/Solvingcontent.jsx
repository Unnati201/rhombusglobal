

import React from 'react';

const Solvingcontent = ({ title, icon, color }) => {
  return (
    <div className="service-card" style={{ backgroundColor: color }}>
      <img src={icon} alt={title} className="service-icon" />
      <h3 className="service-title">{title}</h3>
    </div>
  );
};

export default Solvingcontent;

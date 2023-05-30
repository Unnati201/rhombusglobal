import React from 'react';
import './Solvingsec.css';

const Solvinggradient = () => {
  return (
    <div className="solving-section">
      <h1>Solving Complex Challenges</h1>
      <p>In today’s hyper-connected world and uncertain times, organizations are challenged in more ways than ever.</p>
      <div className="solvgrd-card-container">
        <div className="solvgrd_card">
          <div className="card-icon">
            <img className='solvgrd_img' src="asserts/serv5.png" alt=""></img>
          </div>
          <h3 className='solvgrad_h3'>Eliminate Blind Spots</h3>
          <p className='solvgrad_p'>Discover new opportunities for your data, operations, and business </p>
        </div>
        <div className="solvgrd_card">
          <div className="card-icon">
            <img className='solvgrd_img' src="asserts/serv1.png" alt=""></img>
          </div>
          <h3 className='solvgrad_h3'>  Achieve Digital Transformation</h3>
          <p className='solvgrad_p'>Leverage automation data, digital and cloud to architect composable and flexible Information architecture</p>
        </div>
        <div className="solvgrd_card">
          <div className="card-icon">
            <img className='solvgrd_img' src="asserts/serv2.png" alt=""></img>
          </div>
          <h3 className='solvgrad_h3'>Accelerate Decisions</h3>
          <p className='solvgrad_p'>AI and ML to gain actionable business insights</p>
        </div>
        <div className="solvgrd_card">
          <div className="card-icon">
            <img className='solvgrd_imgs_cloud' src="asserts/serv3.png" alt=""></img>
          </div>
          <h3 className='solvgrad_h3'>Drive Growth and ROI</h3>
          <p className='solvgrad_p'>Automation, Optimization, Re-engineering to increase growth and reduce cost</p>
        </div>
      </div>
      <p className='solvgrad_p_last_drive'>We help CXO's and enterprises solve their most complex technology and business challenges. Our expertise is in our ability to help you sustain, grow and stay ahead of the curve </p>
    </div>
  );
}

export default Solvinggradient;

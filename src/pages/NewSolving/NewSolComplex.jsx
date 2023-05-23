import React, { useState } from 'react';
import "./SolvingComplex.css";


const NewSolComplex = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [clickPosition, setClickPosition] = useState(null);

  const handleCardClick = (index, position) => {
    setActiveCard(index);
    setClickPosition(position);
  };

  return (
    <div className='solvg_body'>
      <div className='solvg_container'>
        <h1 className='serv_tophead'>Solving Complex Challenges</h1>

        <p className='solv_p'>In today’s hyper-connected world and uncertain times, organizations are <span>challenged in more ways than ever.</span></p>

        <div className={`solvg_card ${activeCard === 0 ? 'active' : ''} ${clickPosition === 'top' ? 'top' : ''} ${clickPosition === 'left' ? 'left' : ''} ${clickPosition === 'right' ? 'right' : ''}`} onClick={() => handleCardClick(0, 'top')}>
          <div className={`solvg_imgBox ${activeCard === 0 ? 'active' : ''}`}>
            <img src="asserts/eliminate.png" alt="" />
            <h1 className='solvgice_h1'>Eliminate Blind Spots</h1>
          </div>
          <div className={`solvg_contentBox ${activeCard === 0 ? 'active' : ''}`}>
            <div className='solvgc_content'>
              <h3 className='solvgc_h3'>Eliminate Blind Spots</h3>
              <p className='solvgc_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed esse doloremque, facere dolorum porro quas quis voluptatibus quasi quos animi at a.</p>
            </div>
          </div>
        </div>

        <div className={`solvg_card ${activeCard === 1 ? 'active' : ''} ${clickPosition === 'top' ? 'top' : ''} ${clickPosition === 'left' ? 'left' : ''} ${clickPosition === 'right' ? 'right' : ''}`} onClick={() => handleCardClick(1, 'left')}>
          <div className={`solvg_imgBox ${activeCard === 1 ? 'active' : ''}`}>
            <img src="asserts/acceleratedecisions-blue.png" alt="" />
            <h1 className='solvgice_h1'>Achieve Digital Transformation</h1>
          </div>
          <div className={`solvg_contentBox ${activeCard === 1 ? 'active' : ''}`}>
            <div className='solvgc_content'>
              <h3 className='solvgc_h3'>Achieve Digital Transformation</h3>
              <p className='solvgc_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed esse doloremque, facere dolorum porro quas quis voluptatibus quasi quos animi at a.</p>
            </div>
          </div>
        </div>

        <div className={`solvg_card ${activeCard === 2 ? 'active' : ''} ${clickPosition === 'top' ? 'top' : ''} ${clickPosition === 'left' ? 'left' : ''} ${clickPosition === 'right' ? 'right' : ''}`} onClick={() => handleCardClick(2, 'right')}>
          <div className={`solvg_imgBox ${activeCard === 2 ? 'active' : ''}}> <img src="asserts/digitaltransformation.png" alt="" /> <h1 className='solvgice_h1'>Accelerate Decisions</h1> </div> <div className={solvg_contentBox ${activeCard === 2 ? 'active' : ''}`}>
<div className='solvgc_content'>
<h3 className='solvgc_h3'>Accelerate Decisions</h3>
<p className='solvgc_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed esse doloremque, facere dolorum porro quas quis voluptatibus quasi quos animi at a.</p>
</div>
</div>
</div>


    <div className={`solvg_card ${activeCard === 3 ? 'active' : ''} ${clickPosition === 'top' ? 'top' : ''} ${clickPosition === 'left' ? 'left' : ''} ${clickPosition === 'right' ? 'right' : ''}`} onClick={() => handleCardClick(3, 'top')}>
      <div className={`solvg_imgBox ${activeCard === 3 ? 'active' : ''}`}>
        <img src="asserts/drivegrowth-blue.png" alt="" />
        <h1 className='solvgice_h1'>Drive Growth and ROI</h1>
      </div>
      <div className={`solvg_contentBox ${activeCard === 3 ? 'active' : ''}`}>
        <div className='solvgc_content'>
          <h3 className='solvgc_h3'>Drive Growth and ROI</h3>
          <p className='solvgc_p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed esse doloremque, facere dolorum porro quas quis voluptatibus quasi quos animi at a.</p>
        </div>
      </div>
    </div>

    <p className='solv_p2'>We help CXO's and enterprises solve their most complex technology and business challenges. <span>Our expertise is in our ability to help you sustain, grow and stay ahead of the curve.</span></p>
  </div>
</div>
);
}

export default NewSolComplex;


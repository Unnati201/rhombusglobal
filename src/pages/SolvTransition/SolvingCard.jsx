import React from 'react';
import './newind.css';
import {BsArrowRightShort} from "react-icons/bs"

const IndustryCard = ({ image, title, description }) => {
  return (
    <div className="indu-card">
      <img className="indus-img" src={image} alt={title} />
      <div className="indu_intro">
        <h1 className='indu-h1'>{title}</h1>
        <p className='indu_p'>{description}</p>
        <div className="arrow-button">
          <button className="learn-more-btn">Learn More</button>
         
          <BsArrowRightShort className="ind_arrow"/>
        </div>
      </div>
    </div>
  );
};

const SolvingCard = () => {
  const industryData = [
    {
      id: 1,
      image: 'asserts/eliminate.png',
      title: 'Banking',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio iste esse nobis reprehenderit, unde voluptatum voluptas perspiciatis beatae animi delectus, tenetur omnis hic. Alias!',
      
    },

    {
        id: 2,
        image: 'asserts/acceleratedecisions-blue.png',
        title: 'Banking',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio iste esse nobis reprehenderit, unde voluptatum voluptas perspiciatis beatae animi delectus, tenetur omnis hic. Alias!',
        
      },


      {
        id: 3,
        image: 'asserts/digitaltransformation.png',
        title: 'Banking',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio iste esse nobis reprehenderit, unde voluptatum voluptas perspiciatis beatae animi delectus, tenetur omnis hic. Alias!',
      },


      {
        id: 4,
        image: 'drivegrowth-blue.png',
        title: 'Banking',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio iste esse nobis reprehenderit, unde voluptatum voluptas perspiciatis beatae animi delectus, tenetur omnis hic. Alias!',
      },

     
    
  ];

  return (
    <div className="indu_body">
      <div className="indu_container">
        {industryData.map((data) => (
          <IndustryCard
            key={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
          />
          
        ))}
      </div>
      
    </div>
  );
};

export default SolvingCard;

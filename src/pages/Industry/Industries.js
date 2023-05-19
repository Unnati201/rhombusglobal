import React, { useState } from "react";
import "./industries.css";

const Industries = () => {
  const [isCardClicked, setIsCardClicked] = useState(false);

  const handleCardClick = () => {
    setIsCardClicked(!isCardClicked);
  };

  const cardData = [
    {
      title: "Banking",
      description: "This is a sample description for Banking",
      image: "banking.jpg",
      gradient: "linear-gradient(135deg, #00223e 0%, #0084ff 100%)",
    },
    {
      title: "Insurance",
      description: "This is a sample description for Insurance",
      image: "insurance.jpg",
      gradient: "linear-gradient(135deg, #7400b8 0%, #ff007f 100%)",
    },
    {
      title: "Travel",
      description: "This is a sample description for Travel",
      image: "travel.jpg",
      gradient: "linear-gradient(135deg, #0575e6 0%, #00f260 100%)",
    },
    {
      title: "Transformation",
      description: "This is a sample description for Transformation",
      image: "transformation.jpg",
      gradient: "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)",
    },

    {
      title: "Life Science",
      description: "This is a sample description for Life Science",
      image: "life-science.jpg",
      gradient: "linear-gradient(135deg, #40e0d0 0%, #ff8c00 100%)",
    },
    {
      title: "Telecom",
      description: "This is a sample description for Telecom",
      image: "telecom.jpg",
      gradient: "linear-gradient(135deg, #485563 0%, #29323c 100%)",
    },
  ];

  return (
    <div className="industry-card-container">
      
      {cardData.map((card, index) => (
        <div
          className={
            isCardClicked
              ? `indu-card card-clicked card-${index + 1}`
              : `indu-card card-${index + 1}`
          }
          style={{ background: `${card.gradient}` }}
          key={index}
          onClick={handleCardClick}
        >
          <div className="indu-card-content">
            <h2>{card.title}</h2>
            <p
              className={
                isCardClicked ? "card-description-clicked" : "card-description"
              }
            >
              {card.description}
              <span className="learn-more">Learn More</span>
            </p>
          </div>
          <div className="indu-card-image">
            <img src={`./images/${card.image}`} alt={card.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Industries;


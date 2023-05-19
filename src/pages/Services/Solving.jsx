import React, { useState, useEffect } from 'react';
import './Solving.css';

const Solving = () => {
  const [cards, setCards] = useState([
    {
      title: 'Eliminate',
      description: 'Eliminate the competition with our top-notch products and services',
      gradientColors: ['#4824db', '#a151d2'],
      backgroundImage: 'https://picsum.photos/500/300',
      isHovered: false
    },
    {
      title: 'Achieve Digital',
      description: 'Achieve digital transformation and take your business to the next level',
      gradientColors: ['#f71abe', '#7c21fb'],
      backgroundImage: 'https://picsum.photos/500/301',
      isHovered: false
    },
    {
      title: 'Accelerate Decision',
      description: 'Accelerate decision-making with our advanced analytics and insights',
      gradientColors: ['#24c2db', '#485bfd'],
      backgroundImage: 'https://picsum.photos/500/302',
      isHovered: false
    },
    {
      title: 'Drive Growth',
      description: 'Drive growth and profitability with our innovative strategies and solutions',
      gradientColors: ['#3D5AFE', '#2979FF'],
      backgroundImage: 'https://picsum.photos/500/303',
      isHovered: false
    }
  ]);

  const handleCardHover = (index) => {
    const newCards = [...cards];
    newCards[index].isHovered = true;
    setCards(newCards);
  };

  const handleCardLeave = (index) => {
    const newCards = [...cards];
    newCards[index].isHovered = false;
    setCards(newCards);
  };

  useEffect(() => {
    setTimeout(() => {
      const newCards = [...cards];
      newCards.forEach(card => {
        card.isHovered = true;
      });
      setCards(newCards);
    }, 2000);
  }, []);

  return (
    <div className="cards-container">
     
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${card.isHovered ? 'card-hovered' : ''}`}
          style={{
            backgroundImage: `url(${card.backgroundImage})`,
            background: `linear-gradient(to bottom right, ${card.gradientColors[0]}, ${card.gradientColors[1]})`
          }}
          onMouseEnter={() => handleCardHover(index)}
          onMouseLeave={() => handleCardLeave(index)}
        >
          
          <h2>{card.title}</h2>
          <hr />
          <p>{card.description}</p>
        </div>
      ))}
      
    </div>
  );
};

export default Solving;

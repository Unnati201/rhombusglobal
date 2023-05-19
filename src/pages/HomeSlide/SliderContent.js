import React from "react";


function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
       
      {sliderImage.map((slide, index) => (
         <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
     <div className="slide-overlay">
            <img  className="slide-image" src={slide.urls} alt="" />
            </div> 
            
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
          <div className="slide-buttons">
            <button className="rounded-button learn-more">Learn More</button>
            <button className="rounded-button contact">Contact</button>

         
          
        </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
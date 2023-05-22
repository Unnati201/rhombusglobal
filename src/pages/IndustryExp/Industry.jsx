import React from 'react';
import "./Industry.css";

const Industry = () => {
  return (
    <div className='industry-content'>
      <h2 className='industry-h2-design'>
Key Industries and Verticals</h2>
      <div className='industry-wrapp'>
     <div className="industry-first-1">
      <h3  className='industry-font1'>Banking <br/> and Financial Services</h3>
      <img className="indust-img" src="rgs-img/Banking.png" alt=""></img>
     </div>
     <div className="industry-first-2">
     <h3  className='industry-font1'>Insurance</h3>
     </div>
     <div className="industry-first-3">
     <h3  className='industry-font1'>Travel, <br/> Transportation  and Hospitality
</h3>
     </div>
     <div className="industry-first-4">
     <h3  className='industry-font1'>Healthcare, <br/> Pharma <br/> and Lifesciences
</h3>
<img className="indust-img" src="rgs-img/lifescience.png" alt=""></img>
     </div>
     <div className="industry-first-5">
     <h3  className='industry-font1'>Retail, Consumer <br/> Products <br/>and Goods
</h3>

     </div>
     <div className="industry-first-6">
     <h3  className='industry-font1'>
Telecom <br/> and Manufacturing
</h3>
     </div>
     </div>
    </div>
  )
}

export default Industry;

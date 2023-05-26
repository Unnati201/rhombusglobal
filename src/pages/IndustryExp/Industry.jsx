import React from 'react';
import "./Industry.css";

const Industry = () => {
  return (
    <div className='industry-content'>
      <h2 className='industry-h2-design'>
Key Industries and Verticals</h2>
      <div className='industry-wrapp'>
     <div className="industry-first-1">
      <h3  className='industry-font1'>Banking Insurance<br/>and Financial Services </h3>
      <img className="indust-img" src="asserts/indus_bank.png" alt=""></img>
     </div>
     <div className="industry-first-2">
     <h3  className='industry-font1'>Travel,Transportation <br/> and Hospitility</h3>
     <img className="indust-img-travl" src="asserts/insurance.png" alt=""></img>
     </div>
     <div className="industry-first-3">
     <h3  className='industry-font1'>Industrial Goods  <br/> and Manufacturing
</h3>
<img className="indust-img_manuf" src="asserts/industrial.png" alt=""></img>
     </div>
     <div className="industry-first-4">
     <h3  className='industry-font1'>Healthcare,Pharma <br/>and Lifesciences
</h3>
<img className="indust-imgs-sc" src="asserts/indus1.png" alt=""></img>
     </div>
     <div className="industry-first-5">
     <h3  className='industry-font1'>Retail, Consumer <br/>and Goods
</h3>
<img className="indust-imgs-rc" src="asserts/retail.png" alt=""></img>
     </div>
     <div className="industry-first-6">
     <h3  className='industry-font1'>
Telecom <br/> and Media
</h3>
<img className="indust-imgs-telecm" src="asserts/indu6.png" alt=""></img>
     </div>
     </div>
    </div>
  )
}

export default Industry;

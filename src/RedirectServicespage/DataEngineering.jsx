import React from 'react';
import './DataEngineering.css';
import imageSrc from ".././asserts/data-analytics-desktop.jpg";
import dataeng1 from ".././asserts/Data-analytics-block1.jpg";
import dataeng2 from ".././asserts/Data-analytics-block2.1.jpg"
import dataeng3 from ".././asserts/Data-analytics-block3.jpg"
import dataeng4 from ".././asserts/Data-analytics-block4.jpg"
import Workplan from './Workplan_dataeng';
import Contact from '../components/Contactdata/Contact';
import Footer from '../pages/NewFooter/Footer';

const DataEngineering = () => {
  return (
    <div className="DataEng-banner">
          <img  src={imageSrc} alt="" />
      <div className="dataeng-overlay"></div>
      
      <div className="dataeng-content">
        <h1 className="dataeng-title">Data Engineering & Solutions</h1>
        <p className="dataeng-description">
        Harness the power of data to drive innovation and accelerate your business outcomes
        </p>
       


        

       

      </div>
       {/* What we are offering page */}
       <div className='whatoffer_data_eng'>
      <h1 className='what_offer_h1'>What We Offer</h1>
      <p className='what_offer_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consequatur odit velit neque. Veniam enim hic eos commodi, quibusdam soluta aut, esse ipsam doloribus consectetur earum amet laudantium expedita doloremque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nobis nostrum dolorum repellendus. Aliquid assumenda sit quo vitae alias exercitationem.</p>
      </div>




    {/* three offering content */}

    <div className="threeoffer_container">
      <div className="dataoffers_column">
        <hr className="dataoffers_line" />
       
        <div className="dataoffers_content">
          <h3 className="dataoffer_h3">Data Integrity</h3>
          <div className="arrow">&#8594;</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde optio autem non at repellat! Corrupti modi voluptatibus debitis ab repudiandae nesciunt aliquam iusto!</p>
        </div>
        <hr className="dataoffers_line" />
      </div>

      <div className="dataoffers_column">
        <hr className="dataoffers_line" />
        <div className="dataoffers_content">
          <h3 className="dataoffer_h3">Master Data Management</h3>
          <div className="arrow">&#8594;</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde optio autem non at repellat! Corrupti modi voluptatibus debitis ab repudiandae nesciunt aliquam iusto!.</p>
        </div>
        <hr className="dataoffers_line" />
      </div>

      <div className="dataoffers_column">
        <hr className="dataoffers_line" />
        <div className="dataoffers_content">
          <h3 className="dataoffer_h3">Analytics and AI</h3>
          <div className="arrow">&#8594;</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde optio autem non at repellat! Corrupti modi voluptatibus debitis ab repudiandae nesciunt aliquam iusto!.</p>
        </div>
        <hr className="dataoffers_line" />
      </div>
    </div>


    {/* Data Engineering where we can Help page  */}

     <div className='dataeng_help_pg_container'>
        <h1 className='what_offer_h1' >Where We Can Help You</h1>
        <p className="what_offer_p">RgsTech can help you build a business intelligence system that delivers quick, easy-to-digest insights about your organization and customers. We enable our customers to accelerate the pace of innovation and reduce time to value realization.</p>


       

        <div className="data_eng_helpingpage_container">
      <div className="row">
        <div className="left">
          <img className='datahelp_img' src={dataeng1} alt="" />
        </div>
        <div className="right">
          <h2 className="dataoffer_helping_h3">Data Integrity</h2>
          <p className='data_eng_helpg_p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quis sunt doloribus dolorum? Dolore temporibus voluptate eos itaque obcaecati ipsum, qui aut laudantium ea. Officia fugit laboriosam eaque eum. Non alias sit maxime hic!</p>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <h2 className="dataoffer_helping_h3">Master Data Management</h2>
          <p className='data_eng_helpg_p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, fugit veritatis saepe consequatur architecto doloremque repellendus delectus ipsam repudiandae porro accusantium odit laboriosam nobis ducimus est amet cupiditate! Molestiae eaque iure nihil labore neque!</p>
        </div>
        <div className="right">
          <img  className='datahelp_img' src={dataeng2} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="left">
          <img className='datahelp_img' src={dataeng3} alt="" />
        </div>
        <div className="right">
          <h2 className="dataoffer_helping_h3">Analytics and AI</h2>
          <p className='data_eng_helpg_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor expedita ducimus doloremque, necessitatibus odit at aliquam nobis sunt, quisquam, laudantium repellat corrupti excepturi fugiat commodi officiis quas nesciunt? Reiciendis deserunt incidunt labore veritatis.</p>
        </div>
      </div>
     
    </div>
      
      <Workplan/>
      <Contact/>
      <Footer/>
     </div>




    </div>

  );
};

export default DataEngineering;

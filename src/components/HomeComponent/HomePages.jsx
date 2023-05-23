import React from 'react'
import HomeSlides from '../../pages/HomeSlide/HomeSlides'
import Industries from '../../pages/Industry/Industries'
import Solving from '../../pages/Services/Solving'
import Ourpartner from '../../pages/OurPartner/OurPartner'
import Services from '../../pages/Services/Services'
import Success from '../../pages/SuccessStory/Success'
import SolvingComplex from '../../pages/NewSolving/SolvingComplex';

import Newdata from '../../pages/NewServices/Newdata'
import ServicesCard from '../../pages/NewServices/ServicesCard'
import Industry from '../../pages/IndustryExp/Industry'
import SuccessStory from '../../pages/SuccessStory/SuccessStory'
import Aboutus from '../../pages/AboutUs/Aboutus'
import NewsBlog from '../News&BLog/NewsBlog'
import Contact from '../Contactdata/Contact'
import NewSolComplex from '../../pages/NewSolving/NewSolComplex'
import Footer from '../../pages/NewFooter/Footer'



const HomePages = () => {
  return (
    <div>
        <HomeSlides/>
       
      
      {/* <NewSolComplex/> */}
      {/* <SolvingComplex/>  */}
      <NewSolComplex/>
      <Newdata/>
        <ServicesCard/>
         {/* <Solving/>  */}
        <Ourpartner/>
        
        {/* <Services/> */}
        <Industry/>
       <SuccessStory/>
       <NewsBlog/>
        <Aboutus/>
        <Footer/>
        {/* <Contact/> */}
        
          {/* <Industries/> */}
          {/* <Success/>   */}
    </div>
  )
}

export default HomePages;
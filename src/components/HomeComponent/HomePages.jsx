import React from 'react'
import HomeSlides from '../../pages/HomeSlide/HomeSlides'
import Industries from '../../pages/Industry/Industries'
import Solving from '../../pages/Services/Solving'
import Ourpartner from '../../pages/OurPartner/OurPartner'
import Services from '../../pages/Services/Services'
import Success from '../../pages/SuccessStory/Success'
import SolvingComplex from '../../pages/NewSolving/SolvingComplex'


const HomePages = () => {
  return (
    <div>
        <HomeSlides/>
      <SolvingComplex/>
        {/* <Solving/> */}
        <Ourpartner/>
        <Services/>
          <Industries/>
          {/* <Success/>   */}
    </div>
  )
}

export default HomePages
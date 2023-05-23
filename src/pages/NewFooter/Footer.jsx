import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
   
    <footer className="bg-[#151010] text-white -mt-20">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#151010] py-7">
       <img className= "h-26 w-45 mx-auto " src="asserts/rgslogonew.png" alt="rgs-tech"></img>
     
      </div>


      <ItemsContainer />
      
      
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-base"
      >
        <span>© 2023 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
    
  );
};

export default Footer;
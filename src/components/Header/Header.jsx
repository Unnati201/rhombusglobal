import React from 'react';
 import img1 from './img/rgslogonew.png';
 import img2 from './img/rgslogonew.png';
 import img3 from './img/rhombuslogo.png';
 import "./Header.css"

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import menuData from "./menuData";


const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
  className={`header top-0 font-ubuntu left-0 z-40 flex w-full h-30 items-center ${
    sticky
      ? '!fixed !z-[9999] bg-black bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-primary dark:bg-opacity-20'
      : 'absolute'
  }`}
>


        <div className="container">
          <div className="relative -mx-7 flex items-center justify-between  font-ubuntu  ">
            <div className="w-60 max-w-full px-4  xl:mr-16">
              <Link
                to="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >


{/* <img  className="w-25 h-16 mx-10  -my-6  dark:hidden " 
                  src={img3}
                  alt="logo"
                  
                 
                /> */}
               
                   <img  className="w-30 h-18 mx-20 -my-5 dark:hidden "
                  src={img1}
                  alt="logo"
                  
                 
                />
            
                <img
                  src={img2}
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />  
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4  ">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12 my-3 ml-10">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            to={menuItem.path}
                            className={`flex py-2 text-base text-white group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 `}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center  justify-between py-2 text-base text-white group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 font-mulish"
                            >
                              {menuItem.title}
                              <span >
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  to={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5  text-sm text-dark hover:opacity-70 font-dark font-ubuntu dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  to="/search"
                  className=" py-3 px-7 mx-1.3 my-1 text-base font-bold text-white hover:opacity-70 dark:text-white md:block"
                >
                  <img className="h-7 w-7  " src="asserts/search.png" alt="" />
                </Link> 
                
                {/* <h className="h-12 w-0.6  bg-white text-white">|</h> */}
                
        
                 {/* <Link 
                  href="/contact"
                  className="ease-in-up hidden rounded-md bg-primary py-6 px-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-contact md:block md:px-6 lg:px-6 xl:px-7  bg-[#00ffff]"
                >  
                 
                  Contact Us
                </Link>*/}

<Link to="/contact" className="py-3 px-6 inline-block -mx-6 rounded-full text-base text-white transition duration-300 hover:bg-opacity-90 hover:shadow-contact  bg-[#007bff] my-1 w-70">
              Contact Us
            </Link>
                <div>
                  {/* <ThemeToggler /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

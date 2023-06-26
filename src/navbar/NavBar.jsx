import { Anchor, Center, Flex, Image, NavLink } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import { FaViber } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import React, { useState } from "react";
import NavBarMobile from "./NavBar.mobile";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const isMobile = useMediaQuery('(max-width: 807px)');

  const [isScrolled,setIsScrolled]= useState(false);

  const handleScroll =()=>{
     const scrollTop =window.pageYOffset;
     if(scrollTop>0 && !isScrolled){
      setIsScrolled(true);
     } else if(scrollTop===0 && isScrolled){
      setIsScrolled(false)
     }
  }
 
  window.addEventListener('scroll',handleScroll);
 
  return (
    
     <div>
       {
          isMobile ? 
          <div className={`${isScrolled ?'fixed top-0 w-full bg-Nav z-50':''}`}>
          <NavBarMobile />
          </div>
          :(
          <>
          
          <Flex align="center" justify="space-around" mt={4}  className={`${isScrolled ?'fixed -top-1 w-full bg-Nav z-50':''}`}>
          <div data-aos="fade-right" data-aos-duration="2000"   className=" w-48 lg:w-56">
       
            <Image src='https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/Full%20logo%20white.svg'/>
          </div>
          <div >
            <Flex justify="" align="center" gap="xl" className=" font-bold font-sfPro text-4xl">
           
              <NavLink component={Link} to='/' label="Home" />
              <NavLink component={Link} to="about" label="About" />
              <NavLink component={Link} to="gallery" label="Gallery" />
              <NavLink component={Link} to="contact" label="Contact Us" className=" whitespace-nowrap" /> 
         
            </Flex>
          </div>
          <div>
            <Flex gap="lg">
              
              <FaViber className=" cursor-pointer text-xl md:text-2xl text-indigo-600 hover:text-black transition-all ease-linear duration-150" />
              
              <AiFillWechat className=" cursor-pointer text-2xl md:text-3xl text-green-500 hover:text-black transition-all ease-linear duration-150" />
              <Anchor href="https://www.facebook.com/profile.php?id=100093808957113&mibextid=LQQJ4d">
              <BsFacebook className=" cursor-pointer text-xl md:text-2xl text-blue-900 hover:text-black transition-all ease-linear duration-150" />
              </Anchor>
            </Flex>
          </div>
        </Flex>
      
        </>
        )
       }
     </div>
  
  );
};

export default NavBar;

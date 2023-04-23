import { Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import AboutPage from "./About/About";


import { useNavigate } from "react-router";
import Demo from "./Gallery/GalleryPage";

const Homee = () => {
  const isMobileInHome = useMediaQuery('(max-width:807px)');
  const navigateContact = useNavigate();
  const handleGoContact =()=>{
     navigateContact("/contact")
  }
  return (
     <div>
      {
        isMobileInHome ? (<>
          <div className="flex flex-col md:flex-row items-center justify-center mt-8">
          <div className=" w-1/2 md:w-1/3 cursor-pointer">
               <img src="/assets/image/ss_let.jpg" alt="" className=" rounded-Lg" data-aos="fade-up" data-aos-duration="1000"/>
            </div>
            <div className="w-full md:w-1/2 px-4 mt-6">
              <span className=" text-2xl font-monument md:text-4xl text-primiray-text" data-aos="fade-right" data-aos-duration="2000">Choose</span>
              <p className=" text-2xl font-bold font-monument md:text-4xl text-primiray-text py-1 md:py-2">
                Super <span className=" text-secondary-text">Select</span>
              </p>
    
              <h1 className=" font-medium text-2xl font-s md:text-3xl py-3">
                Let's get together and create your glass decoration in your space
              </h1>
               <p className=" py-2 font-extralight md:text-xl text-sm">
                Contact us for a free consultation and estimates, and we stand
                behind our work with a comprehensive warranty.
                </p>
              <button className=" bg-primiray-text text-white text-center py-2 px-3 rounded-Lg md:py-3 md:px-4" data-aos="fade-right" data-aos-duration="1000" onClick={handleGoContact}>Contact Us</button>
            </div>
           
          </div>
        </>):(
          <>
          <div className="flex flex-col md:flex-row items-center justify-center mt-24">
            <div className="w-full md:w-1/2 px-4">
              <span className=" text-2xl font-monument md:text-4xl text-primiray-text" data-aos="fade-right" data-aos-duration="1000">Choose</span>
              <p className=" text-2xl font-bold font-monument md:text-4xl text-primiray-text py-1 md:py-2">
                Super <span className=" text-secondary-text" data-aos="fade-up" data-aos-duration="2000">Select</span>
              </p>
    
              <h1 className=" font-medium text-2xl font-s md:text-3xl py-3" data-aos="fade-right" data-aos-duration="2000">
                Let's get together and create your glass decoration in your space
              </h1>
               <p className=" py-2 font-extralight md:text-xl text-sm">
                Contact us for a free consultation and estimates, and we stand
                behind our work with a comprehensive warranty.
                </p>
              <button className=" bg-primiray-text text-white text-center py-2 px-3 rounded-Lg md:py-3 md:px-4" data-aos="fade-up" data-aos-duration="2000">Contact Us</button>
            </div>
            <div className=" w-1/2 md:w-1/3 cursor-pointer" data-aos="fade-up" data-aos-duration="2000">
               <img src="src/assets/image/ss_let.jpg" alt="" className=" rounded-Lg"/>
            </div>

          </div>
        </>
        )
      }
       <Demo/>
      <AboutPage/>
      {/* <Footer/> */}
     
     </div>
    
  );
};

export default Homee;

import React from "react";
import {BiPhone} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import { AspectRatio, Space } from "@mantine/core";
import Footer from "../navbar/Footer";
const ContactPage = () => {
  return (
    <>
     <div className="  flex flex-col md:flex-col lg:flex-row justify-center md:justify-around mt-11 md:mt-8">
       <div className=" flex flex-col justify-center items-center md:items-center lg:items-start">
        <h1 className=" font-monument text-primiray-text text-xl md:text-3xl">Get In Touch</h1>
        <Space h='lg'/>
        <div className=" md:text-left items-center text-center ">
          <p className="font-sfPro md:w-450">Let us bring a touch of elegance to your home or business with our precision and attention to detail. Contact us for a free consultation and estimates, and we stand behind our work with a comprehensive warranty.</p>
        </div>
        <Space h='xl'/>
        <div>
          <span className=" font-black md:font-bold">Office Hours :9AM-5PM</span> <br />
          <span className=" font-black md:font-bold">Working Days :Monday-Saturday</span>
        </div>
        <Space h='xl'/>
        <div className=" flex flex-col gap-2 md:gap-6">
          <div className=" flex items-center">
            <BiPhone className=" text-2xl md:text-3xl text-secondary-text"/>
            <div className="ml-3">
               <p className="text-xl md:text-2xl text-secondary-text font-medium">Phone</p>
              <p>+95 95016422</p>

            </div>
          </div>
        
          <div className=" flex items-center">
            <GoLocation className=" text-2xl md:text-3xl text-secondary-text"/>
            <div className="ml-3">
               <p className="text-xl md:text-2xl text-secondary-text font-medium">Address</p>
              <p className=""> 2, Waizayandar Rd., Thingankyun Tsp., Yangon</p>

            </div>
          </div>
        </div>
       </div>
       <div className=" flex justify-center">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.0792224596426!2d96.17922377432464!3d16.822425483971614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1933d001b512b%3A0xe17362b4c26a11e!2sSuper%20Select!5e0!3m2!1smy!2smm!4v1681960397315!5m2!1smy!2smm"  className="mt-5 md:mt-5 lg:mt-0 w-96 h-56 md:w-550 md:h-450"></iframe>
       </div>
      
     </div>
     <div className=" mt-24">
     <Footer/>
     </div>
    </>
  );
};

export default ContactPage;

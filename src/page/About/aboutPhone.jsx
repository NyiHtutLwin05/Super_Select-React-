import React from "react";
import aboutP1 from '../../assets/image/About/aboutMobile/CompanyImage.png'
import aboutP2 from '../../assets/image/About/aboutMobile/FactoryImage.png'
import aboutP3 from '../../assets/image/About/Link.svg'
 const AboutPhone = () => {
  return (
    <>
      <div className=" mt-10 mb-10" >
        <h1 className=" font-monument text-primiray-text text-2xl md:text-3xl items-center flex justify-center" data-aos="fade-down" data-aos-duration="1000"> About Us</h1>
        <div className=" mt-5">
          <div className=" flex items-center justify-center mt-10">
          <img src={aboutP1} alt="" className=" w-[31%] md:w-[15%]"/>
           <h1 className=" font-monument md:text-3xl text-secondary-text w-32 ml-5 md:ml-9" data-aos="fade-up" data-aos-duration="1000">About Company</h1>
          </div>
          <div className=" font-sfPro flex justify-center mt-3">
             <p className=" w-[70%] md:w-[50%]">Trusted Interior & Exterior Glass decoration firm by Experienced Glass Professionals. We formed & established in <span className=' text-secondary-text font-semibold'>2006 </span>, specialized in Glass Partition and Installation for home and office</p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
            <img src={aboutP3} alt="" data-aos="fade-down" data-aos-duration="1000"/>
        </div>
        <div>
        <div className=" flex items-center justify-center mt-10">
           <h1 className=" font-monument md:text-3xl text-secondary-text w-32" data-aos="fade-down" data-aos-duration="2000">About Factory</h1>
           <img src={aboutP2} alt="" className=" w-[31%] md:w-[15%] md:ml-10" data-aos="fade-right" data-aos-duration="1000"/>
         
          </div>
          <div className=" font-sfPro flex justify-center mt-3 text-right">
             <p className=" w-[70%] md:w-[50%]" data-aos="fade-down" data-aos-duration="1000">At our glass factory, we specialize in the production of tempered glass and a variety of other glass products. Our tempered glass machine is certified by ISO. In addition to tempered glass, we also produce laminated glass and double-glazed glass. We also offer custom services such as cutting, edging, drilling, and printing to meet the specific needs of our customers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPhone;

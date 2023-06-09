import { Button, Drawer, Group, Image, Skeleton, Tabs } from "@mantine/core";
import AluData from "../../../data/Aluminium";
import { useEffect, useState } from "react";
import {TbCategory} from 'react-icons/tb'
import {AiOutlineHome} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import CustomModal from "./Modal";
import GlcData from "../../../data/GlassShowCase";
import HandData from "../../../data/HandRail";
import GlassPData from "../../../data/GlassPartition";
import Brdata from "../../../data/BathroomDoor";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Footer from "../../navbar/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
// import Logo2 from "../../assets/Full logo white.svg";

function GalleryTestMobile() {
  // const [isLoading,setIsLoading]=useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const isDesktop =useMediaQuery('(min-height:768px)')
  function toggleModal(imageSrc) {
    setSelectedImage(imageSrc);
    setIsOpen(!isOpen);
  }
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollR = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollTop === 0 && isScrolled) {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScrollR);
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  const [value,setValue] =useState('first');
  useEffect(()=>{
    window.scrollTo(0,0);
  },[value])

 
  return (
    <>
      <div   className={`flex justify-evenly text-center items-center  ${
            isScrolled ? "fixed top-0 w-full z-50  bg-Nav" : ""
          } py-3`}>
      <Button
      
          className=" bg-primiray-text text-white  "
          onClick={handleGoHome}
        >
          <AiOutlineHome/>
        </Button>
        <div className=" w-32 md:w-44">
       
        <Image src='https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/Full%20logo%20white.svg' alt="" />
        </div>
      
       
        <Group position="center">
        <Button onClick={open} className=" bg-primiray-text  "><TbCategory/></Button>
      </Group>
      </div>
      
      <Tabs color="teal" defaultValue="first" className=" mt-5" >
      
      <Drawer
        opened={opened}
        onClose={close}
        position="top" size={180}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        
      >
        <Tabs.List
          // grow
          position="center"
          className=""
         
        >
          <Tabs.Tab value="first"  onClick={close}  color="lightBlue">
            <h1 className=" font-monument text-secondary-text text-xs md:text-sm select-none">
              {" "}
              Aluminium
            </h1>
          </Tabs.Tab>
          <Tabs.Tab
          onClick={close}
            value="second"
            color="lightBlue"
            className=" text-xs md:text-sm font-monument text-secondary-text"
          >
            Glass Show Case
          </Tabs.Tab>
          <Tabs.Tab
          onClick={close}
            value="Third"
            color="lightBlue"
            className="text-xs md:text-sm font-monument text-secondary-text"
          >
            HandRail
          </Tabs.Tab>
          <Tabs.Tab
          onClick={close}
            value="fouth"
            color="lightBlue"
            className="text-xs md:text-sm font-monument text-secondary-text"
          >
            Glass Partition
          </Tabs.Tab>
          
          <Tabs.Tab
          onClick={close}
            value="fifth"
            color="lightBlue"
            className="text-xs md:text-sm font-monument text-secondary-text"
          >
            Bathroom Door
          </Tabs.Tab>
        </Tabs.List>
        </Drawer>
        <Tabs.Panel value="first" pt="lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  justify-center items-center cursor-pointer ">
            {AluData.map((a, i) => (
              <div key={i} className=" col-span-1 flex justify-center">
                {/* <img
                  src={a.src}
                  alt={`Aluminium ${a.id}`}
                  onClick={() => toggleModal(a.src)}
                  className="w-64 h-52 md:w-72 md:h-64"
                  data-aos="fade-up" data-aos-duration="2000"
                /> */}
                   <LazyLoadImage
                  alt={`Aluminium ${a.id}`}
                  effect="blur"
                  onClick={() => toggleModal(a.src)}
                  data-aos="fade-up" data-aos-duration="2000"
                  className="w-64 h-52 md:w-72 md:h-64"
                  src={a.src} // use normal <img> attributes as props
                 
                />
              </div>
            ))}
            
          </div>
          <div className=" flex justify-center items-center">
            <CustomModal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              selectedImage={selectedImage}
            />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="second" pt="xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  justify-center items-center cursor-pointer ">
            {GlcData.map((g, i) => (
              <div key={i} className=" col-span-1 flex justify-center">
                {/* <img
                  src={g.src}
                  alt={`Glass_Show_Case ${g.id}`}
                  onClick={() => toggleModal(g.src)}
                  className="w-64 h-52 md:w-72 md:h-64"
                  data-aos="fade-up" data-aos-duration="2000"
                  loading="lazy"
                /> */}
                  <LazyLoadImage
                  alt={`Aluminium ${g.id}`}
                  effect="blur"
                  onClick={() => toggleModal(g.src)}
                  data-aos="fade-up" data-aos-duration="2000"
                  className="w-64 h-52 md:w-72 md:h-64"
                  src={g.src} // use normal <img> attributes as props
                 
                />
              </div>
            ))}
          </div>
          <div className=" flex justify-center items-center">
            <CustomModal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              selectedImage={selectedImage}
            />
            
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="Third">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  justify-center items-center cursor-pointer ">
            {HandData.map((h, i) => (
              <div key={i} className=" col-span-1 flex justify-center">
                {/* <img
                  src={h.src}
                  alt={`Handrail ${h.id}`}
                  onClick={() => toggleModal(h.src)}
                  className="w-64 h-52 md:w-72 md:h-64"
                  data-aos="fade-up" data-aos-duration="2000"
                  loading="lazy"
                /> */}
                  <LazyLoadImage
                  alt={`Aluminium ${h.id}`}
                  effect="blur"
                  onClick={() => toggleModal(h.src)}
                  data-aos="fade-up" data-aos-duration="2000"
                  className="w-64 h-52 md:w-72 md:h-64"
                  src={h.src} // use normal <img> attributes as props
                 
                />
              </div>
            ))}
          </div>
          <div className=" flex justify-center items-center">
           
            <CustomModal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              selectedImage={selectedImage}
            />
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="fouth">
        
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  justify-center items-center cursor-pointer ">
          
              {
                GlassPData.map((p,i)=>(
                  
                  <div key={i} className=" col-span-1 flex justify-center">
                   
                  {/* <img
                    src={p.src}
                    alt={`GlassPartition ${p.id}`}
                    onClick={() => toggleModal(p.src)}
                    className="w-64 h-52 md:w-72 md:h-64"
                    data-aos="fade-up" data-aos-duration="2000"
                    loading="lazy"
                  /> */}
                    <LazyLoadImage
                  alt={`Aluminium ${p.id}`}
                  effect="blur"
                  onClick={() => toggleModal(p.src)}
                  data-aos="fade-up" data-aos-duration="2000"
                  className="w-64 h-52 md:w-72 md:h-64"
                  src={p.src} // use normal <img> attributes as props
                 
                />
                </div>
                ))
              }
           </div>
           <div className=" flex justify-center items-center">
            <CustomModal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              selectedImage={selectedImage}
            />
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="fifth">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  justify-center items-center cursor-pointer ">
              {
                Brdata.map((b,i)=>(
                  <div key={i} className=" col-span-1 flex justify-center">
                  {/* <img
                    src={b.src}
                    alt={`BathroomDoor ${b.id}`}
                    onClick={() => toggleModal(b.src)}
                    className="w-64 h-52 md:w-72 md:h-64"
                    data-aos="fade-up" data-aos-duration="2000"
                    loading="lazy"
                  /> */}
                    <LazyLoadImage
                  alt={`Aluminium ${b.id}`}
                  effect="blur"
                  onClick={() => toggleModal(b.src)}
                  data-aos="fade-up" data-aos-duration="2000"
                  className="w-64 h-52 md:w-72 md:h-64"
                  src={b.src} // use normal <img> attributes as props
                 
                />
                </div>
                ))
              }
           </div>
           <div className=" flex justify-center items-center">
            <CustomModal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              selectedImage={selectedImage}
            />
          </div>
        </Tabs.Panel>
      </Tabs>

      <Footer />
    </>
  );
}
export default GalleryTestMobile;

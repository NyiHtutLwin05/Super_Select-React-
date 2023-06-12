import { Button, Drawer, Group, Image, SimpleGrid, Tabs } from "@mantine/core";
import Footer from "../../navbar/Footer";

import AluData from "../../../data/Aluminium";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CustomModal from "./Modal";
import GlcData from "../../../data/GlassShowCase";
import HandData from "../../../data/HandRail";
import GlassPData from "../../../data/GlassPartition";
import NavBarMobile from "../../navbar/NavBar.mobile";
import Brdata from "../../../data/BathroomDoor";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
function GalleryTestDesktop() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const isDesktop = useMediaQuery("(min-height:768px)");
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

  return (
    <>
      <div className="flex justify-evenly text-center mt-5">
        <div className=" w-32 md:w-44">
          <Image
            src="https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/Full%20logo%20white.svg"
            alt=""
          />
        </div>

        <Button
          className=" bg-primiray-text text-white text-sm font-serif "
          onClick={handleGoHome}
        >
          {/* <AiOutlineHome/> */}
          Home
        </Button>
      </div>
      <div></div>
      <Tabs color="teal" defaultValue="first" className=" mt-5">
        <Tabs.List
          grow
          position="center"
          className={`${
            isScrolled ? "fixed top-0 w-full z-50 md:bg-gray-300" : ""
          } py-3`}
        >
          <Tabs.Tab value="first" color="lightBlue">
            <h1 className=" font-monument text-secondary-text text-xs md:text-sm select-none">
              {" "}
              Aluminium
            </h1>
          </Tabs.Tab>
          <Tabs.Tab
            value="second"
            color="lightBlue"
            className=" text-xs md:text-sm font-monument text-secondary-text"
          >
            Glass Show Case
          </Tabs.Tab>
          <Tabs.Tab
            value="Third"
            color="lightBlue"
            className="text-xs md:text-sm font-monument text-secondary-text"
          >
            HandRail
          </Tabs.Tab>
          <Tabs.Tab
            value="fouth"
            color="lightBlue"
            className="text-xs md:text-sm font-monument text-secondary-text"
          >
            Glass Partition
          </Tabs.Tab>

          <Tabs.Tab
            value="fifth"
            color="lightBlue"
            className="text-xs md:text-sm font-monument text-secondary-text"
          >
            Bathroom Door
          </Tabs.Tab>
        </Tabs.List>

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
          
                     <LazyLoadImage
                  alt={`Aluminium ${h.id}`}
                  effect="blur"
                  onClick={() => toggleModal(h.src)}
                  className="w-64 h-52 md:w-72 md:h-64"
                  data-aos="fade-up" data-aos-duration="2000"
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
            {GlassPData.map((p, i) => (
              <div key={i} className=" col-span-1 flex justify-center">
           
                     <LazyLoadImage
                  alt={`Aluminium ${p.id}`}
                  effect="blur"
                  onClick={() => toggleModal(p.src)}
                  className="w-64 h-52 md:w-72 md:h-64"
                  data-aos="fade-up" data-aos-duration="2000"
                  src={p.src} // use normal <img> attributes as props
                
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
        <Tabs.Panel value="fifth">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  justify-center items-center cursor-pointer ">
            {Brdata.map((b, i) => (
              <div key={i} className=" col-span-1 flex justify-center">
          
                     <LazyLoadImage
                  alt={`Aluminium ${b.id}`}
                  effect="blur"
                  onClick={() => toggleModal(b.src)}
                  className="w-64 h-52 md:w-72 md:h-64"
                  src={b.src} // use normal <img> attributes as props
                
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
      </Tabs>

      <Footer />
    </>
  );
}
export default GalleryTestDesktop;

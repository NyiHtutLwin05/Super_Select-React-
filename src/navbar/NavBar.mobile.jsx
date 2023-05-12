import { Burger, Button, Flex, Group,Drawer,NavLink, Space, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaViber } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const NavBarMobile = () => {
    const [opened,{toggle}]=useDisclosure(false);
    const [opening,{open,close}] =useDisclosure(false);
   
    const label = opened ? 'Close navigation' : 'Open navigation';
    
  return (
    <>
     <Flex justify="space-around" mt={7} align='center'>
      <div data-aos="fade-right" data-aos-duration="2000"  className=" w-48">
    
        <Image src='https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/Full%20logo%20white.svg' />
      </div>
      <div>
        <Group position="center">
        
        <Burger opened={open} onClick={open} size={30}/>
      
        </Group>
      </div>
      </Flex>
      <Drawer opened={opening} onClose={close} >
        <div className=" w-48">
       
        <Image src='https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/Full%20logo%20white.svg' />
        </div>
      
       <Space h="lg"/>
        <div className=" flex flex-col justify-center py-10">
      <NavLink component={Link} to='/' label="Home" childrenOffset="sm" className=" text-4xl font-bold text-center" onClick={close}/>
            <NavLink component={Link} to='about' label="About"  childrenOffset="sm" className=" text-4xl font-bold text-center"  onClick={close}/>
            <NavLink component={Link} to='gallery' label="Gallery" childrenOffset="sm" className=" text-4xl font-bold text-center" onClick={close} />
            <NavLink component={Link} to='contact' label="Contact Us" className="min-w-[100px] text-4xl font-bold text-center"  childrenOffset="sm"  onClick={close} />
            </div>
            <Flex gap="lg" className=" bottom-0 mt-5" justify="center">
            <FaViber className=" cursor-pointer text-3xl text-indigo-600 hover:text-black transition-all ease-linear duration-150" />
            <AiFillWechat className=" cursor-pointer text-4xl text-green-500 hover:text-black transition-all ease-linear duration-150" />
            <BsFacebook className=" cursor-pointer text-3xl  text-blue-900 hover:text-black transition-all ease-linear duration-150" />
          </Flex>
      </Drawer>
      
    </>
  );
};

export default NavBarMobile;

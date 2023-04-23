import { Burger, Button, Flex, Group,Drawer,NavLink, Space } from "@mantine/core";
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
     <Flex justify="space-around" mt={7}>
      <div data-aos="fade-right" data-aos-duration="2000">
        <img src="/src/assets/Full logo white.svg" alt="" className=" w-48" />
      </div>
      <div>
        <Group position="center">
        {/* <Button onClick={open}> */}
        <Burger opened={open} onClick={open}/>
        {/* </Button> */}
        </Group>
      </div>
      </Flex>
      <Drawer opened={opening} onClose={close} >
      <img src="/src/assets/Full logo white.svg" alt="" className=" w-48" />
       <Space h="lg"/>
        <div className=" flex flex-col justify-center">
      <NavLink component={Link} to='/' label="Home" childrenOffset="sm" className=" text-4xl font-bold" onClick={close}/>
            <NavLink component={Link} to='about' label="About"  childrenOffset="sm" className=" text-4xl font-bold"  onClick={close}/>
            <NavLink component={Link} to='gallery' label="Gallery" childrenOffset="sm" className=" text-4xl font-bold" onClick={close} />
            <NavLink component={Link} to='contact' label="Contact Us" className="min-w-[100px] text-4xl font-bold"  childrenOffset="sm"  onClick={close} />
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

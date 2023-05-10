import { Divider, Image } from '@mantine/core';
import React from 'react'

const Footer = () => {
    const CurrentYear = new Date().getFullYear();
  return (
    <footer className=' mt-7 mb-2'>
      <div className=' flex justify-center'>
      <Divider size="sm"  className=' mt-3 mb-4 w-full md:w-full'/>
      </div> 
      <div className=' flex items-center justify-around flex-col md:flex-row'>
        <div className=" w-36 lg:w-56 mb-5 md:mb-0">
          <Image src='https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/Full%20logo%20white.svg'/>
        </div>
        <div>
        <p className=' text-secondary-text font-light] font-serif'>&copy; {CurrentYear} All rights reserved. Created by Nyi Htut.</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer
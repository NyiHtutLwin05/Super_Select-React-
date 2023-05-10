import { useMediaQuery } from '@mantine/hooks';
import React from 'react'
import AboutPhone from './aboutPhone';

const AboutPage = () => {
  const isMobile = useMediaQuery('(max-width: 807px)');
  return (
   <>
   <div>
    {
      isMobile ? <AboutPhone/>: (    <div className=' flex flex-col justify-center items-center mt-10'>
      <img src='https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/About/About.png' alt="" className=' w-[64%]' />
      <div className=' flex justify-evenly mt-5'>
        <div className=' w-[25%]'>
          <h1 className=' text-2xl font-monument font-5xl w-20  text-secondary-text' data-aos="fade-up" data-aos-duration="2000">About Company</h1>
          <p className=' font-sfPro mt-4' data-aos="fade-right" data-aos-duration="2000">Trusted Interior & Exterior Glass decoration firm by Experienced Glass Professionals. We formed & established in 2006, specialized in Glass Partition and Installation for home and office.</p>
        </div>
        <div className=' w-[25%] flex flex-col text-right items-center'>
        <h1 className=' text-2xl font-monument font-5xl w-20  text-secondary-text 
         ' data-aos="fade-down" data-aos-duration="2000">About Factory</h1>
          <p className=' font-sfPro mt-4 ' data-aos="fade-left" data-aos-duration="2000">At our glass factory, we specialize in the production of tempered glass and a variety of other glass products. Our tempered glass machine is certified by ISO. In addition to tempered glass, we also produce laminated glass and double-glazed glass. We also offer custom services such as cutting, edging, drilling, and printing to meet the specific needs of our customers.</p>
        </div>
      </div>
    </div>)
    }

    </div>
 
   </>
  )
}

export default AboutPage
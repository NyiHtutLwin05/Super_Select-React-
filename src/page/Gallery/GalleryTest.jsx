import React from 'react'
import GalleryTestDesktop from './GalleryTest.desktop'
import GalleryTestMobile from './GalleryText.mobile'
import { useMediaQuery } from '@mantine/hooks'

const GalleryTest = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
 if(isDesktop){
  return(
     <div>
       <GalleryTestDesktop/>
     </div>
  )
 }else{
   return(
     <div>
      <GalleryTestMobile/>
     </div>
   )
 }
}

export default GalleryTest
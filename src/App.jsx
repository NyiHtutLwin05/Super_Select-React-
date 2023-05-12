import { useState } from "react";
import Homee from "./page/Home";
import NavBar from "./navbar/NavBar";
// import Demo from './page/Gallery/GalleryPage'
import AboutPage from "./page/About/About";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Router, Routes, useLocation } from "react-router";
import GalleryTest from "./page/Gallery/GalleryTest";
import ContactPage from "./page/ContactPage";
import { ContactIcons } from "./page/ContactPage2";
import Footer from "./navbar/Footer";
import GalleryTestDesktop from "./page/Gallery/GalleryTest.desktop";
import GalleryTestMobile from "./page/Gallery/GalleryText.mobile";
import ScrollToTop from "./ScrollToTop";
import Aos from "aos";

function App() {
  const location=useLocation();
  const [showNavBar,setShowNavBar]=useState(true);
  useEffect(() => {
    AOS.init();
  }, [AOS]);
  useEffect(()=>{
    if(location.pathname==='/gallery'){
      setShowNavBar(false);
     } else{
      setShowNavBar(true);
     }
  },[location])
 
  return (
    <>
      <Helmet>
        <meta
          http-equiv="Strict-Transport-Security"
          content="max-age=31536000; includeSubDomains"
        />
      </Helmet>

      <div>
       {showNavBar&& <NavBar/> }
      </div>
      
      <Routes>
        
        <Route path="/" element={<Homee />}></Route>
        <Route path="about" element={<AboutPage />}></Route>

        <Route path="gallery" element={<GalleryTest />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
      </Routes>
     
      {/* <Footer /> */}
    </>
  );
}

export default App;

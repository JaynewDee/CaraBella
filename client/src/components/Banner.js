import React from 'react';
import Logo from './Logo';
import Contact from './Contact';

import {
   Routes,
   Route,
} from 'react-router-dom';



const Banner = () => {
  return (
    <div id="bannerBox">
       <Routes>
         <Route path="/" element={<Logo />} />
         <Route path="contact" element={<Contact />} />
       </Routes>
         
    </div>
  )
}

export default Banner;
import React from 'react';
import Logo from './Logo';
import Contact from './Contact';
import CalNode from './Calendar'
import {
   Routes,
   Route,
} from 'react-router-dom';



import 'react-calendar/dist/Calendar.css';

const Banner = () => {
  return (
    <div id="bannerBox">
       <Routes>
         <Route path="/" element={<Logo />} />
         <Route path="contact" element={<Contact />} />
         <Route path="schedule" element={<CalNode/>} />
       </Routes>
         
    </div>
  )
}

export default Banner;
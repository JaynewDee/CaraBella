import React from 'react';
import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import MainSection from '../components/MainSection.js';
import Footer from '../components/Footer.js';
import Frame from '../components/Frame.js';


const Main = () => {
  return (
    <>
      <Header />
      <Banner />
         <MainSection />
         <Frame />
      <Footer />
    </>
  )
}

export default Main;
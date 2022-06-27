import React from "react";
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import ServiceSection from "../components/ServiceSection.js";
import Intro from "./Intro";
import Footer from "../components/Footer.js";
import Body from "../components/Body/Body";

const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <ServiceSection />
      <Intro />
      <Body />
      <Footer />
    </>
  );
};

export default Main;

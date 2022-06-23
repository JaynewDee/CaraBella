import React from "react";
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import MainSection from "../components/MainSection.js";
import Intro from "./Intro";
import Footer from "../components/Footer.js";
import Body from "../components/Body";

const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <MainSection />
      <Intro />
      <Body />
      <Footer />
    </>
  );
};

export default Main;

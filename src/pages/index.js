import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import Preview from "../components/Preview";
import About from "../components/About";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <Preview/>
      <About />
      <FAQ/>
      <Footer />
    </>
  );
};

export default Home;

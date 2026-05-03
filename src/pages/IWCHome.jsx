import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Brands from "../components/Brands";
import Process from "../components/Process";
import Instagram from "../components/Instagram";
import BehindTheDial from "../components/BehindTheDial";
import Footer from "../components/Footer";

const IWCHome = () => {
  return (
    <div className="iwc-home">
      <Navbar />
      <Hero />
      <Carousel title="Discover Luxury" />
      <Brands />
      <Process />
      <Instagram />
      <Carousel title="Latest Offerings" />
      <BehindTheDial />
      <Footer />
    </div>
  );
};

export default IWCHome;

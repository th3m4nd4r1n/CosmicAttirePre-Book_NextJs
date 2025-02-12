import React from "react";
import Render from "./components/Render";
import Hero from "./components/Hero";
import './customs.css';
import './animations.css';
import Description from "./components/Description";
import Photo from "./components/Photo";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";


// import Carousel from "./components/Carousel"; // Importing the Carousel component

export default function Home() {
  return (
    <>
   
      <div className="fixed -z-10">
        <Render />
      </div>
      <Header />
      <Hero />
      <div className="z-10 fade-in-anim">
        <Description />
      </div>
      <Photo />
      <Faq />
      <Footer />
    </>
  );
}

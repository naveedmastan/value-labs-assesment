import React from "react";
import Navigation from "./navigation";
import Carousel from "./carousel";
import AboutUs from "./about-us";
import MenuSection from "./menu-section";
import "./App.css";
import ContactForm from "./contact";

function App() {
  return (
    <>
      <header id="mu-header">
        <Navigation />
      </header>
      <section id="mu-slider">
        <Carousel />
      </section>
      <section id="mu-about-us">
        <AboutUs />
      </section>
      <section id="mu-counter">
        <MenuSection />
      </section>
      <ContactForm />
    </>
  );
}

export default App;

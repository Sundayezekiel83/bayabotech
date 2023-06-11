import { useState } from "react";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Features from "./component/Features";
import Services from "./component/services";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

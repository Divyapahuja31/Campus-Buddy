import React from 'react';
import HeroSection from './components/HeroSection';
import WhyCredo from './components/WhyCredo';
import UseCase from './components/UseCase';
import RoleSection from './components/RoleSection';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import BFSIFAQ from "./components/BFSIFAQ";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <HeroSection />
      <WhyCredo />
      <UseCase/>
      <RoleSection />
      <CTASection />
      <BFSIFAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

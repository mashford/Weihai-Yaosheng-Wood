import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import ImageCarousel from './components/ImageCarousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import { SectionId } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Features />
        <ProductShowcase />
        <ImageCarousel />
        <Contact />
      </main>

      <Footer />
      <AIConsultant />
    </div>
  );
}

export default App;
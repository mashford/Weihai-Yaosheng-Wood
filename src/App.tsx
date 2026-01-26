import React from 'preact/compat';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-amber-100 selection:text-amber-900 text-stone-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

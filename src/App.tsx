import React from 'preact/compat';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { I18nProvider } from './i18n/context';

interface AppProps {
  locale?: 'zh' | 'en';
}

const App: React.FC<AppProps> = ({ locale = 'zh' }) => {
  return (
    <I18nProvider locale={locale}>
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
    </I18nProvider>
  );
};

export default App;

import React, { useState, useEffect } from 'preact/compat';
import { useI18n } from '../i18n/context';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t, locale } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const setupIntersectionObserver = () => {
      const options = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => observer.observe(section));

      return () => {
        sections.forEach(section => observer.unobserve(section));
      };
    };

    window.addEventListener('scroll', handleScroll);
    const cleanupObserver = setupIntersectionObserver();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cleanupObserver();
    };
  }, []);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'products', label: t.nav.products },
    { id: 'advantages', label: t.nav.advantages },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <nav 
      id="navbar" 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            id="nav-logo" 
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToId('home')}
          >
            <div className="bg-amber-700 text-white p-2 rounded-lg mr-3 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3 L8.5 8 L15.5 8 Z"/>
                <path d="M12 8 L6.5 13 L17.5 13 Z"/>
                <path d="M12 13 L4.5 19 L19.5 19 Z"/>
                <path d="M11 19 L11 22 M13 19 L13 22"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide text-stone-900">威海耀晟</h1>
              <p className="text-xs text-stone-500 font-medium">WEIHAI YAOSHENG WOOD</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8" id="desktop-menu">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToId(link.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-amber-600 ${
                  activeSection === link.id ? 'text-amber-700 font-bold' : 'text-stone-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-stone-200 pl-4 ml-4">
              <a href="/" className={`text-xs ${locale === 'zh' ? 'font-bold text-amber-700' : 'text-stone-500'}`}>中</a>
              <span className="text-stone-300">|</span>
              <a href="/en/" className={`text-xs ${locale === 'en' ? 'font-bold text-amber-700' : 'text-stone-500'}`}>EN</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              id="mobile-menu-button" 
              className="p-2 text-stone-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? (locale === 'en' ? "Close Menu" : "关闭菜单") : (locale === 'en' ? "Open Menu" : "打开菜单")}
              aria-expanded={isMobileMenuOpen}
            >
              {!isMobileMenuOpen ? (
                <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              ) : (
                <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        id="mobile-menu" 
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg absolute w-full top-full left-0 border-t border-gray-100`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                activeSection === link.id 
                  ? 'text-amber-700 bg-amber-50 font-bold' 
                  : 'text-stone-600 hover:bg-stone-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center space-x-4 px-3 pt-4 border-t border-stone-50">
            <a href="/" className={`text-sm ${locale === 'zh' ? 'font-bold text-amber-700' : 'text-stone-500'}`}>中文</a>
            <a href="/en/" className={`text-sm ${locale === 'en' ? 'font-bold text-amber-700' : 'text-stone-500'}`}>English</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

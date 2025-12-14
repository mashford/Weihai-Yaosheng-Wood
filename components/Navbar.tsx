import React, { useState, useEffect } from 'react';
import { Menu, X, TreePine } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: SectionId.HOME, label: '首页' },
    { id: SectionId.ABOUT, label: '关于我们' },
    { id: SectionId.PRODUCTS, label: '产品展示' },
    { id: SectionId.ADVANTAGES, label: '核心优势' },
    { id: SectionId.CONTACT, label: '联系我们' },
  ];

  const handleNavClick = (id: SectionId) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick(SectionId.HOME)}
          >
            <div className="bg-amber-700 text-white p-2 rounded-lg mr-3 shadow-md">
              <TreePine size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide text-stone-900">
                威海耀晟
              </h1>
              <p className="text-xs text-stone-500 font-medium">
                WEIHAI YAOSHENG WOOD
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-amber-600 ${
                  activeSection === link.id
                    ? 'text-amber-700 font-bold'
                    : 'text-stone-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-stone-700"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0 border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  activeSection === link.id
                    ? 'text-amber-700 bg-amber-50'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
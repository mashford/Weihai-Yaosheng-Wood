import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section 
      id={SectionId.HOME} 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Wood Warehouse" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-stone-800/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-amber-600/20 border border-amber-500/30 text-amber-400 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm animate-fade-in-up">
          专注木制品加工 · 国际出口品质
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          为您提供专业的<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
            物流包装解决方案
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
          威海耀晟木制品有限公司 —— 您的全球物流合作伙伴。
          集研发、生产、出口于一体，守护您的货物安全抵达世界每一个角落。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection(SectionId.PRODUCTS)}
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-900/50 flex items-center justify-center gap-2"
          >
            浏览产品 <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all backdrop-blur-sm"
          >
            联系我们
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
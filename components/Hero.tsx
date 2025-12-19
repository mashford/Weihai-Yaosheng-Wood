import React from 'react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section 
      id={SectionId.HOME} 
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-stone-50"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-[1.15] tracking-tight">
              为您的货物提供<br/>
              <span className="text-amber-700">最坚实的保护</span>
            </h1>
            
            <p className="mt-4 text-lg text-stone-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              威海耀晟木制品有限公司，集研发、生产、出口于一体。
              无论是精密电子还是重型机械，我们都为您提供专业的物流包装解决方案。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button 
                onClick={() => scrollToSection(SectionId.PRODUCTS)}
                className="px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-amber-900/20 flex items-center justify-center gap-2"
              >
                浏览产品 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <button 
                onClick={() => scrollToSection(SectionId.CONTACT)}
                className="px-8 py-4 bg-white border border-stone-200 hover:border-amber-600 hover:text-amber-700 text-stone-700 font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                联系我们
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-medium text-stone-500">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 源头工厂
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 专业定制
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 匠心品质
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative lg:h-[600px] flex items-center">
             <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/4.jpg" 
                  alt="Wood Factory Warehouse" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = "https://picsum.photos/800/1000?random=100";
                    target.onerror = null;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="font-bold text-lg">标准化生产车间</p>
                  <p className="text-sm opacity-90">严格把控每一道工序</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
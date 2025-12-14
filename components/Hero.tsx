import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-sm font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              专注木制品加工 · 国际出口品质
            </div>
            
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
                浏览产品 <ArrowRight size={20} />
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
                <CheckCircle2 size={18} className="text-amber-600" /> 源头工厂
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={18} className="text-amber-600" /> 出口资质
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 size={18} className="text-amber-600" /> 匠心品质
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative lg:h-[600px] flex items-center">
             <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/800/1000?random=100" 
                  alt="Wood Factory Warehouse" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="font-bold text-lg">标准化生产车间</p>
                  <p className="text-sm opacity-90">严格把控每一道工序</p>
                </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-10 bg-white p-4 rounded-xl shadow-xl border border-stone-100 flex items-center gap-4 animate-bounce-slow">
                <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-semibold uppercase">年产量突破</p>
                  <p className="text-xl font-bold text-stone-900">500,000+</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
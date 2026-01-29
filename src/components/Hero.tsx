import React from 'preact/compat';
import { useI18n } from '../i18n/context';

const Hero: React.FC = () => {
  const { t } = useI18n();
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-stone-50">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-[1.15] tracking-tight">
              {t.hero.title_1}<br /><span className="text-amber-700">{t.hero.title_2}</span>
            </h1>
            <p className="mt-4 text-lg text-stone-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button 
                onClick={() => scrollToId('products')} 
                className="px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-amber-900/20 flex items-center justify-center gap-2"
              >
                {t.hero.btn_browse} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </button>
              <button 
                onClick={() => scrollToId('contact')} 
                className="px-8 py-4 bg-white border border-stone-200 hover:border-amber-600 hover:text-amber-700 text-stone-700 font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                {t.hero.btn_contact}
              </button>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-medium text-stone-500">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg> {t.hero.feature_1}
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg> {t.hero.feature_2}
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg> {t.hero.feature_3}
              </div>
            </div>
          </div>
          <div className="relative lg:h-[600px] flex items-center">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/factory-workshop-md.webp" 
                srcset="/images/factory-workshop-sm.webp 480w, /images/factory-workshop-md.webp 960w, /images/factory-workshop-lg.webp 1920w"
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="耀晟木制品车间 - 专业木质包装生产线" 
                className="w-full h-full object-cover" 
                fetchPriority="high" 
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white text-left">
                <p className="font-bold text-lg">{t.hero.badge_title}</p>
                <p className="text-sm opacity-90">{t.hero.badge_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

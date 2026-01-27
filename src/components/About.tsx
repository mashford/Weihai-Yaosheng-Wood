import React from 'preact/compat';
import { useI18n } from '../i18n/context';

const About: React.FC = () => {
  const { t } = useI18n();
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/about-1-md.webp" 
                srcset="/images/about-1-sm.webp 400w, /images/about-1-md.webp 800w, /images/about-1-lg.webp 1200w"
                sizes="(max-width: 768px) 50vw, 25vw"
                alt="经验丰富的木工工匠正在制作出口托盘" 
                className="rounded-lg shadow-xl w-full h-64 object-cover transform translate-y-4" 
                loading="lazy" 
                decoding="async" 
              />
              <img 
                src="/images/about-2-md.webp" 
                srcset="/images/about-2-sm.webp 400w, /images/about-2-md.webp 800w, /images/about-2-lg.webp 1200w"
                sizes="(max-width: 768px) 50vw, 25vw"
                alt="精选优质原材料木材堆场" 
                className="rounded-lg shadow-xl w-full h-64 object-cover" 
                loading="lazy" 
                decoding="async" 
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-700 text-white p-6 rounded-full shadow-2xl border-4 border-white text-center w-32 h-32 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold">10+</span>
              <span className="text-xs">{t.about.badge_exp}</span>
            </div>
          </div>
          <div>
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">{t.about.subtitle}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{t.about.title}</p>
            <div className="mt-4 text-lg text-gray-600 space-y-6">
              <p>{t.about.desc_1}</p>
              <p>{t.about.desc_2}</p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-stone-50 rounded-lg">
                <div className="p-3 bg-amber-100 rounded-full text-amber-700 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                </div>
                <h3 className="font-bold text-gray-900">{t.about.feat_1_title}</h3>
                <p className="text-sm text-gray-500 mt-1">{t.about.feat_1_desc}</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-stone-50 rounded-lg">
                <div className="p-3 bg-amber-100 rounded-full text-amber-700 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <h3 className="font-bold text-gray-900">{t.about.feat_2_title}</h3>
                <p className="text-sm text-gray-500 mt-1">{t.about.feat_2_desc}</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-stone-50 rounded-lg">
                <div className="p-3 bg-amber-100 rounded-full text-amber-700 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                </div>
                <h3 className="font-bold text-gray-900">{t.about.feat_3_title}</h3>
                <p className="text-sm text-gray-500 mt-1">{t.about.feat_3_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

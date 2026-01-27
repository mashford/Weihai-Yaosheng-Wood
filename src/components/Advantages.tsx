import React from 'preact/compat';
import { useI18n } from '../i18n/context';

const Advantages: React.FC = () => {
  const { t } = useI18n();
  const advantageItems = [
    {
      title: t.advantages.items[0].title,
      description: t.advantages.items[0].desc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      )
    },
    {
      title: t.advantages.items[1].title,
      description: t.advantages.items[1].desc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: t.advantages.items[2].title,
      description: t.advantages.items[2].desc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C10.9 14.5 12 15 13 17c1 2 1.15 3.06.18 5L2 21Z" />
        </svg>
      )
    },
    {
      title: t.advantages.items[3].title,
      description: t.advantages.items[3].desc,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19 7-7 3 3-7 7-3-3Z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
          <path d="m2 2 5 5" />
          <path d="m9.5 9.5 5 5" />
        </svg>
      )
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">{t.advantages.subtitle}</h2>
          <p className="mt-2 text-3xl font-bold text-stone-900 sm:text-4xl">{t.advantages.title}</p>
          <p className="mt-4 text-lg text-stone-500 max-w-2xl mx-auto">{t.advantages.desc}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantageItems.map((item, index) => (
            <div key={index} className="group bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 text-amber-600 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 ring-1 ring-stone-200 group-hover:ring-amber-600">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

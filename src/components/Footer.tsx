import React from 'preact/compat';
import { useI18n } from '../i18n/context';

const Footer: React.FC = () => {
  const { t } = useI18n();
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-white text-lg font-bold">威海耀晟木制品有限公司</h2>
            <p className="mt-2 text-sm">{t.footer.desc}</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <button onClick={() => scrollToId('about')} className="hover:text-white transition-colors">{t.footer.links.about}</button>
            <button onClick={() => scrollToId('products')} className="hover:text-white transition-colors">{t.footer.links.products}</button>
            <a href="#" className="hover:text-white transition-colors">{t.footer.links.privacy}</a>
          </div>
        </div>
        <div className="mt-8 border-t border-stone-800 pt-8 text-sm text-center md:text-left">
          {t.footer.copy}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

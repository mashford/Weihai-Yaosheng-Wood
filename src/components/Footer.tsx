import React from 'preact/compat';

const Footer: React.FC = () => {
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
            <p className="mt-2 text-sm">专注品质木包装，助力全球物流。</p>
          </div>
          <div className="flex space-x-6 text-sm">
             <button onClick={() => scrollToId('home')} className="hover:text-white transition-colors">公司简介</button>
             <button onClick={() => scrollToId('products')} className="hover:text-white transition-colors">产品中心</button>
             <a href="#" className="hover:text-white transition-colors">隐私政策</a>
          </div>
        </div>
        <div className="mt-8 border-t border-stone-800 pt-8 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Weihai Yaosheng Wood Products Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

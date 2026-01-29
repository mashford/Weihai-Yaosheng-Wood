import React, { useState } from 'preact/compat';
import { useI18n } from '../i18n/context';

const Products: React.FC = () => {
  const { t } = useI18n();
  const PRODUCT_DATA = [
    {
      id: 1,
      title: t.products.items["1"].title,
      category: t.products.categories.pallet_free,
      description: t.products.items["1"].desc,
      imageUrl: "/images/export-plywood-pallet.webp"
    },
    {
      id: 2,
      title: t.products.items["2"].title,
      category: t.products.categories.box,
      description: t.products.items["2"].desc,
      imageUrl: "/images/industrial-machinery-box.webp"
    },
    {
      id: 3,
      title: t.products.items["3"].title,
      category: t.products.categories.pallet_solid,
      description: t.products.items["3"].desc,
      imageUrl: "/images/solid-wood-pallet.webp"
    },
    {
      id: 4,
      title: t.products.items["4"].title,
      category: t.products.categories.box,
      description: t.products.items["4"].desc,
      imageUrl: "/images/precision-electronics-box.webp"
    },
    {
      id: 5,
      title: t.products.items["5"].title,
      category: t.products.categories.pallet_air,
      description: t.products.items["5"].desc,
      imageUrl: "/images/aviation-light-pallet.webp"
    },
    {
      id: 6,
      title: t.products.items["6"].title,
      category: t.products.categories.pallet_fume,
      description: t.products.items["6"].desc,
      imageUrl: "/images/export-fumigation-pallet.webp"
    },
    {
      id: 7,
      title: t.products.items["7"].title,
      category: t.products.categories.box,
      description: t.products.items["7"].desc,
      imageUrl: "/images/steel-strip-box.webp"
    },
    {
      id: 8,
      title: t.products.items["8"].title,
      category: t.products.categories.box,
      description: t.products.items["8"].desc,
      imageUrl: "/images/industrial-parts-box.webp"
    },
    {
      id: 9,
      title: t.products.items["9"].title,
      category: t.products.categories.base,
      description: t.products.items["9"].desc,
      imageUrl: "/images/heavy-equipment-base.webp"
    }
  ];

  const CATEGORIES = [
    t.products.categories.all,
    t.products.categories.box,
    t.products.categories.pallet_free,
    t.products.categories.pallet_solid,
    t.products.categories.pallet_air,
    t.products.categories.base
  ];

  const [activeCategory, setActiveCategory] = useState(t.products.categories.all);
  const filteredProducts = activeCategory === t.products.categories.all ? PRODUCT_DATA : PRODUCT_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">{t.products.subtitle}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{t.products.title}</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">{t.products.desc}</p>
        </div>
        
        <div id="category-filters" className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-amber-700 text-white shadow-md transform scale-105' 
                  : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div id="product-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  onError={(e: any) => {
                    e.target.src = "https://placehold.co/600x400/f5f5f4/a8a29e?text=待上传图片";
                  }}
                />
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md">
                  {product.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">{t.products.custom_cta}</p>
          <a href="#contact" className="text-amber-700 font-semibold border-b-2 border-amber-700 hover:text-amber-900 hover:border-amber-900 transition-colors">
            {t.products.custom_btn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;

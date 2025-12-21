import React, { useState } from "react";
import { SectionId, Product } from "../types";

const PRODUCT_DATA: Product[] = [
  {
    id: 1,
    title: "出口级胶合板托盘",
    category: "免熏蒸托盘",
    description: "高承重，符合ISPM15标准，直接出口",
    imageUrl: "/images/6.jpg",
  },
  {
    id: 2,
    title: "工业机械设备包装箱",
    category: "出口包装箱",
    description: "专为大型机械设计，结构稳固",
    imageUrl: "/images/5.jpg",
  },
  {
    id: 3,
    title: "实木托盘",
    category: "实木托盘",
    description: "耐用性强",
    imageUrl: "/images/1.jpg",
  },
  {
    id: 4,
    title: "电子设备精密包装",
    category: "出口包装箱",
    description: "防震防潮，保护精密仪器",
    imageUrl: "/images/4.jpg",
  },
  {
    id: 5,
    title: "航空专用轻型托盘",
    category: "航空托盘",
    description: "自重轻，降低空运成本",
    imageUrl: "/images/7.jpg",
  },
  {
    id: 6,
    title: "出口熏蒸托盘",
    category: "熏蒸托盘",
    description: "经过严格熏蒸处理",
    imageUrl: "/images/11.jpg",
  },
  {
    id: 7,
    title: "钢带包装箱",
    category: "出口包装箱",
    description: "高强度钢带加固，防震防潮，适合出口",
    imageUrl: "/images/10.jpg",
  },
  {
    id: 8,
    title: "工业配件箱包装箱",
    category: "出口包装箱",
    description: "循环使用，节省仓储空间",
    imageUrl: "/images/12.jpg",
  },
  {
    id: 9,
    title: "大型设备底座",
    category: "大型设备底座",
    description: "超强承重能力",
    imageUrl: "/images/16.webp",
  },
];

const CATEGORIES = [
  "全部",
  "出口包装箱",
  "免熏蒸托盘",
  "实木托盘",
  "航空托盘",
  "大型设备底座",
];

const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredProducts =
    activeCategory === "全部"
      ? PRODUCT_DATA
      : PRODUCT_DATA.filter((p) => p.category === activeCategory);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.currentTarget;
    target.src = "https://placehold.co/600x400/f5f5f4/a8a29e?text=待上传图片";
    target.onerror = null;
  };

  return (
    <section id={SectionId.PRODUCTS} className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">
            产品中心
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            满足各类物流运输需求
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            从精密电子到重型机械，我们提供全方位的木质包装解决方案。
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-amber-700 text-white shadow-md transform scale-105"
                  : "bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md">
                  {product.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            没有找到合适的规格？我们支持非标定制！
          </p>
          <a
            href="#contact"
            className="text-amber-700 font-semibold border-b-2 border-amber-700 hover:text-amber-900 hover:border-amber-900 transition-colors"
          >
            立即联系定制方案 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

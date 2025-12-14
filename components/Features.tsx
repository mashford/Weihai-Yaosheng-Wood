import React from 'react';
import { SectionId } from '../types';
import { ShieldCheck, Leaf, PenTool, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  const advantages = [
    {
      title: '源头工厂直供',
      description: '无中间商赚差价，自有原材料渠道，成本可控，为您提供最具竞争力的价格。',
      icon: <TrendingUp size={28} />,
    },
    {
      title: '匠心品质严控',
      description: '资深木工匠人团队，严格执行出口质量标准，承重力强，经久耐用。',
      icon: <ShieldCheck size={28} />,
    },
    {
      title: '绿色环保材质',
      description: '精选优质木材，支持免熏蒸工艺，符合国际环保要求，通关无忧。',
      icon: <Leaf size={28} />,
    },
    {
      title: '高效快速交付',
      description: '高效的生产流水线，标准品常备库存，加急订单快速响应，确保不误货期。',
      icon: <PenTool size={28} />,
    },
  ];

  return (
    <section id={SectionId.ADVANTAGES} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">核心优势</h2>
          <p className="mt-2 text-3xl font-bold text-stone-900 sm:text-4xl">
             为什么选择威海耀晟？
          </p>
          <p className="mt-4 text-lg text-stone-500 max-w-2xl mx-auto">
            我们不仅仅提供木箱和托盘，更提供让您安心的货物保障，助您生意通达全球。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => (
            <div key={index} className="group bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 text-amber-600 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 ring-1 ring-stone-200 group-hover:ring-amber-600">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{adv.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
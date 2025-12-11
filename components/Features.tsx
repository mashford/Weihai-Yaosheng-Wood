import React from 'react';
import { SectionId } from '../types';
import { ShieldCheck, Leaf, PenTool, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  const advantages = [
    {
      title: '源头工厂',
      description: '无中间商赚差价，自有原材料渠道，成本可控，为您提供最具竞争力的价格。',
      icon: <TrendingUp size={32} />,
    },
    {
      title: '品质严控',
      description: '资深木工匠人团队，严格执行出口质量标准，承重力强，经久耐用。',
      icon: <ShieldCheck size={32} />,
    },
    {
      title: '绿色环保',
      description: '精选优质木材，支持免熏蒸工艺，符合国际环保要求，通关无忧。',
      icon: <Leaf size={32} />,
    },
    {
      title: '快速交付',
      description: '高效的生产流水线，标准品常备库存，加急订单快速响应，确保不误货期。',
      icon: <PenTool size={32} />,
    },
  ];

  return (
    <section id={SectionId.ADVANTAGES} className="py-20 bg-amber-900 text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">为什么选择威海耀晟？</h2>
          <p className="mt-4 text-amber-200 max-w-2xl mx-auto">
            我们不仅仅提供木箱和托盘，更提供让您安心的货物保障。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => (
            <div key={index} className="bg-amber-800/50 backdrop-blur-sm rounded-xl p-6 border border-amber-700 hover:bg-amber-800 transition-colors duration-300">
              <div className="w-14 h-14 bg-amber-600 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
              <p className="text-amber-100/80 leading-relaxed text-sm">
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
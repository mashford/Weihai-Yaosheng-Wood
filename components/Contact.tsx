import React from 'react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">联系我们</h2>
          <h3 className="mt-2 text-3xl font-extrabold text-gray-900">
            期待与您携手共进
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            如果您对我们的产品感兴趣，或有任何定制需求，欢迎随时联系我们。我们的专业团队将在24小时内为您提供解决方案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Address */}
          <div className="bg-stone-50 rounded-xl p-6 border border-stone-100 flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
            </div>
            <div className="ml-4 text-left">
              <h4 className="text-lg font-medium text-gray-900">公司地址</h4>
              <p className="mt-1 text-gray-500">山东省威海市经济技术开发区 (示例地址)</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-stone-50 rounded-xl p-6 border border-stone-100 flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
            </div>
            <div className="ml-4 text-left">
              <h4 className="text-lg font-medium text-gray-900">咨询热线</h4>
              <p className="mt-1 text-gray-500">+86 631 1234 5678</p>
              <p className="text-gray-500">138 0000 0000 (张经理)</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-stone-50 rounded-xl p-6 border border-stone-100 flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
            </div>
            <div className="ml-4 text-left">
              <h4 className="text-lg font-medium text-gray-900">电子邮箱</h4>
              <p className="mt-1 text-gray-500">sales@yaoshengwood.com</p>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-stone-50 rounded-xl p-6 border border-stone-100 flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
            </div>
            <div className="ml-4 text-left">
              <h4 className="text-lg font-medium text-gray-900">工作时间</h4>
              <p className="mt-1 text-gray-500">周一至周六: 8:00 - 17:30</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
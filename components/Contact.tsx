import React from 'react';
import { SectionId } from '../types';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">联系我们</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900 mb-8">
              期待与您携手共进
            </h3>
            <p className="text-lg text-gray-500 mb-10">
              如果您对我们的产品感兴趣，或有任何定制需求，欢迎随时联系我们。我们的专业团队将在24小时内为您提供解决方案。
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">公司地址</h4>
                  <p className="mt-1 text-gray-500">山东省威海市经济技术开发区 (示例地址)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">咨询热线</h4>
                  <p className="mt-1 text-gray-500">+86 631 1234 5678</p>
                  <p className="text-gray-500">138 0000 0000 (张经理)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">电子邮箱</h4>
                  <p className="mt-1 text-gray-500">sales@yaoshengwood.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                    <Clock size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">工作时间</h4>
                  <p className="mt-1 text-gray-500">周一至周六: 8:00 - 17:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form / Map */}
          <div className="bg-stone-50 rounded-2xl p-8 shadow-lg border border-stone-100">
            <h4 className="text-xl font-bold text-gray-900 mb-6">在线留言</h4>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('感谢您的留言，我们会尽快联系您！'); }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">您的姓名</label>
                <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 bg-white p-3" placeholder="怎么称呼您" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">联系电话</label>
                <input type="tel" name="phone" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 bg-white p-3" placeholder="您的手机号码" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">需求描述</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 bg-white p-3" placeholder="请简述您的产品需求（尺寸、数量、用途等）"></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors">
                提交留言
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
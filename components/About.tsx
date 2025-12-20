import React from "react";
import { SectionId } from "../types";

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="relative mb-12 lg:mb-0">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/13.jpg"
                alt="Factory worker"
                className="rounded-lg shadow-xl w-full h-64 object-cover transform translate-y-4"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://picsum.photos/400/500?random=1";
                  target.onerror = null;
                }}
              />
              <img
                src="/images/14.jpg"
                alt="Wood piles"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://picsum.photos/400/500?random=2";
                  target.onerror = null;
                }}
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-700 text-white p-6 rounded-full shadow-2xl border-4 border-white text-center w-32 h-32 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold">10+</span>
              <span className="text-xs">年行业经验</span>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">
              关于耀晟
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              品质为本，诚信共赢
            </p>
            <div className="mt-4 text-lg text-gray-600 space-y-6">
              <p>
                威海耀晟木制品有限公司位于美丽的海滨城市——山东威海，是一家专注木制品加工，集研发、生产、销售、出口于一体的专业木制包装供应商。
              </p>
              <p>
                我们拥有一支经验丰富的技术工人团队，从原料甄选、切割组装到产品检验，每一道工序都由资深匠人严格把控，确保产品品质稳定。公司始终秉持“品质为本，诚信共赢”的经营理念，以专业的产品、高效的服务为客户创造价值。
              </p>
            </div>

            {/* Feature List */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-stone-50 rounded-lg">
                <div className="p-3 bg-amber-100 rounded-full text-amber-700 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">专业定制</h3>
                <p className="text-sm text-gray-500 mt-1">
                  满足不同行业特殊需求
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-stone-50 rounded-lg">
                <div className="p-3 bg-amber-100 rounded-full text-amber-700 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">资深团队</h3>
                <p className="text-sm text-gray-500 mt-1">匠心工艺，严格把控</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-stone-50 rounded-lg">
                <div className="p-3 bg-amber-100 rounded-full text-amber-700 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" x2="22" y1="12" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">全球出口</h3>
                <p className="text-sm text-gray-500 mt-1">符合国际物流标准</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

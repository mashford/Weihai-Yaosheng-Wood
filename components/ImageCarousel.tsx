// deprecated

import React, { useState, useEffect, useCallback } from "react";

const CAROUSEL_IMAGES = [
  { src: "/images/1.jpg", alt: "出口托盘实拍" },
  { src: "/images/2.jpg", alt: "大型包装箱" },
  { src: "/images/3.jpg", alt: "欧标托盘" },
  { src: "/images/4.jpg", alt: "精密仪器包装" },
  { src: "/images/5.jpg", alt: "航空专用托盘" },
  { src: "/images/6.jpg", alt: "熏蒸处理库" },
  { src: "/images/7.jpg", alt: "仓储实景" },
  { src: "/images/8.jpg", alt: "围板箱展示" },
  { src: "/images/9.jpg", alt: "特殊定制托盘" },
  { src: "/images/10.jpg", alt: "重型底座" },
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items per screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerScreen(1);
      else if (window.innerWidth < 1024) setItemsPerScreen(2);
      else setItemsPerScreen(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = CAROUSEL_IMAGES.length - itemsPerScreen;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [itemsPerScreen]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = CAROUSEL_IMAGES.length - itemsPerScreen;
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.currentTarget;
    target.src = `https://picsum.photos/600/400?random=${Math.floor(
      Math.random() * 100
    )}`;
    target.onerror = null;
  };

  return (
    <section className="py-20 bg-stone-50 overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">
              现场实拍
            </h2>
            <p className="mt-2 text-3xl font-bold text-stone-900">工厂实景</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-stone-200 bg-white text-stone-600 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200 transition-all duration-300 shadow-sm"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-stone-200 bg-white text-stone-600 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200 transition-all duration-300 shadow-sm"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="relative -mx-2 sm:-mx-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerScreen)
                }%)`,
              }}
            >
              {CAROUSEL_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-2 sm:px-4"
                  style={{ width: `${100 / itemsPerScreen}%` }}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer border border-stone-200 bg-white shadow-md hover:shadow-xl hover:border-amber-600/30 transition-all duration-300">
                    <img
                      src={img.src}
                      alt={img.alt}
                      onError={handleImageError}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full shadow-lg transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
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
                          className="text-amber-700"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" x2="16.65" y1="21" y2="16.65" />
                          <line x1="11" x2="11" y1="8" y2="14" />
                          <line x1="8" x2="14" y1="11" y2="11" />
                        </svg>
                      </div>
                    </div>
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium text-sm tracking-wide">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TimelineComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const timelineData = [
    {
      year: "2023",
      title: "Türkiye'nin en hızlı büyüyen 4'üncü teknoloji şirketi oldu.",
      desc: "Yılın Lider Yerli Savunma Sanayi Markası",
    },
    {
      year: "2023",
      title: "BİTES yüzde 100 ASELSAN iştiraki oldu",
      desc: "",
    },

    {
      year: "2021",
      title: "Savunma Sanayii Sektöründe ilk 3'te yer aldı",
      desc: "",
    },
    {
      year: "2020",
      title: "En yüksek gelire sahip ilk 10 şirketten biri oldu",
      desc: "",
    },
    {
      year: "2019",
      title: "BİTES ASELSAN bünyesine katıldı",
      desc: "",
    },
    {
      year: "2018",
      title: "Sikorsky Aircraft Corporation'a ilk ihracat",
      desc: "",
    },
    {
      year: "2017",
      title: "Ortadoğu'ya ilk ihracat",
      desc: "",
    },
    {
      year: "2015",
      title: "Airbus D&S'ye ilk ihracat",
      desc: "",
    },
    {
      year: "2014",
      title: "ATAK T-129 WBT & VMT programı ödüllendirildi",
      desc: "",
    },
    {
      year: "2012",
      title: "Almanya'ya ilk ihracat yapıldı",
      desc: "",
    },
    {
      year: "2009",
      title: "Savunma ve havacılık alanlarına ağırlık verilmeye başlandı",
      desc: "",
    },
    {
      year: "2008",
      title: "HELSIM-I iş paketleri başarıyla teslim edildi",
      desc: "",
    },
    {
      year: "2005",
      title: "HELSIM I Program-II sözleşmesi\nŞirket Kuruluşu",
      desc: "",
    },
  ];

  const scrollToIndex = (index: number) => {
    if (isScrolling) return;

    setIsScrolling(true);
    setCurrentIndex(index);

    const container = scrollContainerRef.current;
    if (container) {
      const itemWidth = 288 + 24; // 288px width (w-72) + 24px gap
      container.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }

    setTimeout(() => setIsScrolling(false), 500);
  };

  const handlePrevious = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : timelineData.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex < timelineData.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  const handleScroll = () => {
    if (isScrolling) return;

    const container = scrollContainerRef.current;
    if (container) {
      const itemWidth = 288 + 24; // 288px width (w-72) + 24px gap
      const newIndex = Math.round(container.scrollLeft / itemWidth);
      if (
        newIndex !== currentIndex &&
        newIndex >= 0 &&
        newIndex < timelineData.length
      ) {
        setCurrentIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [currentIndex, isScrolling]);

  return (
    <div className="relative w-full max-w-7xl mx-auto text-white overflow-hidden">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30">
        <button
          onClick={handlePrevious}
          className="p-2 bg-gray-800/90 hover:bg-gray-700/90 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600/30 shadow-lg"
          disabled={isScrolling}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-30">
        <button
          onClick={handleNext}
          className="p-2 bg-gray-800/90 hover:bg-gray-700/90 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600/30 shadow-lg"
          disabled={isScrolling}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Timeline Container */}
      <div className="relative px-12 py-16 min-h-[600px] overflow-hidden">
        {/* Scrollable Content */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          {timelineData.map((item, index) => {
            const isCenter = Math.floor(currentIndex) === index;
            const isVisible = Math.abs(index - currentIndex) <= 1;

            return (
              <div
                key={index}
                className={`flex-shrink-0 w-72 mt-10 snap-center relative transition-all duration-500 ${
                  isVisible ? "opacity-100" : "opacity-40"
                } ${isCenter ? "scale-105" : "scale-95"}`}
                style={{ minHeight: "450px" }}
              >
                {/* Timeline Node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div
                    className={`w-5 h-5 rounded-full border-3 transition-all duration-300 ${
                      isCenter
                        ? "bg-blue-500 border-blue-300 shadow-lg shadow-blue-500/50"
                        : "bg-gray-700 border-gray-500"
                    }`}
                  >
                    {isCenter && (
                      <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                    )}
                  </div>
                </div>

                {/* Content positioned alternately above and below */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 text-center w-64 z-15 ${
                    index % 2 === 0 ? "bottom-1/2 mb-10" : "top-1/2 mt-10"
                  }`}
                >
                  {/* Alternating layout: even indices show year on top, odd show title on top */}
                  {index % 2 === 0 ? (
                    <div className="space-y-3">
                      {/* Year on top for even indices */}
                      <div className="inline-block px-4 py-2 bg-gray-800/80 rounded-full backdrop-blur-sm border border-gray-600/50">
                        <span className="text-2xl font-bold text-white">
                          {item.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-bold text-white">
                        {item.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed px-2">
                        {item.desc}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {/* Title on top for odd indices */}
                      <h2 className="text-xl font-bold text-white">
                        {item.title}
                      </h2>

                      {/* Year */}
                      <div className="inline-block px-4 py-2 bg-gray-800/80 rounded-full backdrop-blur-sm border border-gray-600/50">
                        <span className="text-xl font-bold text-white">
                          {item.year}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed px-2">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>

                {/* Connecting Line from node to content */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-500 z-15 ${
                    index % 2 === 0 ? "bottom-1/2 h-6 mb-2" : "top-1/2 h-6 mt-2"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {timelineData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-500 w-6"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            disabled={isScrolling}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 z-20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
          style={{
            width: `${((currentIndex + 1) / timelineData.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default TimelineComponent;

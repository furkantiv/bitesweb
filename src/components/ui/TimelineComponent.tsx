"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Timeline() {
  const t = useTranslations("AboutPage");
  const timelineData = t.raw("timeline") as { year: string; title: string }[];
  const [windowWidth, setWindowWidth] = React.useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Breakpoint: mobil < 640, masaüstü >= 640
  const isMobile = mounted ? windowWidth < 640 : false; // SSR'da hep desktop göster

  // KART ÖLÇÜLERİ
  const CARD_WIDTH = isMobile ? 320 : 500;
  const CARD_HEIGHT = 200;
  const GAP = isMobile ? 16 : 32;
  const ITEM_SIZE = CARD_WIDTH + GAP;
  const VISIBLE_COUNT = isMobile ? 1 : 3;
  const CONTAINER_SIZE = CARD_WIDTH * VISIBLE_COUNT + GAP * (VISIBLE_COUNT - 1);

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = timelineData.length;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // translate için hesaplama (mobilde Y, masaüstünde X)
  const calcTranslate = () => {
    const centerOffset = CONTAINER_SIZE / 2 - CARD_WIDTH / 2;
    return -currentIndex * ITEM_SIZE + centerOffset;
  };

  return (
    <div className="relative w-full py-4 rounded-2xl border border-[#35434D] text-white overflow-hidden">
      {/* Oklar */}
      <>
        {/* Sol */}
        <button
          className="absolute z-20 left-2 top-1/2 -translate-y-1/2 p-2 border border-gray-600/50 shadow-lg bg-transparent hover:bg-gray-600/50 rounded-full"
          onClick={goPrev}
          aria-label="Geri"
        >
          <ChevronLeft />
        </button>
        {/* Sağ */}
        <button
          className="absolute z-20 right-2 top-1/2 -translate-y-1/2 p-2 border border-gray-600/50 shadow-lg bg-transparent hover:bg-gray-600/50 rounded-full"
          onClick={goNext}
          aria-label="İleri"
        >
          <ChevronRight />
        </button>
      </>

      {/* Timeline */}
      <div className="py-2 flex items-center justify-center min-h-[200px]">
        <div
          style={{
            width: isMobile ? `${CARD_WIDTH}px` : `${CONTAINER_SIZE}px`,
            height: isMobile ? `${CONTAINER_SIZE}px` : `${CARD_HEIGHT}px`,
            position: "relative",
          }}
        >
          <motion.div
            className="flex"
            style={{
              gap: `${GAP}px`,
              width: `${ITEM_SIZE * total}px`,
              height: "100%",
            }}
            animate={{ x: calcTranslate() }}
            transition={{ type: "spring", stiffness: 80, damping: 22 }}
          >
            {timelineData.map((item, idx) => {
              const isActive = idx === currentIndex;
              const isUp = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`
                    flex-shrink-0 relative transition-transform duration-300
                    ${isActive ? "scale-105 z-10" : "opacity-60 scale-95"}
                  `}
                  style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${CARD_HEIGHT}px`,
                  }}
                >
                  {/* Dot */}
                  {isMobile ? (
                    <></>
                  ) : (
                    <div className="absolute py-2 px-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0.7, opacity: 0.25 }}
                        animate={{
                          scale: isActive ? 1 : 0.7,
                          opacity: isActive ? 1 : 0.25,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                      >
                        <Image
                          src="/images/icons/about/TimeLineDot.svg"
                          alt=" "
                          width={30}
                          height={30}
                        />
                      </motion.div>
                    </div>
                  )}

                  {/* Content Card */}
                  <div
                    className={`
                      absolute left-1/2
                      ${
                        isUp
                          ? "bottom-[calc(30%+32px)]"
                          : "top-[calc(70%+32px)]"
                      }
                      px-3 py-2 justify-center shadow-xl rounded-2xl border border-[#35434D]
                      transition-all duration-300 
                      ${isActive ? "scale-100" : "opacity-60"}
                    `}
                    style={{
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="text-3xl font-semibold text-center justify-center select-none">
                      {item.year}
                    </div>
                  </div>
                  <div
                    className={`
                      absolute left-1/2
                      ${
                        !isUp
                          ? "bottom-[calc(30%+32px)]"
                          : "top-[calc(60%+32px)]"
                      }
                      px-2 shadow-xl w-full justify-center 
                      transition-all duration-300 
                      ${isActive ? "scale-105" : "opacity-60"}
                    `}
                    style={{
                      transform: "translate(-50%, 50% )",
                    }}
                  >
                    {item.title && (
                      <div className="text-center p-2 justify-center text-white text-sm font-normal">
                        {item.title}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-5 left-5 right-5 h-1 rounded-full bg-gray-800 z-20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
          style={{
            width: `${((currentIndex + 1) / total) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

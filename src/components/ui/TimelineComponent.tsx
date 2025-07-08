"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Center } from "@react-three/drei";
import Image from "next/image";

type TimelineItem = {
  year: string;
  title: string;
  desc: string;
};
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const timelineData: TimelineItem[] = [
  {
    year: "2023",
    title:
      "BİTES became a 100% subsidairy of ASELSAN. Became Turkiye’s 4th fastest growing technology company. Leading Domestic Defence Industry Brand of the year.",
    desc: "",
  },
  { year: "2023", title: "BİTES yüzde 100 ASELSAN iştiraki oldu", desc: "" },
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
  { year: "2019", title: "BİTES ASELSAN bünyesine katıldı", desc: "" },
  {
    year: "2018",
    title: "Sikorsky Aircraft Corporation'a ilk ihracat",
    desc: "",
  },
  { year: "2017", title: "Ortadoğu'ya ilk ihracat", desc: "" },
  { year: "2015", title: "Airbus D&S'ye ilk ihracat", desc: "" },
  {
    year: "2014",
    title: "ATAK T-129 WBT & VMT programı ödüllendirildi",
    desc: "",
  },
  { year: "2012", title: "Almanya'ya ilk ihracat yapıldı", desc: "" },
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

export default function Timeline() {
  const [windowWidth, setWindowWidth] = React.useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Breakpoint: mobil < 640, masaüstü >= 640
  const isMobile = windowWidth < 640;

  // KART ÖLÇÜLERİ
  const CARD_WIDTH = isMobile ? 350 : 500;
  const CARD_HEIGHT = 300;
  const GAP = isMobile ? 16 : 32;
  const ITEM_SIZE = isMobile ? CARD_HEIGHT + GAP : CARD_WIDTH + GAP;
  const VISIBLE_COUNT = isMobile ? 1 : 3;
  const CONTAINER_SIZE = isMobile
    ? CARD_HEIGHT * VISIBLE_COUNT + GAP * (VISIBLE_COUNT - 1)
    : CARD_WIDTH * VISIBLE_COUNT + GAP * (VISIBLE_COUNT - 1);

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
    const centerOffset =
      CONTAINER_SIZE / 2 - (isMobile ? CARD_HEIGHT : CARD_WIDTH) / 2;
    return isMobile
      ? -currentIndex * ITEM_SIZE + centerOffset
      : -currentIndex * ITEM_SIZE + centerOffset;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-4 rounded-2xl border border-white/10 text-white overflow-hidden">
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
      <div
        className={`
          ${isMobile ? "px-2 py-8" : "py-2"}
          flex items-center justify-center min-h-[300px]
        `}
      >
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
              height: isMobile ? `${ITEM_SIZE * total}px` : "100%",
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
                          src={`${basePath}/images/icons/about/TimeLineDot.svg`}
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
                        isMobile
                          ? "top-1/2"
                          : isUp
                          ? "bottom-[calc(50%+36px)]"
                          : "top-[calc(50%+36px)]"
                      }
                      px-4 py-2 justify-center shadow-xl rounded-2xl border border-white/10
                      transition-all duration-300 
                      ${isActive ? "scale-105" : "opacity-60"}
                    `}
                    style={{
                      transform: isMobile
                        ? "translate(-50%, -50%)"
                        : "translateX(-50%)",
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
                        isMobile
                          ? "top-1/2"
                          : !isUp
                          ? "bottom-[calc(50%+62px)]"
                          : "top-[calc(50%+36px)]"
                      }
                      px-2 shadow-xl w-full justify-center 
                      transition-all duration-300 
                      ${isActive ? "scale-105" : "opacity-60"}
                    `}
                    style={{
                      transform: isMobile
                        ? "translate(-50%, -50%)"
                        : "translate(-50%, 50% )",
                    }}
                  >
                    {item.title && (
                      <div className="text-center justify-center text-white text-sm font-normal">
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
      <div className="absolute bottom-5 left-5 right-5 h-1 rounded-2xl bg-gray-800 z-20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transition-all duration-500"
          style={{
            width: `${((currentIndex + 1) / total) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

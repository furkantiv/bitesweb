"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { NewsType } from "@/data/news";
import Image from "next/image";

interface LastNewsCardProps {
  newsList: NewsType[];
}

export const LastNewsCard: React.FC<LastNewsCardProps> = ({ newsList }) => {
  const locale = useLocale();
  const t = useTranslations();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const news = newsList[index];
  // Çok dilli stringleri locale'a göre al
  type SupportedLocale = keyof typeof news.title;
  const safeLocale = (locale in news.title ? locale : "en") as SupportedLocale;
  const title = news.title[safeLocale];
  const description = news.description[safeLocale];
  const source = news.source[safeLocale];
  // HOOK'lardan sonra, ilk satırda kontrol:

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % newsList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [newsList.length]);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) {
      setDirection(1);
      setIndex((prev) => (prev + 1) % newsList.length);
    } else if (info.offset.x > 50) {
      setDirection(-1);
      setIndex((prev) => (prev - 1 + newsList.length) % newsList.length);
    }
  };

  if (!newsList || newsList.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <h4 className="text-md font-semibold border-t pt-2 border-[#35434D] text-white mb-3 truncate">
        {t("newsPage.lastNews")}
      </h4>
      <div className="relative h-[90px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction * 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -80, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex gap-4 w-full absolute left-0 top-0 cursor-grab"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <div className="w-[120px] h-[80px] rounded-lg overflow-hidden flex-shrink-0">
              <Image
                width={120}
                height={80}
                src={news.image[0]}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="text-white font-medium text-sm line-clamp-1 mb-1">
                {title}
              </div>
              <div className="text-gray-400 text-xs line-clamp-2 mb-1">
                {description}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 truncate">
                <span className="truncate">{news.date}</span>
                <span className="text-white">|</span>
                <span className="truncate">{source}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export type News = {
  image: string;
  title: string;
  description: string;
  date: string;
  source: string;
};

interface LastNewsCardProps {
  newsList: News[];
  index: number;
  setIndex: (cb: (prev: number) => number) => void;
  direction: number;
  setDirection: (dir: number) => void;
}

const CARD_HEIGHT = 88;

export const LastNewsCard: React.FC<LastNewsCardProps> = ({
  newsList,
  index,
  setIndex,
  direction,
  setDirection,
}) => {
  // Eğer 0 veya boşsa gösterme
  if (!newsList || newsList.length === 0) return null;

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) {
      setDirection(1);
      setIndex((prev) => (prev + 1) % newsList.length);
    } else if (info.offset.x > 50) {
      setDirection(-1);
      setIndex((prev) => (prev - 1 + newsList.length) % newsList.length);
    }
  };

  const news = newsList[index];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="bg-transparent p-4 "
    >
      <h4 className="text-md font-semibold border-t pt-2 border-[#35434D] text-white mb-3 truncate">
        Last News
      </h4>
      <div className={`relative min-h-[${CARD_HEIGHT}px] overflow-hidden`}>
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
            <div className="w-24 h-22 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="text-white font-medium text-sm line-clamp-1 mb-1">
                {news.title}
              </div>
              <div className="text-gray-400 text-xs line-clamp-2 mb-1">
                {news.description}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 truncate">
                <span className="truncate">{news.date}</span>
                <span className="text-white">|</span>
                <span className="truncate">{news.source}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NewsContent from "../ui/NewsContent";
import NewsContentForHome from "../ui/NewsContentForHome";

const newsItems = [
  {
    id: 1,
    timeAgo: "23 September, 2025",
    source: "Bites News",
    date: "23 September, 2025",
    title: "10th of January Journalists'...",
    description:
      "We celebrate the 10th of January Journalists' Day of our valuable press...",
    image:
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=300&h=200&fit=crop&crop=center",
  },
  {
    id: 2,
    timeAgo: "5 Hours ago...",
    source: "Tech Today",
    date: "23 September, 2025",
    title: "AI Revolution in Modern...",
    description:
      "Artificial Intelligence continues to transform industries across the globe...",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop&crop=center",
  },
  {
    id: 3,
    timeAgo: "8 Hours ago...",
    source: "Climate Report",
    date: "23 September, 2025",
    title: "Ocean Temperature Rise...",
    description:
      "New research shows unprecedented changes in global ocean temperatures...",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop&crop=center",
  },
];

const NewsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const currentNews = newsItems[currentIndex];

  return (
    <div className="w-full max-w-2xl mx-auto p-0">
      <div className="bg-transparent rounded-2xl p-6 relative overflow-hidden ">
        {/* Header with separator line */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#35434D]">
          <h2 className="text-xl  text-white font-medium">Last News</h2>

          <div className="flex items-center gap-2">
            <button
              onClick={prevNews}
              className="p-2 bg-transparent hover:bg-gray-600/50 rounded-full transition-all duration-300 border border-gray-600/50 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextNews}
              className="p-2 bg-transparent hover:bg-gray-600/50 rounded-full transition-all duration-300 border border-gray-600/50 shadow-lg"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <div className="w-full max-h-32">
            <NewsContentForHome key={currentNews.id} news={currentNews} />
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewsCard;

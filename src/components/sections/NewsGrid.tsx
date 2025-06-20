import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsItems = [
    {
      id: 1,
      timeAgo: "3 Hours ago...",
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

  const nextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const currentNews = newsItems[currentIndex];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-transparent rounded-2xl p-6 relative overflow-hidden ">
        {/* Header with separator line */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
          <h2 className="text-xl text-white font-medium">Last News</h2>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevNews}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextNews}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentNews.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex gap-6"
          >
            {/* Time Badge */}
            <div className="flex-shrink-0">
              <div className="text-white">
                <div className="text-4xl font-light mb-1">
                  {currentNews.timeAgo.split(" ")[0]}
                </div>
                <div className="text-sm text-gray-400">
                  {currentNews.timeAgo.split(" ").slice(1).join(" ")}
                </div>
              </div>
            </div>

            {/* Main Content with separator line */}
            <div className="flex-1 flex gap-4 pl-4 border-l border-white/20">
              {/* Image */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-24 rounded-lg overflow-hidden border border-white/10"
                >
                  <img
                    src={currentNews.image}
                    alt={currentNews.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-300 text-sm font-medium">
                    {currentNews.source}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {currentNews.date}
                  </span>
                </div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-white text-lg font-medium mb-2 line-clamp-2"
                >
                  {currentNews.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 text-sm line-clamp-2"
                >
                  {currentNews.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicator Dots with separator line */}
        <div className="flex justify-center gap-2 mt-6 pt-4 border-t border-white/20">
          {newsItems.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

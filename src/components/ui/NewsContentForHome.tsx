"use client";
import { motion } from "framer-motion";

export interface NewsContentProps {
  news: {
    id: number;
    timeAgo: string;
    source: string;
    date: string;
    title: string;
    description: string;
    image: string;
  };
}

const NewsContentForHome: React.FC<NewsContentProps> = ({ news }) => (
  <motion.div
    key={news.id}
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
          {news.timeAgo.split(" ")[0]}
        </div>
        <div className="text-sm text-gray-400">
          {news.timeAgo.split(" ").slice(1).join(" ")}
        </div>
      </div>
    </div>

    {/* Main Content with separator line */}
    <div className="flex-1 flex gap-4 pl-4 border-l border-white/20">
      {/* Image */}
      <div className="flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-32 h-28 rounded-lg overflow-hidden border border-white/10"
        >
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-300 text-sm font-medium">
            {news.source}
          </span>
          <span className="text-gray-500 text-sm">{news.date}</span>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-lg font-medium mb-2 line-clamp-2"
        >
          {news.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm line-clamp-2"
        >
          {news.description}
        </motion.p>
      </div>
    </div>
  </motion.div>
);

export default NewsContentForHome;

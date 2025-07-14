"use client";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export interface NewsContentProps {
  news: {
    id: number;
    source: Record<string, string>; // { en: "...", tr: "..." }
    date: string;
    title: Record<string, string>;
    description: Record<string, string>;
    image: string[];
  };
}

const NewsContent: React.FC<NewsContentProps> = ({ news }) => {
  const locale = useLocale();

  const source = news.source[locale] || news.source["en"];
  const title = news.title[locale] || news.title["en"];
  const description = news.description[locale] || news.description["en"];

  return (
    <motion.div
      key={news.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col md:flex-row gap-4 md:gap-6"
    >
      {/* Time Badge - Only for md and up */}
      <div className="hidden md:flex flex-col items-start gap-1 flex-shrink-0 mb-2 md:mb-0">
        <div className="text-white text-2xl md:text-4xl font-light leading-none">
          {news.date.split(" ")[0]}
        </div>
        <div className="text-xs md:text-sm text-gray-400">
          {news.date.split(" ")[1]}
        </div>
        <div className="text-xs md:text-sm text-gray-400">
          {news.date.split(" ")[2]}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 gap-3 md:gap-4 md:pl-4 border-l-0 md:border-l border-[#35434D]">
        {/* Image */}
        <div className="flex-shrink-0 mb-2 md:mb-0">
          <div className="w-full h-40 md:w-72 md:h-48 rounded-lg overflow-hidden border border-[#35434D] bg-gray-900/50">
            <Image
              src={news.image[0]}
              alt={title}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-start">
          <div className="flex justify-between gap-2 mb-1 md:mb-2 items-center">
            <span className="text-gray-300 text-xs md:text-sm font-medium">
              {source}
            </span>
            {/* Time Badge - Only mobile */}
            <div className="flex md:hidden flex-row items-center gap-1 flex-shrink-0">
              <div className="text-gray-300 text-xs font-light leading-none">
                {news.date.split(" ")[0]}
              </div>
              <div className="text-xs text-gray-300">
                {news.date.split(" ")[1]}
              </div>
              <div className="text-xs text-gray-300">
                {news.date.split(" ")[2]}
              </div>
            </div>
          </div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-base md:text-lg font-medium mb-1 md:mb-2 line-clamp-2"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xs md:text-sm line-clamp-5"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsContent;

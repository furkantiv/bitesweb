"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect, useRef, useCallback } from "react";
import NewsContentForHome from "../ui/NewsContentForHome";
import { formatNewsDate } from "@/utils/formatDate"; // EKLENDİ
import { useLocale } from "next-intl";

type NewsItem = {
  id: number;
  source: { en: string; tr: string };
  date: string;
  title: { en: string; tr: string };
  description: { en: string; tr: string };
  image: string[];
  category: string;
  content: { en: string; tr: string };
};

interface NewsCardProps {
  newsItems: NewsItem[];
  locale?: "tr" | "en";
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const locale = useLocale();

  const nextNews = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (newsItems?.length || 1));
  }, [newsItems?.length]);

  const prevNews = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + (newsItems?.length || 1)) % (newsItems?.length || 1)
    );
  }, [newsItems?.length]);

  useEffect(() => {
    if (!newsItems || newsItems.length === 0) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      nextNews();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, nextNews, newsItems]);

  if (!newsItems || newsItems.length === 0) return null;

  const currentNews = newsItems[currentIndex];

  return (
    <div className="w-full max-w-xl ">
      <div className="bg-transparent p-3 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#35434D]">
          <h2 className="text-xl text-white font-medium">
            {locale === "tr" ? "Son Haberler" : "Last News"}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                prevNews();
                if (intervalRef.current) clearInterval(intervalRef.current);
              }}
              className="p-2 bg-transparent hover:bg-gray-600/50 rounded-full transition-all duration-300 border border-[#35434D] shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => {
                nextNews();
                if (intervalRef.current) clearInterval(intervalRef.current);
              }}
              className="p-2 bg-transparent hover:bg-gray-600/50 rounded-full transition-all duration-300 border border-[#35434D] shadow-lg"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentNews.id}
            className="w-full max-h-32"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
          >
            <NewsContentForHome
              news={currentNews}
              locale={locale as "tr" | "en"}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewsCard;

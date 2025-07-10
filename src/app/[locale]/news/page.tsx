"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewsContent from "@/components/ui/NewsContent";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { newsList, NewsType } from "@/data/news";
import { LastNewsCard } from "@/components/ui/LastNewsCard";
import { useTranslations } from "next-intl";
import { slugify } from "@/utils/slugify";
import FollowUs from "@/components/ui/FollowUs";

const categories = [
  { value: "all" },
  { value: "defence" },
  { value: "bites" },
  { value: "tech" },
];

const NewsPage = () => {
  const t = useTranslations();

  const [selected, setSelected] = useState<string>("all");

  // Filtered news by category
  const filteredNews =
    selected === "all"
      ? newsList
      : newsList.filter((n) => n.category === selected);

  const [index, setIndex] = useState(0);
  const lastThreeNews = newsList.slice(-3);
  const [direction, setDirection] = useState(1);
  const [hideMobileFilters, setHideMobileFilters] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        setHideMobileFilters(window.scrollY > 40);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-20 md:px-0 md:pt-20 w-full min-h-screen bg-transparent flex gap-8 justify-center">
        {/* Left: News List */}
        <div className="flex-1 max-w-7xl">
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="flex flex-col gap-6"
          >
            {filteredNews.length === 0 ? (
              <div className="text-white text-center py-12">
                No news found in this category.
              </div>
            ) : (
              filteredNews.map((news) => (
                <motion.div
                  key={news.id}
                  layout
                  transition={{ type: "spring", stiffness: 200, damping: 26 }}
                  className="flex items-start gap-4 p-4 bg-transparent rounded-2xl border border-[#35434D] hover:border-[#35434D] transition-all"
                >
                  <div className="flex-1 flex flex-col gap-2">
                    <Link
                      href={`/news/${slugify(news.title.en)}`}
                      key={news.id}
                      prefetch={false}
                      className="block"
                    >
                      <motion.div
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 26,
                        }}
                        className="hover:scale-[1.01] transition-all"
                      >
                        <NewsContent news={news} />
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>

        {/* Right: Fixed Sidebar - Hidden on mobile, visible on lg+ */}
        <aside className="hidden lg:block w-full max-w-sm z-10">
          <div className="fixed top-40 w-full max-w-sm">
            <div className="w-full max-w-sm flex flex-col gap-10">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 px-5"
              >
                <h3 className="text-lg font-medium border-t pt-2 border-[#35434D] text-white mb-4">
                  {t("newsPage.categories")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelected(cat.value)}
                      className={`px-4 py-1 rounded-full border text-sm ${
                        selected === cat.value
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-white border-[#35434D] hover:bg-white/10"
                      } transition-all`}
                    >
                      {t("newsCategories." + cat.value)}
                    </button>
                  ))}
                </div>
              </motion.div>
              {/* Last News Card */}
              <div className="flex-1 px-5">
                <LastNewsCard newsList={lastThreeNews} />
              </div>
              {/* Social links */}
              <div className="flex-1 px-5">
                <FollowUs />
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Categories - Visible only on mobile */}
        <AnimatePresence>
          {!hideMobileFilters && (
            <motion.div
              key="mobile-filters"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed top-14 left-0 right-0 z-10 backdrop-blur-md p-2"
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelected(cat.value)}
                      className={`px-4 py-1 rounded-full border text-sm ${
                        selected === cat.value
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-white border-[#35434D] hover:bg-white/10"
                      } transition-all`}
                    >
                      {t("newsCategories." + cat.value)}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <footer className="relative z-50">
        <Footer />
      </footer>
    </>
  );
};

export default NewsPage;

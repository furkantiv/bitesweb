"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewsContent from "@/components/ui/NewsContent";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { newsList } from "@/data/news";
import { LastNewsCard } from "@/components/ui/LastNewsCard";

const categories = [
  { label: "All News", value: "all" },
  { label: "Defence News", value: "defence" },
  { label: "Bites News", value: "bites" },
  { label: "Tech News", value: "tech" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const NewsPage = () => {
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

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % lastThreeNews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [lastThreeNews.length]);

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
                      href={`/news/${slugify(news.title)}`}
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
          <div className="fixed top-40 w-full max-w-sm h-screen overflow-y-auto">
            <div className="w-full max-w-sm flex flex-col gap-2">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-transparent px-6 "
              >
                <h3 className="text-lg font-medium border-t pt-2 border-[#35434D] text-white mb-4">
                  Categories
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
                      {cat.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Last News Card */}
              <LastNewsCard
                newsList={lastThreeNews}
                index={index}
                setIndex={setIndex}
                direction={direction}
                setDirection={setDirection}
              />

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-transparent p-4"
              >
                <h4 className="text-md border-t border-[#35434D] font-semibold pt-2 text-white mb-3">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <motion.div variants={fadeUp}>
                    <motion.div
                      className="flex items-center gap-5 mt-2"
                      initial={false}
                    >
                      <motion.div whileHover={{ scale: 1.2, color: "#60a5fa" }}>
                        <Link
                          href="#"
                          className="text-white hover:text-blue-400 transition"
                        >
                          <Linkedin size={20} />
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2, color: "#ef4444" }}>
                        <Link
                          href="#"
                          className="text-white hover:text-red-500 transition"
                        >
                          <Youtube size={20} />
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2, color: "#3b82f6" }}>
                        <Link
                          href="#"
                          className="text-white hover:text-blue-500 transition"
                        >
                          <Facebook size={20} />
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2, color: "#f472b6" }}>
                        <Link
                          href="#"
                          className="text-white hover:text-pink-400 transition"
                        >
                          <Instagram size={20} />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
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
                      {cat.label}
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

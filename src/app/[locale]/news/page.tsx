"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewsContent from "@/components/ui/NewsContent";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { newsList, NewsType } from "@/data/news";
import { LastNewsCard } from "@/components/ui/LastNewsCard";
import { useTranslations } from "next-intl";
import { slugify } from "@/utils/slugify";
import FollowUs from "@/components/ui/FollowUs";

const categories = [{ value: "all" }, { value: "defence" }, { value: "bites" }];
const ITEMS_PER_PAGE = 3;

const NewsPage = () => {
  const t = useTranslations();

  const [selected, setSelected] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [hideMobileFilters, setHideMobileFilters] = useState(false);

  // Kategori değişince ilk sayfaya dön
  useEffect(() => {
    setCurrentPage(1);
  }, [selected]);

  // Mobil filtreyi scroll ile gizle/göster
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        setHideMobileFilters(window.scrollY > 40);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Seçili kategoriye göre haberleri filtrele
  const filteredNews =
    selected === "all"
      ? newsList
      : newsList.filter((n) => n.category === selected);

  // Pagination hesapları
  const pageCount = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Son 3 haber
  const lastThreeNews = newsList.slice(-3);

  // Pagination component
  const Pagination = () =>
    pageCount > 1 ? (
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded border text-sm ${
            currentPage === 1
              ? "bg-[#22293A] text-gray-400 border-[#35434D] cursor-not-allowed"
              : "bg-transparent text-white border-[#35434D] hover:bg-white/10"
          }`}
        >
          &lt;
        </button>
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded border text-sm ${
              currentPage === i + 1
                ? "bg-[#004CFF] text-white border-[#004CFF]"
                : "bg-transparent text-white border-[#35434D] hover:bg-white/10"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
          disabled={currentPage === pageCount}
          className={`px-3 py-1 rounded border text-sm ${
            currentPage === pageCount
              ? "bg-[#22293A] text-gray-400 border-[#35434D] cursor-not-allowed"
              : "bg-transparent text-white border-[#35434D] hover:bg-white/10"
          }`}
        >
          &gt;
        </button>
      </div>
    ) : null;

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 py-20 md:px-0 md:pt-20 w-full min-h-screen bg-transparent flex gap-8 justify-center">
        {/* Sol: News List */}
        <div className="flex-1 max-w-7xl">
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="flex flex-col gap-6"
          >
            {paginatedNews.length === 0 ? (
              <div className="text-white text-center py-12">
                No news found in this category.
              </div>
            ) : (
              paginatedNews.map((news) => (
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
          {/* Pagination */}
          <Pagination />
        </div>

        {/* Sağ: Fixed Sidebar - Hidden on mobile, visible on lg+ */}
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
                          ? "bg-transparent text-white border-[#004CFF]"
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
              className="lg:hidden fixed top-14 left-0 right-0 z-10 p-2"
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelected(cat.value)}
                      className={`px-4 py-1 rounded-full border text-sm ${
                        selected === cat.value
                          ? "bg-transparent text-white border-[#004CFF]"
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

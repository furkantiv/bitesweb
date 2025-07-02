"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewsContent from "@/components/ui/NewsContent";
// adjust the path as needed

const categories = [
  { label: "All News", value: "all" },
  { label: "Defence News", value: "defence" },
  { label: "Bites News", value: "bites" },
  { label: "Tech News", value: "tech" },
];

// Example news data, categorized
const newsList = [
  {
    id: 1,
    timeAgo: "07 Hours ago...",
    source: "Bites News",
    date: "23 September, 2025",
    title: "Mr. Faruk YILMAZ visited BITES",
    description:
      "Mr. Faruk YILMAZ, Head of Strategy Department of UDHAM Presidency of the Ministry of Transport and Infrastructure of the Republic of Turkey and...",
    image:
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=240&fit=crop&crop=center",
    category: "bites",
  },
  {
    id: 2,
    timeAgo: "23 May, 2025",
    source: "Bites News",
    date: "23 September, 2025",
    title: "10th of January Journalists' Day of our valuable press members",
    description:
      "We celebrate the 10th of January Journalists' Day of our valuable press members who ensure the public's access to information under all circumsta...",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=240&fit=crop&crop=center",
    category: "bites",
  },
  {
    id: 3,
    timeAgo: "12 May, 2025",
    source: "Defence News",
    date: "23 September, 2025",
    title: "Flag Rises in New Tech!",
    description:
      "We celebrate the 10th of January Journalists' Day of our valuable press members who ensure the public's access to information under all circumsta...",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=240&fit=crop&crop=center",
    category: "defence",
  },
  {
    id: 4,
    timeAgo: "16 May, 2025",
    source: "Tech News",
    date: "23 September, 2025",
    title: "AI VR Trends of 2025",
    description:
      "We celebrate the 10th of January Journalists' Day of our valuable press members who ensure the public's access to information under all circumsta...",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
    category: "tech",
  },
];

const socialIcons = [
  { icon: "X", link: "#" },
  { icon: "in", link: "#" },
  { icon: "f", link: "#" },
  { icon: "yt", link: "#" },
];

const NewsPage = () => {
  const [selected, setSelected] = useState<string>("all");

  // Filtered news by category
  const filteredNews =
    selected === "all"
      ? newsList
      : newsList.filter((n) => n.category === selected);

  // For the sidebar "Last News" (pick the first from filtered or all)
  const lastNews = filteredNews[0] ?? newsList[0];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 md:pt-20 w-full min-h-screen py-8 bg-transparent flex gap-8 justify-center">
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
                className="flex items-start gap-4 p-4 bg-transparent rounded-2xl border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="flex-1 flex flex-col gap-2">
                  <NewsContent news={news} />
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>

      {/* Right: Sidebar */}
      <aside className="w-full max-w-sm flex flex-col gap-8">
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-transparent p-6 rounded-2xl border border-white/10"
        >
          <h3 className="text-lg font-medium text-white mb-4">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelected(cat.value)}
                className={`px-4 py-1 rounded-full border text-sm ${
                  selected === cat.value
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-white/30 hover:bg-white/10"
                } transition-all`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Last News Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-transparent p-4 rounded-2xl border border-white/10"
        >
          <h4 className="text-md font-semibold text-white mb-3">Last News</h4>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <div className="w-24 h-20 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
                <img
                  src={lastNews.image}
                  alt={lastNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="text-white font-medium text-sm line-clamp-2 mb-1">
                  {lastNews.title}
                </div>
                <div className="text-gray-400 text-xs line-clamp-2 mb-1">
                  {lastNews.description}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  {lastNews.date} <span className="text-white">|</span>{" "}
                  {lastNews.source}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-transparent p-4 rounded-2xl border border-white/10"
        >
          <h4 className="text-md font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-4">
            {/* Use your own icons or lucide-react here */}
            {socialIcons.map((s, i) => (
              <a
                key={i}
                href={s.link}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/30 transition-all"
                aria-label={s.icon}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Placeholder for icons */}
                <span className="text-lg">{s.icon}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </aside>
    </div>
  );
};

export default NewsPage;

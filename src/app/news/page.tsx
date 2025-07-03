"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NewsContent from "@/components/ui/NewsContent";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

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
    title:
      "Mr. Faruk YILMAZ visited BITES with a delegation of more than twenty-five experts and directors from various departments in a remarkable event focusing on the digital transformation and future strategies for the company, highlighting his extensive experience and vision for innovation in public sector technology across Turkey.",
    description:
      "Mr. Faruk YILMAZ, Head of Strategy Department of UDHAM Presidency of the Ministry of Transport and Infrastructure of the Republic of Turkey and his delegation, participated in an in-depth panel session discussing the multifaceted challenges and upcoming projects of the digital era, sharing valuable insights that will shape the technological landscape for years to come. This marks a milestone in our ongoing efforts toward excellence and innovation, as we continue to collaborate and advance together, inspiring both public and private stakeholders.",
    image:
      "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=240&fit=crop&crop=center",
    category: "bites",
  },
  {
    id: 2,
    timeAgo: "23 May, 2025",
    source: "Bites News",
    date: "23 September, 2025",
    title:
      "10th of January Journalists' Day of our valuable press members who ensure the public's access to information under all circumstances, protecting freedom of speech and serving democracy with their tireless commitment, diligence, and outstanding journalistic integrity in the face of ever-changing media landscapes.",
    description:
      "We celebrate the 10th of January Journalists' Day of our valuable press members who ensure the public's access to information under all circumstances, showing extraordinary effort and professional devotion.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=240&fit=crop&crop=center",
    category: "bites",
  },
  {
    id: 3,
    timeAgo: "12 May, 2025",
    source: "Defence News",
    date: "23 September, 2025",
    title:
      "Flag Rises in New Tech! The launch event gathered industry leaders, government officials, and innovators for a groundbreaking day packed with announcements, workshops, and opportunities for networking and collaboration, emphasizing the critical role of defense technology in national security and economic development.",
    description:
      "We celebrate the 10th of January Journalists' Day of our valuable press members who ensure the public's access to information under all circumstances, showing extraordinary effort and professional devotion, even when facing difficult and unpredictable situations. Their role in society, as unbiased conveyors of truth and defenders of open discourse, cannot be overstated. We thank them for their courage and unwavering pursuit of factual reporting.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=240&fit=crop&crop=center",
    category: "defence",
  },
  {
    id: 4,
    timeAgo: "16 May, 2025",
    source: "Tech News",
    date: "23 September, 2025",
    title:
      "AI VR Trends of 2025: How Next-Generation Artificial Intelligence and Virtual Reality Are Shaping the Future of Human-Computer Interaction, Business, Entertainment, Education, and Society at Large, Unlocking New Potentials and Raising New Challenges for Innovation and Ethics.",
    description:
      "We celebrate the 10th of January Journalists' Day of our valuable press members who ensure the public's access to information under all circumstances, showing extraordinary effort and professional devotion, even when facing difficult and unpredictable situations. Their role in society, as unbiased conveyors of truth and defenders of open discourse, cannot be overstated. We thank them for their courage and unwavering pursuit of factual reporting.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
    category: "tech",
  },
  {
    id: 5,
    timeAgo: "16 May, 2025",
    source: "Tech News",
    date: "23 September, 2025",
    title:
      "AI VR Trends of 2025: How Next-Generation Artificial Intelligence and Virtual Reality Are Shaping the Future of Human-Computer Interaction, Business, Entertainment, Education, and Society at Large, Unlocking New Potentials and Raising New Challenges for Innovation and Ethics.",
    description:
      "We celebrate the 10th of January Journalists' Day of our valuable press members who ensure the public's access to information under all circumstances, showing extraordinary effort and professional devotion, even when facing difficult and unpredictable situations. Their role in society, as unbiased conveyors of truth and defenders of open discourse, cannot be overstated. We thank them for their courage and unwavering pursuit of factual reporting.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
    category: "tech",
  },
  {
    id: 6,
    timeAgo: "16 May, 2025",
    source: "Tech News",
    date: "23 September, 2025",
    title:
      "AI VR Trends of 2025: How Next-Generation Artificial Intelligence and Virtual Reality Are Shaping the Future of Human-Computer Interaction, Business, Entertainment, Education, and Society at Large, Unlocking New Potentials and Raising New Challenges for Innovation and Ethics.",
    description:
      "We celebrate the 10th of January Journalists' Day of our valuable press members who ensure the public's access to information under all circumstances, showing extraordinary effort and professional devotion, even when facing difficult and unpredictable situations. Their role in society, as unbiased conveyors of truth and defenders of open discourse, cannot be overstated. We thank them for their courage and unwavering pursuit of factual reporting.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=240&fit=crop&crop=center",
    category: "tech",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

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

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % lastThreeNews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [lastThreeNews.length]);

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

        {/* Right: Fixed Sidebar - Hidden on mobile, visible on lg+ */}
        <aside className="hidden lg:block w-full max-w-sm z-10">
          <div className="fixed top-40 w-full max-w-sm h-screen overflow-y-auto">
            <div className="w-full max-w-sm flex flex-col gap-8">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-transparent p-6 rounded-2xl border border-white/10"
              >
                <h3 className="text-lg font-medium text-white mb-4">
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
                <h4 className="text-md font-semibold text-white mb-3 truncate">
                  Last News
                </h4>
                <div className="relative min-h-[88px] overflow-hidden">
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
                      onDragEnd={(_, info) => {
                        if (info.offset.x < -50) {
                          setDirection(1);
                          setIndex((prev) => (prev + 1) % lastThreeNews.length);
                        } else if (info.offset.x > 50) {
                          setDirection(-1);
                          setIndex(
                            (prev) =>
                              (prev - 1 + lastThreeNews.length) %
                              lastThreeNews.length
                          );
                        }
                      }}
                    >
                      <div className="w-24 h-22 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={lastThreeNews[index].image}
                          alt={lastThreeNews[index].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="text-white font-medium text-sm line-clamp-1 mb-1">
                          {lastThreeNews[index].title}
                        </div>
                        <div className="text-gray-400 text-xs line-clamp-2 mb-1">
                          {lastThreeNews[index].description}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 truncate">
                          <span className="truncate">
                            {lastThreeNews[index].date}
                          </span>
                          <span className="text-white">|</span>
                          <span className="truncate">
                            {lastThreeNews[index].source}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-transparent p-4 rounded-2xl border border-white/10"
              >
                <h4 className="text-md font-semibold text-white mb-3">
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
        <div className="lg:hidden fixed top-14 left-0 right-0 z-10 backdrop-blur-md p-2">
          <div className="max-w-7xl mx-auto px-4">
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
          </div>
        </div>
      </div>
      <footer className="relative z-50">
        <Footer />
      </footer>
    </>
  );
};

export default NewsPage;

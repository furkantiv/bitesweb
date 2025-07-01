"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { log } from "console";

type Item = {
  name: string;
  shortdesc: string;
  link: string;
  image: string;
};

const items = [
  {
    name: "ATOK",
    shortdesc: "ATOK hakkında kısa açıklama.",
    link: "/products/atok",
    image: "/images/products/atok.png",
  },
  {
    name: "KARMA",
    shortdesc: "KARMA hakkında kısa açıklama.",
    link: "/products/karma",
    image: "/images/products/karma.png",
  },
  {
    name: "Digital Twin",
    shortdesc: "Digital Twin hakkında kısa açıklama.",
    link: "/products/digital-twin",
    image: "/images/products/digital-twin.png",
  },
  {
    name: "Porsuk",
    shortdesc: "Porsuk hakkında kısa açıklama.",
    link: "/products/porsuk",
    image: "/images/products/porsuk.png",
  },
  {
    name: "Augmented Reality",
    shortdesc: "Augmented Reality hakkında kısa açıklama.",
    link: "/products/augmented-reality",
    image: "/images/products/augmented-reality.png",
  },
  {
    name: "Immersive XR",
    shortdesc: "Immersive XR hakkında kısa açıklama.",
    link: "/products/immersive-xr",
    image: "/images/products/immersive-xr.png",
  },
  {
    name: "Sand Box",
    shortdesc: "Sand Box hakkında kısa açıklama.",
    link: "/products/sand-box",
    image: "/images/products/sand-box.png",
  },
  {
    name: "Video Management System",
    shortdesc: "Video Management System hakkında kısa açıklama.",
    link: "/products/video-management-system",
    image: "/images/products/video-management-system.png",
  },
  {
    name: "Embedded Training System",
    shortdesc: "Embedded Training System hakkında kısa açıklama.",
    link: "/products/embedded-training-system",
    image: "/images/products/embedded-training-system.png",
  },
  {
    name: "Augmented Reality Content Creator",
    shortdesc: "Augmented Reality Content Creator hakkında kısa açıklama.",
    link: "/products/augmented-reality-content-creator",
    image: "/images/products/augmented-reality-content-creator.png",
  },
  {
    name: "Avionic System And Software",
    shortdesc: "Avionic System And Software hakkında kısa açıklama.",
    link: "/products/avionic-system-software",
    image: "/images/products/avionic-system-software.png",
  },
];

const listVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      ease: [0.32, 0.72, 0, 1],
      staggerChildren: 0.08,
      delayChildren: 0.02,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -600 }, // Start left and invisible
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
  },
};

// Helper to generate image path
// const getImagePath = (item: string) => {
//   const safeName = item
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-") // replace spaces & special chars with -
//     .replace(/^-|-$/g, ""); // remove leading/trailing dashes
//   return `/images/products/${safeName}.png`;
// };

const ProductsPage = () => {
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row h-full bg-transparent sm:mt-30 text-white px-2  md:px-8 lg:px-16 pt-8 md:mt-24 gap-4 md:gap-8">
      {/* Left list */}
      <div className="w-full md:w-1/3 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-extrabold tracking-wide text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
        >
          Products
        </motion.h2>
        <motion.div
          className="max-h-[45vh] md:max-h-[70vh] overflow-y-auto overflow-x-hidden p-3 md:p-4 space-y-3 md:space-y-4 custom-scrollbar"
          style={{ direction: "rtl" }}
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <div style={{ direction: "ltr" }}>
            {items.map((item) => (
              <motion.div
                key={item.name}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  router.push(item.link);
                }}
                variants={itemVariants}
                className="
          group cursor-pointer transition-all duration-200
          rounded-xl px-4 py-3 mt-3  md:px-5 md:py-4 border border-white/10
          bg-white/5 hover:bg-blue-500/10
          hover:scale-[1.04] hover:shadow-lg hover:border-blue-400/30
          flex justify-between items-center
          backdrop-blur-xl
          font-medium
          text-base md:text-lg
        "
              >
                <span className="transition-colors duration-150 group-hover:text-blue-400">
                  {item.name}
                </span>
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-400 text-white/40">
                  ↗
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="mt-4 md:mt-8 text-xs md:text-sm text-white/50 flex items-center gap-2">
          <ArrowUpRight />
          {/* <span className="animate-bounce">↓</span> Scroll to discover */}
        </div>
      </div>

      {/* Right content */}
      <div className="w-full md:w-2/3 flex justify-center items-center relative overflow-hidden min-h-[250px] md:min-h-0">
        <AnimatePresence>
          {hoveredItem && (
            <motion.div
              key={hoveredItem.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center items-center rounded-xl mt-30 p-4 md:p-8 mb-8 md:mb-40"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-2xl md:text-4xl font-extrabold tracking-wide text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-6"
              >
                {hoveredItem.name}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={basePath + hoveredItem.image}
                  alt={hoveredItem.name}
                  width={500}
                  height={500}
                  className="object-contain max-w-full h-auto"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-10"
              >
                {hoveredItem.shortdesc}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductsPage;

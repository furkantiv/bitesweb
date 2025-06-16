"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobe } from "@/contexts/GlobeContext";

const items = [
  "ATOK",
  "KARAR",
  "Digital Twin",
  "Keçi",
  "KARMA",
  "BİTES LMS/LXP Platform",
  "Augmented Reality",
  "Immersive XR",
  "Sand Box",
  "Video Management System",
  "Embedded Training System",
  "Augmented Reality Content Creator",
  "Avionic System And Software",
];

// Helper to generate image path
// const getImagePath = (item: string) => {
//   const safeName = item
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-") // replace spaces & special chars with -
//     .replace(/^-|-$/g, ""); // remove leading/trailing dashes
//   return `/images/products/${safeName}.png`;
// };

const ProductsPage = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { updateGlobe } = useGlobe();

  const handleHover = (item: string) => {
    setHoveredItem(item);
    updateGlobe(4, [0, 0, 0]);
  };

  return (
    <div className="flex min-h-screen mt-20 bg-transparent text-white p-16">
      {/* Left list */}
      <div className="w-1/3 space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="cursor-pointer text-lg tracking-wide border-b border-white/20 pb-2 flex justify-between items-center group hover:text-blue-400 transition-colors"
            onMouseEnter={handleHover.bind(null, item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item}
            <span className="ml-2">↗</span>
          </div>
        ))}
        <div className="mt-8 text-sm text-white/60">
          ↓ Scroll down to discover
        </div>
      </div>

      {/* Right content */}
      <div className="w-2/3 ml-30 flex justify-center items-center relative overflow-hidden">
        <AnimatePresence>
          {hoveredItem && (
            <motion.div
              key={hoveredItem} // animate per item
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center items-center rounded-xl p-8 mb-40"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-4xl font-extrabold tracking-wide text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
              >
                {hoveredItem}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  //   src={getImagePath(hoveredItem)}
                  src={`/images/products/atok.png`}
                  alt={hoveredItem}
                  width={400}
                  height={300}
                  className="object-contain rounded-lg shadow-lg"
                />
              </motion.div>
              {/* <motion.p
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-lg font-medium tracking-wide text-center mb-6"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </motion.p> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductsPage;

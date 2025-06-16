"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Particles from "react-tsparticles"; // Optional for animated stars

interface TrustHeroProps {
  words: string[];
  interval?: number; // milliseconds
}

const TrustHero: React.FC<TrustHeroProps> = ({ words, interval = 1800 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [index, words.length, interval]);
  return (
    /*************  ✨ Windsurf Command 🌟  *************/
    <div className=" fixed flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Glow behind the word */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[80px] bg-[#326a743f] blur-3xl rounded-full z-20 pointer-events-none" />
      {/* Text Content */}
      <div className="z-30 flex flex-col items-center justify-center">
        <motion.span
          className="text-white text-lg md:text-2xl font-normal"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Our approach starts with
        </motion.span>
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            className="text-white text-3xl md:text-5xl font-bold mt-2 drop-shadow-[0_2px_24px_rgba(0,212,255,0.30)]"
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -25, scale: 0.97 }}
            transition={{ duration: 0.5 }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TrustHero;

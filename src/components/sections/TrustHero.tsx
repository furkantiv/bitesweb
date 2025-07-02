"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Particles from "react-tsparticles"; // Optional for animated stars

interface TrustHeroProps {
  words: string[];
  interval?: number; // milliseconds
}

const HeroText: React.FC<TrustHeroProps> = ({ words, interval = 1800 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [index, words.length, interval]);
  return (
    <div className=" flex items-center justify-center pt-8 ">
      {/* Glow behind the word */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[80px] bg-[#326a743f] blur-3xl rounded-full z-20 pointer-events-none" />
      {/* Text Content */}
      <div className="z-30 flex flex-col items-center justify-center">
        <motion.span
          className="text-white text-3xl md:text-3xl font-medium drop-shadow-[0_1px_24px_rgba(250,250,250,0.50)] "
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Our approach starts with
        </motion.span>
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            className="text-blue-600 text-3xl md:text-7xl font-extrabold mt-2 drop-shadow-[0_2px_24px_rgba(0,100,255,0.50)]"
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -25, scale: 0.97 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroText;

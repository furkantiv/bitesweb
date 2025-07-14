"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedFlare from "../animations/AnimatedFlare";
import { title } from "process";

interface TrustHeroProps {
  title: string;
  words: string[];
  interval?: number;
}

const HeroText: React.FC<TrustHeroProps> = ({
  title,
  words,
  interval = 1800,
}) => {
  const [index, setIndex] = useState(0);
  const [flareActive, setFlareActive] = useState(false);

  useEffect(() => {
    // Flare opacity için fade-in başlat
    const timeout = setTimeout(() => setFlareActive(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [index, words.length, interval]);

  return (
    <div className="flex items-center overflow-visible justify-center min-h-[200px] w-full relative ">
      <AnimatedFlare />

      {/* ...text... */}
      <div className="z-30 flex flex-col items-center justify-center">
        <motion.span
          className="text-white text-2xl md:text-3xl text-center md:pb-0 -mb-2  font-medium drop-shadow-[0_1px_24px_rgba(250,250,250,0.10)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {title}
        </motion.span>
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            className="text-white text-[40px] md:text-7xl font-extrabold mt-2 drop-shadow-[0_2px_24px_rgba(255,255,255,0.10)]"
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

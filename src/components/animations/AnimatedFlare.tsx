"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

interface AnimatedFlareProps {
  imageSrc?: string;
  basePath?: string;
}

const AnimatedFlare: React.FC<AnimatedFlareProps> = ({
  imageSrc = "/lens-flare.png",
  basePath = process.env.NEXT_PUBLIC_BASE_PATH || "",
}) => {
  const [showFull, setShowFull] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // İlk animasyon: 0'dan güçlü bir parlaklığa (opacity: 1.2 gibi!)
    controls
      .start({
        opacity: [0, 1.15, 0.9], // 1.15 ile kısa bir "flash"
        scale: [1.5, 1.62, 1.5],
        transition: {
          duration: 2.5,
          times: [0, 0.65, 1],
          ease: "easeOut",
        },
      })
      .then(() => {
        setShowFull(true);
      });
  }, [controls]);

  useEffect(() => {
    // Parlaklık zirvesinden sonra, sürekli minik bir titreme (nefes/pulse)
    if (showFull) {
      controls.start({
        opacity: [0.85, 0.95, 0.92, 0.95, 0.85],
        scale: [1.5, 1.45, 1.5, 1.45, 1.5],
        transition: {
          duration: 2.3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }
  }, [showFull, controls]);

  return (
    <motion.div
      className="absolute top-44 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none"
      initial={false}
      animate={controls}
    >
      <img
        src={`${basePath}${imageSrc}`}
        alt="Lens Flare"
        className="w-[900px] md:w-[1500px] h-auto"
        style={{
          pointerEvents: "none",
          userSelect: "none",
        }}
        draggable={false}
      />
    </motion.div>
  );
};

export default AnimatedFlare;

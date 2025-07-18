"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface AnimatedFlareProps {
  imageSrc?: string;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 800);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return isMobile;
}

const AnimatedFlare: React.FC<AnimatedFlareProps> = ({
  imageSrc = "/lens-flare.png",
}) => {
  const [showFull, setShowFull] = useState(false);
  const controls = useAnimation();
  const isMobile = useIsMobile();

  useEffect(() => {
    controls
      .start({
        opacity: [0, 1.15, 0.9],
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
      className={`absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none
        ${isMobile ? "top-1/2 -translate-y-1/4" : "top-44 -translate-y-1/2"}
      `}
      initial={false}
      animate={controls}
    >
      <Image
        src={imageSrc}
        alt="Lens Flare"
        width={700}
        height={140}
        className={
          isMobile ? "max-w-[336px]" : " min-h-14 max-h-48 max-w-[700px]"
        }
        style={{
          pointerEvents: "none",
          userSelect: "none",
          mixBlendMode: "screen",
        }}
        draggable={false}
      />
    </motion.div>
  );
};

export default AnimatedFlare;

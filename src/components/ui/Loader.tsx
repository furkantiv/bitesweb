// components/ui/Loader.tsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ delay = 1500 }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), delay);
    return () => clearTimeout(t);
  }, [delay]);
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: delay,
          ease: "linear",
        }}
        className="w-16 h-16 rounded-full border-t-4 border-b-4 border-blue-500 border-solid"
      />
      <span className="mt-6 text-white text-lg tracking-wider font-semibold animate-pulse">
        Loading...
      </span>
    </div>
  );
}

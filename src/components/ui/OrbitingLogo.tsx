"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OrbitingLogo() {
  return (
    <div className="relative w-[40vw] min-w-[96px] max-w-[220px] aspect-square flex items-center justify-center md:w-[180px]">
      {/* Outer Orbit - Rotating */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 30, // speed (seconds)
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      >
        <Image
          src={`/logo-outer.png`}
          alt="Orbiting Outer Logo"
          width={140}
          height={140}
          className="pointer-events-none select-none"
        />
      </motion.div>

      {/* Inner Logo - Fixed */}
      <div className="absolute  w-[100%] h-[100%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <Image
          src={`/logo-inner.png`}
          alt="Inner Logo"
          width={100}
          height={100}
          className="pointer-events-none select-none"
        />
      </div>
    </div>
  );
}

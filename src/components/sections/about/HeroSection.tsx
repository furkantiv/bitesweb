import React from "react";
import { motion } from "framer-motion";

// List your icons and labels here. Icon paths are relative to /public.
const CIRCLES = [
  { label: "Data Analytics", icon: "/images/icons/about/data-analytics.svg" },
  {
    label: "Extended Reality",
    icon: "/images/icons/about/data-analytics.svg",
  },
  {
    label: "Safety & Mission Software",
    icon: "/images/icons/about/data-analytics.svg",
  },
  { label: "Digital Twin", icon: "/images/icons/about/data-analytics.svg" },
  {
    label: "Mobile Applications",
    icon: "/images/icons/about/data-analytics.svg",
  },
  { label: "Cloud Computing", icon: "/images/icons/about/data-analytics.svg" },
  {
    label: "Simulation & Training Technologies",
    icon: "/images/icons/about/data-analytics.svg",
  },
  {
    label: "Artificial Intelligence",
    icon: "/images/icons/about/data-analytics.svg",
  },
];

// SVG settings
const SVG_W = 1100;
const SVG_H = 900;
const ARC_RADIUS = 450;
const CX = SVG_W / 2;
const CY = SVG_H - 40;

// Calculate 8 evenly-spaced points from left to right along a perfect semicircle (180deg to 0deg)
function getArcPoints(n: number) {
  return Array.from({ length: n }, (_, i) => {
    const t = i / (n - 1);
    const theta = Math.PI - t * Math.PI; // from π (180°) to 0 (0°)
    return {
      x: CX + ARC_RADIUS * Math.cos(theta),
      y: CY + -ARC_RADIUS * Math.sin(theta),
    };
  });
}
const arcPoints = getArcPoints(CIRCLES.length);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// SVG path helper
function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
  return ["M", start.x, start.y, "A", r, r, 0, arcSweep, 0, end.x, end.y].join(
    " "
  );
}
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = (angleDeg * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

export default function HeroSection() {
  return (
    <section className="relative md:min-h-[100vh] w-full h-full flex flex-col items-center justify-end pb-10 pt-24 bg-transparent ">
      {/* SVG Arc (desktop only) */}
      <svg
        width={SVG_W}
        height={SVG_H}
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        className="absolute top-1/14 left-1/2 -translate-x-1/2  bottom-0 md:block hidden pointer-events-none z-0"
      >
        <path
          d={describeArc(CX, CY, ARC_RADIUS, 180, 0)}
          fill="none"
          stroke="#334cff22"
          strokeWidth="2.5"
        />
      </svg>
      {/* Circles on the arc (desktop only) */}
      <div className="w-full max-w-[1200px] h-full hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none">
        {arcPoints.map((p, idx) => (
          <GlassCircle
            key={idx}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              transform: "translate(-50%, -50%)",
              pointerEvents: "auto",
            }}
            label={CIRCLES[idx].label}
            icon={basePath + CIRCLES[idx].icon}
          />
        ))}
      </div>
      {/* Mobile: Stack circles vertically */}
      <div className="flex flex-col gap-5 w-full items-center md:hidden z-10">
        {CIRCLES.map((c) => (
          <GlassCircle key={c.label} label={c.label} icon={c.icon} />
        ))}
      </div>
      {/* Centered Title/Subtext */}
      <div className="absolute top-1/5  left-1/2 -translate-x-1/2 text-center z-20 px-2">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, type: "spring" }}
          className="text-3xl md:text-4xl font-bold text-white mb-2"
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Capabilities
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-white/60 text-base md:text-lg"
        >
          Shaping the future with innovative software and technologies.
        </motion.p>
      </div>
      {/* Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute left-1/2 bottom-0 -translate-x-1/2 top-7/6 z-30"
      >
        <svg width="48" height="48" className="animate-bounce" fill="none">
          <circle cx="24" cy="24" r="22" stroke="#334cff44" strokeWidth="2" />
          <path
            d="M16 22l8 8 8-8"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}

// Glassmorphism Circle
function GlassCircle({
  label,
  icon,
  style,
}: {
  label: string;
  icon: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      style={style}
      className="group flex flex-col items-center justify-center w-28 h-28 rounded-full
        bg-white/5 backdrop-blur-xl border border-blue-300/20 shadow-[0_0_32px_#334cff40]
        ring-1 ring-blue-500/10
        hover:bg-white/20 hover:shadow-blue-400/30 transition-all
        pointer-events-auto"
    >
      <div className="flex items-center justify-center w-12 h-12 mb-2">
        <img
          src={icon}
          alt={label}
          className="w-10 h-10 opacity-90 drop-shadow"
        />
      </div>
      <span className="text-white text-xs text-center font-medium drop-shadow max-w-[7.5rem]">
        {label}
      </span>
    </motion.div>
  );
}

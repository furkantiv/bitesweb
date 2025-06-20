"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useState, useRef, useLayoutEffect } from "react";

type AnimatedButtonVariant = "filled" | "outline";

interface AnimatedButtonProps {
  text: string;
  color?: string;
  variant?: AnimatedButtonVariant;
  onClick?: () => void;
}

const pillTextColor = "#fff";
const pillArrowColor = "#fff";

export function AnimatedButton({
  text,
  color = "#2563eb",
  variant = "filled",
  onClick,
}: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [pillWidth, setPillWidth] = useState(168);
  const textRef = useRef<HTMLSpanElement>(null);

  // Calculate the required pill width when the text or textRef changes
  useLayoutEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      const calculatedWidth = 48 + textWidth;
      setPillWidth(calculatedWidth);
    }
  }, [text]);

  // Dynamic styles for filled vs outline
  const circleStyle =
    variant === "filled"
      ? {
          background: color,
          border: `2px solid ${color}`,
        }
      : {
          background: "transparent",
          border: `2px solid ${color}`,
        };

  const iconColor = variant === "filled" ? "#fff" : color;
  const pillBg = variant === "filled" ? color : hovered ? color : "transparent";
  const pillBorder = `2px solid ${color}`;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center relative bg-transparent focus:outline-none cursor-pointer  select-none"
      style={{ minHeight: 48, minWidth: 48, padding: 0 }}
    >
      {/* Circle: Always visible, contains up-right arrow */}
      <motion.div
        className="flex items-center justify-center z-10"
        style={{
          width: 48,
          height: 48,
          borderRadius: 999,
          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.13)",
          position: "relative",
          ...circleStyle,
        }}
        animate={{
          opacity: hovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <ArrowUpRight size={22} strokeWidth={2.3} color={iconColor} />
      </motion.div>

      {/* Default text: only when NOT hovered */}
      <motion.span
        animate={{
          opacity: hovered ? 0 : 1,
          x: hovered ? 10 : 0,
        }}
        transition={{ duration: 0.16 }}
        className="ml-3 font-medium text-base whitespace-nowrap z-0"
        style={{
          color: pillTextColor,
          position: "relative",
        }}
      >
        {text}
      </motion.span>

      {/* Hidden span for measuring the text width */}
      <span
        ref={textRef}
        className="font-medium text-base whitespace-nowrap px-6 absolute opacity-0 pointer-events-none"
        style={{
          left: -9999,
          top: -9999,
          visibility: "hidden",
        }}
      >
        {text}
      </span>

      {/* Pill: appears on hover, covers icon, text, AND shows arrow at right */}
      <motion.div
        initial={false}
        animate={{
          width: hovered ? pillWidth : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          width: { type: "spring", stiffness: 400, damping: 32 },
          opacity: { duration: 0.12 },
        }}
        className="absolute left-0 top-0 h-12 flex items-center rounded-full overflow-hidden z-20"
        style={{
          background: pillBg,
          border: pillBorder,
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)",
          pointerEvents: "none", // so the button stays clickable
        }}
      >
        <motion.span
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : 16,
          }}
          transition={{ duration: 0.2 }}
          className="px-6 font-medium text-base whitespace-nowrap"
          style={{
            userSelect: "none",
            color: pillTextColor,
          }}
        >
          {text}
        </motion.span>
        <motion.span
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : 16,
          }}
          transition={{ duration: 0.24 }}
          className="pr-4 flex items-center"
        >
          <ArrowRight size={22} strokeWidth={2.3} color={pillArrowColor} />
        </motion.span>
      </motion.div>
    </button>
  );
}

"use client";

import { useGlobe } from "@/contexts/GlobeContext";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

interface NavigationItemProps {
  number: string;
  title: string;
  href: string;
  isActive?: boolean;
  position?: [number, number, number];
  speed?: number;
  scale?: number;
  onNavigate?: () => void;
}

const NavigationItem = ({
  title,
  href,
  isActive = false,
  position = [0, 0, 0],
  speed = 0.02,
  scale = 0.5,
  onNavigate,
}: NavigationItemProps) => {
  const router = useRouter();
  const { updateGlobe } = useGlobe();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    updateGlobe(speed, position, scale);
    router.push(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (onNavigate) onNavigate(); // Close mobile menu if triggered
  };

  const getLineColor = () => {
    if (isActive) return "#FFFFFF";
    if (isHovered) return "#2C6BFF";
    return "#35434D";
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex-1 flex flex-col items-start cursor-pointer px-2 py-2"
    >
      <motion.div
        className="mb-2 h-[2px] w-full rounded-full"
        animate={{ backgroundColor: getLineColor() }}
        transition={{ duration: 0.3 }}
      />
      <span
        className="font-medium text-[16px]"
        style={{ fontFamily: "Inter", color: "#d1d5db" }}
      >
        {title}
      </span>
    </div>
  );
};

const navItems = [
  {
    number: "00",
    title: "HomePage",
    href: "/",
    position: [0, -1.5, 0],
    speed: 0.2,
    scale: 0.7,
  },
  {
    number: "01",
    title: "About Us",
    href: "/about",
    position: [0, -2, 0],
    speed: 0.2,
    scale: 0.5,
  },
  {
    number: "02",
    title: "Products",
    href: "/products",
    position: [1.1, 0, 0],
    speed: 0.2,
    scale: 0.7,
  },
  {
    number: "03",
    title: "News",
    href: "/news",
    position: [-2, 0, 0],
    speed: 0.2,
    scale: 0.5,
  },
  {
    number: "04",
    title: "Career",
    href: "/career",
    position: [-1, 0, 3],
    speed: 0.2,
    scale: 0.5,
  },
  {
    number: "05",
    title: "Contact",
    href: "/contact",
    position: [1.6, 0.2, 0],
    speed: 0.2,
    scale: 0.5,
  },
];

interface NavigationProps {
  onNavigate?: () => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col md:flex-row w-full gap-2 md:gap-0">
      {navItems.map((item) => (
        <NavigationItem
          key={item.href}
          {...item}
          isActive={pathname === item.href}
          position={item.position as [number, number, number]}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
};

export default Navigation;

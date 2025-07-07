"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

interface NavigationItemProps {
  number: string;
  title: string;
  href: string;
  isActive?: boolean;
  onNavigate?: () => void;
}

const NavigationItem = ({
  title,
  href,
  isActive = false,
  onNavigate,
}: NavigationItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Eğer animasyonlu işlemlerin Link davranışını etkilemesini istemiyorsan:
    // e.preventDefault(); // Bunu kullanma! SPA için Link'in kendi yönlendirmesi çalışmalı.

    // updateGlobe(speed, position, scale);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (onNavigate) onNavigate();
  };

  const getLineColor = () => {
    if (isActive) return "#FFFFFF";
    if (isHovered) return "#2C6BFF";
    return "#35434D";
  };

  return (
    <Link
      href={href}
      scroll={true}
      prefetch={false}
      className="flex flex-1 flex-col"
    >
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex-1 flex flex-col items-start cursor-pointer py-2"
        tabIndex={0}
        role="link"
        aria-current={isActive ? "page" : undefined}
      >
        <motion.div
          className="mb-2 h-[1px] w-full rounded-full"
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
    </Link>
  );
};

const navItems = [
  {
    number: "01",
    title: "About Us",
    href: "/about",
    position: [-2.2, -1.7, 0],
    speed: 0.05,
    scale: 0.7,
  },
  {
    number: "02",
    title: "Products",
    href: "/products",
    position: [0, -2.8, 0],
    speed: 0.05,
    scale: 0.7,
  },
  {
    number: "03",
    title: "News",
    href: "/news",
    position: [2.2, -1.7, 0],
    speed: 0.05,
    scale: 0.7,
  },
  {
    number: "04",
    title: "Career",
    href: "/career",
    position: [-2, -0.1, 0],
    speed: 0.05,
    scale: 0.5,
  },
  {
    number: "05",
    title: "Contact",
    href: "/contact",
    position: [0.9, 0.2, 0],
    speed: 0.05,
    scale: 0.4,
  },
];

interface NavigationProps {
  onNavigate?: () => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col md:flex-row w-full gap-2 md:gap-4">
      {navItems.map((item) => (
        <NavigationItem
          key={item.href}
          {...item}
          isActive={pathname === item.href}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
};

export default Navigation;

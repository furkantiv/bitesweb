"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

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

interface NavigationProps {
  onNavigate?: () => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  // Artık title'lar burada dinamik:
  const navItems = [
    {
      number: "01",
      title: t("about"),
      href: "/about",
    },
    {
      number: "02",
      title: t("products"),
      href: "/products",
    },
    {
      number: "03",
      title: t("news"),
      href: "/news",
    },
    {
      number: "04",
      title: t("career"),
      href: "/career",
    },
    {
      number: "05",
      title: t("contact"),
      href: "/contact",
    },
  ];

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

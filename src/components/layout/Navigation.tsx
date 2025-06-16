"use client";

import React, { use, useEffect } from "react";
import { useGlobe } from "@/contexts/GlobeContext";
import { usePage } from "@/contexts/PageContext";

interface NavigationItemProps {
  number: string;
  title: string;
  pageKey: string;
  isActive?: boolean;
  position?: [number, number, number];
  speed?: number;
}

const NavigationItem = ({
  number,
  title,
  pageKey = "home",
  isActive = false,
  position = [0, 0, 0],
  speed = 0.02,
}: NavigationItemProps) => {
  const { setCurrentPage } = usePage();
  const { updateGlobe } = useGlobe();

  const handleClick = () => {
    updateGlobe(speed, position);
    setCurrentPage(pageKey as any);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center mb-2 space-x-3 cursor-pointer group transition-all duration-300 ${
        isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-mono transition-all duration-300 ${
          isActive
            ? "border-blue-400 bg-blue-400/20 text-blue-400"
            : "border-gray-600 group-hover:border-blue-400 group-hover:bg-blue-400/10"
        }`}
      >
        {number}
      </div>
      <span className="font-light tracking-wide">{title}</span>
    </div>
  );
};

const Navigation = () => {
  const { currentPage } = usePage();

  return (
    <nav className="relative z-40 flex justify-center space-x-12 mt-8">
      <NavigationItem
        number="00"
        title="HomePage"
        pageKey="home"
        isActive={currentPage === "home"}
        position={[0, -1.5, 0]}
        speed={0.2}
      />
      <NavigationItem
        number="01"
        title="About Us"
        pageKey="about"
        isActive={currentPage === "about"}
        position={[0, -2, 0]}
        speed={0.2}
      />
      <NavigationItem
        number="02"
        title="Products"
        pageKey="products"
        isActive={currentPage === "products"}
        position={[1.3, 0, 0]}
        speed={0.2}
      />
      <NavigationItem
        number="03"
        title="News"
        pageKey="news"
        isActive={currentPage === "news"}
        position={[-2, 0, 0]}
        speed={0.2}
      />
      <NavigationItem
        number="04"
        title="Career"
        pageKey="career"
        isActive={currentPage === "career"}
        position={[0, 2, 0]}
        speed={0.2}
      />
      <NavigationItem
        number="05"
        title="Contact"
        pageKey="contact"
        isActive={currentPage === "contact"}
        position={[1, -0.5, 0]}
        speed={0.2}
      />
    </nav>
  );
};

export default Navigation;

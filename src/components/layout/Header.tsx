import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30); // Adjust as needed
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-2 px-8
        transition-all duration-300
        ${
          scrolled ? "bg-black/20 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      style={{ backdropFilter: scrolled ? "blur(8px)" : "none" }}
    >
      <div className="text-2xl font-bold tracking-wider">BITES</div>
      <Navigation />
      <div className="text-sm font-light tracking-wider">EN</div>
    </header>
  );
};

export default Header;

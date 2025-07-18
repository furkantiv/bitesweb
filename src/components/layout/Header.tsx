"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GlobeLink } from "../ui/GlobeLink";
import { LocaleSwitcher } from "../ui/LocaleSwitcher";
import { useLocale } from "next-intl";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optional: Lock scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`
    fixed left-0 w-full z-50 pt-3 px-5 transition-all duration-300
    ${
      mobileMenuOpen
        ? "bg-[#00192F] h-full"
        : scrolled
        ? "bg-black/20 backdrop-blur-md pb-2 shadow-lg"
        : "bg-transparent"
    }
  `}
      style={{
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="flex justify-between items-center w-full">
        <GlobeLink href={`/${locale}`}>
          <Image src="/logo.svg" alt="Bites Logo" width={100} height={40} />
        </GlobeLink>

        <div className="flex flex-row gap-4">
          <LocaleSwitcher />

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className="hidden md:block mt-2 w-full">
        <Navigation />
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#00192F] z-50 flex flex-col px-6 pt-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <GlobeLink href={`/${locale}`}>
                <Image
                  src="/logo.svg"
                  alt="Bites Logo"
                  width={100}
                  height={40}
                />
              </GlobeLink>
              <button
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Navigation"
              >
                <X size={28} />
              </button>
            </div>
            <Navigation onNavigate={() => setMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

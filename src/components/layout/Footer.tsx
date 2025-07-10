// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import OrbitingLogo from "../ui/OrbitingLogo";
import FollowUs from "../ui/FollowUs";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "#" },
  { label: "News", href: "#" },
  { label: "Career", href: "#" },
  { label: "Contact", href: "#" },
];

const productsLeft = [
  "ATOK",
  "KEÇİ",
  "KARMA",
  "Dijital İkiz",
  "Zırh Ötesi Görüş",
  "CBT LMS",
  "Immersive XR",
  "SKS",
];
const productsRight = [
  "Video Management System",
  "Embedded Training System",
  "Augmented Training System",
  "Avionic System & Software",
  "ALTAY Data Management System",
  "Virtual Maintenance Simulator",
  "Shooting Training Simulator",
];

const policyLinks = [
  { label: "Cookie Policy", href: "#" },
  { label: "Quality Policy", href: "#" },
  { label: "Information Security Policy", href: "#" },
  { label: "PDP Clarification Text", href: "#" },
  { label: "Application Form Under PPL", href: "#" },
  { label: "Personal Data Retention and Destruction Policy", href: "#" },
  {
    label: "Special Qualified Personel Data Protection and Processing Policy",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#35434D] bg-[#00192F] text-white font-inter">
      <motion.div
        className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Upper */}
        <div className="flex flex-col md:flex-row gap-10 border-b border-[#35434D] pb-8">
          {/* Company */}
          <div className="w-full md:w-1/4 flex flex-col gap-4">
            <h3 className="text-xl font-medium pb-1 pl-3  border-b border-[#35434D] mb-1">
              Company
            </h3>
            <div>
              <OrbitingLogo />
              <p className="not-italic text-sm text-white/70 pl-3 leading-relaxed">
                BİTES bir ASELSAN şirketidir.
              </p>
            </div>
            <div className="flex gap-2 pl-3 mb-2">
              <FollowUs />
            </div>
            <address className="not-italic text-sm text-white/70 pl-3 leading-relaxed">
              Mustafa Kemal Mahallesi, ODTÜ Teknokent Bilişim İnovasyon Merkezi,
              280/G Kat:4 No:14 PK, 06530
              <br />
              Çankaya / ANKARA
            </address>
          </div>
          {/* Quick Links */}
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            <h3 className="text-xl font-medium pb-1 pl-3  border-b border-[#35434D] ">
              Quick Links
            </h3>
            <ul>
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="block py-1.5 pl-3 text-sm text-white/70 hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Products */}
          <div className="w-full md:w-2/4 flex flex-col gap-2">
            <h3 className="text-xl font-medium mb-1 pb-1 pl-3  border-b border-[#35434D]">
              Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <ul className="flex flex-col gap-1">
                {productsLeft.map((item) => (
                  <li key={item} className="py-1.5 pl-3 text-sm text-white/70">
                    <a href="">{item}</a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-1">
                {productsRight.map((item) => (
                  <li key={item} className="py-1.5 pl-3 text-sm text-white/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Lower */}
        <div className="flex pl-3 flex-col items-center space-y-2 gap-4">
          {/* Policy Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {policyLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm text-white/70 hover:text-white transition"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="absolute bottom-1 left-85 py-2 items-start text-white text-xs">
            © 2025 BİTES, all rights reserved.
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

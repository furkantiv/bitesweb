"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Item = {
  name: string;
  shortdesc: string;
  link: string;
  image: string;
};

const items = [
  {
    name: "ATOK",
    shortdesc: "ATOK hakkında kısa açıklama.",
    link: "/products/atok",
    image: "/images/products/atok.png",
  },
  {
    name: "KARMA",
    shortdesc: "KARMA hakkında kısa açıklama.",
    link: "/products/karma",
    image: "/images/products/karma.png",
  },
  {
    name: "Digital Twin",
    shortdesc: "Digital Twin hakkında kısa açıklama.",
    link: "/products/digital-twin",
    image: "/images/products/digital-twin.png",
  },
  {
    name: "Porsuk",
    shortdesc: "Porsuk hakkında kısa açıklama.",
    link: "/products/porsuk",
    image: "/images/products/porsuk.png",
  },
  {
    name: "Augmented Reality",
    shortdesc: "Augmented Reality hakkında kısa açıklama.",
    link: "/products/augmented-reality",
    image: "/images/products/augmented-reality.png",
  },
  {
    name: "Immersive XR",
    shortdesc: "Immersive XR hakkında kısa açıklama.",
    link: "/products/immersive-xr",
    image: "/images/products/immersive-xr.png",
  },
  {
    name: "Sand Box",
    shortdesc: "Sand Box hakkında kısa açıklama.",
    link: "/products/sand-box",
    image: "/images/products/sand-box.png",
  },
  {
    name: "Video Management System",
    shortdesc: "Video Management System hakkında kısa açıklama.",
    link: "/products/video-management-system",
    image: "/images/products/video-management-system.png",
  },
  {
    name: "Embedded Training System",
    shortdesc: "Embedded Training System hakkında kısa açıklama.",
    link: "/products/embedded-training-system",
    image: "/images/products/embedded-training-system.png",
  },
  {
    name: "Augmented Reality Content Creator",
    shortdesc: "Augmented Reality Content Creator hakkında kısa açıklama.",
    link: "/products/augmented-reality-content-creator",
    image: "/images/products/augmented-reality-content-creator.png",
  },
  {
    name: "Avionic System And Software",
    shortdesc: "Avionic System And Software hakkında kısa açıklama.",
    link: "/products/avionic-system-software",
    image: "/images/products/avionic-system-software.png",
  },
];

const categories = [
  {
    id: "training",
    title: "Training and Simulation Systems",
    image: "/images/products/categories/training.jpg",
  },
  {
    id: "defence",
    title: "Defence Information Systems",
    image: "/images/products/categories/defence.jpg",
  },
  {
    id: "business",
    title: "Technology and Business Solutions Systems",
    image: "/images/products/categories/business.jpg",
  },
  {
    id: "avionics",
    title: "Avionics and Mission Systems",
    image: "/images/products/categories/avionics.jpg",
  },
];

const ProductsPage = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const router = useRouter();

  return (
    <div className="max-h-screen max-w-7xl mx-auto px-6 md:px-0 md:pt-20 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => router.push(`/products/${cat.id}`)}
            className="cursor-pointer rounded-2xl transition group shadow-xl border border-[#303030] w-[600px] h-[340px] p-4"
          >
            <div className="text-white font-semibold text-base m-2">
              {cat.title}
            </div>
            <div className="w-full rounded-xl overflow-hidden">
              <img
                src={basePath + cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

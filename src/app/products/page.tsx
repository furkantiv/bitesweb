"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const categories = [
  {
    id: "training",
    title: "Training and Simulation Systems",
    image: "/images/products/categories/Training and Simulation Systems.png",
  },
  {
    id: "defence",
    title: "Defence Information Systems",
    image: "/images/products/categories/Defence Systems.png",
  },
  {
    id: "business",
    title: "Technology and Business Solutions Systems",
    image:
      "/images/products/categories/Technology and Business Solutions Systems.png",
  },
  {
    id: "avionics",
    title: "Avionics and Mission Systems",
    image: "/images/products/categories/Avionics and Mission Systems.png",
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

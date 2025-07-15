"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { categories } from "@/data/categories";
import { useTranslations } from "next-intl";
import Image from "next/image";

const gridVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProductsPage = () => {
  const router = useRouter();
  const t = useTranslations();

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0 pt-6 md:pt-20 mb-10 flex flex-col items-center justify-center w-full">
      <motion.div
        className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      gap-6 
      w-full
    "
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.slug}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push(`/products/${cat.slug}`)}
            className="
          cursor-pointer 
          rounded-2xl 
          transition 
          group 
          shadow-xl 
          border border-[#303030] 
          flex flex-col 
          w-full 
          max-w-full
          aspect-[16/9]
          min-h-[170px] 
          md:min-h-[220px]
          lg:min-h-[260px]
          p-2 sm:p-3 md:p-4
          hover:shadow-2xl
        "
          >
            <div className="text-white font-semibold text-base m-1 line-clamp-1">
              {t("categories." + cat.slug)}
            </div>
            <div className="flex-1 flex w-full rounded-lg overflow-hidden">
              <SpotlightCard className="w-full h-full">
                <Image
                  src={cat.image}
                  alt={t("categories." + cat.slug)}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={true}
                />
              </SpotlightCard>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductsPage;

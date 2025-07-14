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
    <div className="max-w-7xl mx-auto px-6 md:px-0  md:pt-20 flex flex-col items-center justify-center">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 "
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.slug}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push(`/products/${cat.slug}`)}
            className="cursor-pointer rounded-2xl transition group shadow-xl border border-[#303030] w-[400px] h-[260px] lg:w-[600px] lg:h-[340px] p-4"
          >
            <div className="text-white font-semibold text-base m-1">
              {t("categories." + cat.slug)}
            </div>
            <div className="w-full rounded-lg overflow-hidden">
              <SpotlightCard>
                <Image
                  src={cat.image}
                  alt={t("categories." + cat.slug)}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover"
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

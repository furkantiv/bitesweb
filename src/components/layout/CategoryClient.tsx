"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Item = {
  name: string;
  image: string;
  slug: string;
  items?: Item[];
};

type CategoryClientProps = {
  items: Item[];
  name: string; // Artık çeviriyle gelecek (üstten)
  categorySlug: string;
};

function CategoryClient({ items, name, categorySlug }: CategoryClientProps) {
  const [selectedSub, setSelectedSub] = useState<Item | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const t = useTranslations();

  // Üst kategori başlığı
  const title = selectedSub ? (
    <div>
      <span className="text-white/80">{name} </span>
      <span className="block text-sm text-[#BEDAED] font-normal">
        {t("categories." + selectedSub.slug)}
      </span>
    </div>
  ) : (
    name
  );

  const listedItems = selectedSub ? selectedSub.items || [] : items;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-12 mx-auto sm:px-8 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 flex flex-col w-full "
      >
        {/* Geri Dön butonu */}
        {selectedSub ? (
          <button
            onClick={() => setSelectedSub(null)}
            className="flex items-center gap-3 text-white text-[16px] my-3 font-medium hover:text-[#2C6BFF] transition w-max focus:outline-none shadow-lg"
          >
            <ArrowLeft size={24} strokeWidth={1.5} />
            {t("productNav.backToCategory", {
              category: name,
            })}
          </button>
        ) : (
          <Link
            href="/products"
            tabIndex={-1}
            className="flex items-center gap-3 text-white text-[16px] my-3 font-medium hover:text-[#2C6BFF] transition w-max focus:outline-none shadow-lg"
          >
            <ArrowLeft size={24} strokeWidth={1.5} />
            {t("productNav.backToProducts")}
          </Link>
        )}
        {/* Başlık */}
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-xl sm:text-2xl text-white font-medium mb-3 sm:mb-2"
        >
          {title}
        </motion.h2>

        {/* Liste */}
        <motion.div
          key={selectedSub ? selectedSub.slug : "main-list"}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.32, ease: "easeInOut" }}
        >
          <div className="w-full ">
            {listedItems.map((item, i) => {
              const isLeaf = !item.items || item.items.length === 0;
              return isLeaf ? (
                <Link
                  href={`/products/${categorySlug}/${item.slug}`}
                  key={item.slug}
                  className="flex flex-row justify-between my-4 sm:my-6 cursor-pointer pt-2 border-t border-[#35434D] text-[#BEDAED] transition-colors hover:border-[#2C6BFF] hover:text-white text-base sm:text-lg md:text-xl select-none px-3 sm:px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.32,
                      ease: "easeOut",
                      delay: i * 0.07,
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <p>{t("categories." + item.slug)}</p>
                  </motion.div>
                  <motion.span
                    animate={{
                      rotate: hoveredIndex === i ? 45 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 24,
                    }}
                    className="inline-block min-w-[28px]"
                  >
                    <ArrowUpRight size={28} strokeWidth={1.5} />
                  </motion.span>
                </Link>
              ) : (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.32,
                    ease: "easeOut",
                    delay: i * 0.07,
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    if (!selectedSub && item.items && item.items.length > 0) {
                      setSelectedSub(item);
                      setHoveredIndex(null);
                    }
                  }}
                  className="flex flex-row justify-between my-4 sm:my-6 cursor-pointer pt-2 border-t border-[#35434D] text-[#BEDAED] transition-colors hover:border-[#2C6BFF] hover:text-white text-base sm:text-lg md:text-xl select-none px-3 sm:px-4"
                >
                  <p>{t("categories." + item.slug)}</p>
                  <motion.span
                    animate={{
                      rotate: hoveredIndex === i ? 45 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 24,
                    }}
                    className="inline-block min-w-[28px]"
                  >
                    <ArrowUpRight size={28} strokeWidth={1.5} />
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Görsel */}
      <div className="hidden md:flex flex-1 items-center justify-center relative w-full min-h-[250px] sm:min-h-[300px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl aspect-square">
        {hoveredIndex !== null && listedItems[hoveredIndex]?.image && (
          <motion.div
            key={listedItems[hoveredIndex].image}
            initial={{ opacity: 0, scale: 0.98, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 18 }}
            transition={{
              opacity: { duration: 0.35, ease: "easeOut" },
              scale: { duration: 0.28, ease: "easeOut" },
              y: { duration: 0.28, ease: "easeOut" },
            }}
            className="
              absolute left-0 top-0
              w-full h-full
              flex items-center justify-center
              pointer-events-none
            "
            style={{
              willChange: "opacity, transform",
            }}
          >
            <Image
              src={`${listedItems[hoveredIndex].image}`}
              alt={t("categories." + listedItems[hoveredIndex].slug)}
              fill
              sizes="(max-width: 640px) 90vw,
                (max-width: 1024px) 60vw,
                300px"
              className="object-contain shadow-xl"
              priority
              draggable={false}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default CategoryClient;

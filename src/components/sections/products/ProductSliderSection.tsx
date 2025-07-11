"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  title: string;
  image: string;
  features: string[];
}
interface ProductSliderSectionProps {
  slides: Slide[];
  product?: string;
}

export default function ProductSliderSection({
  slides,
  product = "",
}: ProductSliderSectionProps) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const slide = slides[index];

  // AnimatePresence ile hangi yöne kayacağı belirleniyor
  const paginate = (newDir: number) => {
    setIndex(([i]) => [(i + newDir + slides.length) % slides.length, newDir]);
  };

  // Animasyon variantları
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg min-h-[350px]">
      {/* Sol: Görsel */}
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto min-h-[300px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.image + index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sağ: Metin alanı */}
      <div className="w-full md:w-1/2 bg-[#032037] flex flex-col justify-center p-8 md:p-12 h-[400px] relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={slide.title + index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 30 },
              opacity: { duration: 0.18 },
            }}
            className="absolute inset-0 w-full h-full flex flex-col justify-center"
          >
            <span className="uppercase text-base tracking-wider text-white/70 font-semibold mb-2">
              {product}
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 leading-tight">
              {slide.title}
            </h2>
            <ul className="space-y-2 mb-4">
              {slide.features.map((f, i) => (
                <li key={i} className="text-base text-white flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-white mr-3" />
                  {f}
                </li>
              ))}
            </ul>
            {slides.length > 1 && (
              <div className="flex gap-3 mt-2">
                <button
                  aria-label="Previous"
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/10 transition"
                  onClick={() => paginate(-1)}
                  type="button"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  aria-label="Next"
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/10 transition"
                  onClick={() => paginate(1)}
                  type="button"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

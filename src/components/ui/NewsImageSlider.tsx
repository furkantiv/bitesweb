"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type NewsImageSliderProps = {
  images: string[];
  alt: string;
};

export default function NewsImageSlider({ images, alt }: NewsImageSliderProps) {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Main slider container */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Images container */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 flex flex-col items-center"
            >
              {/* Main image */}
              <div
                className="relative w-full flex justify-center items-center "
                style={{ minHeight: 380, maxHeight: 700 }}
              >
                <Image
                  src={image}
                  alt={`${alt} - Image ${i + 1}`}
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  className="select-none"
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 768px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 md:left-4"
              aria-label="Previous image"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 md:right-4"
              aria-label="Next image"
            >
              <ArrowRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

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
    <div className="relative w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] aspect-square mx-0">
      {/* Main slider container */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {/* Images container */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="relative w-full aspect-square flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={image}
                alt={`${alt} - Image ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="(max-width: 600px) 100vw, 600px"
                priority={i === 0}
              />
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
        <div className="flex justify-center mt-2 space-x-2">
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
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-lg text-sm">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

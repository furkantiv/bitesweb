"use client";
import { LocalizedStringArray } from "@/utils/types";

export interface GridTextSectionProps {
  heading?: string;
  product?: string;
  texts: string[]; // Artık direkt dizi!
}

const GridTextSection = ({
  heading = "",
  product = "",
  texts,
}: GridTextSectionProps) => {
  // Paragrafları ikiye böl
  const mid = Math.ceil(texts.length / 2);
  const left = texts.slice(0, mid);
  const right = texts.slice(mid);

  return (
    <section className="flex flex-col md:flex-row gap-8 w-full overflow-hidden mb-14">
      <div className="w-full md:w-1/2 flex flex-col gap-6 justify-start">
        {left.map((text, i) => (
          <p
            key={i}
            className="text-base md:text-lg text-white/90 leading-relaxed"
          >
            {text}
          </p>
        ))}
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-6 justify-start">
        {right.map((text, i) => (
          <p
            key={i}
            className="text-base md:text-lg text-white/90 leading-relaxed"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default GridTextSection;

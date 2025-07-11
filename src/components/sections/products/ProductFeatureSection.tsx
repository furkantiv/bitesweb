import Image from "next/image";

interface FeatureSectionData {
  type: "feature";
  image: string;
  heading: string;
  content: string;
  extra?: string;
  product?: string;
}

export default function ProductFeatureSection({
  image,
  heading,
  content,
  extra,
  product = "",
}: FeatureSectionData) {
  return (
    <section className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-lg min-h-[350px]">
      {/* Sol: Görsel */}
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto min-h-[300px]">
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Sağ: Metin alanı */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 min-h-[350px]">
        <span className="uppercase text-[13px] tracking-wider text-white/70 font-semibold mb-2">
          {product}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {heading}
        </h2>
        <div className="space-y-4">
          <p className="text-base md:text-lg text-white leading-snug">
            {content}
          </p>
          {extra && (
            <p className="text-base md:text-lg text-white leading-snug">
              {extra}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

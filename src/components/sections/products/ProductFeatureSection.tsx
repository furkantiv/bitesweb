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
    <section className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden md:min-h-[350px] mb-14">
      {/* Sol: Görsel */}
      <div className="w-full md:w-1/2 aspect-[575/385] relative rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover" // veya object-contain
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {/* Sağ: Metin alanı */}
      <div className="w-full md:w-1/2 flex flex-col justify-center py-3 md:p-6 md:min-h-[350px]">
        <span className="uppercase text-[13px] tracking-wider text-white/70 font-semibold mb-2">
          {product}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {heading}
        </h2>
        <div className="space-y-4">
          <p className="text-base text-white leading-snug">{content}</p>
          {extra && (
            <p className="text-base text-white leading-snug">{extra}</p>
          )}
        </div>
      </div>
    </section>
  );
}

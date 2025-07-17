import Image from "next/image";

interface ProductGridSectionProps {
  image: string;
  heading: string;
  features: string[];
  product?: string;
}

export default function ProductGridSection({
  image,
  heading,
  features,
  product = "",
}: ProductGridSectionProps) {
  return (
    <section className="flex flex-col md:flex-row w-full rounded-lg space-x-6 overflow-hidden min-h-[350px] mb-14">
      {/* Sol: Metin */}
      <div className="w-full md:w-1/2 flex flex-col justify-center pb-3 min-h-[350px]">
        <span className="uppercase text-[13px] tracking-wider text-white/70 font-semibold mb-2">
          {product}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {heading}
        </h2>
        <ul className="space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-center text-base text-white">
              <span className="inline-block w-2 h-2 rounded-full bg-white mr-3 mt-1.5 shrink-0" />
              <span className="leading-snug">{f}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Sağ: Görsel */}
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
    </section>
  );
}

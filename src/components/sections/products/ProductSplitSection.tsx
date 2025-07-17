import Image from "next/image";

interface ProductSplitSectionProps {
  image: string;
  product?: string;
  title: string;
  heading: string;
  features: string[];
}

export default function ProductSplitSection({
  image,
  product = "",
  title,
  heading,
  features,
}: ProductSplitSectionProps) {
  return (
    <section className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden min-h-[350px] space-x-6 mb-14">
      {/* Sol: Metin */}
      <div className="w-full md:w-1/2 flex flex-col justify-center min-h-[350px]">
        <span className="uppercase text-[13px] tracking-wider text-white/70 font-semibold mb-2">
          {product}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-base text-white mb-4">{heading}</p>
        <ul className="space-y-1">
          {features.map((feature, i) => (
            <li key={i} className="text-base text-white flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-white mr-3 shrink-0" />
              <span className="leading-snug">{feature}</span>
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

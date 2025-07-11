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
    <section className="flex flex-col md:flex-row w-full pt-6 rounded-2xl overflow-hidden min-h-[350px] space-x-6">
      {/* Sol: Metin */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 min-h-[350px]">
        <span className="uppercase text-[13px] tracking-wider text-white/70 font-semibold mb-2">
          {product}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
          {title}
        </h2>
        <p className="text-base md:text-lg text-white mb-5">{heading}</p>
        <ul className="space-y-1">
          {features.map((feature, i) => (
            <li key={i} className="text-base text-white flex items-start">
              <span className="inline-block mt-2 w-2 h-2 rounded-full bg-white mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {/* Sağ: Görsel */}
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto rounded-2xl overflow-hidden min-h-[300px]">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>
    </section>
  );
}

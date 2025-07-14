import Image from "next/image";

interface ProductReverseGridSectionProps {
  image: string;
  heading: string;
  features: string[];
  product?: string;
}

export default function ProductReverseGridSection({
  image,
  heading,
  features,
  product = "",
}: ProductReverseGridSectionProps) {
  return (
    <section className="flex flex-col md:flex-row w-full pt-8 pb-8 rounded-lg space-x-6 overflow-hidden min-h-[350px]">
      {/* Sol: Görsel */}
      <div
        className="w-full md:w-1/2 relative h-[400px] md:h-auto min-h-[300px]
      rounded-lg overflow-hidden"
      >
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Sag: Metin */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-0 min-h-[350px] items-end text-right">
        <span className="uppercase text-[13px] tracking-wider text-white/70 font-semibold mb-2">
          {product}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {heading}
        </h2>
        <ul className="space-y-3 w-full">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-center justify-end text-base text-white w-full"
            >
              <span className="">{f}</span>
              <span className="inline-block mt-2 w-2 h-2 rounded-full bg-white ml-3" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

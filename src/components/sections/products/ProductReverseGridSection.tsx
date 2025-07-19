import Image from "next/image";

interface ProductReverseGridSectionProps {
  image: string;
  heading: string;
  subheading: string;
  features: string[];
  product?: string;
}

export default function ProductReverseGridSection({
  image,
  heading,
  subheading,
  features,
  product = "",
}: ProductReverseGridSectionProps) {
  return (
    <section className="flex flex-col md:flex-row w-full pb-8 rounded-lg space-x-6 space-y-6 overflow-hidden min-h-[350px] mb-14">
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

      {/* Sag: Metin */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:p-0 min-h-[350px]">
        <span className="uppercase text-[13px] tracking-wider text-white/70 font-semibold mb-2">
          {product}
        </span>
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {heading}
          </h2>
        )}
        {subheading && (
          <h2 className="text-base md:text-lg font-bold text-white mb-4">
            {subheading}
          </h2>
        )}
        <ul className="space-y-2 w-full">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-center text-base text-white w-full"
            >
              <span className="inline-block w-2 h-2 rounded-full items-center bg-white mr-3" />
              <span className="">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

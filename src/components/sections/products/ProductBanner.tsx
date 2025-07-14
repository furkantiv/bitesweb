import Image from "next/image";

interface ProductBannerProps {
  image: string;
  alt?: string;
}
export default function ProductBanner({ image, alt }: ProductBannerProps) {
  return (
    <div className="w-full h-32 md:h-100 rounded-lg overflow-hidden relative mb-6">
      <Image
        src={image}
        alt={alt || "Product Banner"}
        fill
        className="object-contain"
      />
    </div>
  );
}

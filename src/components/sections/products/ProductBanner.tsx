import Image from "next/image";

interface ProductBannerProps {
  image: string;
  alt?: string;
}
export default function ProductBanner({ image, alt }: ProductBannerProps) {
  return (
    <div className="w-full h-64 pt-6 md:h-80 rounded-lg overflow-hidden relative">
      <Image
        src={image}
        alt={alt || "Product Banner"}
        fill
        className="object-cover"
      />
    </div>
  );
}

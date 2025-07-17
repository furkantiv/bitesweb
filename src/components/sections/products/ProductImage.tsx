import Image from "next/image";

interface ProductBannerProps {
  image: string;
  alt?: string;
}
export default function ProductImage({ image, alt }: ProductBannerProps) {
  return (
    <div className="rounded-lg overflow-hidden relative mb-14 flex items-center justify-center min-h-[300px]">
      <Image
        src={image}
        alt={alt || "Product Image"}
        width={500}
        height={500}
        className="object-contain"
      />
    </div>
  );
}

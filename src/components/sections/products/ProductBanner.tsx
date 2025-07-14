import Image from "next/image";

interface ProductBannerProps {
  image: string;
  alt?: string;
}
export default function ProductBanner({ image, alt }: ProductBannerProps) {
  return (
    <div className=" rounded-lg overflow-hidden relative mb-14">
      <Image
        src={image}
        alt={alt || "Product Banner"}
        width={1280}
        height={400}
        className="object-contain"
      />
    </div>
  );
}

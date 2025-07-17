import Image from "next/image";

interface ProductHeroImageProps {
  image: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ProductHeroImage({
  image,
  alt,
  width = 1280,
  height = 400,
  className,
}: ProductHeroImageProps) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden flex items-center justify-center mx-auto mb-14 ${
        className ?? ""
      }`}
    >
      <Image
        src={image}
        alt={alt ?? "Product Hero"}
        width={width}
        height={height}
        className="rounded-lg object-contain"
        style={{ maxWidth: "100%", height: "auto" }}
        priority
      />
    </div>
  );
}

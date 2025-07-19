import React from "react";

type MasonryGridProps = {
  images: string[];
  className?: string;
};

const MasonryGrid: React.FC<MasonryGridProps> = ({
  images,
  className = "",
}) => {
  return (
    <div
      className={`columns-1 sm:columns-2 gap-4 w-full max-w-7xl mx-auto ${className}`}
    >
      {images.map((src, i) => (
        <div key={i} className="mb-4 break-inside-avoid">
          <img
            src={src}
            alt={`placeholder-${i}`}
            width={575}
            height={386}
            className="w-full h-auto rounded-lg shadow-md object-cover"
            style={{ aspectRatio: "575/386" }}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;

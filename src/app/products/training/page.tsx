"use client";
import { useState } from "react";
import AnimatedList from "@/components/ui/AnimatedList";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const items = [
  {
    name: "Embedded Training System",
    image: "/products/categories/embedded-training-system.png",
  },
  { name: "Atok", image: "/products/categories/atok.png" },
  {
    name: "Augmented Reality Content Creator",
    image: "/products/categories/augmented-reality-content-creator.png",
  },
  {
    name: "Augmented Reality",
    image: "/products/categories/augmented-reality.png",
  },
  {
    name: "Avionic System Software",
    image: "/products/categories/avionic-system-software.png",
  },
  { name: "Digital Twin", image: "/products/categories/digital-twin.png" },
  { name: "Immersive XR", image: "/products/categories/immersive-xr.png" },
  { name: "Karma", image: "/products/categories/karma.png" },
  { name: "Porsuk", image: "/products/categories/porsuk.png" },
  { name: "Sand Box", image: "/products/categories/sand-box.png" },
  {
    name: "Video Management System",
    image: "/products/categories/video-management-system.png",
  },
];

const Page = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent overflow-hidden">
      <div className="flex items-center justify-center w-full max-w-5xl h-[500px] gap-12">
        {/* Sol: Liste */}
        <div
          onMouseLeave={() => setHoveredIndex(null)}
          className="h-full flex-1 flex items-center justify-center"
        >
          <AnimatedList
            items={items.map((i) => i.name)}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={false}
          />
        </div>

        {/* Sağ: Fotoğraf Preview */}
        <div className="flex-1 flex items-center justify-center h-full min-w-[300px]">
          {hoveredIndex !== null && items[hoveredIndex]?.image && (
            <Image
              src={`${basePath}${items[hoveredIndex].image}`}
              alt={items[hoveredIndex].name}
              width={300}
              height={300}
              className="object-contain rounded-2xl shadow-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

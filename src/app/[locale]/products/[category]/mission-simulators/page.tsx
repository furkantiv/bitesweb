import ProductHeader from "@/components/sections/products/ProductHeader";
import ProductHeroVideo from "@/components/sections/products/ProductHeroVideo";
import ProductHeroImage from "@/components/sections/products/ProductHeroImage";
import SectionRenderer from "@/components/ui/SectionRenderer";
import MasonryGrid from "@/components/ui/MasonryGrid";
import { LocalizedStringArray } from "@/utils/types";
import { useLocale } from "next-intl";
import { missionSimulatorsContext } from "@/data/products/missionSimulatorsContext";

const images = [
  "https://picsum.photos/seed/1/575/386",
  "https://picsum.photos/seed/2/575/386",
  "https://picsum.photos/seed/3/575/386",
  "https://picsum.photos/seed/4/575/386",
  "https://picsum.photos/seed/5/575/386",
  "https://picsum.photos/seed/6/575/386",
];

export default function Page() {
  const content = missionSimulatorsContext;
  const locale = useLocale() as keyof LocalizedStringArray;
  const t = <T extends { [key: string]: any }>(obj: T) =>
    obj[locale] ?? obj["en"];
  return (
    <div className="max-w-7xl px-5 my-20 md:my-40 mx-auto">
      <div className="px-3 md:px-6 border rounded-2xl border-[#35434D] min-h-screen">
        <ProductHeader
          title={t(content.title)}
          description={t(content.description)}
        />
        {content.videoUrl ? (
          <ProductHeroVideo videoUrl={content.videoUrl} />
        ) : content.heroImageUrl ? (
          <ProductHeroImage
            image={content.heroImageUrl}
            alt={t(content.title)}
          />
        ) : null}
        {content.sections.map((section, i) => (
          <SectionRenderer
            key={i}
            section={section}
            locale={locale}
            productName={content.title?.[locale] ?? content.title?.en}
          />
        ))}
        <div className="flex ">
          <MasonryGrid images={images} />
        </div>
      </div>
    </div>
  );
}

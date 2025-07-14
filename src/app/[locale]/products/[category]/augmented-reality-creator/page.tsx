import ProductHeader from "@/components/sections/products/ProductHeader";
import ProductHeroImage from "@/components/sections/products/ProductHeroImage";
import ProductHeroVideo from "@/components/sections/products/ProductHeroVideo";
import BackButton from "@/components/ui/BackButton";
import SectionRenderer from "@/components/ui/SectionRenderer";
import { augmentedRealityContentCreatorContent } from "@/data/products/augmentedRealityContentCreatorContent";
import { LocalizedStringArray } from "@/utils/types";
import { useLocale } from "next-intl";

const ContentCreator = () => {
  const content = augmentedRealityContentCreatorContent;
  const locale = useLocale() as keyof LocalizedStringArray;

  const t = <T extends { [key: string]: any }>(obj: T) =>
    obj[locale] ?? obj["en"];

  return (
    <div className="max-w-7xl px-5 my-20 md:my-40 mx-auto">
      <BackButton categorySlug="trainingsimulation" />
      <div className="px-3 pb-6 border rounded-2xl border-[#35434D] min-h-screen">
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
      </div>
    </div>
  );
};
export default ContentCreator;

import ProductBanner from "@/components/sections/products/ProductBanner";
import ProductFeatureSection from "@/components/sections/products/ProductFeatureSection";
import ProductGridSection from "@/components/sections/products/ProductGridSection";
import ProductHeader from "@/components/sections/products/ProductHeader";
import ProductHeroVideo from "@/components/sections/products/ProductHeroVideo";
import ProductSliderSection from "@/components/sections/products/ProductSliderSection";
import ProductSplitSection from "@/components/sections/products/ProductSplitSection";

import { atokContent } from "@/data/products/atok";
import { LocalizedStringArray } from "@/utils/types";
import { useLocale } from "next-intl";

const Atok = () => {
  const content = atokContent;
  const locale = useLocale() as keyof LocalizedStringArray;

  // Yardımcı fonksiyon:
  const t = <T extends { [key: string]: any }>(obj: T) =>
    obj[locale] ?? obj["en"];

  // Section'ları locale'ye uygun çek
  const feature = content.sections.find(
    (section) => section.type === "feature"
  );
  const banner = content.sections.find((section) => section.type === "banner");
  const split = content.sections.find((section) => section.type === "split");
  const slider = content.sections.find((section) => section.type === "slider");
  const grid = content.sections.find((section) => section.type === "grid");

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-15 min-h-screen">
      <ProductHeader
        title={t(content.title)}
        description={t(content.description)}
      />
      <ProductHeroVideo videoUrl={content.videoUrl} />
      {feature && (
        <ProductFeatureSection
          {...feature}
          product="Atok"
          image={feature.image}
          heading={t(feature.heading)}
          content={t(feature.content)}
          extra={feature.extra ? t(feature.extra) : undefined}
        />
      )}
      {banner && <ProductBanner image={banner.image} />}
      {split && (
        <ProductSplitSection
          product="Atok"
          image={split.image}
          title={t(split.title)}
          heading={t(split.heading)}
          features={split.features[locale] ?? split.features["en"]}
        />
      )}
      {slider && (
        <ProductSliderSection
          product="Atok"
          slides={slider.slides.map((slide) => ({
            ...slide,
            title: t(slide.title),
            features: slide.features[locale] ?? slide.features["en"],
          }))}
        />
      )}
      {grid && (
        <ProductGridSection
          product="Atok"
          image={grid.image}
          heading={t(grid.heading)}
          features={grid.features[locale] ?? grid.features["en"]}
        />
      )}
    </div>
  );
};
export default Atok;

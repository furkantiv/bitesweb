import ProductBanner from "@/components/sections/products/ProductBanner";
import ProductFeatureSection from "@/components/sections/products/ProductFeatureSection";
import ProductGridSection from "@/components/sections/products/ProductGridSection";
import ProductSliderSection from "@/components/sections/products/ProductSliderSection";
import ProductSplitSection from "@/components/sections/products/ProductSplitSection";
import ProductInfoGridSection from "../sections/products/ProductInfoGridSection";
import ProductReverseGridSection from "../sections/products/ProductReverseGridSection";
import ProductImage from "../sections/products/ProductImage";

const SectionRenderer = ({
  section,
  locale,
  productName,
}: {
  section: any;
  locale: string;
  productName: string;
}) => {
  // Locale ile çeviri fonksiyonu
  const t = <T extends { [key: string]: any }>(obj: T) =>
    obj?.[locale] ?? obj?.["en"] ?? "";

  switch (section.type) {
    case "feature":
      return (
        <ProductFeatureSection
          {...section}
          product={productName}
          image={section.image}
          heading={t(section.heading)}
          content={t(section.content)}
          extra={section.extra ? t(section.extra) : undefined}
        />
      );
    case "banner":
      return <ProductBanner image={section.image} />;
    case "split":
      return (
        <ProductSplitSection
          product={productName}
          image={section.image}
          title={t(section.title)}
          heading={t(section.heading)}
          features={
            section.features?.[locale] ?? section.features?.["en"] ?? []
          }
        />
      );
    case "slider":
      return (
        <ProductSliderSection
          product={productName}
          slides={section.slides.map((slide: any) => ({
            ...slide,
            title: t(slide.title),
            features: slide.features?.[locale] ?? slide.features?.["en"] ?? [],
          }))}
        />
      );
    case "grid":
      return (
        <ProductGridSection
          product={productName}
          image={section.image}
          heading={t(section.heading)}
          features={
            section.features?.[locale] ?? section.features?.["en"] ?? []
          }
        />
      );
    case "infoGrid":
      return (
        <ProductInfoGridSection
          heading={section.heading?.[locale] ?? section.heading?.en}
          categories={section.columns?.[locale] ?? section.columns?.en ?? []}
          image={section.image}
        />
      );
    case "reverseGrid":
      return (
        <ProductReverseGridSection
          product={productName}
          image={section.image}
          heading={t(section.heading)}
          features={
            section.features?.[locale] ?? section.features?.["en"] ?? []
          }
        />
      );
    case "image":
      return <ProductImage image={section.image} />;
    default:
      return null;
  }
};

export default SectionRenderer;

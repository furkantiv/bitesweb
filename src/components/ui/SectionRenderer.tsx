import ProductBanner from "@/components/sections/products/ProductBanner";
import ProductFeatureSection from "@/components/sections/products/ProductFeatureSection";
import ProductGridSection from "@/components/sections/products/ProductGridSection";
import ProductSliderSection from "@/components/sections/products/ProductSliderSection";
import ProductSplitSection from "@/components/sections/products/ProductSplitSection";
import ProductInfoGridSection from "../sections/products/ProductInfoGridSection";
import ProductReverseGridSection from "../sections/products/ProductReverseGridSection";
import ProductImage from "../sections/products/ProductImage";
import ProductTableListSection from "../sections/products/ProductTableListSection";
import ProductTableSection from "../sections/products/ProductTableSection";
import GridTextSection from "../sections/products/GridTextSection";

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
          subheading={t(section.subheading)}
          features={
            section.features?.[locale] ?? section.features?.["en"] ?? []
          }
        />
      );
    case "infoGrid":
      return (
        <ProductInfoGridSection
          product={productName}
          heading={section.heading?.[locale] ?? section.heading?.en}
          categories={section.columns?.[locale] ?? section.columns?.en ?? []}
          image={section.image}
          features={section.features?.[locale] ?? section.features?.en ?? []}
        />
      );
    case "reverseGrid":
      return (
        <ProductReverseGridSection
          product={productName}
          image={section.image}
          heading={t(section.heading)}
          subheading={t(section.subheading)}
          features={
            section.features?.[locale] ?? section.features?.["en"] ?? []
          }
        />
      );
    case "image":
      return <ProductImage image={section.image} />;

    case "tableList":
      return (
        <ProductTableListSection
          heading={t(section.heading)}
          columns={section.columns.map((col: any) => ({
            ...col,
            title: t(col.title),
          }))}
          data={section.data}
          listItems={section.listItems?.[locale] ?? section.listItems?.en ?? []}
        />
      );

    case "table":
      return (
        <ProductTableSection
          heading={t(section.heading)}
          product={productName}
          image={section.image}
          columns={section.columns.map((col: any) => ({
            ...col,
            title: t(col.title),
          }))}
          data={section.data.map((row: any) => {
            const localizedRow: Record<string, string> = {};
            Object.keys(row).forEach((key) => {
              const value = row[key];
              localizedRow[key] =
                typeof value === "object" && value !== null && locale in value
                  ? value[locale as "en" | "tr"]
                  : value;
            });
            return localizedRow;
          })}
        />
      );

    case "gridText":
      return (
        <GridTextSection
          texts={section.texts?.[locale] ?? section.texts?.en ?? []}
        />
      );

    default:
      return null;
  }
};

export default SectionRenderer;

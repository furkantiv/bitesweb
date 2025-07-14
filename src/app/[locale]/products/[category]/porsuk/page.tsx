import ProductHeader from "@/components/sections/products/ProductHeader";
import ProductHeroVideo from "@/components/sections/products/ProductHeroVideo";
import SectionRenderer from "@/components/ui/SectionRenderer";
import { LocalizedStringArray } from "@/utils/types";
import { useLocale } from "next-intl";
import { porsukContent } from "@/data/products/porsuk";
import ProductHeroImage from "@/components/sections/products/ProductHeroImage";

const Porsuk = () => {
  const content = porsukContent;
  const locale = useLocale() as keyof LocalizedStringArray;

  // Yardımcı fonksiyon:
  const t = <T extends { [key: string]: any }>(obj: T) =>
    obj[locale] ?? obj["en"];

  return (
    <div className="max-w-7xl mx-auto px-6 my-40 pb-6 border rounded-2xl border-[#35434D] min-h-screen">
      <ProductHeader
        title={t(content.title)}
        description={t(content.description)}
      />
      {content.videoUrl ? (
        <ProductHeroVideo videoUrl={content.videoUrl} />
      ) : content.heroImageUrl ? (
        <ProductHeroImage image={content.heroImageUrl} alt={t(content.title)} />
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
  );
};
export default Porsuk;

import ProductHeader from "@/components/sections/products/ProductHeader";
import ProductHeroVideo from "@/components/sections/products/ProductHeroVideo";
import SectionRenderer from "@/components/ui/SectionRenderer";
import { LocalizedStringArray } from "@/utils/types";
import { useLocale } from "next-intl";
import { porsukContent } from "@/data/products/porsuk";
import ProductHeroImage from "@/components/sections/products/ProductHeroImage";
import BackButton from "@/components/ui/BackButton";

const Porsuk = () => {
  const content = porsukContent;
  const locale = useLocale() as keyof LocalizedStringArray;

  // Yardımcı fonksiyon:
  const t = <T extends { [key: string]: any }>(obj: T) =>
    obj[locale] ?? obj["en"];

  return (
    <div className="max-w-7xl my-20 md:my-40 mx-auto">
      <BackButton categorySlug="defenceinformation" />
      <div className="pb-6 px-5  border rounded-2xl border-[#35434D] min-h-screen">
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
export default Porsuk;

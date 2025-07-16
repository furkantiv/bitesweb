import HeroText from "@/components/sections/TrustHero";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import InfoCardsGrid from "@/components/ui/InfoCard";
import { getTranslations } from "next-intl/server";
import { newsList } from "@/data/news";
import NewsCard from "@/components/sections/NewsGrid";
import { getLastNews } from "@/utils/getLastNews";
import ClientOnlyLoader from "@/components/layout/ClientOnlyLoader";

const HomePage = async () => {
  const t = await getTranslations("HomePage");
  const fallbackData = {
    words: t.raw("words"), // string[] from `messages/tr.json` or `messages/en.json`
  };

  const words = Array.isArray(fallbackData.words) ? fallbackData.words : [];

  return (
    <ClientOnlyLoader>
      <div className="fixed inset-0 flex flex-col items-center justify-center md:justify-start overflow-hidden">
        <div className="flex flex-col items-start md:items-center md:overflow-hidden md:mt-40 w-full space-y-15">
          <HeroText title={t("title")} words={words} interval={3000} />
          {/* Responsive Button Group */}
          <div className="flex gap-4 md:gap-16 w-full justify-center items-center">
            <AnimatedButton
              text={t("aboutUs")}
              color="#A2ACB4"
              variant="ghost"
              href="/about"
            />
            <AnimatedButton
              text={t("getInTouch")}
              color="#004DFF"
              href="/contact"
            />
          </div>

          {/* Info Grid */}
          <div className="hidden short:hidden md:block w-full max-w-7xl md:max-h-[30vh] md:overflow-auto">
            <InfoCardsGrid />
          </div>
        </div>

        {/* Sticky NewsGrid */}
        <div className="fixed shorty:hidden bottom-0 right-0 z-30">
          <NewsCard newsItems={getLastNews(newsList, 3)} />
        </div>
      </div>
    </ClientOnlyLoader>
  );
};

export default HomePage;

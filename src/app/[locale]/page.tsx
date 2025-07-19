import HeroText from "@/components/sections/TrustHero";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import InfoCardsGrid from "@/components/ui/InfoCard";
import { getTranslations } from "next-intl/server";
import { newsList } from "@/data/news";
import NewsCard from "@/components/sections/NewsGrid";
import { getLastNews } from "@/utils/getLastNews";

const HomePage = async () => {
  const t = await getTranslations("HomePage");
  const fallbackData = {
    words: t.raw("words"),
  };

  const words = Array.isArray(fallbackData.words) ? fallbackData.words : [];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 space-y-12 py-20">
      <div className="flex flex-col items-center justify-between md:justify-start min-h-[calc(100vh-64px)] overflow-hidden">
        <div className="flex flex-col items-start md:items-center md:overflow-hidden w-full space-y-15">
          <HeroText title={t("title")} words={words} interval={3000} />

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
          <div className="hidden short:hidden md:block w-full max-w-7xl md:max-h-[30vh] md:overflow-auto">
            <InfoCardsGrid />
          </div>
        </div>
        <div className="w-full md:fixed md:bottom-0 md:right-0 md:w-auto shorty:hidden">
          <NewsCard newsItems={getLastNews(newsList, 3)} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

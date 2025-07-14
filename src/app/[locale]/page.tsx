import HeroText from "@/components/sections/TrustHero";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import InfoCardsGrid from "@/components/ui/InfoCard";
import { getTranslations } from "next-intl/server";
import { newsList } from "@/data/news";
import NewsCard from "@/components/sections/NewsGrid";
import { getLastNews } from "@/utils/getLastNews";
export const metadata = {
  title: "Bites",
  description: "Learn more about us...",
};

const HomePage = async () => {
  const t = await getTranslations("HomePage");

  const fallbackData = {
    title: t("title"),
    words: t.raw("words"), // string[]
  };

  async function getStrapiData(path: string) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      const data = await response.json();
      if (!data?.data) throw new Error("No data");
      return data;
    } catch (error) {
      return { data: fallbackData };
    }
  }

  const strapiData = await getStrapiData("/api/home-page");
  const { title } = strapiData.data;
  // words JSON'dan string[] veya block olabilir, burada normalize ettim:
  const words = Array.isArray(strapiData.data.words)
    ? strapiData.data.words[0]?.children
      ? strapiData.data.words.map((block: any) =>
          (block.children ?? []).map((c: any) => c.text).join(" ")
        )
      : strapiData.data.words
    : [];

  return (
    <div className="fixed inset-10 w-screen h-screen overflow-hidden flex flex-col items-center justify-center md:justify-start px-5 pb-28 md:pb-0">
      <div className="flex flex-col items-center justify-center md:items-center space-y-10 max-h-full md:overflow-hidden md:mt-24">
        <HeroText title={title} words={words} interval={3000} />

        {/* Responsive Button Group */}
        <div className="flex flex-row gap-16 px-2 items-center justify-center">
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

        <div className="hidden md:block w-full max-w-7xl md:max-h-[30vh] md:overflow-auto">
          <InfoCardsGrid />
        </div>
      </div>
      {/* Sticky NewsGrid (Only visible on larger screens) */}
      <div className="fixed bottom-0 right-0 z-30">
        <NewsCard newsItems={getLastNews(newsList, 3)} locale="en" />
      </div>
    </div>
  );
};

export default HomePage;

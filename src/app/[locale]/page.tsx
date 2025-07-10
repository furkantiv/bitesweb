import NewsGrid from "@/components/sections/NewsGrid";
import HeroText from "@/components/sections/TrustHero";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import InfoCardsGrid from "@/components/ui/InfoCard";
import { getTranslations } from "next-intl/server";

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
    const baseUrl = "http://localhost:1337";
    try {
      const response = await fetch(baseUrl + path, { cache: "no-store" });
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
    <div className="w-screen h-full overflow-auto md:overflow-hidden flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-10 md:mt-30 max-h-full md:overflow-hidden">
        <HeroText title={title} words={words} interval={3000} />

        {/* Responsive Button Group */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
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
        <div className="w-full max-w-7xl md:max-h-[30vh] md:overflow-auto">
          <InfoCardsGrid />
        </div>
      </div>
      {/* Sticky NewsGrid (Only visible on larger screens) */}
      <div className="fixed bottom-0 right-0 z-30 hidden md:block">
        <NewsGrid />
      </div>
    </div>
  );
};

export default HomePage;

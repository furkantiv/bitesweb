import NewsGrid from "@/components/sections/NewsGrid";
import HeroText from "@/components/sections/TrustHero";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import InfoCardsGrid from "@/components/ui/InfoCard";

export const metadata = {
  title: "Bites",
  description: "Learn more about us...",
};

const HomePage = () => {
  return (
    <div className="w-screen h-full overflow-auto md:overflow-hidden flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-10 md:mt-30 max-h-full md:overflow-hidden">
        <HeroText
          words={["Trust", "Innovation", "Agility", "Care"]}
          interval={3000}
        />

        {/* Responsive Button Group */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <AnimatedButton
            text="About Us"
            color="#A2ACB4"
            variant="outline"
            href="/about"
          />
          <AnimatedButton text="Get in touch" color="#004DFF" />
        </div>

        {/* Info Grid */}
        <div className="w-full max-w-6xl md:max-h-[30vh] md:overflow-auto">
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

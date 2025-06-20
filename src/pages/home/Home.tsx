import NewsGrid from "@/components/sections/NewsGrid";
import HeroText from "@/components/sections/TrustHero";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import InfoCardsGrid from "@/components/ui/InfoCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10 ">
      <HeroText
        words={["Trust", "Innovation", "Quality", "Care"]}
        interval={2000}
      />
      <div className="flex flex-row gap-20  ">
        <AnimatedButton text="Mesala Buraya Uzun bir Yazi" color="#004DFF" />
        <AnimatedButton text="About Us" color="#f59e42" variant="outline" />
      </div>
      <div>
        <InfoCardsGrid />
      </div>
      <div className="fixed bottom-0 right-6 z-30 -mb-8 hidden md:block">
        <NewsGrid />
      </div>
    </div>
  );
};

export default Home;

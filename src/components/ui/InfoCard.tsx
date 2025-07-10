import Image from "next/image";
import { getTranslations } from "next-intl/server";

type InfoCardProps = {
  icon: string;
  title: string;
  description?: string;
};

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-600 p-4  w-full">
      <div className="w-10 h-10 flex items-center justify-center">
        <Image src={icon} width={32} height={32} alt={title} />
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
        {description && <p className="text-gray-400 text-xs">{description}</p>}
      </div>
    </div>
  );
};

export default async function InfoCardsGrid() {
  const t = await getTranslations("HomePage.infoCards");

  const cards = [
    {
      icon: "/images/icons/home/AIntelligence.png",
      key: "AIntelligence",
    },
    {
      icon: "/images/icons/home/SafetyMission.png",
      key: "SafetyMission",
    },
    {
      icon: "/images/icons/home/DigitalTwin.png",
      key: "DigitalTwin",
    },
    {
      icon: "/images/icons/home/DataAnalytics.png",
      key: "DataAnalytics",
    },
    {
      icon: "/images/icons/home/SimulationTraining.png",
      key: "SimulationTraining",
    },
    {
      icon: "/images/icons/home/CloudComputing.png",
      key: "CloudComputing",
    },
    {
      icon: "/images/icons/home/MobileApp.png",
      key: "MobileApp",
    },
    {
      icon: "/images/icons/home/ExtendedReality.png",
      key: "ExtendedReality",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 py-6">
      {cards.map((card) => (
        <InfoCard key={card.key} icon={card.icon} title={t(card.key)} />
      ))}
    </div>
  );
}

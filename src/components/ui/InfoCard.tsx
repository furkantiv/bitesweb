import Image from "next/image";

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

export default function InfoCardsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 py-6">
      <InfoCard
        icon="/images/icons/home/AIntelligence.png"
        title="Artificial Intelligence"
      />
      <InfoCard
        icon="/images/icons/home/SafetyMission.png"
        title="Safety & Mission Critical Software"
      />
      <InfoCard
        icon="/images/icons/home/DigitalTwin.png"
        title="Digital Twin"
      />
      <InfoCard
        icon="/images/icons/home/DataAnalytics.png"
        title="Data Analytics"
      />
      <InfoCard
        icon="/images/icons/home/SimulationTraining.png"
        title="Simulations & Training System"
      />
      <InfoCard
        icon="/images/icons/home/CloudComputing.png"
        title="Cloud Computing"
      />
      <InfoCard
        icon="/images/icons/home/MobileApp.png"
        title="Mobile Applications"
      />
      <InfoCard
        icon="/images/icons/home/ExtendedReality.png"
        title="Extended Reality"
      />
    </div>
  );
}

"use client";

import React from "react";
import {
  Cpu,
  UserCheck,
  Monitor,
  BarChart2,
  Airplay,
  Cloud,
  Smartphone,
  AirVent,
} from "lucide-react";

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  description?: string;
};

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="flex items-center gap-4 rounded-lg border backdrop-blur-xs border-gray-600 p-4 hover:border-blue-600 cursor-pointer transition-colors max-w-[300px]">
      <div className="p-3 rounded-md border border-gray-600 group-hover:border-blue-600">
        {icon}
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto p-6">
      <InfoCard
        icon={<Cpu className="w-6 h-6 text-white" />}
        title="Artificial Intelligence"
      />
      <InfoCard
        icon={<UserCheck className="w-6 h-6 text-white" />}
        title="Safety & Mission Critical Software"
      />
      <InfoCard
        icon={<Monitor className="w-6 h-6 text-white" />}
        title="Digital Twin"
      />
      <InfoCard
        icon={<BarChart2 className="w-6 h-6 text-white" />}
        title="Data Analytics"
      />
      <InfoCard
        icon={<Airplay className="w-6 h-6 text-white" />}
        title="Simulations & Training System"
      />
      <InfoCard
        icon={<Cloud className="w-6 h-6 text-white" />}
        title="Cloud Computing"
      />
      <InfoCard
        icon={<Smartphone className="w-6 h-6 text-white" />}
        title="Mobile Applications"
      />
      <InfoCard
        icon={<AirVent className="w-6 h-6 text-white" />}
        title="Extended Reality"
      />
    </div>
  );
}

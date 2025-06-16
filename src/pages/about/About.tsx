"use client";

import HeroSection from "@/components/sections/about/HeroSection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import React, { useRef } from "react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full">
      <HeroSection />
      <div>
        <ValuesSection />
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import AnimatedBackground from "@/components/animations/AnimatedBackground";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Globe from "@/components/animations/Globe";
import { GlobeProvider } from "@/contexts/GlobeContext";
import ContentRenderer from "@/components/layout/ContentRenderer";
import NewsGrid from "@/components/sections/NewsGrid";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden relative">
      <GlobeProvider>
        {/* Background layers */}
        <div className="relative z-10">
          <AnimatedBackground />
          <Globe />
        </div>

        {/* Header */}
        <Header />

        {/* Main content */}
        <div className="relative z-20">
          <ContentRenderer />
        </div>
      </GlobeProvider>
    </div>
  );
};
export default HomePage;

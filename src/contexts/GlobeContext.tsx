"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type GlobeContextType = {
  rotationSpeed: number;
  position: [number, number, number];
  updateGlobe: (speed: number, position: [number, number, number]) => void;
};

const GlobeContext = createContext<GlobeContextType | undefined>(undefined);

export const useGlobe = (): GlobeContextType => {
  const context = useContext(GlobeContext);
  if (!context) {
    throw new Error("useGlobe must be used within a GlobeProvider");
  }

  return context;
};

export const GlobeProvider = ({ children }: { children: ReactNode }) => {
  const [rotationSpeed, setRotationSpeed] = useState(0.003);
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

  const updateGlobe = (
    speed: number,
    newPosition: [number, number, number]
  ) => {
    setRotationSpeed(speed);
    setPosition(newPosition);
  };

  return (
    <GlobeContext.Provider value={{ rotationSpeed, position, updateGlobe }}>
      {children}
    </GlobeContext.Provider>
  );
};

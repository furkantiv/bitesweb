"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useGlobe } from "@/contexts/GlobeContext";
import { globeSettings, getGlobeConfig } from "@/utils/globeConfig";

const TRANSITION_SPEED = 0.2;
const TRANSITION_DELAY = 200; // ms

export default function GlobeController() {
  const pathname = usePathname();
  const { updateGlobe } = useGlobe();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    const globe = getGlobeConfig(pathname);
    const isFirstLoad = lastPath.current === null;

    if (!isFirstLoad && lastPath.current !== pathname) {
      // 1. Önce hedef pozisyona transition hızında animasyonla hareket ettir
      updateGlobe(TRANSITION_SPEED, globe.position, globe.scale);

      // 2. Sonra gerçek hıza set et
      const timeout = setTimeout(() => {
        updateGlobe(globe.speed, globe.position, globe.scale);
        // Şimdi path'i güncelle
        lastPath.current = pathname;
      }, TRANSITION_DELAY);

      // cleanup
      return () => clearTimeout(timeout);
    } else {
      // İlk yüklemede: gerçek ayarlarla başlat
      updateGlobe(globe.speed, globe.position, globe.scale);
      lastPath.current = pathname;
    }
  }, [pathname, updateGlobe]);

  return null;
}

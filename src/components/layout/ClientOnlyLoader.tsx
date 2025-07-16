"use client";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

// Minimum bekleme süresi (ms)
const MINIMUM_LOADER_TIME = 2500; // dilediğin süre

export default function ClientOnlyLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(true);
  const [minimumTimePassed, setMinimumTimePassed] = useState(false);

  useEffect(() => {
    // Eğer daha önce loader gösterildiyse direkt içeriği aç
    if (localStorage.getItem("bites_loaded_once") === "1") {
      setShowLoader(false);
      return;
    }

    // Minimum bekleme süresi için timer
    const timer = setTimeout(
      () => setMinimumTimePassed(true),
      MINIMUM_LOADER_TIME
    );

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // children render olduğunda ve minimum süre geçtiğinde loader'ı kaldır
    if (minimumTimePassed && typeof window !== "undefined") {
      setShowLoader(false);
      localStorage.setItem("bites_loaded_once", "1");
    }
  }, [minimumTimePassed]);

  if (showLoader) {
    return <LoadingSpinner />;
  }
  return <>{children}</>;
}

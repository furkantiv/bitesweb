"use client";
import { useRef, useState } from "react";

interface ProductHeroVideoProps {
  videoUrl: string;
  posterUrl?: string;
}

export default function ProductHeroVideo({
  videoUrl,
  posterUrl,
}: ProductHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted((prev) => {
      const newMuted = !prev;
      if (videoRef.current) videoRef.current.muted = newMuted;
      return newMuted;
    });
    // Otomatik play için video'ya yeniden play verebiliriz:
    videoRef.current?.play();
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-700 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        autoPlay
        loop
        muted={muted}
        className="w-full h-full object-cover"
      />
      {/* Ses Aç/Kapat Butonu */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded-full flex items-center shadow-md backdrop-blur hover:bg-black/90 transition z-10"
        type="button"
      >
        {muted ? (
          // Ses kapalı icon (emoji veya bir svg/lucide-react ikon)
          <span role="img" aria-label="Unmute">
            🔇
          </span>
        ) : (
          <span role="img" aria-label="Mute">
            🔊
          </span>
        )}
        <span className="ml-2 text-sm">{muted ? "Sesi Aç" : "Sesi Kapat"}</span>
      </button>
    </div>
  );
}

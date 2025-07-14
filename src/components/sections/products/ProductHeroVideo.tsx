"use client";
import React, { useRef, useState } from "react";

const VideoPlayer = ({
  videoUrl,
  posterUrl,
}: {
  videoUrl: string;
  posterUrl?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0); // Başlangıçta 0

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    if (muted) {
      video.muted = false;
      video.volume = volume > 0 ? volume : 0.1; // Sesi açarken, en son kalan volume'u veya 0.2 kullan
      setVolume(volume > 0 ? volume : 0.1);
      setMuted(false);
    } else {
      video.muted = true;
      setMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      // Eğer kullanıcı sesi tamamen kıstıysa mute'a da al
      if (newVolume === 0) {
        setMuted(true);
        videoRef.current.muted = true;
      } else {
        setMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
    }
  }, []);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black flex items-center justify-center">
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
      {/* Ses kontrolü (Slider) */}
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolumeChange}
        className="absolute bottom-4 left-4 w-32 accent-[#004CFF] bg-transparent rounded-full backdrop-blur-sm"
        aria-label="Ses Seviyesi"
      />
    </div>
  );
};

export default VideoPlayer;

"use client";

import React, { useEffect, useRef, useState } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [centerY, setCenterY] = useState(50); // Yüzdelik merkez (başlangıç ortada)

  useEffect(() => {
    let frame: number;
    let startTime: number | null = null;
    const delay = 1500; // ms cinsinden delay
    const duration = 250; // animasyon süresi (ms)
    const target = 85; // Yüzdelik olarak nereye kadar gitsin (örn: %70)

    const animateGradient = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < delay) {
        // Delay süresi dolana kadar bekle
        frame = requestAnimationFrame(animateGradient);
        return;
      }

      // Animasyonun başladığı zamanı ayarla
      const animElapsed = elapsed - delay;
      const t = Math.min(animElapsed / duration, 1);
      setCenterY(50 + (target - 50) * t);

      if (t < 1) {
        frame = requestAnimationFrame(animateGradient);
      }
    };

    frame = requestAnimationFrame(animateGradient);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Yıldız animasyonu
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const stars = Array.from({ length: 1000 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random(),
    }));

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.opacity = Math.sin(Date.now() * 0.001 + star.x) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(132, 198, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed bg-[#02040d] inset-0 z-0" />
    </>
  );
};

export default AnimatedBackground;

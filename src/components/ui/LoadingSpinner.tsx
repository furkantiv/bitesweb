"use client";

import React from "react";
import Image from "next/image";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen w-full bg-[#000816] flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          {/* Dönen çember */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-400 border-t-transparent animate-spin" />
          {/* Ortadaki logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/logo-inner.png" // ← burada kendi logonu kullanabilirsin
              alt="Logo"
              width={64}
              height={64}
              className="rounded-full"
              priority
            />
          </div>
        </div>
        <div className="text-white font-light tracking-wider">BITES</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

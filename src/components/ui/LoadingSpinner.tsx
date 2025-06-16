"use client";

import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-white font-light tracking-wider">BITES</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

"use client";

import React, { CSSProperties, useState } from "react";
import Image from "next/image";
import { MoonLoader } from "react-spinners";

const override: CSSProperties = {
  margin: "0 auto",
  borderColor: "white",
};
const LoadingSpinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#004DFF");
  return (
    <div className="min-h-screen w-full bg-[#35434D] flex items-center justify-center">
      {/* Loader */}
      <MoonLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={72}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {/* Logo ortada */}
      <div className="absolute inset-0 flex items-center justify-center bg-transparent pointer-events-none">
        <Image
          src="/inner-logo.svg"
          alt="Logo"
          width={64}
          height={64}
          className="rounded-full"
          priority
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;

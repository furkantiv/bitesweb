"use client";

import React, { CSSProperties, useState } from "react";
import Image from "next/image";
import { ClipLoader, MoonLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/inner-logo.svg" // ← burayı kendi logonla değiştir
          alt="Logo"
          width={64} // Boyutunu isteğine göre ayarla
          height={64}
          className="rounded-full"
          priority
        />
      </div>
    </div>

    // <div className="min-h-screen w-full bg-[#000816] flex items-center justify-center">
    //   <div className="text-center">
    //     <div className="relative w-64 h-64 mx-auto mb-4">
    //       {/* Dönen çember */}
    //       <div className="absolute inset-0 rounded-full border-16 border-blue-400 border-t-transparent animate-spin" />
    //       {/* Ortadaki logo */}
    //       <div className="absolute inset-2 flex items-center justify-center">
    //         <Image
    //           src="/inner-logo.svg" // ← burada kendi logonu kullanabilirsin
    //           alt="Logo"
    //           width={256}
    //           height={256}
    //           className="rounded-full"
    //           priority
    //         />
    //       </div>
    //     </div>
    //     <div className="text-white font-light tracking-wider">BITES</div>
    //   </div>
    // </div>
  );
};

export default LoadingSpinner;

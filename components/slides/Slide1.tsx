"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Slide1() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2d2d2d] via-[#1a1a1a] to-[#0d0d0d]">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob-move-1"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-mybox-green/8 rounded-full blur-3xl animate-blob-move-2"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-white/8 rounded-full blur-3xl animate-blob-move-3"></div>
      </div>

      {/* Rotating gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-mybox-green/12 via-transparent to-transparent animate-[spin_25s_linear_infinite]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 space-y-12">
        {/* Logo */}
        <div
          className={`transition-all duration-1000 flex flex-col items-center ${
            isVisible ? "opacity-100 translate-y-0 scale-100 animate-float" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <Image
            src="/images/logo-mybox-white.svg"
            alt="MyBox Logo"
            width={600}
            height={200}
            className="w-96 md:w-[500px] lg:w-[600px] h-auto opacity-95 mb-6"
            priority
          />
          <div className="h-1 w-48 md:w-64 lg:w-80 mx-auto bg-gradient-to-r from-transparent via-mybox-green to-transparent rounded-full animate-glow shadow-lg shadow-mybox-green/50"></div>
        </div>

        {/* Main title */}
        <h2
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
            Inteligentní ekosystém
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent mt-2">
            pro dobíjení elektromobilů
          </span>
        </h2>

        {/* Subtitle */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <div
            className="inline-block glass px-12 py-6 rounded-3xl border-2 border-mybox-green/40 bg-mybox-green/8 transition-all duration-500"
            style={{
              boxShadow: '0 0 20px rgba(76, 175, 80, 0.3), 0 0 40px rgba(76, 175, 80, 0.15)',
            }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light">
              Komplexní cloudové řešení od domácností po průmysl
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

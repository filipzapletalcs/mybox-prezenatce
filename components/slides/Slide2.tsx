"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import AnimatedCard from "@/components/AnimatedCard";

const features = [
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Vzdálený servis",
    description:
      "Kompletní diagnostika, aktualizace firmware a správa dobíjecích stanic odkudkoliv na světě. Real-time monitoring a okamžitá reakce na problémy.",
    tags: ["Diagnostika", "OTA Updates", "Remote Management"],
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobilní aplikace",
    description:
      "Intuitivní rozhraní pro sledování nabíjení v reálném čase, kompletní historie a správa uživatelských účtů. iOS i Android platforma.",
    tags: ["Real-time", "Historie", "Multiplatform"],
  },
];

export default function Slide2() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Animate cards in sequence - faster
    const timer1 = setTimeout(() => setVisibleCards([0]), 200);
    const timer2 = setTimeout(() => setVisibleCards([0, 1]), 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center overflow-hidden bg-gradient-to-br from-[#2d2d2d] via-[#1a1a1a] to-black p-4 md:p-6 lg:p-8 pt-8 md:pt-10 lg:pt-12">
      <Logo />

      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/5 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob-move-1"></div>
        <div className="absolute top-1/5 right-1/5 w-80 h-80 bg-mybox-green/8 rounded-full blur-3xl animate-blob-move-2"></div>
        <div className="absolute bottom-1/3 right-3/5 w-72 h-72 bg-white/8 rounded-full blur-3xl animate-blob-move-3"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-6 md:mb-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent mb-3">
          Apps & Cloud
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
          Komplexní propojení pro chytré dobíjení
        </p>
      </div>

      {/* Features Grid - 2 columns */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full px-4 flex-1 content-center">
        {features.map((feature, index) => (
          <AnimatedCard
            key={index}
            index={index}
            isVisible={visibleCards.includes(index)}
            className="p-8"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-mybox-green/15 border-2 border-mybox-green/50 flex items-center justify-center relative animate-bounce-subtle">
                <div className="absolute inset-0 rounded-full border-2 border-mybox-green/50 animate-glow"></div>
                <i className={`${feature.icon} text-4xl text-mybox-green drop-shadow-lg`}></i>
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {feature.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-2 bg-mybox-green/15 border border-mybox-green/30 rounded-full text-sm text-mybox-green font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Bottom note */}
      <div className="relative z-10 mt-6 md:mt-8 text-center">
        <div className="inline-block glass-light px-8 py-4 rounded-2xl border-2 border-white/25 shadow-lg">
          <p className="text-lg md:text-xl text-white/90 font-medium italic">
            <i className="fas fa-lightbulb text-yellow-400 mr-3"></i>
            Plná kontrola a přehled o dobíjení kdykoliv a odkudkoliv
          </p>
        </div>
      </div>
    </div>
  );
}

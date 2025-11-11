"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import AnimatedCard from "@/components/AnimatedCard";

const features = [
  {
    icon: "fa-solid fa-display",
    title: "5\" dotykový displej",
    description:
      "Barevný displej s intuitivním rozhraním pro zobrazení informací o nabíjení a uživatelskou interakci. Snadné ovládání přímo na stanici.",
    tags: ["Dotykový displej", "Intuitivní UI", "Real-time info"],
  },
  {
    icon: "fa-solid fa-qrcode",
    title: "Dynamický QR kód",
    description:
      "Okamžitý přístup k platbě a identifikaci stanice – bez nutnosti registrace nebo instalace aplikace. Skenuj a nabíjej.",
    tags: ["QR platby", "Bez registrace", "Okamžitý přístup"],
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "AFIR Compliance",
    description:
      "Splnění všech požadavků EU směrnice pro veřejné dobíjecí stanice. Ad-hoc platby bez registrace a transparentní zobrazení cen a informací o nabíjení.",
    tags: ["EU směrnice", "Transparentnost", "Bez registrace"],
  },
];

export default function Slide5() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Animate cards in sequence - faster
    const timer1 = setTimeout(() => setVisibleCards([0]), 200);
    const timer2 = setTimeout(() => setVisibleCards([0, 1]), 300);
    const timer3 = setTimeout(() => setVisibleCards([0, 1, 2]), 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
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
          AFIR Ready
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
          Připraveno na budoucnost EU regulace
        </p>
      </div>

      {/* Features Grid - 3 columns */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl w-full px-4 items-stretch flex-1 content-center">
        {features.map((feature, index) => (
          <AnimatedCard
            key={index}
            index={index}
            isVisible={visibleCards.includes(index)}
            className="p-6 md:p-8 h-full flex flex-col"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-mybox-green/15 border-2 border-mybox-green/50 flex items-center justify-center relative animate-bounce-subtle">
                <div className="absolute inset-0 rounded-full border-2 border-mybox-green/50 animate-glow"></div>
                <i className={`${feature.icon} text-3xl md:text-4xl text-mybox-green drop-shadow-lg`}></i>
              </div>
            </div>

            {/* Content */}
            <div className="text-center flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed mb-4 flex-1">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {feature.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-mybox-green/15 border border-mybox-green/30 rounded-full text-xs text-mybox-green font-medium"
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
          <p className="text-base md:text-lg lg:text-xl text-white/90 font-medium italic">
            <i className="fas fa-check-circle text-mybox-green mr-3"></i>
            Připraveno na AFIR regulaci EU od 2024
          </p>
        </div>
      </div>
    </div>
  );
}

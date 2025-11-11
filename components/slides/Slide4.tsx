"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import AnimatedCard from "@/components/AnimatedCard";

const features = [
  {
    icon: "fa-solid fa-eye",
    title: "Online monitoring 24/7",
    description:
      "Kompletní přehled o stavu všech dobíjecích bodů v reálném čase s detailními statistikami a okamžitými notifikacemi.",
    tags: ["Real-time monitoring", "24/7 přehled", "Detailní statistiky"],
  },
  {
    icon: "fa-solid fa-sliders",
    title: "Vzdálené ovládání",
    description:
      "Start, stop, reset nabíjení na dálku – bez nutnosti fyzické přítomnosti. Kompletní kontrola odkudkoliv na světě.",
    tags: ["Remote control", "Start/Stop", "Bez fyzické přítomnosti"],
  },
  {
    icon: "fa-solid fa-id-card",
    title: "Správa RFID & tarifikace",
    description:
      "Flexibilní přístupová práva, účtování podle oddělení nebo jednotlivých uživatelů s kompletní evidencí transakcí.",
    tags: ["RFID karty", "Tarifikace", "Uživatelská práva"],
  },
  {
    icon: "fa-solid fa-chart-column",
    title: "Pokročilý reporting",
    description:
      "Detailní analýzy spotřeby, využití stanic, náklady a export dat pro účetnictví. Přehledné dashboardy a grafy.",
    tags: ["Analytics", "Export dat", "Přehledné reporty"],
  },
];

export default function Slide4() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Animate cards in sequence - faster
    const timer1 = setTimeout(() => setVisibleCards([0]), 200);
    const timer2 = setTimeout(() => setVisibleCards([0, 1]), 300);
    const timer3 = setTimeout(() => setVisibleCards([0, 1, 2]), 400);
    const timer4 = setTimeout(() => setVisibleCards([0, 1, 2, 3]), 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
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
          Fleet Management
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
          Správa flotily s přehledem a kontrolou
        </p>
      </div>

      {/* Features Grid - 2x2 OPTIMIZED for 16:9 aspect ratio */}
      <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl w-full px-2 md:px-4 flex-1 content-center">
        {features.map((feature, index) => (
          <AnimatedCard
            key={index}
            index={index}
            isVisible={visibleCards.includes(index)}
            className="p-3 md:p-4 lg:p-6 flex flex-col"
          >
            {/* Icon - COMPACT */}
            <div className="flex justify-center mb-2 md:mb-3 lg:mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-mybox-green/15 border-2 border-mybox-green/50 flex items-center justify-center relative animate-bounce-subtle">
                <div className="absolute inset-0 rounded-full border-2 border-mybox-green/50 animate-glow"></div>
                <i className={`${feature.icon} text-lg md:text-2xl lg:text-3xl text-mybox-green drop-shadow-lg`}></i>
              </div>
            </div>

            {/* Content - COMPACT */}
            <div className="text-center flex-1 flex flex-col justify-center">
              <h3 className="text-sm md:text-base lg:text-xl font-bold text-white mb-1 md:mb-2 lg:mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-white/90 leading-snug">
                {feature.description}
              </p>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Bottom note */}
      <div className="relative z-10 mt-4 md:mt-6 text-center">
        <div className="inline-block glass-light px-6 py-3 rounded-2xl border-2 border-white/25 shadow-lg">
          <p className="text-sm md:text-base lg:text-lg text-white/90 font-medium italic">
            <i className="fas fa-bolt text-yellow-400 mr-2"></i>
            Kompletní správa floty z jednoho místa
          </p>
        </div>
      </div>
    </div>
  );
}

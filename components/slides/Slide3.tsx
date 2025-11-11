"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import AnimatedCard from "@/components/AnimatedCard";

const features = [
  {
    icon: "fa-solid fa-house",
    title: "Řízení pro domácnosti",
    description:
      "Automatické přizpůsobení výkonu podle aktuální spotřeby – optimalizace jističe a maximální využití dostupného příkonu.",
  },
  {
    icon: "fa-solid fa-sun",
    title: "Využití přetoků z FVE",
    description:
      "Inteligentní nabíjení z přebytků solární energie – maximální využití zelené energie a úspora nákladů.",
  },
  {
    icon: "fa-solid fa-industry",
    title: "Řízení pro průmysl",
    description:
      "Škálovatelné řešení až pro 200 dobíjecích míst s prioritizací, load balancingem a stabilizací sítě.",
  },
  {
    icon: "fa-solid fa-plug",
    title: "EMS integrace & OCPP",
    description:
      "Propojení s energetickým managementem budov a podpora dobíječek různých výrobců přes otevřený protokol OCPP.",
  },
];

interface Slide3Props {
  onSlideComplete?: () => void;
}

export default function Slide3({ onSlideComplete }: Slide3Props) {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [showVideo, setShowVideo] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    // Animate cards in sequence - faster
    const timer1 = setTimeout(() => setVisibleCards([0]), 200);
    const timer2 = setTimeout(() => setVisibleCards([0, 1]), 300);
    const timer3 = setTimeout(() => setVisibleCards([0, 1, 2]), 400);
    const timer4 = setTimeout(() => setVisibleCards([0, 1, 2, 3]), 500);

    // After 30 seconds, hide cards and show video
    const videoTimer = setTimeout(() => {
      setVisibleCards([]);
      setTimeout(() => setShowVideo(true), 500); // Wait for cards to fade out
    }, 30000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(videoTimer);
    };
  }, []);

  const handleVideoEnd = () => {
    if (onSlideComplete) {
      onSlideComplete();
    }
  };

  const handleVideoTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const progress = (video.currentTime / video.duration) * 100;
    setVideoProgress(progress);
  };

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
          Dynamické řízení výkonu
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
          Od rodinných domů po průmyslové areály
        </p>
      </div>

      {/* Video or Features Grid */}
      {showVideo ? (
        /* Video Card */
        <div className={`relative z-10 w-full max-w-5xl flex-1 flex items-center justify-center px-4 transition-all duration-1000 ${
          showVideo ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <div className="glass rounded-2xl border-2 border-mybox-green/40 p-4 w-full h-full flex flex-col"
            style={{
              boxShadow: '0 0 20px rgba(76, 175, 80, 0.3), 0 0 40px rgba(76, 175, 80, 0.15)',
            }}>
            <video
              className="w-full flex-1 object-contain rounded-xl"
              autoPlay
              onEnded={handleVideoEnd}
              onTimeUpdate={handleVideoTimeUpdate}
              playsInline
            >
              <source src="/videos/dlm-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Progress bar */}
            <div className="mt-3 w-full h-2 bg-black/40 rounded-full overflow-hidden">
              <div
                className="h-full bg-mybox-green rounded-full transition-all duration-300"
                style={{ width: `${videoProgress}%` }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* Features Grid - 2x2 OPTIMIZED for 16:9 aspect ratio */
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
      )}
    </div>
  );
}

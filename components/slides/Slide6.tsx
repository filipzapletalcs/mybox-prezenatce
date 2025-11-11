"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import AnimatedCard from "@/components/AnimatedCard";

const features = [
  {
    icon: "fa-solid fa-file-invoice",
    title: "Charging Reports",
    description:
      "Kompletní nabíjecí reporty pro export do ERP systémů. Detaily o energii, času, nákladech a uživatelích.",
    tags: ["ERP Integration", "CSV/JSON Export", "Historie nabíjení"],
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Live Data API",
    description:
      "Real-time data z nabíjecích stanic - aktuální výkon, napětí, proud, teploty a stav nabíjení každých několik sekund.",
    tags: ["Real-time", "WebSocket", "Monitoring"],
  },
  {
    icon: "fa-solid fa-users-gear",
    title: "Správa uživatelů",
    description:
      "Kompletní správa uživatelů a společností přes API. Vytváření, editace a mazání účtů, přiřazování stanic a práv.",
    tags: ["User Management", "Companies", "Permissions"],
  },
];

// API příklady pro carousel
const apiExamples = [
  {
    title: "Charging Reports",
    request: `curl -X GET "https://cloud.mybox.pro/admin-panel/v1/
external/charging-reports/device/{deviceId}" \\
  -u "API_KEY:API_SECRET"`,
    response: {
      status: 1,
      data: [{
        session_id: "077",
        energy_delivered: "67.59 kWh",
        duration: "12h 43m",
        cost: "945.26 CZK"
      }]
    }
  },
  {
    title: "Live Data - Real-time",
    request: `curl -X GET "https://cloud.mybox.pro/admin-panel/v1/
external/live/device/{deviceId}" \\
  -u "API_KEY:API_SECRET"`,
    response: {
      status: 1,
      data: [{
        state: "charging",
        power: "7.28 kW",
        voltage: "231.45 V",
        current: "31.47 A"
      }]
    }
  },
  {
    title: "Device List",
    request: `curl -X GET "https://cloud.mybox.pro/admin-panel/v1/
external/device" \\
  -u "API_KEY:API_SECRET"`,
    response: {
      status: 1,
      data: [{
        id: "qfeb-od13-ul2c",
        name: "MyBox Station 1",
        type: "AC",
        status: "online"
      }]
    }
  },
  {
    title: "User Management",
    request: `curl -X GET "https://cloud.mybox.pro/admin-panel/v1/
external/user" \\
  -u "API_KEY:API_SECRET"`,
    response: {
      status: 1,
      data: [{
        id: 12345,
        email: "user@company.com",
        name: "Jan Novák",
        role: "admin"
      }]
    }
  }
];

export default function Slide6() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentExample, setCurrentExample] = useState(0);
  const [terminalVisible, setTerminalVisible] = useState(false);

  useEffect(() => {
    // Animate cards in sequence
    const timer1 = setTimeout(() => setVisibleCards([0]), 200);
    const timer2 = setTimeout(() => setVisibleCards([0, 1]), 300);
    const timer3 = setTimeout(() => setVisibleCards([0, 1, 2]), 400);

    // Show terminal after cards
    const terminalTimer = setTimeout(() => setTerminalVisible(true), 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(terminalTimer);
    };
  }, []);

  // Auto-rotate API examples
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % apiExamples.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const example = apiExamples[currentExample];

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
      <div className="relative z-10 text-center mb-4 md:mb-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent mb-3">
          Cloud API
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
          Otevřené rozhraní pro neomezené možnosti
        </p>
      </div>

      {/* Content Container - Side by side layout */}
      <div className="relative z-10 w-full flex gap-8 flex-1 items-stretch px-8">
        {/* Left side - 3 cards in column */}
        <div className="flex flex-col gap-3 w-[38%]">
          {features.map((feature, index) => (
            <AnimatedCard
              key={index}
              index={index}
              isVisible={visibleCards.includes(index)}
              className="p-5 flex-1"
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-mybox-green/15 border-2 border-mybox-green/50 flex items-center justify-center relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full border-2 border-mybox-green/50 animate-glow"></div>
                  <i className={`${feature.icon} text-xl text-mybox-green drop-shadow-lg`}></i>
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-white/90 leading-relaxed mb-3">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {feature.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2.5 py-1 bg-mybox-green/15 border border-mybox-green/30 rounded-full text-xs text-mybox-green font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Right side - Terminal with carousel */}
        <div className={`w-[62%] transition-all duration-1000 flex flex-col ${
          terminalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="glass rounded-2xl border-2 border-mybox-green/40 p-5 flex-1 flex flex-col"
            style={{
              boxShadow: '0 0 20px rgba(76, 175, 80, 0.3), 0 0 40px rgba(76, 175, 80, 0.15)',
            }}>
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-sm text-mybox-green font-mono ml-2">
                {example.title}
              </div>
              {/* Progress indicator */}
              <div className="ml-auto flex gap-1">
                {apiExamples.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentExample ? 'bg-mybox-green w-6' : 'bg-white/30'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Terminal Content */}
            <div className="font-mono text-sm space-y-3 flex-1 flex flex-col">
              {/* Request */}
              <div className="flex-1">
                <div className="text-mybox-green mb-2">$ Request:</div>
                <div className="bg-black/40 rounded-lg p-3 text-white/90 leading-relaxed whitespace-pre-line h-full">
                  {example.request}
                </div>
              </div>

              {/* Response */}
              <div className="flex-1">
                <div className="text-mybox-green mb-2">$ Response:</div>
                <div className="bg-black/40 rounded-lg p-3 text-white/90 leading-relaxed h-full overflow-auto">
                  <pre className="text-sm">
                    {JSON.stringify(example.response, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

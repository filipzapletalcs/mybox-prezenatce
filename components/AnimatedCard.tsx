"use client";

import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  index: number;
  isVisible: boolean;
  className?: string;
}

export default function AnimatedCard({ children, index, isVisible, className = "" }: AnimatedCardProps) {
  return (
    <div
      className={`relative ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      } transition-all duration-[1000ms] ease-out`}
      style={{
        animation: isVisible ? `float 6s ease-in-out infinite ${1.2 + index * 0.2}s` : 'none',
      }}
    >
      {/* Card content with pulsing glow */}
      <div
        className={`relative glass rounded-xl md:rounded-2xl lg:rounded-3xl border-2 border-mybox-green/40 ${className}`}
        style={{
          boxShadow: isVisible
            ? '0 0 20px rgba(76, 175, 80, 0.3), 0 0 40px rgba(76, 175, 80, 0.15)'
            : 'none',
          animation: isVisible ? `borderGlow 3s ease-in-out infinite ${index * 0.3}s` : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {children}
      </div>
    </div>
  );
}

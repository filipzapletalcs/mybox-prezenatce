"use client";

import { useState, useEffect } from "react";
import Slide1 from "@/components/slides/Slide1";
import Slide2 from "@/components/slides/Slide2";
import Slide3 from "@/components/slides/Slide3";
import Slide4 from "@/components/slides/Slide4";
import Slide5 from "@/components/slides/Slide5";
import Slide6 from "@/components/slides/Slide6";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-loop functionality for trade show display
  useEffect(() => {
    // Skip autoplay for Slide 3 (index 2) as it handles its own timing
    if (!isAutoPlay || currentSlide === 2) return;

    const autoPlayTimer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
        setIsTransitioning(false);
      }, 300); // Fade out duration
    }, 8000); // 8 seconds per slide

    return () => clearInterval(autoPlayTimer);
  }, [currentSlide, isAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setIsAutoPlay(false); // Pause auto-play on manual navigation
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIsAutoPlay(false);
        prevSlide();
      } else if (e.key === "p" || e.key === "P") {
        e.preventDefault();
        setIsAutoPlay((prev) => !prev); // Toggle auto-play with 'P' key
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
      setIsTransitioning(false);
    }, 300);
  };

  const CurrentSlideComponent = slides[currentSlide];

  // Handler for slides that need to trigger next slide programmatically
  const handleSlideComplete = () => {
    nextSlide();
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      {/* Slide Container with smooth transition */}
      <div
        className={`w-full h-full transition-opacity duration-300 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {currentSlide === 2 ? (
          // Slide 3 (index 2) gets special props for video handling
          <CurrentSlideComponent onSlideComplete={handleSlideComplete} />
        ) : (
          <CurrentSlideComponent />
        )}
      </div>
    </main>
  );
}

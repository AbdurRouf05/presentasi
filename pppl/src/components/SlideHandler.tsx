"use client";

import { useState, useEffect, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideHandlerProps {
  slides: ReactNode[];
}

export default function SlideHandler({ slides }: SlideHandlerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space" || e.key === "Enter") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-transparent">
      <AnimatePresence mode="wait">
        <div key={currentSlide} className="w-full h-full absolute top-0 left-0">
          {slides[currentSlide]}
        </div>
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 flex items-center gap-6 z-50">
        <div className="px-4 py-2 bg-white border-4 border-black shadow-[4px_4px_0_0_#000] font-bold text-black text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 bg-yellow-400 border-4 border-black flex items-center justify-center shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000] disabled:opacity-50 disabled:pointer-events-none transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-black stroke-[3]" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 bg-yellow-400 border-4 border-black flex items-center justify-center shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000] disabled:opacity-50 disabled:pointer-events-none transition-all"
          >
            <ChevronRight className="w-6 h-6 text-black stroke-[3]" />
          </button>
        </div>
      </div>
      
      {/* Brutalist Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-4 bg-white border-b-4 border-black z-50 overflow-hidden flex">
        <div 
          className="h-full bg-blue-500 border-r-4 border-black transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { slides } from "@/data/slides"; 

export default function SlideDeck() {
  const [current, setCurrent] = useState(0);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const slide = slides[current];
  const IconComponent = slide.icon;

  return (
    // MAIN CONTAINER: Mobile Scrollable (min-h-screen), Desktop Fixed (h-screen)
    <div className="relative w-full min-h-screen md:h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white selection:bg-purple-500/30 font-sans overflow-x-hidden md:overflow-hidden">
        
        {/* Background Gradient Animation (Aurora Effect) */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/30 blur-[100px] rounded-full animate-pulse duration-1000" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/30 blur-[100px] rounded-full animate-pulse duration-700" />
        </div>

        {/* Content Slider */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full md:h-full px-6 py-12 md:px-20">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.02, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    // Mobile: Auto height & scrollable if needed. Desktop: Grid layout
                    className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                    {/* LEFT: Text Section */}
                    <div className="space-y-6 md:space-y-8 flex flex-col justify-center order-2 md:order-1 pb-24 md:pb-0">
                        <div>
                           <h2 className="text-sm md:text-base font-mono text-purple-300 tracking-[0.2em] uppercase mb-4 opacity-80">
                               {slide.category} <span className="text-gray-400 px-2">//</span> {current + 1} of {slides.length}
                           </h2>
                           <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-purple-200">
                               {slide.title}
                           </h1>
                        </div>
                        
                        <p className="text-base md:text-xl text-gray-200 leading-relaxed font-light">
                            {slide.description}
                        </p>
                        
                        {/* Bullet Points */}
                         <ul className="space-y-3 md:space-y-4 pt-4">
                            {slide.points?.map((point, i) => (
                                <motion.li 
                                  key={i} 
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + (i * 0.1) }}
                                  className="flex items-start text-gray-300 text-sm md:text-lg"
                                >
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                    {point}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT: Visual Section */}
                    <div className="w-full order-1 md:order-2 flex items-center justify-center">
                         
                         {slide.image ? (
                             // ADAPTIVE FRAME LOGIC
                             slide.orientation === 'landscape' ? (
                                // DESKTOP MONITOR FRAME
                                <div className="relative w-full max-w-2xl bg-gray-800 rounded-xl p-2 border border-gray-700 shadow-2xl">
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-600/50">
                                        <Image 
                                           src={slide.image} 
                                           alt={slide.title} 
                                           fill 
                                           className="object-cover"
                                           sizes="(max-width: 768px) 100vw, 800px"
                                           priority={true}
                                         />
                                    </div>
                                    <div className="mt-2 flex justify-center gap-1">
                                        <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                                        <div className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
                                    </div>
                                </div>
                             ) : (
                                // PHONE FRAME
                                <div className="relative w-[280px] h-[580px] md:w-[300px] md:h-[600px] bg-gray-900 border-8 border-gray-800 rounded-[3rem] flex items-center justify-center shadow-2xl overflow-hidden ring-1 ring-white/10">
                                     <div className="absolute top-0 w-[120px] h-[25px] bg-gray-800 rounded-b-xl z-20"></div>
                                     <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black/50">
                                         <Image 
                                           src={slide.image} 
                                           alt={slide.title} 
                                           fill 
                                           className="object-cover"
                                           sizes="(max-width: 768px) 100vw, 300px"
                                           priority={true}
                                         />
                                     </div>
                                </div>
                             )
                         ) : (
                           /* Fallback Icon */
                           <div className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px] bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center text-center p-8 backdrop-blur-md">
                              <div className="p-6 rounded-full bg-white/10 mb-6 shadow-lg shadow-purple-500/20 animate-pulse-slow">
                                <IconComponent size={64} className="text-purple-200" strokeWidth={1.5} />
                              </div>
                              <p className="text-xs text-purple-200/70 font-mono uppercase tracking-widest">Visual Concept</p>
                           </div>
                         )}

                    </div>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Navigation Controls - Fixed Bottom Right */}
        <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 flex gap-4">
            <button 
                onClick={prevSlide}
                className="group p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 transition-all active:scale-95 disabled:opacity-50"
                aria-label="Previous Slide"
            >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
                onClick={nextSlide}
                className="group p-4 rounded-full bg-white text-purple-900 hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                aria-label="Next Slide"
            >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        {/* Progress Bar Top */}
        <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-400 to-blue-400" 
              initial={{ width: 0 }}
              animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
        </div>
    </div>
  );
}

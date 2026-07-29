"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Slide10() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center items-center text-center space-y-4 md:space-y-5 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="p-4 bg-green-400 border-8 border-black shadow-[12px_12px_0_0_#000] mb-2 rotate-[5deg] hover:rotate-0 transition-transform"
        >
          <CheckCircle className="w-7 h-7 text-black stroke-[3]" />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <h2 className="text-3xl md:text-5xl font-black text-black uppercase mb-2 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] bg-yellow-400 px-8 py-2 border-4 border-black inline-block rotate-[-2deg]">
            Kesimpulan
          </h2>
          <div className="relative mt-4">
            {/* Brutalist Container for Quote */}
            <div className="bg-white p-4 md:p-4 border-4 border-black shadow-[16px_16px_0_0_#000] relative max-w-3xl mx-auto">
              {/* Decorative Quote Marks */}
              <span className="absolute -top-4 -left-4 text-6xl text-black font-serif bg-cyan-400 border-4 border-black w-7 h-7 flex items-center justify-center shadow-[4px_4px_0_0_#000] rotate-[-10deg]">"</span>
              
              <p className="text-xl md:text-3xl font-black text-black leading-snug">
                KelontongSync tidak hanya meringankan beban administratif pemilik warung lokal, 
                namun juga membantu mereka beralih ke era <span className="bg-green-400 text-black px-2 mx-1 border-2 border-black inline-block -rotate-1 shadow-[2px_2px_0_0_#000]">sistem bisnis berbasis data yang profesional</span> dengan gaya berlangganan (SaaS).
              </p>

              <span className="absolute -bottom-6 -right-4 text-6xl text-black font-serif bg-pink-400 border-4 border-black w-7 h-7 flex items-center justify-center shadow-[4px_4px_0_0_#000] rotate-[10deg] leading-[0px] pt-4">"</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}

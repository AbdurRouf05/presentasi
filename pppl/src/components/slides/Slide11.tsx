"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { MessageCircleQuestion, Github, QrCode } from "lucide-react";

export default function Slide11() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center items-center text-center space-y-4 md:space-y-5">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-8 flex flex-col items-center"
        >
          <div className="flex justify-center mb-2">
            <div className="p-4 bg-cyan-400 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-[-5deg] hover:rotate-[5deg] transition-all">
              <MessageCircleQuestion className="w-6 h-6 text-black stroke-[2.5]" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase bg-pink-400 px-8 py-2 border-4 border-black shadow-[8px_8px_0_0_#000]">
            Terima Kasih
          </h1>
          <p className="text-xl font-bold font-mono text-black bg-white inline-block px-6 py-2 border-4 border-black shadow-[4px_4px_0_0_#000]">
            Silakan jika ada saran & pertanyaan.
          </p>
        </motion.div>

      </div>
    </SlideWrapper>
  );
}

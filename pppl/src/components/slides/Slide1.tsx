"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Store } from "lucide-react";

export default function Slide1() {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center text-center h-full space-y-4 md:space-y-5">
        <motion.div
           initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
           animate={{ scale: 1, opacity: 1, rotate: 0 }}
           transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 10 }}
           className="p-4 bg-yellow-400 border-4 border-black shadow-[8px_8px_0_0_#000] mb-2"
        >
          <Store className="w-7 h-7 text-black stroke-[2.5]" />
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 flex flex-col items-center"
        >
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase bg-blue-600 px-6 py-2 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-[-2deg] hover:rotate-[2deg] transition-all cursor-default">
            KelontongSync
          </h1>
          <h2 className="text-xl md:text-xl font-bold text-black bg-pink-400 px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_#000]">
            Solusi SaaS Manajemen Toko Kelontong Modern
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 pt-6 border-t-8 border-black w-full max-w-3xl"
        >
          <div className="px-4 py-1 bg-purple-400 text-black font-black inline-block mb-2 uppercase tracking-widest text-sm border-2 border-black rotate-2">
            Tim Pengembang
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 font-bold text-black text-sm md:text-base">
            <span className="bg-white px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform">Abdur Rouf</span>
            <span className="bg-white px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform">Adam Paundra M.</span>
            <span className="bg-white px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform">Akmal Isyroqun N.</span>
            <span className="bg-white px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform">Ahmad Rafi H.</span>
            <span className="bg-white px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform">Ferdy Ardiansyah</span>
          </div>
          <p className="mt-3 text-sm font-bold text-black uppercase tracking-wider bg-green-400 inline-block px-3 py-1 border-4 border-black shadow-[4px_4px_0_0_#000]">
            Proyek Mata Kuliah Perangkat Lunak
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}

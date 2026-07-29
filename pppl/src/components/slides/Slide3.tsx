"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Cloud, Smartphone, LineChart, Lightbulb } from "lucide-react";

export default function Slide3() {
  const solutions = [
    {
      icon: <Cloud className="w-7 h-7 text-black stroke-[2.5]" />,
      title: "SaaS Tanpa Instalasi",
      desc: "Platform berbasis web yang mudah diakses dari berbagai perangkat secara instan.",
      delay: 0.3,
      color: "bg-cyan-400"
    },
    {
      icon: <Smartphone className="w-7 h-7 text-black stroke-[2.5]" />,
      title: "Digitalisasi Kasir",
      desc: "Transaksi jual beli instan, pembuatan struk digital otomatis dan akurasi tinggi.",
      delay: 0.4,
      color: "bg-pink-400"
    },
    {
      icon: <LineChart className="w-7 h-7 text-black stroke-[2.5]" />,
      title: "Laporan Terpusat",
      desc: "Dasbor analitik yang menyediakan kejelasan pemasukam, pengeluaran, dan profit harian.",
      delay: 0.5,
      color: "bg-yellow-400"
    },
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="flex flex-col md:flex-row items-center md:items-center gap-4"
        >
          <div className="p-4 bg-green-400 border-4 border-black shadow-[6px_6px_0_0_#000] rotate-[5deg] hover:rotate-[-5deg] transition-all">
            <Lightbulb className="w-7 h-7 text-black stroke-[2.5]" />
          </div>
          <h2 className="text-xl md:text-3xl font-black text-white bg-rose-500 text-white px-6 py-2 border-4 border-black shadow-[8px_8px_0_0_#000] uppercase tracking-tight">
            Solusi yang Ditawarkan
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: sol.delay, duration: 0.4, type: "spring" }}
              className={`group p-3 md:p-4 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-2 hover:-translate-x-1 transition-all duration-200 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-4 font-black text-6xl text-black opacity-10 leading-none pointer-events-none group-hover:scale-110 transition-transform">
                0{idx + 1}
              </div>
              <div className={`p-4 ${sol.color} border-4 border-black w-fit mb-3 shadow-[4px_4px_0_0_#000] relative z-10 group-hover:-rotate-6 transition-transform`}>
                {sol.icon}
              </div>
              <h3 className="text-base font-black text-black mb-2 uppercase relative z-10">{sol.title}</h3>
              <p className="text-black font-semibold leading-relaxed relative z-10">
                {sol.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2 } from "lucide-react";

export default function Slide9() {
  const roadmap = [
    { phase: "Tahap 1", title: "Perencanaan", desc: "Analisis Kebutuhan & Perancangan UI/UX Desain.", delay: 0.2, color: "bg-red-400" },
    { phase: "Tahap 2", title: "Implementasi Kode", desc: "Frontend & Backend Development berbasis modul.", delay: 0.4, color: "bg-yellow-400" },
    { phase: "Tahap 3", title: "Integrasi & QA", desc: "Integrasi Sistem antar modul testing bug & error.", delay: 0.6, color: "bg-cyan-400" },
    { phase: "Tahap 4", title: "Deployment", desc: "Hosting aplikasi & Pembuatan Laporan Matkul.", delay: 0.8, color: "bg-green-400" },
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center space-y-4 md:space-y-5 w-full max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center"
        >
          <h2 className="inline-block text-5xl md:text-6xl font-black text-white bg-black px-8 py-3 border-4 border-black shadow-[8px_8px_0_0_#fde047] uppercase rotate-[-2deg] mb-2">
            Timeline Proyek
          </h2>
          <br/>
          <p className="inline-block text-black font-bold text-lg bg-pink-400 border-4 border-black px-4 py-2 mt-2 shadow-[4px_4px_0_0_#000]">Roadmap Pengerjaan KelontongSync</p>
        </motion.div>

        <div className="relative mt-4">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 border-t-8 border-black border-dashed -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
            {roadmap.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, type: "spring", stiffness: 100 }}
                className={`relative z-10 flex flex-col items-center text-center group bg-white p-4 border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-2 transition-all \${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}
              >
                <div className={`w-7 h-7 border-4 border-black flex items-center justify-center text-black mb-3 shadow-[4px_4px_0_0_#000] \${item.color}`}>
                  <CalendarDays className="w-6 h-6 stroke-[2.5]" />
                </div>
                
                <h3 className="text-black font-black bg-slate-200 border-2 border-black px-2 py-1 text-xs tracking-widest uppercase mb-2 shadow-[2px_2px_0_0_#000]">{item.phase}</h3>
                <h4 className="text-black font-black uppercase text-lg mb-3 leading-tight">{item.title}</h4>
                <p className="text-black font-semibold text-sm border-t-4 border-black border-dashed pt-3">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

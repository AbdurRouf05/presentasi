"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Calculator, Box, BarChart3, Users, Star } from "lucide-react";

export default function Slide4() {
  const features = [
    {
      icon: <Calculator className="w-6 h-6 text-black stroke-[2.5]" />,
      title: "Point of Sales",
      desc: "Pemrosesan transaksi cepat dan pembuat struk digital.",
      delay: 0.2,
      color: "bg-blue-400"
    },
    {
      icon: <Box className="w-6 h-6 text-black stroke-[2.5]" />,
      title: "Manj. Inventaris",
      desc: "Pencatatan stok dan peringatan otomatis barang habis.",
      delay: 0.3,
      color: "bg-green-400"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-black stroke-[2.5]" />,
      title: "Laporan Visual",
      desc: "Dasbor visual pemasukan vs pengeluaran komprehensif.",
      delay: 0.4,
      color: "bg-yellow-400"
    },
    {
      icon: <Users className="w-6 h-6 text-black stroke-[2.5]" />,
      title: "Multi-Cabang",
      desc: "Pengelola bisa buka banyak cabang dengan 1 dashboard.",
      delay: 0.5,
      color: "bg-fuchsia-400",
      isPremium: true
    },
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center space-y-4 md:space-y-6 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-300 border-4 border-black text-black text-sm md:text-base font-bold shadow-[4px_4px_0_0_#000] rotate-2 uppercase tracking-wide">
            <Star className="w-5 h-5 text-black stroke-[3]" /> Core Features
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)] bg-cyan-400 px-6 py-2 border-4 border-black rotate-[-1deg]">
            Fitur Utama Aplikasi
          </h2>
          <p className="text-black bg-white border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-2 font-semibold text-lg max-w-2xl transform rotate-1">
            Modul esensial yang dirancang untuk mempercepat administrasi dan mengamankan aset Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: feat.delay, duration: 0.5, type: "spring" }}
              className={`p-3 md:p-4 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-1 transition-all flex items-start gap-4`}
            >
              <div className={`p-4 ${feat.color} border-4 border-black shadow-[4px_4px_0_0_#000]`}>
                {feat.icon}
              </div>
              <div className="pt-2">
                <h3 className="text-base font-black text-black flex flex-wrap items-center gap-2 uppercase tracking-tight">
                  {feat.title}
                  {feat.isPremium && (
                    <span className="text-[12px] uppercase font-black px-2 py-1 bg-black text-white border-2 border-black rotate-6 ml-2">
                      SaaS
                    </span>
                  )}
                </h3>
                <p className="text-black font-semibold mt-3 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

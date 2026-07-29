"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { FileWarning, PackageX, TrendingDown, AlertTriangle } from "lucide-react";

export default function Slide2() {
  const problems = [
    {
      icon: <FileWarning className="w-7 h-7 text-black stroke-[2.5]" />,
      title: "Pencatatan Manual",
      desc: "Transaksi dicatat secara manual sehingga rentan hilang, kotor, atau rusak terselip.",
      delay: 0.2,
      color: "bg-red-400"
    },
    {
      icon: <PackageX className="w-7 h-7 text-black stroke-[2.5]" />,
      title: "Stok Tidak Real-time",
      desc: "Kesulitan melacak ketersediaan stok barang (inventaris) secara akurat saat dibutuhkan.",
      delay: 0.3,
      color: "bg-orange-400"
    },
    {
      icon: <TrendingDown className="w-7 h-7 text-black stroke-[2.5]" />,
      title: "Laporan Tdk Akurat",
      desc: "Kurangnya rekapitulasi keuangan harian/bulanan akurat memperlambat evaluasi bisnis.",
      delay: 0.4,
      color: "bg-purple-400"
    },
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="flex flex-col md:flex-row items-center md:items-center gap-4"
        >
          <div className="p-4 bg-red-500 border-4 border-black shadow-[6px_6px_0_0_#000] rotate-[-5deg] hover:rotate-[5deg] transition-all">
            <AlertTriangle className="w-7 h-7 text-black stroke-[2.5]" />
          </div>
          <h2 className="text-xl md:text-3xl font-black text-white bg-rose-500 text-white px-6 py-2 border-4 border-black shadow-[8px_8px_0_0_#000] uppercase tracking-tight">
            Latar Belakang Masalah
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prob.delay, duration: 0.5 }}
              className={`group p-3 md:p-4 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-2 hover:-translate-x-1 transition-all duration-200 flex flex-col`}
            >
              <div className={`p-4 ${prob.color} border-4 border-black w-fit mb-3 shadow-[4px_4px_0_0_#000] group-hover:scale-110 transition-transform`}>
                {prob.icon}
              </div>
              <h3 className="text-base font-black text-black mb-2 uppercase">{prob.title}</h3>
              <p className="text-black font-medium leading-relaxed border-t-4 border-dashed border-black pt-4">
                {prob.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

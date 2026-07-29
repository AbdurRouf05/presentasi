"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Network, Home, LayoutDashboard, Settings } from "lucide-react";

export default function Slide5() {
  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center space-y-4 md:space-y-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 border-b-8 border-black pb-6"
        >
          <div className="p-3 bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000]">
            <Network className="w-7 h-7 text-black stroke-[2.5]" />
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-black text-black uppercase">Mind Map Aplikasi</h2>
            <p className="text-black font-bold mt-2 bg-yellow-300 inline-block px-3 py-1 border-2 border-black">Struktur Hierarki & Modul KelontongSync</p>
          </div>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto py-2">
          {/* Connecting Lines (Desktop only for visual simplicity) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 border-t-8 border-l-8 border-r-8 border-black -z-10" />
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-2 h-1/2 bg-black -z-10" />

          {/* Root Node */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full flex justify-center mb-2 md:mb-3 relative z-10"
          >
            <div className="px-8 py-2 bg-yellow-400 border-4 border-black shadow-[8px_8px_0_0_#000] text-center font-black text-xl rotate-[-2deg] hover:rotate-0 transition-transform cursor-default uppercase">
              KelontongSync (SaaS)
            </div>
          </motion.div>

          {/* Branch Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:gap-4 relative z-10 mt-4 md:mt-0">
            {/* Branch 1 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-4 border-4 border-black shadow-[8px_8px_0_0_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] transition-all"
            >
              <div className="bg-pink-400 border-4 border-black p-3 w-fit mb-2 shadow-[4px_4px_0_0_#000]">
                <Home className="w-6 h-6 text-black stroke-[2.5]" />
              </div>
              <h3 className="text-base font-black text-black mb-3 uppercase">Landing Page</h3>
              <p className="text-sm text-black font-semibold leading-relaxed border-t-4 border-dashed border-black pt-3">
                Info sistem dan <strong className="bg-yellow-300 px-1 border border-black">Paket Langganan</strong> untuk toko.
              </p>
            </motion.div>

            {/* Branch 2 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-4 border-4 border-black shadow-[8px_8px_0_0_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] transition-all"
            >
              <div className="bg-blue-400 border-4 border-black p-3 w-fit mb-2 shadow-[4px_4px_0_0_#000]">
                <LayoutDashboard className="w-6 h-6 text-black stroke-[2.5]" />
              </div>
              <h3 className="text-base font-black text-black mb-3 uppercase">Tenant Dashboard</h3>
              <p className="text-sm text-black font-semibold leading-relaxed border-t-4 border-dashed border-black pt-3">
                Core modules: <strong>POS</strong>, <strong>Inventaris</strong>, & <strong>Laporan Harian</strong>.
              </p>
            </motion.div>

            {/* Branch 3 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white p-4 border-4 border-black shadow-[8px_8px_0_0_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] transition-all"
            >
              <div className="bg-green-400 border-4 border-black p-3 w-fit mb-2 shadow-[4px_4px_0_0_#000]">
                <Settings className="w-6 h-6 text-black stroke-[2.5]" />
              </div>
              <h3 className="text-base font-black text-black mb-3 uppercase">Admin Dashboard</h3>
              <p className="text-sm text-black font-semibold leading-relaxed border-t-4 border-dashed border-black pt-3">
                Pengelola SaaS untuk mengatur <strong>Multi-Cabang</strong> & manajemen langganan.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

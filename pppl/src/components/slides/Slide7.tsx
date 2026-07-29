"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { UserCircle, MonitorSmartphone, Server, Database as DBIcon, ArrowRight } from "lucide-react";

export default function Slide7() {
  const steps = [
    { icon: <UserCircle className="w-7 h-7 text-black stroke-[2]" />, label: "User", sub: "(Toko/Kasir)", delay: 0.2, color: "bg-pink-400" },
    { icon: <MonitorSmartphone className="w-7 h-7 text-black stroke-[2]" />, label: "Web Browser", sub: "(Next.js)", delay: 0.4, color: "bg-blue-400" },
    { icon: <Server className="w-7 h-7 text-black stroke-[2]" />, label: "API", sub: "(Cloud)", delay: 0.6, color: "bg-yellow-400" },
    { icon: <DBIcon className="w-7 h-7 text-black stroke-[2]" />, label: "Database", sub: "(Sentral)", delay: 0.8, color: "bg-green-400" },
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center items-center space-y-4 md:space-y-5 w-full max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center"
        >
          <h2 className="inline-block text-5xl md:text-6xl font-black text-black bg-white px-8 py-3 border-4 border-black shadow-[8px_8px_0_0_#000] uppercase rotate-[1deg] mb-3">
            Arsitektur Sistem
          </h2>
          <br/>
          <p className="inline-block text-black font-bold text-lg bg-cyan-400 border-4 border-black border-dashed px-4 py-2 mt-2">High-Level Architecture Alur Data Aplikasi</p>
        </motion.div>

        <div className="flex justify-center w-full overflow-x-auto pb-10 hide-scrollbar pt-4 px-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4 lg:gap-4 min-w-max md:min-w-0">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-4 md:gap-4 lg:gap-4">
                
                {/* Node */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotate: idx % 2 === 0 ? -5 : 5 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 5 : -5 }}
                  transition={{ delay: step.delay, type: "spring" }}
                  className={`border-4 border-black p-4 ${step.color} aspect-square w-48 flex flex-col items-center justify-center text-center shadow-[8px_8px_0_0_#000] cursor-default transition-all`}
                >
                  <div className="mb-2 bg-white p-3 border-4 border-black shadow-[4px_4px_0_0_#000]">{step.icon}</div>
                  <span className="text-base font-black text-black uppercase">{step.label}</span>
                  <span className="text-xs font-bold text-black border-t-2 border-dashed border-black mt-2 pt-2 w-full">{step.sub}</span>
                </motion.div>

                {/* Arrow */}
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: step.delay + 0.1 }}
                    className="hidden md:flex text-black"
                  >
                    <ArrowRight className="w-7 h-7 stroke-[4]" />
                  </motion.div>
                )}
                
                {/* Mobile Arrow */}
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: step.delay + 0.1 }}
                    className="flex md:hidden text-black rotate-90"
                  >
                    <ArrowRight className="w-7 h-7 stroke-[4]" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

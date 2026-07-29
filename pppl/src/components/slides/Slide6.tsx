"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Layers, Terminal, Paintbrush, Database, GitBranch } from "lucide-react";

export default function Slide6() {
  const stack = [
    {
      name: "Next.js",
      desc: "Framework React interaktif & cepat",
      icon: <Layers className="w-7 h-7 text-black stroke-[2.5]" />,
      color: "bg-white",
      delay: 0.2
    },
    {
      name: "pnpm",
      desc: "Package Manager efisien memori & ringan",
      icon: <Terminal className="w-7 h-7 text-black stroke-[2.5]" />,
      color: "bg-[#F69220]",
      delay: 0.3
    },
    {
      name: "Tailwind CSS",
      desc: "Utility-first CSS, mudah & cepat",
      icon: <Paintbrush className="w-7 h-7 text-black stroke-[2.5]" />,
      color: "bg-[#38BDF8]",
      delay: 0.4
    },
    {
      name: "PocketBase",
      desc: "Backend & DB ringan siap kompilasi",
      icon: <Database className="w-7 h-7 text-black stroke-[2.5]" />,
      color: "bg-emerald-400",
      delay: 0.5
    },
    {
      name: "Git & GitHub",
      desc: "Version Control kolaborasi tim",
      icon: <GitBranch className="w-7 h-7 text-black stroke-[2.5]" />,
      color: "bg-zinc-300",
      delay: 0.6
    }
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center space-y-4 md:space-y-5">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center space-y-6"
        >
          <h2 className="inline-block text-5xl md:text-6xl font-black text-white bg-black px-8 py-3 border-4 border-black shadow-[8px_8px_0_0_#fde047] uppercase rotate-[-2deg]">
            Tech Stack
          </h2>
          <br/>
          <p className="text-black font-bold text-lg bg-white border-2 border-black inline-block px-4 py-1 shadow-[4px_4px_0_0_#000] -rotate-1">
            Teknologi modern yang menggerakkan KelontongSync
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto w-full px-4 pt-6">
          {stack.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: item.delay, type: "spring", stiffness: 100 }}
              className={`p-3 md:p-4 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center`}
            >
              <div className={`p-4 border-4 border-black mb-2 shadow-[4px_4px_0_0_#000] ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-base font-black text-black uppercase mb-2">
                {item.name}
              </h3>
              <p className="text-black font-semibold border-t-4 border-black border-dashed pt-3 w-full">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

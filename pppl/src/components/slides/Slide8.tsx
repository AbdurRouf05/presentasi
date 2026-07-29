"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Users, Code2, Database } from "lucide-react";

export default function Slide8() {
  const team = [
    {
      name: "Abdur Rouf",
      role: "PM & Infrastructure",
      desc: "Menyiapkan boilerplate, konfigurasi proyek, & arsitektur DB.",
      icon: <Database className="w-6 h-6 text-black stroke-[2.5]" />,
      color: "bg-fuchsia-400"
    },
    {
      name: "Adam P. M.",
      role: "Fullstack / Feature",
      desc: "Modul end-to-end (UI/UX, Frontend, Backend).",
      icon: <Code2 className="w-6 h-6 text-black stroke-[2.5]" />,
      color: "bg-cyan-400"
    },
    {
      name: "Akmal I. N.",
      role: "Fullstack / Feature",
      desc: "Modul end-to-end (UI/UX, Frontend, Backend).",
      icon: <Code2 className="w-6 h-6 text-black stroke-[2.5]" />,
      color: "bg-green-400"
    },
    {
      name: "Ahmad Rafi H.",
      role: "Fullstack / Feature",
      desc: "Modul end-to-end (UI/UX, Frontend, Backend).",
      icon: <Code2 className="w-6 h-6 text-black stroke-[2.5]" />,
      color: "bg-yellow-400"
    },
    {
      name: "Ferdy Ardiansyah",
      role: "Fullstack / Feature",
      desc: "Modul end-to-end (UI/UX, Frontend, Backend).",
      icon: <Code2 className="w-6 h-6 text-black stroke-[2.5]" />,
      color: "bg-pink-400"
    }
  ];

  return (
    <SlideWrapper>
      <div className="flex flex-col h-full justify-center space-y-4 md:space-y-5 max-w-6xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           className="flex items-center gap-4 border-b-8 border-black pb-6"
        >
          <div className="p-4 bg-purple-400 border-4 border-black shadow-[6px_6px_0_0_#000] rotate-[-5deg]">
            <Users className="w-7 h-7 text-black stroke-[2.5]" />
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-black text-black uppercase">Pembagian Tugas</h2>
            <p className="text-black font-bold bg-white inline-block px-3 py-1 border-2 border-black shadow-[4px_4px_0_0_#000] mt-2">Pendekatan Pengerjaan Berbasis Modul</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className={`p-5 lg:p-3 md:p-4 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] transition-all flex flex-col \${
                idx === 0 
                  ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' 
                  : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4 h-full">
                <div className={`p-3 border-4 border-black shadow-[4px_4px_0_0_#000] \${member.color} shrink-0`}>
                  {member.icon}
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-base font-black text-black uppercase leading-tight">{member.name}</h3>
                  <div className="mt-2 mb-3">
                    <span className="text-xs font-bold text-black bg-slate-200 border-2 border-black px-2 py-0.5 inline-block shadow-[2px_2px_0_0_#000]">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-black leading-relaxed mt-auto">
                    {member.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

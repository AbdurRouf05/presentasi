'use client';

import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';
import { Target, Shield, Zap, Database, Cloud, MapPin, Camera, WifiOff, LayoutDashboard, Lock, Bell, User, Cpu, RefreshCw, Briefcase } from 'lucide-react';



export const Slide1 = () => (
  <SlideLayout className="text-center">
    <div className="flex flex-col items-center gap-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-48 h-48 glass rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.15)] overflow-hidden relative border-4 border-white/20"
      >
        <img 
            src="/media/logo.png" 
            alt="Sinergo Logo" 
            className="absolute min-w-[170%] min-h-[170%] object-cover z-10"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
            }}
        />
        <div className="absolute inset-0 hidden flex items-center justify-center bg-sinergo-indigo">
            <span className="text-white font-black text-6xl">S</span>
        </div>
      </motion.div>



      <h1 className="text-7xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
        Sinergo <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinergo-blue to-sinergo-indigo">
          Attendance
        </span>
      </h1>
      <p className="text-2xl md:text-3xl text-white/50 font-medium mt-4">
        Offline-First Attendance Solution for Indonesia's Blank Spots
      </p>
    </div>
  </SlideLayout>
);

export const Slide2 = () => (
  <SlideLayout title="The Challenge" subtitle="Connectivity & Integrity Crisis">
    <div className="grid md:grid-cols-3 gap-8 text-center">
      <div className="glass p-8 rounded-2xl">
        <div className="text-sinergo-blue mb-4 flex justify-center"><WifiOff size={48} /></div>
        <h3 className="text-2xl font-bold mb-2">12,000+ Villages</h3>
        <p className="text-white/60">Still living in digital silence with zero internet connectivity.</p>
      </div>
      <div className="glass p-8 rounded-2xl">
        <div className="text-red-500 mb-4 flex justify-center"><Lock size={48} /></div>
        <h3 className="text-2xl font-bold mb-2">Integrity Gap</h3>
        <p className="text-white/60">Widespread "Ghost Workers" and attendance manipulation.</p>
      </div>
      <div className="glass p-8 rounded-2xl border-sinergo-indigo/30">
        <div className="text-sinergo-indigo mb-4 flex justify-center"><Target size={48} /></div>
        <h3 className="text-2xl font-bold mb-2">Business Loss</h3>
        <p className="text-white/60">Financial leakages due to inaccurate real-time monitoring.</p>
      </div>
    </div>
  </SlideLayout>
);

export const Slide3 = () => (
    <SlideLayout title="The Impact" subtitle="Aligning with UN SDGs">
      <div className="grid md:grid-cols-3 gap-8">
        {[
            { id: 8, title: "Decent Work", desc: "Promoting transparency and fair labor practices through reliable data.", icon: <Briefcase />, color: "#A21942" },

            { id: 9, title: "Innovation", desc: "Building resilient digital infrastructure for the most remote areas.", icon: <Zap />, color: "#FD6925" },
            { id: 16, title: "Justice & Anti-Fraud", desc: "Eliminating corruption and ensuring institutional accountability.", icon: <Shield />, color: "#00689D" },
        ].map((sdg) => (
            <div 
                key={sdg.id} 
                className="glass p-10 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                style={{ borderColor: `${sdg.color}33` }}
            >
                {/* SDG Color Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: sdg.color }} />
                
                <div className="absolute top-4 right-6 text-6xl font-black opacity-10 group-hover:opacity-25 transition-opacity" style={{ color: sdg.color }}>{sdg.id}</div>
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl text-white shadow-lg" style={{ backgroundColor: sdg.color }}>
                    {sdg.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter" style={{ color: sdg.color }}>{sdg.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium">{sdg.desc}</p>
                
                <div className="mt-8 text-[10px] font-bold uppercase tracking-widest text-white/20">Sustainable Development Goal {sdg.id}</div>
            </div>
        ))}
      </div>
    </SlideLayout>

);

export const Slide4 = () => (
    <SlideLayout title="System Blueprint" subtitle="Clean Architecture & Modern Tech">
      <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
        <div className="glass p-8 rounded-3xl flex-1 w-full bg-gradient-to-br from-white/5 to-transparent">
            <h3 className="text-xl font-bold mb-8 text-sinergo-blue uppercase tracking-widest flex items-center gap-3">
                <Target size={20} /> Core Principles
            </h3>
            <ul className="space-y-6">
                <li className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-sinergo-blue/10 text-sinergo-blue"><Database size={24} /></div>
                    <div>
                        <p className="font-bold text-white">Clean Architecture</p>
                        <p className="text-xs text-white/40">Separation of concerns for modularity</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-sinergo-indigo/10 text-sinergo-indigo"><Shield size={24} /></div>
                    <div>
                        <p className="font-bold text-white">Offline-First Resilience</p>
                        <p className="text-xs text-white/40">Reliable in low-connectivity areas</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-sinergo-blue/10 text-sinergo-blue"><Zap size={24} /></div>
                    <div>
                        <p className="font-bold text-white">High Performance</p>
                        <p className="text-xs text-white/40">Isar DB for lightning-fast speeds</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-3 group hover:border-sinergo-blue transition-colors">
                <div className="p-3 rounded-full bg-sinergo-blue/10 text-sinergo-blue group-hover:bg-sinergo-blue/20 transition-all"><Cpu size={32} /></div>
                <span className="font-bold text-white">Flutter</span>
             </div>
             <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-3 group hover:border-sinergo-blue transition-colors">
                <div className="p-3 rounded-full bg-sinergo-blue/10 text-sinergo-blue group-hover:bg-sinergo-blue/20 transition-all"><Database size={32} /></div>
                <span className="font-bold text-white">Isar DB</span>
             </div>
             <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-3 group hover:border-sinergo-blue transition-colors">
                <div className="p-3 rounded-full bg-sinergo-blue/10 text-sinergo-blue group-hover:bg-sinergo-blue/20 transition-all"><Cloud size={32} /></div>
                <span className="font-bold text-white">PocketBase</span>
             </div>
             <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-3 group hover:border-sinergo-blue transition-colors">
                <div className="p-3 rounded-full bg-sinergo-blue/10 text-sinergo-blue group-hover:bg-sinergo-blue/20 transition-all"><RefreshCw size={32} /></div>
                <span className="font-bold text-white">Background Sync</span>
             </div>
        </div>

      </div>
    </SlideLayout>

);

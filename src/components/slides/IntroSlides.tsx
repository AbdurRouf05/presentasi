'use client';

import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';
import { Target, Shield, Zap, Database, Cloud, MapPin, Camera, WifiOff, LayoutDashboard, Lock, Bell, User, Cpu } from 'lucide-react';

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
            { id: 8, title: "Decent Work", desc: "Promoting transparency and fair labor practices through reliable data.", icon: <Shield /> },
            { id: 9, title: "Innovation", desc: "Building resilient digital infrastructure for the most remote areas.", icon: <Zap /> },
            { id: 16, title: "Justice & Anti-Fraud", desc: "Eliminating corruption and ensuring institutional accountability.", icon: <Shield /> },
        ].map((sdg) => (
            <div key={sdg.id} className="glass p-10 rounded-3xl relative overflow-hidden group hover:border-sinergo-blue transition-colors">
                <div className="absolute top-0 right-0 p-4 text-6xl font-black opacity-10 group-hover:opacity-20 transition-opacity">SDG {sdg.id}</div>
                <div className="text-sinergo-blue mb-6">{sdg.icon}</div>
                <h3 className="text-2xl font-black mb-4">{sdg.title}</h3>
                <p className="text-white/60 leading-relaxed">{sdg.desc}</p>
            </div>
        ))}
      </div>
    </SlideLayout>
);

export const Slide4 = () => (
    <SlideLayout title="System Blueprint" subtitle="Clean Architecture & Modern Tech">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="glass p-8 rounded-2xl flex-1 w-full">
            <h3 className="text-xl font-bold mb-6 text-sinergo-blue uppercase tracking-widest">Principles</h3>
            <ul className="space-y-4">
                <li className="flex items-center gap-3"><Database className="text-sinergo-indigo" /> Clean Architecture</li>
                <li className="flex items-center gap-3"><Shield className="text-sinergo-indigo" /> Offline-First Resilience</li>
                <li className="flex items-center gap-3"><Zap className="text-sinergo-indigo" /> High Performance Local DB</li>
            </ul>
        </div>
        <div className="flex-1 w-full grid grid-cols-2 gap-4">
             <div className="glass p-6 rounded-xl flex items-center gap-4 border-l-4 border-l-sinergo-blue">
                <span className="font-bold">Flutter</span>
             </div>
             <div className="glass p-6 rounded-xl flex items-center gap-4 border-l-4 border-l-sinergo-indigo">
                <span className="font-bold">Isar DB</span>
             </div>
             <div className="glass p-6 rounded-xl flex items-center gap-4 border-l-4 border-l-sinergo-blue">
                <span className="font-bold">PocketBase</span>
             </div>
             <div className="glass p-6 rounded-xl flex items-center gap-4 border-l-4 border-l-sinergo-indigo">
                <span className="font-bold">Background Sync</span>
             </div>
        </div>
      </div>
    </SlideLayout>
);

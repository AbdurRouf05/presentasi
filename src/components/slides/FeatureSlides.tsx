'use client';

import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';
import { MapPin, Camera, WifiOff, LayoutDashboard, Database, RefreshCw, Cloud, ArrowRight, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';


const MediaPlaceholder = ({ title, type = "video", variant = "mobile" }: { title: string; type?: "video" | "image"; variant?: "mobile" | "desktop" }) => (
    <div className={cn(
        "glass rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-white/20 group hover:border-sinergo-blue transition-all cursor-pointer overflow-hidden relative mx-auto",
        variant === "mobile" ? "aspect-[9/19] w-full max-w-[280px]" : "aspect-video w-full"
    )}>
        <div className="absolute inset-0 bg-glow opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 flex flex-col items-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {type === "video" ? (
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                ) : (
                    <Camera className="text-white" size={24} />
                )}
            </div>
            <p className="text-white/40 font-bold text-xs uppercase tracking-widest">{title}</p>
            <p className="text-white/20 text-[10px] mt-1 font-medium">{type === "video" ? "MP4 / VIDEO" : "PNG / JPG"}</p>
        </div>
    </div>
);

export const Slide5 = () => (
    <SlideLayout title="Operational Flow" subtitle="From Local Storage to Cloud Sync">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
            {[
                { label: "Attendance Input", icon: <MapPin />, desc: "Location & Photo" },
                { label: "Local Validation", icon: <Database />, desc: "Isar Database" },
                { label: "Background Sync", icon: <RefreshCw />, desc: "Automatic" },
                { label: "Cloud Sync", icon: <Cloud />, desc: "PocketBase" },
            ].map((step, i, arr) => (
                <React.Fragment key={step.label}>
                    <div className="flex flex-col items-center text-center gap-4 flex-1">
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 * i }}
                            className="w-24 h-24 glass rounded-full flex items-center justify-center text-sinergo-blue"
                        >
                            {step.icon}
                        </motion.div>
                        <div>
                            <h4 className="font-bold text-white">{step.label}</h4>
                            <p className="text-xs text-white/40">{step.desc}</p>
                        </div>
                    </div>
                    {i < arr.length - 1 && (
                        <div className="hidden md:block text-white/20">
                            <ArrowRight size={32} />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    </SlideLayout>
);

export const Slide6 = () => (
    <SlideLayout title="Location & Photo" subtitle="SDG 8 & 16: Ensuring Accountability">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <div className="glass p-6 rounded-2xl border-l-4 border-l-sinergo-blue">
                    <h3 className="text-xl font-bold flex items-center gap-3 mb-2">
                        <MapPin className="text-sinergo-blue" /> Precision GPS
                    </h3>
                    <p className="text-white/60">Geo-fencing validation to ensure presence in designated zones.</p>
                </div>
                <div className="glass p-6 rounded-2xl border-l-4 border-l-sinergo-indigo">
                    <h3 className="text-xl font-bold flex items-center gap-3 mb-2">
                        <Camera className="text-sinergo-indigo" /> Live Photo Proof
                    </h3>
                    <p className="text-white/60">Real-time selfie capture to eliminate "Joki Absen" (ghost workers).</p>
                </div>
            </div>
            <MediaPlaceholder title="Check-in Recording" type="video" variant="mobile" />
        </div>
    </SlideLayout>
);

export const Slide7 = () => (
    <SlideLayout title="Offline-First Mode" subtitle="SDG 9: Resilient Digital Infrastructure">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <MediaPlaceholder title="Offline Demo" type="video" variant="mobile" />
            <div className="glass p-10 rounded-3xl">
                <div className="text-sinergo-blue mb-6"><WifiOff size={64} /></div>
                <h3 className="text-3xl font-black mb-4">Zero Signal? No Problem.</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                    Unlike traditional systems that stall without internet, Sinergo operates fully offline. 
                    Data is stored in high-performance Isar DB and synced automatically once connection returns.
                </p>
            </div>
        </div>
    </SlideLayout>
);

export const Slide8 = () => (
    <SlideLayout title="Admin Dashboard" subtitle="SDG 16: Data Transparency & Analytics">
        <div className="space-y-12">
            <div className="grid grid-cols-2 gap-8 items-start justify-center max-w-4xl mx-auto">
                <MediaPlaceholder title="Admin Analytics" type="image" variant="mobile" />
                <MediaPlaceholder title="Employee Rekap" type="image" variant="mobile" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { label: "Real-time Monitoring", icon: <LayoutDashboard /> },
                    { label: "Performance Audit", icon: <Shield /> },
                    { label: "Exportable Reports", icon: <Database /> },
                ].map(item => (
                    <div key={item.label} className="glass p-4 rounded-xl flex items-center gap-4">
                        <div className="text-sinergo-blue">{item.icon}</div>
                        <span className="font-medium text-sm text-white/80">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    </SlideLayout>
);


'use client';

import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Cpu, Bell, User, MessageSquare, Terminal, Rocket, CheckCircle, Camera } from 'lucide-react';
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


export const Slide9 = () => (
    <SlideLayout title="Anti-Fraud System" subtitle="SDG 16: Integrity & Fake GPS Defense">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <div className="glass p-8 rounded-3xl border-2 border-red-500/20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-red-500/20 rounded-xl text-red-500"><ShieldAlert size={32} /></div>
                        <h3 className="text-2xl font-bold">Security Shield</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-white/60"><CheckCircle size={16} className="text-sinergo-blue" /> Fake GPS Detection</li>
                        <li className="flex items-center gap-2 text-white/60"><CheckCircle size={16} className="text-sinergo-blue" /> Device Root/Jailbreak Check</li>
                        <li className="flex items-center gap-2 text-white/60"><CheckCircle size={16} className="text-sinergo-blue" /> App Tampering Protection</li>
                    </ul>
                </div>
            </div>
            <MediaPlaceholder title="Anti-Fraud Protection" variant="mobile" />
        </div>
    </SlideLayout>
);

export const Slide10 = () => (
    <SlideLayout title="Feature Recap & AI" subtitle="Complete Ecosystem Tour">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <MediaPlaceholder title="Full Feature Tour" type="video" variant="mobile" />
            <div className="space-y-6">
                <div className="glass p-8 rounded-3xl border-l-4 border-l-sinergo-blue bg-gradient-to-b from-white/5 to-transparent">
                    <h3 className="text-2xl font-black mb-6 flex items-center gap-3 tracking-tight">
                        <Terminal size={28} className="text-sinergo-blue" /> System Highlights
                    </h3>
                    <ul className="space-y-5">
                        <li className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                            <div className="p-2 glass-light rounded-lg text-sinergo-indigo group-hover:bg-sinergo-indigo/20"><Bell size={20} /></div>
                            <span className="font-semibold">Smart Notifications</span>
                        </li>
                        <li className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                            <div className="p-2 glass-light rounded-lg text-sinergo-indigo group-hover:bg-sinergo-indigo/20"><User size={20} /></div>
                            <span className="font-semibold">Employee Self-Service</span>
                        </li>
                        <li className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                            <div className="p-2 glass-light rounded-lg text-sinergo-indigo group-hover:bg-sinergo-indigo/20"><Cpu size={20} /></div>
                            <span className="font-semibold text-sinergo-blue font-black uppercase tracking-widest text-xs">HR Copilot (AI Insight)</span>
                        </li>
                        <li className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                            <div className="p-2 glass-light rounded-lg text-sinergo-indigo group-hover:bg-sinergo-indigo/20"><Zap size={20} /></div>
                            <span className="font-semibold">Predictive Analytics</span>
                        </li>
                    </ul>
                </div>
                <div className="glass p-6 rounded-2xl bg-sinergo-blue/10 border-sinergo-blue/20">
                    <p className="text-sm text-white/60 leading-relaxed font-medium">
                        One integrated platform to handle attendance, security, and smart HR insights across all zones.
                    </p>
                </div>
            </div>
        </div>
    </SlideLayout>
);


export const Slide11 = () => (
    <SlideLayout title="The Future" subtitle="Empowering the Unconnected">
        <div className="flex flex-col md:flex-row gap-12 items-stretch">
            <div className="flex-1 glass p-10 rounded-3xl">
                <h3 className="text-3xl font-black mb-6">Final Vision</h3>
                <p className="text-xl text-white/60 italic leading-relaxed">
                    "Bridging the digital divide by ensuring every worker, in every corner of Indonesia, is counted fairly and transparently."
                </p>
            </div>
            <div className="flex-1 space-y-4">
                <h4 className="text-sm font-black uppercase text-sinergo-blue tracking-widest">Roadmap 2026</h4>
                <div className="space-y-3">
                    <div className="glass p-4 rounded-xl flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-sinergo-blue" />
                        <span className="font-medium">Advanced Biometrics</span>
                    </div>
                    <div className="glass p-4 rounded-xl flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-sinergo-indigo" />
                        <span className="font-medium">Predictive AI Resourcing</span>
                    </div>
                    <div className="glass p-4 rounded-xl flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-sinergo-blue" />
                        <span className="font-medium">Nationwide Deployment</span>
                    </div>
                </div>
            </div>
        </div>
    </SlideLayout>
);

export const Slide12 = () => (
    <SlideLayout className="text-center">
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="space-y-8"
        >
            <div className="inline-block p-4 glass rounded-2xl text-sinergo-blue mb-4">
                <MessageSquare size={64} />
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none">
                THANK YOU!
            </h1>
            <p className="text-2xl md:text-3xl text-sinergo-blue font-bold tracking-[0.2em] uppercase">
                Any Questions?
            </p>
            <div className="mt-16 flex justify-center gap-8">
                <div className="flex items-center gap-2 text-white/40">
                    <Rocket size={20} />
                    <span>Sinergo Team 2026</span>
                </div>
            </div>
        </motion.div>
    </SlideLayout>
);

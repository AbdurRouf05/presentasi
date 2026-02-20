'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function SlideLayout({ children, className, title, subtitle }: SlideLayoutProps) {
  return (
    <div className={cn("w-full h-screen relative flex flex-col items-center p-8 md:p-16 lg:p-24 overflow-y-auto custom-scrollbar", className)}>
      {/* Optimized Background Glows - Reduced blur on mobile or hidden to fix lag */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-sinergo-blue/10 blur-[60px] md:blur-[120px] rounded-full -z-10 opacity-50 md:opacity-100" />
      <div className="fixed top-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-sinergo-indigo/5 blur-[50px] md:blur-[100px] rounded-full -z-10 hidden md:block" />

      {title && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center flex-shrink-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/60 font-medium">
              {subtitle}
            </p>
          )}
          <div className="h-1.5 w-24 bg-sinergo-blue mx-auto mt-6 rounded-full shadow-[0_0_15px_#0eb1f4]" />
        </motion.div>
      )}


      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-6xl pb-24"
      >
        {children}
      </motion.div>
    </div>
  );
}


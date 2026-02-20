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
      {/* Background glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sinergo-indigo/10 blur-[120px] rounded-full -z-10" />
      <div className="fixed top-1/4 right-1/4 w-[400px] h-[400px] bg-sinergo-blue/5 blur-[100px] rounded-full -z-10" />

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
          <div className="h-1.5 w-24 bg-sinergo-blue mx-auto mt-6 rounded-full shadow-[0_0_15px_#3b82f6]" />
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


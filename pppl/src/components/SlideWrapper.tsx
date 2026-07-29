"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
}

export default function SlideWrapper({ children }: SlideWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full h-full overflow-y-auto flex flex-col p-4 md:p-8 bg-transparent text-black"
    >
      <div className="max-w-5xl w-full m-auto flex flex-col justify-center relative py-2 md:py-0">
        {children}
      </div>
    </motion.div>
  );
}

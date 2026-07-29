"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeoCardProps {
  children: ReactNode;
  className?: string;
  color?: "pink" | "cyan" | "lime" | "yellow" | "white";
  hoverEffect?: boolean;
}

export function NeoCard({ 
  children, 
  className, 
  color = "white",
  hoverEffect = false 
}: NeoCardProps) {
  
  const colorClasses = {
    pink: "bg-neo-pink",
    cyan: "bg-neo-cyan",
    lime: "bg-neo-lime",
    yellow: "bg-neo-yellow",
    white: "bg-white",
  };

  return (
    <div
      className={cn(
        "border-neo bg-white",
        "shadow-neo transition-all duration-200",
        color !== "white" && colorClasses[color],
        hoverEffect && "hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-neo-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

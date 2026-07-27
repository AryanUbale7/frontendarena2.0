"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  elevateOnHover?: boolean;
}

export default function Card({ children, className = "", elevateOnHover = true, ...props }: CardProps) {
  return (
    <motion.div
      className={`relative rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/40 p-8 shadow-sm transition-all duration-500 ${
        elevateOnHover 
          ? "hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 dark:hover:border-primary/20" 
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

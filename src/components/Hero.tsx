"use client";

import React, { useRef } from "react";
import { ArrowRight, Code, Sparkles, Shield, Cpu, Layers } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Counter from "@/components/Counter";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const stats = [
    { value: 150, suffix: "+", label: "Projects Completed" },
    { value: 50, suffix: "+", label: "Clients Worldwide" },
    { value: 8, suffix: "+", label: "Years Experience" },
  ];

  // Mouse tilt parallax
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Text Reveal animations config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    },
  };

  const headingText = "Building Modern Digital Experiences";

  return (
    <section className="relative min-h-screen pt-36 pb-24 overflow-hidden flex flex-col justify-center bg-grid-pattern">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px] dark:bg-secondary/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Micro Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 w-fit mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-700 dark:text-slate-200">
              Digital Product Studio
            </span>
          </motion.div>

          {/* Heading with Word Reveal */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.08] mb-6 tracking-tight flex flex-wrap"
          >
            {headingText.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={`mr-3 ${word === "Digital" || word === "Experiences" ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-paragraph leading-relaxed mb-8 max-w-xl"
          >
            We partner with tech-forward brands to engineer high-performance SaaS applications, custom web design, and cutting-edge AI integrations built with premium craftsmanship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            {/* Magnetic primary button */}
            <Magnetic>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </Magnetic>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#portfolio"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/40 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors duration-300"
            >
              <span>Explore Portfolio</span>
            </motion.a>
          </motion.div>

          {/* Statistics Grid with Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/50 dark:border-slate-800/50"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl sm:text-3xl text-slate-900 dark:text-white mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mockup Showcase Graphics */}
        <div className="lg:col-span-5 relative h-[480px] w-full flex items-center justify-center">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full max-w-[420px] rounded-3xl bg-white dark:bg-slate-950 p-6 shadow-2xl relative border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between cursor-default"
          >
            {/* Top row with window icons */}
            <div className="flex justify-between items-center mb-8" style={{ transform: "translateZ(30px)" }}>
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-[10px] font-bold tracking-wider text-slate-400 uppercase font-numbers">
                System OK
              </div>
            </div>

            {/* Core mockup content */}
            <div className="space-y-6" style={{ transform: "translateZ(40px)" }}>
              <div className="h-4 w-32 bg-slate-100 dark:bg-slate-900 rounded-md mb-4" />
              
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/20 dark:border-slate-800/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Code className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded-sm" />
                    <div className="h-2.5 w-10 bg-slate-100 dark:bg-slate-900 rounded-sm" />
                  </div>
                </div>
                <div className="h-3 w-12 bg-slate-200 dark:bg-slate-800 rounded-sm font-numbers text-right" />
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/20 dark:border-slate-800/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded-sm" />
                    <div className="h-2.5 w-12 bg-slate-100 dark:bg-slate-900 rounded-sm" />
                  </div>
                </div>
                <div className="h-3 w-10 bg-slate-200 dark:bg-slate-800 rounded-sm font-numbers text-right" />
              </div>
            </div>

            {/* Sparkline layout representation */}
            <div className="mt-8 h-20 w-full flex items-end space-x-2" style={{ transform: "translateZ(50px)" }}>
              {[45, 20, 55, 30, 75, 40, 95, 60, 80].map((height, i) => (
                <div
                  key={i}
                  style={{ height: `${height}%` }}
                  className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-lg opacity-90 transition-all duration-500"
                />
              ))}
            </div>
          </motion.div>

          {/* Parallax Overlay Tag 1 */}
          <motion.div
            style={{ transform: "translateZ(60px)" }}
            className="absolute -top-4 -left-4 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200/40 dark:border-slate-800/40 flex items-center space-x-3 pointer-events-none"
          >
            <div className="w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
              <Shield className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400">Security Gate</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Active Shield</p>
            </div>
          </motion.div>

          {/* Parallax Overlay Tag 2 */}
          <motion.div
            style={{ transform: "translateZ(70px)" }}
            className="absolute -bottom-4 right-0 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200/40 dark:border-slate-800/40 flex items-center space-x-3 pointer-events-none"
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
              <Cpu className="w-4 h-4 animate-spin-slow" />
            </div>
            <div className="space-y-0.5">
              <p className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400">AI Compute</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white font-numbers">99.8% Accuracy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

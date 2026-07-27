"use client";

import React from "react";
import { ArrowRight, Code, Sparkles, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Clients Worldwide" },
    { value: "8+", label: "Years Experience" },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden flex flex-col justify-center bg-grid-pattern">
      {/* Animated Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px] dark:bg-secondary/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        {/* Text Content Block */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Micro-pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 w-fit mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              Top Tier Digital Product Studio
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6"
          >
            Building Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Digital Experiences
            </span>
          </motion.h1>

          {/* Supporting paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-paragraph leading-relaxed mb-8 max-w-xl"
          >
            We partner with tech-forward brands to engineer high-performance SaaS applications, custom web design, and cutting-edge AI integrations built with premium craftsmanship.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/40 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors duration-300"
            >
              <span>Explore Portfolio</span>
            </a>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/50 dark:border-slate-800/50"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-numbers font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-paragraph">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating Mockup Graphics */}
        <div className="lg:col-span-5 relative h-[450px] w-full flex items-center justify-center">
          {/* Main floating dashboard panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.3 }}
            className="w-full max-w-[420px] rounded-2xl glass-panel p-6 shadow-2xl relative border border-slate-200/40 dark:border-slate-800/40"
          >
            {/* Window control circles */}
            <div className="flex space-x-1.5 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* Dashboard header mockup */}
            <div className="h-4 w-28 bg-slate-200 dark:bg-slate-800 rounded-md mb-8 animate-pulse" />

            {/* Simulated analytics lines */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center">
                    <Code className="w-3 h-3 text-primary" />
                  </div>
                  <div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded-sm" />
                </div>
                <div className="h-3 w-12 bg-slate-200 dark:bg-slate-800 rounded-sm font-numbers text-xs text-right" />
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-md bg-secondary/20 flex items-center justify-center">
                    <Cpu className="w-3 h-3 text-secondary" />
                  </div>
                  <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded-sm" />
                </div>
                <div className="h-3 w-10 bg-slate-200 dark:bg-slate-800 rounded-sm font-numbers text-xs text-right" />
              </div>
            </div>

            {/* Mockup Line Graph visual */}
            <div className="mt-8 h-24 w-full flex items-end space-x-1.5">
              {[40, 25, 60, 45, 80, 55, 95, 70, 85].map((height, i) => (
                <div
                  key={i}
                  style={{ height: `${height}%` }}
                  className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-sm opacity-80"
                />
              ))}
            </div>
          </motion.div>

          {/* Mini overlay card 1: Active Users */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.5 }}
            className="absolute -top-4 -left-4 sm:left-4 p-4 rounded-xl glass-panel shadow-lg border border-slate-200/50 dark:border-slate-800/50 flex items-center space-x-3"
          >
            <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-paragraph">Security Engine</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Active Protection</p>
            </div>
          </motion.div>

          {/* Mini overlay card 2: AI Status */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.6 }}
            className="absolute -bottom-4 right-0 sm:right-6 p-4 rounded-xl glass-panel shadow-lg border border-slate-200/50 dark:border-slate-800/50 flex items-center space-x-3"
          >
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500">
              <Cpu className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-paragraph">AI Integrations</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white font-numbers">99.8% Accuracy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

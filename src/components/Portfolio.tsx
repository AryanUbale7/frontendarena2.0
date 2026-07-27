"use client";

import React, { useState } from "react";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "SaaS", "AI Solutions", "UI/UX & Web"];

  const projects = [
    {
      title: "Nova AI Analytics",
      category: "AI Solutions",
      description: "An intelligent telemetry dashboard featuring 17-stage sandbox execution graphs and predictive usage spikes.",
      gradient: "from-blue-600 to-cyan-500",
      tag: "Next.js + Python",
    },
    {
      title: "Aura Design System",
      category: "UI/UX & Web",
      description: "A token-driven Figma-to-code design system built for high-scale SaaS products with accessibility compliance.",
      gradient: "from-pink-600 to-purple-600",
      tag: "Tailwind CSS",
    },
    {
      title: "Vortex Payments Engine",
      category: "SaaS",
      description: "A zero-latency transaction ledger utilizing optimistic state caching and distributed queue architectures.",
      gradient: "from-amber-500 to-orange-600",
      tag: "NestJS + Redis",
    },
    {
      title: "Zephyr Cloud Console",
      category: "SaaS",
      description: "Ephemeral deployment manager fronted by global edge networks, providing preview builds on every commit.",
      gradient: "from-emerald-500 to-teal-600",
      tag: "Go + Kubernetes",
    },
  ];

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Our Work</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-[1.15]">
              Showcasing Engineering Craftsmanship.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group relative rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/40 p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Visual Gradient Card Placeholder */}
                <div className={`w-full h-56 rounded-xl bg-gradient-to-tr ${project.gradient} mb-6 relative overflow-hidden flex items-center justify-center`}>
                  {/* Floating visual elements inside card */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-primary font-bold">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-paragraph">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-paragraph leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Case Study Actions */}
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors duration-200"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

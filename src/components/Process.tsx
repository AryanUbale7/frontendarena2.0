"use client";

import React from "react";
import { Search, Compass, Code, ShieldCheck, Rocket, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Discovery & Alignment",
      description: "We dive deep into your requirements, map out domain architectures, user journeys, and specify delivery sprints.",
    },
    {
      num: "02",
      icon: Compass,
      title: "UI/UX & System Design",
      description: "We compile theme tokens, design hi-fi interactive portals mockups, and layout the database strategy.",
    },
    {
      num: "03",
      icon: Code,
      title: "Engineering & Sprints",
      description: "We build stateless backend services, write clean Next.js App Router code, and connect APIs via gRPC.",
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Security & Testing Gates",
      description: "We configure gVisor sandboxes, execute automated load test scripts (k6), and run vulnerability audits.",
    },
    {
      num: "05",
      icon: Rocket,
      title: "Production Launch",
      description: "We deploy the platform to Kubernetes clusters on EKS, set up Cloudflare protection, and run canary rollouts.",
    },
    {
      num: "06",
      icon: HeartHandshake,
      title: "Support & AI Evolution",
      description: "We monitor systems using Lok/Prometheus health monitors and gradually implement AI analytics modules.",
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-slate-50/20 dark:bg-slate-900/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl text-center mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Our Process</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            How We Bring Ideas to Life.
          </p>
          <p className="mt-4 text-paragraph text-sm sm:text-base leading-relaxed">
            A systematic, sprint-driven methodology optimized for engineering velocity and bulletproof stability.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/40 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-500"
              >
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-numbers font-extrabold text-3xl text-slate-200 dark:text-slate-850 group-hover:text-primary/30 transition-colors duration-500">
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-paragraph leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

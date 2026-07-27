"use client";

import React from "react";
import { Laptop, Cpu, Palette, Layout, Server, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Services() {
  const services = [
    {
      icon: Laptop,
      title: "Website Development",
      description: "Fast, responsive, and SEO-optimized marketing sites designed with premium aesthetics and smooth animations.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderGlow: "group-hover:border-blue-500/30",
    },
    {
      icon: Server,
      title: "SaaS Applications",
      description: "Scalable SaaS architectures built on robust databases, secure authentication systems, and cloud infra blueprints.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderGlow: "group-hover:border-purple-500/30",
    },
    {
      icon: Cpu,
      title: "AI Solutions",
      description: "Custom AI integrations utilizing LLM models, vector caches, semantic searching engines, and intelligent copilots.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderGlow: "group-hover:border-cyan-500/30",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma-level visual layout design specifications, typography systems, dark themes, and motion design guidelines.",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderGlow: "group-hover:border-pink-500/30",
    },
    {
      icon: Layout,
      title: "Web Applications",
      description: "Interactive single page applications built with React, Next.js App Router, and lightweight state management caches.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderGlow: "group-hover:border-emerald-500/30",
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored microservices architectures, API designs, webhook interfaces, and database configurations.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderGlow: "group-hover:border-orange-500/30",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50/20 dark:bg-slate-900/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Reveal */}
        <Reveal>
          <div className="max-w-2xl mb-20">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Our Expertise</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-[1.12]">
              Engineering Premium Digital Products.
            </p>
            <p className="mt-4 text-paragraph text-sm sm:text-base leading-relaxed">
              We operate at the intersection of design, engineering, and artificial intelligence, helping companies launch world-class products.
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/40 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-slate-50/50 dark:hover:bg-slate-900/15 ${service.borderGlow} transition-all duration-500 flex flex-col justify-between`}
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-12 h-12 rounded-2xl ${service.bgColor} flex items-center justify-center ${service.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-paragraph leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Discuss Project */}
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary group-hover:underline transition-colors duration-300"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Laptop, Cpu, Palette, Layout, Server, LineChart, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Laptop,
      title: "Website Development",
      description: "Fast, responsive, and SEO-optimized marketing sites designed with premium aesthetics and smooth animations.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Server,
      title: "SaaS Applications",
      description: "Scalable SaaS architectures built on robust databases, secure authentication systems, and cloud infra blueprints.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Cpu,
      title: "AI Solutions",
      description: "Custom AI integrations utilizing LLM models, vector caches, semantic searching engines, and intelligent copilots.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma-level visual layout design specifications, typography systems, dark themes, and motion design guidelines.",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Layout,
      title: "Web Applications",
      description: "Interactive single page applications built with React, Next.js App Router, and lightweight state management caches.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored microservices architectures, API designs, webhook interfaces, and database configurations.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50/30 dark:bg-slate-900/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">Our Expertise</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-[1.15]">
            Engineering Premium Digital Products.
          </p>
          <p className="mt-4 text-paragraph text-sm sm:text-base leading-relaxed">
            We operate at the intersection of design, engineering, and artificial intelligence, helping companies launch world-class products.
          </p>
        </div>

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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/20 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-primary/5 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-paragraph leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary hover:text-secondary group/link transition-colors duration-200"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

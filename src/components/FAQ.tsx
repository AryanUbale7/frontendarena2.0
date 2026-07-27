"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "Do you specialize in both design and engineering?",
      a: "Yes. We are a full-service digital product studio. We specialize in everything from Figma UI/UX layout design to Next.js frontends, modular NestJS backends, EKS Kubernetes cloud architecture, and custom AI integrations.",
    },
    {
      q: "What tech stack do you recommend for SaaS products?",
      a: "For frontend, we recommend Next.js 15 with TypeScript and Tailwind CSS. For backend microservices, we build using Node.js (NestJS) or Go, backed by PostgreSQL, Redis caches, and RabbitMQ/Kafka queues.",
    },
    {
      q: "How do you manage project execution and milestones?",
      a: "We work in strict 2-week Agile sprints. At the beginning of each project, we deliver a Development Masterplan outlining objectives, task breakdowns, DORA metric goals, and exit criteria for each phase.",
    },
    {
      q: "Do you support post-launch maintenance?",
      a: "Yes, we provide ongoing support contracts, server health monitoring via Grafana/Loki, database backup management, and feature expansions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-slate-50/30 dark:bg-slate-900/10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">FAQ</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Frequently Asked Questions.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden bg-white dark:bg-slate-950/40"
              >
                {/* Header Toggle Clickable */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex justify-between items-center text-left text-slate-900 dark:text-white hover:bg-slate-50/50 dark:hover:bg-slate-900/15 transition-colors duration-200"
                >
                  <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                  <div className="flex-shrink-0 ml-4 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-850 text-slate-500 dark:text-slate-400">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/50 text-paragraph text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

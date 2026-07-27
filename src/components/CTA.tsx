"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-8 sm:p-16 text-center shadow-xl">
            {/* Micro-badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Let's Collaborate</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Ready to Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Extraordinary?
              </span>
            </h2>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-paragraph leading-relaxed mb-8 max-w-xl mx-auto">
              Get in touch to discuss your product architecture, design token system, or custom software requirements.
            </p>

            {/* Contact Input Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-grow px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-450 dark:placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary text-sm transition-all duration-355"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-md mx-auto p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 font-semibold text-sm"
              >
                Thank you! Our engineering team will contact you within 24 hours.
              </motion.div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

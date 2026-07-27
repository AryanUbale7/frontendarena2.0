"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      quote: "Frontend Arena delivered a modular codebase that our team easily extracted into microservices. Their UI aesthetics and performance scores are unmatched.",
      author: "Sarah Jenkins",
      role: "CTO, Nova Financial",
      rating: 5,
    },
    {
      quote: "Their developer handoff checklist was so comprehensive that our integration squad bootstrapped the entire app inside two development sprints. Absolute pros.",
      author: "David Chen",
      role: "VP of Product, Apex Inc",
      rating: 5,
    },
    {
      quote: "The design system they created is incredibly clean. From buttons to modals, every component fits our dark mode specifications perfectly.",
      author: "Elena Rostova",
      role: "Design Lead, Vortex Group",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Testimonials</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-[1.12]">
            What Our Partners Say.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/40 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex space-x-1 mb-6 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current animate-pulse" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-paragraph leading-relaxed italic mb-8">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-6 border-t border-slate-100 dark:border-slate-900/50">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {review.author}
                  </h4>
                  <p className="text-[10px] font-extrabold text-paragraph uppercase tracking-wider">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export default function TrustedSection() {
  const companies = [
    { name: "Vercel", type: "Hosting" },
    { name: "Stripe", type: "Payments" },
    { name: "Linear", type: "Management" },
    { name: "Framer", type: "Design" },
    { name: "Apple", type: "Hardware" },
    { name: "Notion", type: "Workspaces" },
    { name: "GitHub", type: "Codebase" },
    { name: "Discord", type: "Communications" },
  ];

  return (
    <section className="py-12 border-y border-slate-200/50 dark:border-slate-800/50 overflow-hidden bg-slate-50/50 dark:bg-slate-950/10">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Trusted by engineers and teams at forward-thinking companies
        </p>
      </div>

      <div className="relative w-full flex items-center">
        {/* Left blur shade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#030712] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling flex row */}
        <div className="flex space-x-12 items-center whitespace-nowrap animate-infinite-scroll py-2">
          {/* Double company array to allow seamless scrolling loop */}
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-slate-400 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 cursor-default"
            >
              <span className="text-lg font-bold font-heading tracking-tight">
                {company.name}
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
                {company.type}
              </span>
            </div>
          ))}
        </div>

        {/* Right blur shade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#030712] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

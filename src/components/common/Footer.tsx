import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const services = [
    { name: "Website Development", href: "#services" },
    { name: "SaaS Applications", href: "#services" },
    { name: "AI Integrations", href: "#services" },
    { name: "UI/UX System Design", href: "#services" },
  ];

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-950/20 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
        {/* Brand Block */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <a href="#" className="flex items-center space-x-2 mb-4 group">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
                F
              </span>
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                Frontend<span className="text-primary group-hover:text-secondary transition-colors duration-300">Arena</span>
              </span>
            </a>
            <p className="text-sm text-paragraph leading-relaxed max-w-sm mb-6">
              A premium digital product studio building high-performance websites, scalable SaaS applications, and custom AI solutions.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-slate-400 dark:text-slate-500">
            <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="GitHub">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
            Studio
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-paragraph hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
            Services
          </h4>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.name}>
                <a
                  href={service.href}
                  className="text-sm text-paragraph hover:text-primary transition-colors duration-200"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-sm text-paragraph">
              <Mail className="w-4 h-4 text-primary" />
              <span>hello@frontendarena.com</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-paragraph">
              <Phone className="w-4 h-4 text-primary" />
              <span>+1 (555) 019-2834</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-paragraph">
              <MapPin className="w-4 h-4 text-primary" />
              <span>San Francisco, CA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright block */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500">
        <p className="mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Frontend Arena LLC. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-primary transition-colors duration-250">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors duration-250">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

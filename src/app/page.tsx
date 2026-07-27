import React from "react";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustedSection from "@/components/sections/TrustedSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Logo Cloud Trusted By */}
        <TrustedSection />

        {/* Services Grid */}
        <ServicesSection />

        {/* Project Showcase Portfolio */}
        <PortfolioSection />

        {/* Timeline Process */}
        <ProcessSection />

        {/* Customer Reviews Testimonials */}
        <TestimonialsSection />

        {/* Accordion FAQ */}
        <FAQSection />

        {/* Dynamic CTA Form */}
        <CTASection />
      </main>

      {/* Multi-column Premium Footer */}
      <Footer />
    </>
  );
}

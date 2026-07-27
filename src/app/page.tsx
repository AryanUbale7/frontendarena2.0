import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Logo Cloud Trusted By */}
        <TrustedBy />

        {/* Services Grid */}
        <Services />

        {/* Project Showcase Portfolio */}
        <Portfolio />

        {/* Timeline Process */}
        <Process />

        {/* Customer Reviews Testimonials */}
        <Testimonials />

        {/* Accordion FAQ */}
        <FAQ />

        {/* Dynamic CTA Form */}
        <CTA />
      </main>

      {/* Multi-column Premium Footer */}
      <Footer />
    </>
  );
}

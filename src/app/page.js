"use client";

import Navbar from "../components/Navbar";
import ProblemSection from '@/components/ProblemSection';
import SolutionsSection from '@/components/SolutionsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import IndustriesSection from '@/components/IndustriesSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import { ArrowRight, Zap, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07080a] text-slate-100 font-sans selection:bg-[#10b981]/30 selection:text-white">
      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 51, 75, 0.7), 0 0 20px rgba(255, 51, 75, 0.35);
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 4px rgba(255, 51, 75, 0.3), 0 0 8px rgba(255, 51, 75, 0.15);
            opacity: 0.7;
          }
        }
        .pulse-dot {
          animation: pulse-glow 2.4s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
      `}</style>

      {/* Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/backgroundimage.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
      </div>

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center max-w-6xl mx-auto">
        {/* Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#10b981]/[0.08] blur-[140px] rounded-full"
        />

        {/* Status Eyebrow Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#180d11] border border-[#066546]/50 backdrop-blur-md shadow-inner">
          <Zap size={13} className="text-[#10b981]" />
          <span className="text-[11px] font-mono font-medium tracking-widest text-[#10b981] uppercase">
            Konpilot AI // Conversational Engine v4.8
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] pulse-dot ml-1" />
        </div>

        {/* Main Headline */}
        <h1 className="max-w-5xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08]">
          Turn Every Conversation <br />
          <span className="text-[#10b981]">Into a Customer.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#7e8695]">
          Automate WhatsApp and Instagram conversations, capture high-intent leads, recover lost sales,
          and deliver instant customer support — all from one intelligent platform.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#10b981] px-7 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,51,75,0.4)] hover:bg-[#10b981]/90 hover:shadow-[0_0_28px_rgba(255,51,75,0.65)] transition-all"
          >
            Start Free Trial
            <ArrowRight size={14} />
          </a>

          <a
            href="#product-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f1115] hover:bg-zinc-900 border border-[#1f232b] hover:border-[#2d3340] px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 transition-colors"
          >
            <Play size={13} className="text-[#10b981]" />
            Watch Engine Demo
          </a>
        </div>

        {/* Telemetry Feature Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-zinc-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-[#10b981]" />
            WhatsApp &amp; Instagram Cloud API
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-[#10b981]" />
            Latency &lt; 350ms
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-[#10b981]" />
            Zero Credit Card Required
          </span>
        </div>

        {/* Bottom Protocol Telemetry Caption */}
        <div className="absolute bottom-6 text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
          CONVERSE · QUALIFY · CONVERT
        </div>
      </section>

      {/* ================= PAGE SECTIONS ================= */}
      {/* <IntegrationsTrust /> */}
      <ProblemSection />
      <SolutionsSection />
      {/* <FeaturesSection /> */}
      <HowItWorksSection />
      {/* <ProductDemoSection /> */}
      <IndustriesSection />
      {/* <TestimonialsSection /> */}
      {/* <FAQSection /> */}
      <PricingSection />
      <Footer />
    </main>
  );
}
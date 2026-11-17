"use client";

import React from "react";
import {
    ArrowUpRight,
    GraduationCap,
    HeartPulse,
    Home,
    Scissors,
    ShoppingBag,
    Sofa,
    Zap,
} from "lucide-react";

const industries = [
    {
        number: "001",
        title: "D2C & E-Commerce",
        description:
            "Automate product inquiries, dynamic catalog recommendations, live order tracking, COD verification, and abandoned cart recovery.",
        icon: ShoppingBag,
        image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
        category: "ONLINE RETAIL",
        telemetry: "Cart recovery & in-thread checkout",
    },
    {
        number: "002",
        title: "Interior & Architecture",
        description:
            "Capture high-intent project inquiries, qualify budget criteria, ingest moodboard briefs, and book design consultations.",
        icon: Sofa,
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        category: "DESIGN & INTERIORS",
        telemetry: "Lead scoring & budget triage",
    },
    {
        number: "003",
        title: "Real Estate & Housing",
        description:
            "Qualify prospective property buyers, answer unit spec questions, dispatch site location pins, and coordinate site visits.",
        icon: Home,
        image:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
        category: "PROPERTY & REAL ESTATE",
        telemetry: "Automated site tour scheduling",
    },
    {
        number: "004",
        title: "Salons & Wellness",
        description:
            "Automate 24/7 appointment scheduling, service menu inquiries, calendar sync, and automated SMS/WhatsApp reminders.",
        icon: Scissors,
        image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
        category: "BEAUTY & WELLNESS",
        telemetry: "Cal.com & Google Calendar sync",
    },
    {
        number: "005",
        title: "Education & Academies",
        description:
            "Handle course curriculum inquiries, collect student enrollment metadata, and trigger automated admissions follow-up sequences.",
        icon: GraduationCap,
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
        category: "EDUCATION & EDTECH",
        telemetry: "Lead enrichment & application triage",
    },
    {
        number: "006",
        title: "Healthcare & Clinics",
        description:
            "Manage patient appointment requests, pre-visit instructions, and general service FAQs while adhering to strict privacy controls.",
        icon: HeartPulse,
        image:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
        category: "HEALTHCARE",
        telemetry: "HIPAA-compliant data routing",
    },
];

function IndustryCard({ industry }) {
    const Icon = industry.icon;

    return (
        <article className="group relative isolate min-h-[380px] overflow-hidden rounded-xl border border-[#1f232b] bg-[#0f1115] hover:border-[#2d3340] transition-colors duration-300 flex flex-col justify-between p-6">
            {/* Background Photograph */}
            <img
                src={industry.image}
                alt={`${industry.title} industry context`}
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-35"
            />

            {/* Dark Obsidian Gradient Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07080a] via-[#07080a]/80 to-[#07080a]/40" />

            {/* Top Metadata Header */}
            <div className="flex items-center justify-between z-10">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#180d11] border border-[#066546]/40 text-[10px] font-mono font-medium tracking-widest text-[#10b981] uppercase backdrop-blur-md">
                    {industry.category}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">{industry.number}</span>
            </div>

            {/* Card Content Body */}
            <div className="z-10 mt-12">
                {/* Micro Icon Frame */}
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-[#066546]/60 transition-colors">
                    <Icon size={18} className="text-zinc-300 group-hover:text-[#10b981] transition-colors" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold tracking-tight text-white mb-2">{industry.title}</h3>
                <p className="text-[#7e8695] text-xs sm:text-sm leading-relaxed mb-6">
                    {industry.description}
                </p>
            </div>

            {/* Footer Telemetry & Action Link */}
            <div className="z-10 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 truncate pr-2">
                    <span className="w-1 h-1 rounded-full bg-[#10b981] shrink-0" />
                    <span className="truncate">{industry.telemetry}</span>
                </span>

                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-[#10b981] group-hover:border-[#066546]/60 group-hover:bg-[#180d11] transition-all shrink-0">
                    <ArrowUpRight size={14} />
                </div>
            </div>
        </article>
    );
}

export default function IndustriesSection() {
    return (
        <section
            id="industries"
            className="relative overflow-hidden bg-[#07080a] text-slate-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#10b981]/30 selection:text-white"
        >
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

            {/* Ambient Background Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 bg-gradient-to-b from-[#10b981]/[0.07] via-[#066546]/[0.03] to-transparent blur-[140px]"
            />

            <div className="relative mx-auto max-w-6xl">
                {/* Section Header */}
                <header className="flex flex-col items-start gap-4 mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#180d11] border border-[#066546]/40 backdrop-blur-md shadow-inner">
                        <Zap size={13} className="text-[#10b981]" />
                        <span className="text-[11px] font-mono font-medium tracking-widest text-[#10b981] uppercase">
                            Target Sectors // Industry Deployments
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
                        Built for businesses that <br className="hidden sm:inline" />
                        <span className="text-[#10b981]">grow through conversations.</span>
                    </h2>

                    <p className="text-[#7e8695] text-base sm:text-lg max-w-2xl leading-relaxed">
                        Whether you are selling direct-to-consumer, qualifying enterprise leads, or scheduling
                        high-value appointments, Konpilot AI adapts to your vertical workflow.
                    </p>
                </header>

                {/* Industry Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {industries.map((industry) => (
                        <IndustryCard key={industry.number} industry={industry} />
                    ))}
                </div>

                {/* Bottom Callout Panel */}
                <div className="mt-12 bg-[#0f1115] border border-[#1f232b] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-[#10b981]/10 blur-3xl rounded-full"
                    />

                    <div className="relative z-10">
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] pulse-dot" />
                            Need a custom industry integration or workflow adapter?
                        </div>
                        <p className="text-xs text-[#7e8695] mt-1">
                            Connect our zero-code API hooks to your custom CRM, Shopify store, or ERP.
                        </p>
                    </div>

                    <a
                        href="/signup"
                        className="relative z-10 inline-flex items-center gap-2 rounded-lg bg-[#10b981] px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,51,75,0.4)] hover:bg-[#10b981]/90 hover:shadow-[0_0_28px_rgba(255,51,75,0.65)] transition-all shrink-0"
                    >
                        Explore Custom Workflows
                        <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
}
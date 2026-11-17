"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Sparkles,
  Zap,
  Building2,
  Crown,
} from "lucide-react";

const plans = [
  {
    id: "001",
    name: "Starter",
    description: "For small businesses starting with autonomous AI messaging.",
    monthlyPrice: 999,
    yearlyPrice: 11988,
    members: "2 team members",
    icon: Zap,
    features: [
      "1 messaging channel (WhatsApp or IG)",
      "1,000 AI conversation credits",
      "Basic AI knowledge base",
      "Lead capture & qualification",
      "Basic automated routing",
      "1 team member seats",
    ],
    cta: "Get Started",
    href: "/signup?plan=starter",
    highlighted: false,
  },
  {
    id: "002",
    name: "Growth",
    description: "For growing brands scaling customer sales and support.",
    monthlyPrice: 2499,
    yearlyPrice: 29988,
    members: "5 team members",
    icon: Sparkles,
    features: [
      "WhatsApp Cloud API & Instagram Direct",
      "5,000 AI conversation credits",
      "Advanced RAG vector knowledge base",
      "Automated lead qualification & triage",
      "Abandoned cart recovery sequences",
      "Order tracking & logistics sync",
      "CRM & Webhook integrations",
      "1 team member seats",
    ],
    cta: "Start Growth Tier",
    href: "/signup?plan=growth",
    highlighted: true,
  },
  {
    id: "003",
    name: "Business",
    description: "For established operations requiring multi-agent orchestration.",
    monthlyPrice: 5999,
    yearlyPrice: 71988,
    members: "15 team members",
    icon: Building2,
    features: [
      "Everything in Growth tier",
      "15,000 AI conversation credits",
      "Multiple autonomous AI agents",
      "Zero-code workflow canvas builder",
      "Priority lead & SLA routing",
      "Custom REST API & Webhooks",
      "Advanced analytics & telemetry",
      "2 team member seats",
    ],
    cta: "Choose Business Tier",
    href: "/signup?plan=business",
    highlighted: false,
  },
  {
    id: "004",
    name: "Enterprise",
    description: "For high-volume brands needing dedicated throughput and custom SLAs.",
    monthlyPrice: null,
    yearlyPrice: null,
    icon: Crown,
    features: [
      "Custom conversation credit limits",
      "Multi-account & multi-brand routing",
      "Dedicated solutions architect",
      "SOC-2 Type II audit reports",
      "Custom ERP & CRM integrations",
      "Guaranteed 99.99% uptime SLA",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN").format(price);
}

function PricingCard({ plan, yearly }) {
  const Icon = plan.icon;
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <article
      className={`group relative flex h-full flex-col justify-between rounded-xl border p-6 transition-all duration-300 backdrop-blur ${
        plan.highlighted
          ? "border-[#10b981]/60 bg-[#0f1115] shadow-[0_0_35px_rgba(255,51,75,0.15)] relative overflow-hidden"
          : "border-[#1f232b] bg-[#0f1115]/90 hover:border-[#2d3340]"
      }`}
    >
      {/* Background ambient glow for highlighted card */}
      {plan.highlighted && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-[#10b981]/10 rounded-full blur-3xl"
        />
      )}

      <div>
        {/* Card Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
              TIER {plan.id}
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-500">
            {plan.name === "Enterprise" ? "CUSTOM" : "RECURRING"}
          </span>
        </div>

        {/* Micro Icon Accent & Title */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:border-[#066546]/60 transition-colors shrink-0">
            <Icon size={18} className="text-zinc-300 group-hover:text-[#10b981] transition-colors" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white">{plan.name}</h3>
          </div>
        </div>

        <p className="text-[#7e8695] text-xs leading-relaxed min-h-[36px] mb-6">
          {plan.description}
        </p>

        {/* Price Display Block */}
        <div className="py-4 border-y border-white/[0.04] mb-6">
          {plan.monthlyPrice !== null ? (
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-mono text-zinc-500">₹</span>
                <span className="text-3xl font-bold font-mono tracking-tight text-white">
                  {formatPrice(price)}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  /{yearly ? "yr" : "mo"}
                </span>
              </div>
              <p className="mt-1 text-[10px] font-mono text-zinc-500">
                {yearly
                  ? `₹${formatPrice(plan.monthlyPrice)}/mo equivalent · billed annually`
                  : "Billed monthly · cancel anytime"}
              </p>
            </div>
          ) : (
            <div>
              <p className="text-2xl font-bold font-mono tracking-tight text-white">Custom SLA</p>
              <p className="mt-1 text-[10px] font-mono text-zinc-500">
                Tailored credits & dedicated throughput
              </p>
            </div>
          )}
        </div>

        {/* Feature List Header */}
        <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-4">
          Included Capabilities
        </p>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded bg-[#180d11] border border-[#066546]/40 flex items-center justify-center text-[#10b981] shrink-0 mt-0.5">
                <Check size={10} strokeWidth={2.5} />
              </div>
              <span className="text-xs text-zinc-300 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <a
        href={plan.href}
        className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
          plan.highlighted
            ? "bg-[#10b981] text-white shadow-[0_0_20px_rgba(255,51,75,0.4)] hover:bg-[#10b981]/90 hover:shadow-[0_0_28px_rgba(255,51,75,0.65)]"
            : "bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200"
        }`}
      >
        {plan.cta}
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  );
}

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      id="pricing"
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
        <header className="flex flex-col items-start gap-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#180d11] border border-[#066546]/40 backdrop-blur-md shadow-inner">
            <Zap size={13} className="text-[#10b981]" />
            <span className="text-[11px] font-mono font-medium tracking-widest text-[#10b981] uppercase">
              Transparent Pricing // Tier Selection
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
            Simple pricing. <span className="text-[#10b981]">Powerful automation.</span>
          </h2>

          <p className="text-[#7e8695] text-base sm:text-lg max-w-2xl leading-relaxed">
            Choose the right tier for your enterprise messaging concurrency. Scale credits and agent capabilities as your volume grows.
          </p>
        </header>

        {/* Payment Protocol / Billing Toggle */}
        <div className="flex flex-col items-start gap-2 mb-10">
          <div className="inline-flex items-center gap-1 rounded-lg bg-[#0f1115] border border-[#1f232b] p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              aria-pressed={!yearly}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all ${
                !yearly
                  ? "bg-[#10b981] text-white font-semibold shadow-[0_0_12px_rgba(255,51,75,0.35)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>

            <button
              type="button"
              onClick={() => setYearly(true)}
              aria-pressed={yearly}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md transition-all ${
                yearly
                  ? "bg-[#10b981] text-white font-semibold shadow-[0_0_12px_rgba(255,51,75,0.35)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Yearly Billing
            </button>
          </div>

          <p className="text-[10px] font-mono text-zinc-500">
            {yearly
              ? "Yearly protocol · 12 months billing cycle"
              : "Monthly protocol · Standard flexible recurring cycle"}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} yearly={yearly} />
          ))}
        </div>

        {/* Bottom Telemetry Footer */}
        <div className="mt-12 bg-[#0f1115] border border-[#1f232b] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] pulse-dot" />
            <span>Need custom volume or enterprise dedicated hosting?</span>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-1 text-[#10b981] hover:underline font-semibold"
          >
            Speak with our engineering team
            <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
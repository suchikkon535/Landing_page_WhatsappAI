"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  FileText,
  MessageSquare,
  Plus,
  Settings2,
  Sparkles,
  Upload,
  Workflow,
  Zap,
  Users,
} from "lucide-react";

// Inline Channel Icons styled in crisp SVG
const InstagramIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const steps = [
  {
    number: "001",
    label: "PHASE 01 // SETUP",
    title: "Connect Your Channels",
    description:
      "Connect your WhatsApp Business API and Instagram professional accounts in under 3 minutes via official Graph API integrations.",
    icon: MessageSquare,
    features: ["WhatsApp Business API", "Instagram Direct DMs"],
    visual: "channels",
  },
  {
    number: "002",
    label: "PHASE 02 // VECTOR RAG",
    title: "Train Your AI Engine",
    description:
      "Empower your agent with business domain context. Upload technical docs, FAQs, product catalogs, and custom policies into vector memory.",
    icon: Bot,
    features: ["Vector Document Ingestion", "Zero-Hallucination Guard"],
    visual: "knowledge",
  },
  {
    number: "003",
    label: "PHASE 03 // ORCHESTRATION",
    title: "Build Your Automations",
    description:
      "Design self-executing conversational lifecycles with multi-layered triggers, intent qualification rules, and direct CRM webhooks.",
    icon: Workflow,
    features: ["Intent Trigger Pipeline", "Automated Qualification"],
    visual: "automation",
  },
  {
    number: "004",
    label: "PHASE 04 // DEPLOYMENT",
    title: "Launch & Autoscale",
    description:
      "Unleash 24/7 autonomous resolution while your human agents monitor lead scores, telemetry, and high-value deal escalations.",
    icon: Zap,
    features: ["Autonomous Resolution", "Instant Human Handoff"],
    visual: "launch",
  },
];

function ChannelsPreview() {
  return (
    <div className="space-y-3 font-mono">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
          Active Ingest Pipeline
        </span>
        <span className="text-[10px] text-[#10b981] flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
          Ready
        </span>
      </div>

      <div className="rounded-lg border border-[#1f232b] bg-[#0f1115] p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#180d11] border border-[#066546]/40 text-[#10b981]">
            {WhatsAppIcon}
          </div>
          <div>
            <p className="text-xs font-semibold text-white">WhatsApp Business API</p>
            <p className="text-[10px] text-zinc-500">Meta Graph API v19.0</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#180d11] border border-[#066546]/40 text-[10px] text-[#10b981] font-medium">
          Synced
        </span>
      </div>

      <div className="rounded-lg border border-[#1f232b] bg-[#0f1115] p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#180d11] border border-[#066546]/40 text-[#10b981]">
            {InstagramIcon}
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Instagram Direct API</p>
            <p className="text-[10px] text-zinc-500">Webhook Listener Active</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#180d11] border border-[#066546]/40 text-[10px] text-[#10b981] font-medium">
          Synced
        </span>
      </div>

      <div className="pt-1 flex items-center gap-2 text-[10px] text-zinc-500">
        <CheckCircle2 size={12} className="text-[#10b981]" />
        <span>Dual pipe active • Latency &lt; 18ms</span>
      </div>
    </div>
  );
}

function KnowledgePreview() {
  const documents = [
    { name: "Product_Catalog_v4.pdf", size: "2.4 MB" },
    { name: "Support_FAQ_Knowledge.pdf", size: "840 KB" },
    { name: "Returns_Policy_2025.docx", size: "1.2 MB" },
  ];

  return (
    <div className="font-mono">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
          Vector Knowledge Store
        </span>
        <span className="flex items-center gap-1 text-[10px] text-[#10b981]">
          <Sparkles size={11} /> 1,420 Chunks
        </span>
      </div>

      <div className="mt-3 rounded-lg border border-dashed border-[#066546]/50 bg-[#180d11]/40 p-4 text-center">
        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-[#180d11] border border-[#066546]/60 text-[#10b981]">
          <Upload size={16} />
        </div>
        <p className="mt-2 text-xs font-semibold text-white">Ingest Business Vector Data</p>
        <p className="mt-0.5 text-[10px] text-zinc-500">PDF, DOCX, TXT, or OpenAPI Spec</p>
      </div>

      <div className="mt-3 space-y-2">
        {documents.map((doc) => (
          <div
            key={doc.name}
            className="flex items-center justify-between rounded-lg border border-[#1f232b] bg-[#0f1115] p-2"
          >
            <div className="flex items-center gap-2 min-w-0">
              <FileText size={14} className="text-[#10b981] shrink-0" />
              <div className="min-w-0">
                <p className="truncate text-[10px] text-zinc-200">{doc.name}</p>
                <p className="text-[9px] text-zinc-500">{doc.size}</p>
              </div>
            </div>
            <Check size={12} className="text-[#10b981] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationPreview() {
  const nodes = [
    {
      title: "Trigger: Inbound Inquiry",
      type: "TRIGGER [01]",
      icon: MessageSquare,
    },
    {
      title: "Condition: Qualification > 85%",
      type: "EVALUATE [02]",
      icon: Settings2,
    },
    {
      title: "Action: Synthesize Response + CRM",
      type: "EXECUTE [03]",
      icon: Bot,
    },
  ];

  return (
    <div className="font-mono">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
          Node Orchestrator
        </span>
        <span className="px-2 py-0.5 rounded bg-[#180d11] border border-[#066546]/40 text-[10px] text-[#10b981]">
          Zero-Code
        </span>
      </div>

      <div className="mt-3 space-y-2">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <React.Fragment key={node.title}>
              <div className="flex items-center justify-between rounded-lg border border-[#1f232b] bg-[#0f1115] p-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-zinc-900 border border-zinc-800 text-[#10b981]">
                    <Icon size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white">{node.title}</p>
                    <p className="text-[9px] text-zinc-500">{node.type}</p>
                  </div>
                </div>
                <Check size={12} className="text-[#10b981]" />
              </div>
              {index !== nodes.length - 1 && (
                <div className="ml-6 h-3 border-l border-dashed border-[#066546]/60" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-dashed border-zinc-800 p-2 text-[10px] text-zinc-500">
        <Plus size={12} className="text-[#10b981]" />
        <span>Add Webhook / CRM Action</span>
      </div>
    </div>
  );
}

function LaunchPreview() {
  return (
    <div className="font-mono">
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
          Live Telemetry Overview
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-[#10b981]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-ping" />
          Live
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          { label: "Concurrent Threads", value: "128", icon: MessageSquare },
          { label: "Qualified Leads", value: "42", icon: Users },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-lg border border-[#1f232b] bg-[#0f1115] p-2.5"
            >
              <Icon size={14} className="text-[#10b981]" />
              <p className="mt-2 text-lg font-bold text-white">{item.value}</p>
              <p className="text-[9px] text-zinc-500">{item.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-2.5 rounded-lg border border-[#1f232b] bg-[#0f1115] p-2.5 space-y-2">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-zinc-400">Agent Alpha (Autonomous)</span>
          <span className="text-[#10b981]">89.2% Res</span>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-zinc-400">Human Escalation Standby</span>
          <span className="text-zinc-500">0 Queue</span>
        </div>
      </div>
    </div>
  );
}

const previews = {
  channels: ChannelsPreview,
  knowledge: KnowledgePreview,
  automation: AutomationPreview,
  launch: LaunchPreview,
};

function StepCard({ step, index, visible }) {
  const Icon = step.icon;
  const Preview = previews[step.visual];

  return (
    <div
      className={`relative flex flex-col justify-between rounded-xl border border-[#1f232b] bg-[#0f1115]/90 p-6 backdrop-blur hover:border-[#2d3340] transition-all duration-700 ease-out group ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 130}ms` }}
    >
      <div>
        {/* Step Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
          <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
            {step.label}
          </span>
          <span className="text-[11px] font-mono text-zinc-500">{step.number}</span>
        </div>

        {/* Micro Icon Accent */}
        <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-[#066546]/60 transition-colors">
          <Icon size={18} className="text-zinc-300 group-hover:text-[#10b981] transition-colors" />
        </div>

        {/* Title & Copy */}
        <h3 className="text-lg font-bold text-white tracking-tight mb-2">{step.title}</h3>
        <p className="text-[#7e8695] text-sm leading-relaxed mb-5">{step.description}</p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {step.features.map((feature) => (
            <span
              key={feature}
              className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Embedded Terminal Preview */}
      <div className="relative overflow-hidden rounded-lg border border-white/[0.04] bg-black/40 p-3.5">
        <Preview />
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07080a] text-slate-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#10b981]/30 selection:text-white"
    >
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 bg-gradient-to-b from-[#10b981]/[0.07] via-[#066546]/[0.03] to-transparent blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header Container */}
        <header className="flex flex-col items-start gap-4 mb-12 sm:mb-16">
          {/* Eyebrow Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#180d11] border border-[#066546]/40 backdrop-blur-md shadow-inner">
            <Zap size={13} className="text-[#10b981]" />
            <span className="text-[11px] font-mono font-medium tracking-widest text-[#10b981] uppercase">
              Simple Setup // Intelligent Results
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
            Get your AI conversational assistant{" "}
            <span className="text-[#10b981]">working in minutes.</span>
          </h2>

          <p className="text-[#7e8695] text-base sm:text-lg max-w-2xl leading-relaxed">
            No bloated configuration. Connect your messaging endpoints, train your vector knowledge, and automate customer engagement.
          </p>
        </header>

        {/* Horizontal Connecting Timeline Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-[#1f232b] lg:block">
            <div
              className={`h-full bg-gradient-to-r from-[#10b981] via-[#066546] to-[#10b981] transition-transform duration-[1800ms] ease-out ${
                visible ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>

          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                visible={visible}
              />
            ))}
          </div>
        </div>

        {/* Bottom Conversion CTA Card */}
        <div
          className={`mt-12 bg-[#0f1115] border border-[#1f232b] rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-700 delay-300 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 bg-[#10b981]/10 blur-3xl rounded-full"
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Sparkles size={16} className="text-[#10b981]" />
                Ready to automate your customer conversations?
              </div>
              <p className="mt-1 text-xs text-[#7e8695]">
                Deploy your high-throughput AI messaging infrastructure today.
              </p>
            </div>

            <a
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-[#10b981] px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,51,75,0.4)] hover:bg-[#10b981]/90 hover:shadow-[0_0_28px_rgba(255,51,75,0.65)] transition-all"
            >
              Get Started Now
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
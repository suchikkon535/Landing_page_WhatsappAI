import React from 'react';

export default function CapabilitiesSection() {
    return (
        <div className="relative overflow-hidden bg-[#07080a] text-slate-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#10b981]/30 selection:text-white">
            {/* Custom Styles for Keyframe Animations */}
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

            {/* ================= MAIN CONTENT ================= */}
            <main className="w-full pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Subtle Ambient Glow Backdrop */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#10b981]/[0.07] via-[#066546]/[0.03] to-transparent blur-[130px]"
                />

                <section className="max-w-6xl mx-auto relative z-10">
                    {/* ================= SECTION HEADER ================= */}
                    <header className="flex flex-col gap-4 mb-10 sm:mb-14">
                        {/* Eyebrow Pill Badge */}
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#180d11] border border-[#066546]/40 backdrop-blur-md shadow-inner">
                                <svg
                                    aria-hidden="true"
                                    className="shrink-0"
                                    fill="none"
                                    height="13"
                                    stroke="#10b981"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.2"
                                    viewBox="0 0 24 24"
                                    width="13"
                                >
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                                <span className="text-[11px] font-mono font-medium tracking-widest text-[#10b981] uppercase">
                                    Core Engine // v4.8 Capabilities
                                </span>
                            </div>
                            <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-500 tracking-widest uppercase">
                                LATENCY &lt; 350MS
                            </span>
                        </div>

                        {/* Main Section Heading & Meta Split */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between">
                            <div className="lg:col-span-8">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
                                    Everything you need to manage customer conversations.
                                </h2>
                                <p className="text-[#7e8695] text-base sm:text-lg max-w-2xl leading-relaxed mt-4">
                                    Powerful AI, intelligent automation, and customer management tools working
                                    together in one unified, enterprise-grade architecture.
                                </p>
                            </div>

                            {/* System Status Gauge Pill */}
                            <div className="lg:col-span-4 flex lg:justify-end">
                                <div className="bg-[#0f1115]/90 border border-[#1f232b] px-4 py-3 rounded-xl flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                                            Engine Throughput
                                        </span>
                                        <span className="text-xs font-mono text-white font-semibold mt-0.5">
                                            14,280 msgs / sec
                                        </span>
                                    </div>
                                    <div className="w-px h-8 bg-white/[0.06]" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                                            Sync State
                                        </span>
                                        <span className="text-xs font-mono text-[#10b981] flex items-center gap-1.5 font-semibold mt-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                                            Live Cloud API
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* ================= BENTO GRID CANVAS (12 COLUMNS) ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-12">
                        {/* ================= CARD 001: AI-Powered Conversations (8 Cols) ================= */}
                        <article className="lg:col-span-8 bg-[#0f1115]/90 border border-[#1f232b] hover:border-[#2d3340] transition-colors duration-200 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group">
                            <div
                                aria-hidden="true"
                                className="absolute -top-12 -right-12 w-56 h-56 bg-[#10b981]/[0.06] rounded-full blur-3xl pointer-events-none"
                            />

                            <div>
                                {/* Card Header */}
                                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                                            Autonomous NLU Stream
                                        </span>
                                        <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#180d11] border border-[#066546]/40 text-[10px] font-mono text-[#10b981]">
                                            GPT-4o + RAG
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-mono text-zinc-500">001</span>
                                </div>

                                {/* Title & Copy */}
                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 flex items-center justify-center text-zinc-300 group-hover:border-[#066546]/60 transition-colors">
                                        <svg
                                            className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
                                            fill="none"
                                            height="18"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.8"
                                            viewBox="0 0 24 24"
                                            width="18"
                                        >
                                            <path d="M12 8V4H8" />
                                            <rect height="12" rx="2" width="16" x="4" y="8" />
                                            <path d="M2 14h2" />
                                            <path d="M20 14h2" />
                                            <path d="M15 13v2" />
                                            <path d="M9 13v2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                                            AI-Powered Conversations
                                        </h3>
                                        <p className="text-[#7e8695] text-sm leading-relaxed max-w-xl">
                                            Intelligent AI agents that interpret nuanced customer queries and stream
                                            accurate answers synthesized straight from your live business knowledge.
                                        </p>
                                    </div>
                                </div>

                                {/* Micro-UI: Interactive Multi-Turn Chat Preview */}
                                <div className="bg-black/40 border border-white/[0.04] rounded-lg p-4 space-y-3.5">
                                    <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.04]">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#10b981] pulse-dot" />
                                            <span className="text-[11px] font-mono text-zinc-300">
                                                WhatsApp Cloud API • Session #WA-8841
                                            </span>
                                        </div>
                                        <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                                            Verified Session
                                        </span>
                                    </div>

                                    {/* Inbound Customer Message */}
                                    <div className="flex items-start gap-2.5 max-w-[88%]">
                                        <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 flex items-center justify-center text-[10px] font-mono text-zinc-400">
                                            CU
                                        </div>
                                        <div className="bg-[#0f1115] border border-[#1f232b] rounded-lg rounded-tl-none p-3">
                                            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                                                Hi! Does the <span className="text-white font-semibold">Konpilot Obsidian Pro</span>{' '}
                                                keyboard support hot-swappable tactile switches, and do you ship to
                                                Vancouver?
                                            </p>
                                            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/[0.04] text-[10px] font-mono text-zinc-500">
                                                <span>Customer • Instagram DM</span>
                                                <span>14:02:11</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Autonomous AI Response Stream */}
                                    <div className="flex items-start gap-2.5 ml-auto max-w-[92%] flex-row-reverse">
                                        <div className="w-7 h-7 rounded-lg bg-[#180d11] border border-[#066546]/60 shrink-0 flex items-center justify-center text-[10px] font-mono text-[#10b981] font-bold">
                                            AI
                                        </div>
                                        <div className="bg-zinc-900/90 border border-[#2d3340] rounded-lg rounded-tr-none p-3">
                                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#180d11] border border-[#066546]/40 text-[10px] font-mono text-[#10b981]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                                                    Synthesizing response
                                                </span>
                                                <span className="text-[10px] font-mono text-zinc-500">
                                                    Knowledge Base v2.4
                                                </span>
                                            </div>
                                            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                                                Yes! The <span className="text-[#10b981] font-medium">Obsidian Pro</span>{' '}
                                                features 5-pin hot-swappable Kailh sockets compatible with both 3-pin and
                                                5-pin mechanical switches. We offer expedited shipping to Vancouver (2–3
                                                business days via DHL Express).
                                            </p>
                                            <div className="flex flex-wrap items-center justify-between gap-2 mt-2 pt-1.5 border-t border-white/[0.05] text-[10px] font-mono text-zinc-400">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[#10b981]">320ms Latency</span>
                                                    <span>•</span>
                                                    <span>Confidence: 99.4%</span>
                                                </div>
                                                <span className="text-zinc-500">14:02:12 • Konpilot Agent</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-[#10b981]" />
                                    Real-time RAG vector lookup active
                                </span>
                                <span className="text-[#10b981]">ZERO HALLUCINATION GUARD</span>
                            </div>
                        </article>

                        {/* ================= CARD 002: WhatsApp & Instagram Integration (4 Cols) ================= */}
                        <article className="lg:col-span-4 bg-[#0f1115]/90 border border-[#1f232b] hover:border-[#2d3340] transition-colors duration-200 rounded-xl p-6 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
                                    <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                                        Dual Channel Sync
                                    </span>
                                    <span className="text-[11px] font-mono text-zinc-500">002</span>
                                </div>

                                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-[#066546]/60 transition-colors">
                                    <svg
                                        className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
                                        fill="none"
                                        height="18"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.8"
                                        viewBox="0 0 24 24"
                                        width="18"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                    </svg>
                                </div>

                                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                                    WhatsApp &amp; Instagram Integration
                                </h3>
                                <p className="text-[#7e8695] text-sm leading-relaxed mb-5">
                                    Synchronize direct messages, comment inquiries, and story mentions in a zero-loss
                                    redundant pipeline.
                                </p>

                                {/* Channel Pipeline Visualizer */}
                                <div className="bg-black/40 border border-white/[0.04] rounded-lg p-3.5 space-y-2.5">
                                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0f1115] border border-[#1f232b]">
                                        <div className="flex items-center gap-2.5">
                                            <svg
                                                className="text-[#10b981] shrink-0"
                                                fill="none"
                                                height="16"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.8"
                                                viewBox="0 0 24 24"
                                                width="16"
                                            >
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            </svg>
                                            <div>
                                                <div className="text-xs font-semibold text-white">
                                                    WhatsApp Business Cloud
                                                </div>
                                                <div className="text-[10px] font-mono text-zinc-500">
                                                    Meta Graph API v19.0 • Synced
                                                </div>
                                            </div>
                                        </div>
                                        <span className="w-2 h-2 rounded-full bg-[#10b981] pulse-dot" />
                                    </div>

                                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0f1115] border border-[#1f232b]">
                                        <div className="flex items-center gap-2.5">
                                            <svg
                                                className="text-[#10b981] shrink-0"
                                                fill="none"
                                                height="16"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.8"
                                                viewBox="0 0 24 24"
                                                width="16"
                                            >
                                                <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                            </svg>
                                            <div>
                                                <div className="text-xs font-semibold text-white">
                                                    Instagram Direct + Stories
                                                </div>
                                                <div className="text-[10px] font-mono text-zinc-500">
                                                    Webhook Listener Active
                                                </div>
                                            </div>
                                        </div>
                                        <span className="w-2 h-2 rounded-full bg-[#10b981] pulse-dot" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                                <span>Dual Pipe Queue: 0 msgs</span>
                                <span className="text-[#10b981]">18ms Sync</span>
                            </div>
                        </article>

                        {/* ================= CARD 003: Smart Lead Management (4 Cols) ================= */}
                        <article className="lg:col-span-4 bg-[#0f1115]/90 border border-[#1f232b] hover:border-[#2d3340] transition-colors duration-200 rounded-xl p-6 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
                                    <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                                        Pipeline Triage
                                    </span>
                                    <span className="text-[11px] font-mono text-zinc-500">003</span>
                                </div>

                                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-[#066546]/60 transition-colors">
                                    <svg
                                        className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
                                        fill="none"
                                        height="18"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.8"
                                        viewBox="0 0 24 24"
                                        width="18"
                                    >
                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                                    </svg>
                                </div>

                                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                                    Smart Lead Management
                                </h3>
                                <p className="text-[#7e8695] text-sm leading-relaxed mb-5">
                                    Extract intent, enrich user metadata, and dispatch qualified prospects directly to
                                    your CRM.
                                </p>

                                {/* Micro-UI: Lead Card Badge */}
                                <div className="bg-black/40 border border-white/[0.04] rounded-lg p-3.5 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-mono text-white">
                                                MK
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-white">Markus Keller</div>
                                                <div className="text-[10px] font-mono text-zinc-500">
                                                    markus@vanguard.de
                                                </div>
                                            </div>
                                        </div>
                                        <span className="px-2 py-0.5 rounded bg-[#180d11] border border-[#066546]/40 text-[#10b981] text-[10px] font-mono font-semibold">
                                            Score: 94/100
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                                            B2B Enterprise
                                        </span>
                                        <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                                            500+ Seats
                                        </span>
                                        <span className="px-2 py-0.5 rounded bg-[#180d11] border border-[#066546]/40 text-[10px] font-mono text-[#10b981]">
                                            HubSpot Synced
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-[#10b981]" />
                                <span>Automated qualification routing</span>
                            </div>
                        </article>

                        {/* ================= CARD 004: AI Product Recommendations (4 Cols) ================= */}
                        <article className="lg:col-span-4 bg-[#0f1115]/90 border border-[#1f232b] hover:border-[#2d3340] transition-colors duration-200 rounded-xl p-6 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
                                    <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                                        Dynamic Catalog
                                    </span>
                                    <span className="text-[11px] font-mono text-zinc-500">004</span>
                                </div>

                                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-[#066546]/60 transition-colors">
                                    <svg
                                        className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
                                        fill="none"
                                        height="18"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.8"
                                        viewBox="0 0 24 24"
                                        width="18"
                                    >
                                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                                        <path d="M3 6h18" />
                                        <path d="M16 10a4 4 0 0 1-8 0" />
                                    </svg>
                                </div>

                                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                                    AI Product Recommendations
                                </h3>
                                <p className="text-[#7e8695] text-sm leading-relaxed mb-5">
                                    Context-aware inventory suggestions served in interactive shoppable chat
                                    carousels.
                                </p>

                                {/* Micro-UI: Interactive E-commerce Product Pill */}
                                <div className="bg-black/40 border border-white/[0.04] rounded-lg p-3 flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0 flex items-center justify-center">
                                        <img
                                            alt="Obsidian PBT Keycap Set"
                                            className="w-full h-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxXDJnGkN2CM2MuznsmY7RVf5NaZUO4BD6C7V1-Wu0057pLpIB-VznbEocSH3zqvGRNLILC_SocpPCOyW3toV3GAZjuX9QSF26deEE5ekM_L_l7lNcdDIfkS01JNYZO1wqFyWDIMHeqEbRuq0YS6rT2OcDCmkrhYnB0Qb4e5B8S9luDf_6Ssc8QZoLQHA-Z6NuEWuZOPeo_TJAeCVC5_tone9n6Grl6ydfIO946rs"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs font-semibold text-white truncate">
                                            Obsidian PBT Keycap Set
                                        </div>
                                        <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                                            SKU: OBS-KCAP-87 • In Stock
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-xs font-mono font-bold text-[#10b981]">$45.00</span>
                                            <button className="px-2.5 py-1 rounded bg-[#10b981] hover:bg-[#10b981]/90 text-white text-[10px] font-mono uppercase tracking-wider font-semibold transition-colors">
                                                1-Click Buy
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-[#10b981]" />
                                <span>In-thread checkout conversion</span>
                            </div>
                        </article>

                        {/* ================= CARD 005: Abandoned Cart Recovery (4 Cols) ================= */}
                        <article className="lg:col-span-4 bg-[#0f1115]/90 border border-[#1f232b] hover:border-[#2d3340] transition-colors duration-200 rounded-xl p-6 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
                                    <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                                        Drop-Off Retarget
                                    </span>
                                    <span className="text-[11px] font-mono text-zinc-500">005</span>
                                </div>

                                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-[#066546]/60 transition-colors">
                                    <svg
                                        className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
                                        fill="none"
                                        height="18"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.8"
                                        viewBox="0 0 24 24"
                                        width="18"
                                    >
                                        <circle cx="8" cy="21" r="1" />
                                        <circle cx="19" cy="21" r="1" />
                                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                                    </svg>
                                </div>

                                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                                    Abandoned Cart Recovery
                                </h3>
                                <p className="text-[#7e8695] text-sm leading-relaxed mb-5">
                                    Smart nudge sequencing with individualized incentives that reignite stalled
                                    purchases.
                                </p>

                                {/* Micro-UI: Automated Retargeting Pill */}
                                <div className="bg-black/40 border border-white/[0.04] rounded-lg p-3.5 space-y-2.5">
                                    <div className="flex items-center justify-between text-[11px] font-mono">
                                        <span className="text-zinc-400">Cart Inactive: 45 mins</span>
                                        <span className="text-[#10b981] font-semibold">Recovered $184.00</span>
                                    </div>
                                    <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-[#10b981] h-full rounded-full w-[72%]" />
                                    </div>
                                    <div className="p-2 bg-[#0f1115] border border-[#1f232b] rounded flex items-center gap-2 text-[10px] font-mono text-zinc-300">
                                        <svg
                                            className="text-[#10b981] shrink-0"
                                            fill="none"
                                            height="13"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="13"
                                        >
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                        </svg>
                                        <span className="truncate">Promo &quot;FINISH15&quot; dispatched via WhatsApp</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-[#10b981]" />
                                <span>Autonomous trigger engine</span>
                            </div>
                        </article>

                        {/* ================= CARD 006: Automated Order Tracking (4 Cols) ================= */}
                        <article className="lg:col-span-4 bg-[#0f1115]/90 border border-[#1f232b] hover:border-[#2d3340] transition-colors duration-200 rounded-xl p-6 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
                                    <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                                        Logistics Telemetry
                                    </span>
                                    <span className="text-[11px] font-mono text-zinc-500">006</span>
                                </div>

                                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-[#066546]/60 transition-colors">
                                    <svg
                                        className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
                                        fill="none"
                                        height="18"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.8"
                                        viewBox="0 0 24 24"
                                        width="18"
                                    >
                                        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                                        <path d="m3.3 7 8.7 5 8.7-5" />
                                        <path d="M12 22V12" />
                                    </svg>
                                </div>

                                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                                    Automated Order Tracking
                                </h3>
                                <p className="text-[#7e8695] text-sm leading-relaxed mb-5">
                                    Instant parcel telemetry queries resolving WISMO logistics questions without human
                                    tickets.
                                </p>

                                {/* Micro-UI: Courier Telemetry Card */}
                                <div className="bg-black/40 border border-white/[0.04] rounded-lg p-3.5 space-y-2.5">
                                    <div className="flex items-center justify-between text-[11px] font-mono">
                                        <span className="text-white font-semibold">Order #SN-90421</span>
                                        <span className="text-[#10b981]">ETA: 2:15 PM TODAY</span>
                                    </div>

                                    {/* Progress Line */}
                                    <div className="flex items-center gap-1.5 py-1">
                                        <div className="h-1.5 flex-1 bg-[#10b981] rounded-full" />
                                        <div className="h-1.5 flex-1 bg-[#10b981] rounded-full" />
                                        <div className="h-1.5 flex-1 bg-[#10b981] rounded-full animate-pulse" />
                                        <div className="h-1.5 flex-1 bg-zinc-800 rounded-full" />
                                    </div>

                                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                                        <span>Dispatched</span>
                                        <span>Hub Sort</span>
                                        <span className="text-[#10b981] font-medium">Out for Delivery</span>
                                        <span>Delivered</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                                <span>Live courier webhook</span>
                                <span className="text-zinc-400">DHL / FedEx / UPS</span>
                            </div>
                        </article>

                        {/* ================= CARD 007: Workflow Automation (8 Cols) ================= */}
                        <article className="lg:col-span-8 bg-[#0f1115]/90 border border-[#1f232b] hover:border-[#2d3340] transition-colors duration-200 rounded-xl p-6 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                                            Logic Canvas Orchestrator
                                        </span>
                                        <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                                            Zero-Code Canvas
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-mono text-zinc-500">007</span>
                                </div>

                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 flex items-center justify-center text-zinc-300 group-hover:border-[#066546]/60 transition-colors">
                                        <svg
                                            className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
                                            fill="none"
                                            height="18"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.8"
                                            viewBox="0 0 24 24"
                                            width="18"
                                        >
                                            <rect height="6" rx="1" width="6" x="3" y="3" />
                                            <rect height="6" rx="1" width="6" x="15" y="15" />
                                            <path d="M6 9v3a3 3 0 0 0 3 3h6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                                            Workflow Automation
                                        </h3>
                                        <p className="text-[#7e8695] text-sm leading-relaxed max-w-xl">
                                            Design self-executing conversational lifecycles with multi-layered triggers,
                                            real-time conditions, and custom REST API hooks.
                                        </p>
                                    </div>
                                </div>

                                {/* Micro-UI: Interactive Node-Based Workflow Builder */}
                                <div className="bg-black/40 border border-white/[0.04] rounded-lg p-4 overflow-x-auto">
                                    <div className="flex items-center gap-2 min-w-[540px]">
                                        {/* Node 1: Trigger */}
                                        <div className="flex-1 bg-[#0f1115] border border-[#1f232b] rounded-lg p-3">
                                            <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                                                <span className="text-[#10b981] font-semibold">TRIGGER [01]</span>
                                                <span className="w-2 h-2 rounded-full bg-[#10b981] pulse-dot" />
                                            </div>
                                            <div className="text-xs font-bold text-white">Incoming DM</div>
                                            <div className="text-[11px] font-mono text-zinc-500 mt-1">
                                                Payload contains &quot;pricing&quot;
                                            </div>
                                        </div>

                                        {/* Connector Line 1 */}
                                        <div className="w-8 flex items-center justify-center relative">
                                            <div className="w-full h-px bg-zinc-800" />
                                            <div className="absolute w-2 h-2 rounded-full bg-[#10b981]" />
                                        </div>

                                        {/* Node 2: Condition */}
                                        <div className="flex-1 bg-[#0f1115] border border-[#1f232b] rounded-lg p-3">
                                            <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                                                <span className="text-zinc-300 font-semibold">CONDITION [02]</span>
                                                <span className="text-zinc-500">IF/ELSE</span>
                                            </div>
                                            <div className="text-xs font-bold text-white">Intent Evaluation</div>
                                            <div className="text-[11px] font-mono text-zinc-500 mt-1">
                                                Confidence &gt; 85% • In Stock
                                            </div>
                                        </div>

                                        {/* Connector Line 2 */}
                                        <div className="w-8 flex items-center justify-center relative">
                                            <div className="w-full h-px bg-zinc-800" />
                                            <div className="absolute w-2 h-2 rounded-full bg-[#10b981]" />
                                        </div>

                                        {/* Node 3: Action */}
                                        <div className="flex-1 bg-[#0f1115] border border-[#1f232b] rounded-lg p-3">
                                            <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                                                <span className="text-[#10b981] font-semibold">ACTION [03]</span>
                                                <span className="text-zinc-500">WEBHOOK</span>
                                            </div>
                                            <div className="text-xs font-bold text-white">Catalog Push + CRM</div>
                                            <div className="text-[11px] font-mono text-zinc-500 mt-1">
                                                Notify On-Duty Sales AE
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                                <span>Deterministic state machine execution</span>
                                <span className="text-[#10b981]">AVG EXEC: 42MS</span>
                            </div>
                        </article>

                        {/* ================= CARD 008: Team Inbox & Collaboration (6 Cols) ================= */}
                        <article className="lg:col-span-6 bg-[#0f1115]/90 border border-[#1f232b] hover:border-[#2d3340] transition-colors duration-200 rounded-xl p-6 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
                                    <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                                        Multi-Operator Handoff
                                    </span>
                                    <span className="text-[11px] font-mono text-zinc-500">008</span>
                                </div>

                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 flex items-center justify-center text-zinc-300 group-hover:border-[#066546]/60 transition-colors">
                                        <svg
                                            className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
                                            fill="none"
                                            height="18"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.8"
                                            viewBox="0 0 24 24"
                                            width="18"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                                            Team Inbox &amp; Collaboration
                                        </h3>
                                        <p className="text-[#7e8695] text-sm leading-relaxed">
                                            Effortless handoffs between autonomous AI workers and human operators with
                                            internal notes and smart routing rules.
                                        </p>
                                    </div>
                                </div>

                                {/* Micro-UI: Team Avatars & Handoff Trigger */}
                                <div className="bg-black/40 border border-white/[0.04] rounded-lg p-3.5 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-[#180d11] border border-[#066546]/50 flex items-center justify-center text-xs font-mono text-[#10b981] font-bold">
                                                AI
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-white">Konpilot Agent Alpha</div>
                                                <div className="text-[10px] font-mono text-zinc-500">
                                                    Handling 18 active threads
                                                </div>
                                            </div>
                                        </div>
                                        <span className="px-2 py-0.5 rounded bg-[#180d11] border border-[#066546]/40 text-[10px] font-mono text-[#10b981]">
                                            Autonomous
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-300">
                                                SJ
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-white">Sarah Jenkins</div>
                                                <div className="text-[10px] font-mono text-zinc-400">
                                                    Standby for Escalation
                                                </div>
                                            </div>
                                        </div>
                                        <button className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-[10px] font-mono uppercase tracking-wider transition-colors">
                                            Take Over (1-Click)
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-[#10b981]" />
                                <span>Collision-free operator lock</span>
                            </div>
                        </article>

                        {/* ================= CARD 009: Analytics & Insights (6 Cols) ================= */}
                        <article className="lg:col-span-6 bg-[#0f1115]/90 border border-[#1f232b] hover:border-[#2d3340] transition-colors duration-200 rounded-xl p-6 flex flex-col justify-between group">
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
                                    <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                                        Realtime Metrics
                                    </span>
                                    <span className="text-[11px] font-mono text-zinc-500">009</span>
                                </div>

                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 flex items-center justify-center text-zinc-300 group-hover:border-[#066546]/60 transition-colors">
                                        <svg
                                            className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
                                            fill="none"
                                            height="18"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.8"
                                            viewBox="0 0 24 24"
                                            width="18"
                                        >
                                            <line x1="18" x2="18" y1="20" y2="10" />
                                            <line x1="12" x2="12" y1="20" y2="4" />
                                            <line x1="6" x2="6" y1="20" y2="14" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                                            Analytics &amp; Insights
                                        </h3>
                                        <p className="text-[#7e8695] text-sm leading-relaxed">
                                            Full visibility into autonomous resolution rates, deflection ratios,
                                            conversion funnels, and operator SLA performance.
                                        </p>
                                    </div>
                                </div>

                                {/* Micro-UI: Sparkline Metrics Preview */}
                                <div className="bg-black/40 border border-white/[0.04] rounded-lg p-3.5 grid grid-cols-3 gap-3">
                                    <div className="bg-[#0f1115] border border-[#1f232b] p-3 rounded-lg flex flex-col">
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase">
                                            Avg Response
                                        </span>
                                        <span className="text-lg font-bold text-[#10b981] font-mono mt-1">0.8s</span>
                                        <span className="text-[10px] font-mono text-zinc-400 mt-0.5">
                                            -84% vs Human
                                        </span>
                                    </div>

                                    <div className="bg-[#0f1115] border border-[#1f232b] p-3 rounded-lg flex flex-col">
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase">
                                            Autonomous Res
                                        </span>
                                        <span className="text-lg font-bold text-white font-mono mt-1">89.2%</span>
                                        <span className="text-[10px] font-mono text-[#10b981] mt-0.5">
                                            Target: &gt;85%
                                        </span>
                                    </div>

                                    <div className="bg-[#0f1115] border border-[#1f232b] p-3 rounded-lg flex flex-col">
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase">
                                            Revenue Lift
                                        </span>
                                        <span className="text-lg font-bold text-white font-mono mt-1">+38%</span>
                                        <span className="text-[10px] font-mono text-zinc-400 mt-0.5">MoM Average</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                                <span>Live telemetry stream</span>
                                <span className="text-[#10b981]">EXPORT CSV / API</span>
                            </div>
                        </article>
                    </div>

                    {/* ================= BOTTOM CONVERSION CTA PANEL ================= */}
                    <div className="bg-[#0f1115] border border-[#1f232b] rounded-2xl p-6 sm:p-10 relative overflow-hidden">
                        {/* Ambient radial shine */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 bg-[#10b981]/10 blur-3xl rounded-full"
                        />

                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#180d11] border border-[#066546]/40 text-[11px] font-mono text-[#10b981] uppercase tracking-widest mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] pulse-dot" />
                                    Deploy in under 15 minutes
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                    Start building your conversational engine.
                                </h3>
                                <p className="text-[#7e8695] text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
                                    Connect your WhatsApp Business API and Instagram Direct channels in three clicks.
                                    No credit card required to begin sandboxing.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                                <a
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#10b981] text-white text-xs font-mono uppercase tracking-wider font-semibold shadow-[0_0_20px_rgba(255,51,75,0.4)] hover:bg-[#10b981]/90 hover:shadow-[0_0_28px_rgba(255,51,75,0.65)] transition-all"
                                    href="#start-trial"
                                >
                                    Start Free Trial
                                </a>
                                <a
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-mono uppercase tracking-wider transition-colors"
                                    href="#sandbox"
                                >
                                    Explore Interactive Sandbox
                                </a>
                            </div>
                        </div>

                        {/* Trust Badges Line */}
                        <div className="mt-8 pt-5 border-t border-white/[0.05] flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
                            <div className="flex flex-wrap items-center gap-6">
                                <span className="flex items-center gap-2 text-zinc-400">
                                    <svg
                                        className="text-[#10b981]"
                                        fill="none"
                                        height="14"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        width="14"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    SOC-2 Type II Certified
                                </span>
                                <span className="flex items-center gap-2 text-zinc-400">
                                    <svg
                                        className="text-[#10b981]"
                                        fill="none"
                                        height="14"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        width="14"
                                    >
                                        <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    End-to-End Encryption
                                </span>
                                <span className="flex items-center gap-2 text-zinc-400">
                                    <svg
                                        className="text-[#10b981]"
                                        fill="none"
                                        height="14"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        width="14"
                                    >
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    Official Meta Tech Partner
                                </span>
                            </div>
                            <span>Engine Protocol: v4.8.1-stable</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
import React from 'react';

const topProblems = [
  {
    id: '001',
    tag: 'Speed To Lead',
    title: 'Slow Speed-to-Lead',
    description:
      'Customers lose interest when businesses take hours to respond. 78% buy from the vendor that answers first.',
    footer: 'Response latency degrades intent',
    icon: (
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
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: '002',
    tag: 'Ad Efficiency',
    title: 'Wasted Advertising Spend',
    description:
      'Click-to-WhatsApp and Instagram advertising generates inquiries that go cold and never convert without instant qualification.',
    footer: 'CAC leaks without real-time routing',
    icon: (
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
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
        <polyline points="17 18 23 18 23 12" />
      </svg>
    ),
  },
];

const secondaryProblems = [
  {
    id: '003',
    tag: 'Support Overhead',
    title: 'Repetitive Customer Support',
    description:
      'Teams waste hundreds of hours manually answering order status, product specs, shipping, and return policies.',
    footer: 'Manual triage burnout',
    icon: (
      <svg
        className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
        fill="none"
        height="16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9.5" x2="14.5" y1="9.5" y2="14.5" />
        <line x1="14.5" x2="9.5" y1="9.5" y2="14.5" />
      </svg>
    ),
  },
  {
    id: '004',
    tag: 'Logistics Drain',
    title: 'COD & RTO Losses',
    description:
      'Unverified Cash-on-Delivery orders create unnecessary double shipping expenses, inventory lockups, and failed deliveries.',
    footer: 'Unconfirmed orders bounce',
    icon: (
      <svg
        className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
        fill="none"
        height="16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
        <path d="m16.5 9.4 4.5-2.6" />
        <path d="M3.29 7 12 12.01 20.71 7" />
        <path d="M12 22.08V12" />
        <line x1="17" x2="22" y1="17" y2="22" />
        <line x1="22" x2="17" y1="17" y2="22" />
      </svg>
    ),
  },
  {
    id: '005',
    tag: 'Omnichannel Silos',
    title: 'Fragmented Conversations',
    description:
      'Customer context gets lost across WhatsApp, Instagram DMs, SMS, and website widgets with zero unified history.',
    footer: 'Disconnected message threads',
    icon: (
      <svg
        className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
        fill="none"
        height="16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: '006',
    tag: 'Operations',
    title: 'Manual Management',
    description:
      'Businesses struggle with haphazard team collaboration, missing analytics, and lack of centralized customer data.',
    footer: 'Zero team ownership audit',
    icon: (
      <svg
        className="text-zinc-300 group-hover:text-[#10b981] transition-colors"
        fill="none"
        height="16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

// Indices for the 6x8 (48 dots) matrix to match the original visual pattern
const lighterDotIndices = new Set([9, 13, 18, 27, 33, 37]);
const alertDotIndex = 20;

export default function ProblemSection() {
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

      {/* BEGIN: ProblemSectionContainer */}
      <section
        aria-labelledby="section-heading"
        className="max-w-6xl mx-auto"
        data-purpose="problem-section-main"
      >
        {/* BEGIN: SectionHeader */}
        <header className="flex flex-col items-start gap-4 mb-10 sm:mb-14">
          {/* Warning Badge / Category Tag */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#180d11] border border-[#066546]/40 backdrop-blur-md shadow-inner"
            data-purpose="status-badge"
          >
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
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" x2="12" y1="9" y2="13" />
              <line x1="12" x2="12.01" y1="17" y2="17" />
            </svg>
            <span className="text-[11px] font-mono font-medium tracking-widest text-[#10b981] uppercase">
              The Problem
            </span>
          </div>

          {/* Main Headline */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]"
            id="section-heading"
          >
            Your customers are messaging.
            <br className="hidden sm:inline" /> But who&apos;s responding?
          </h2>

          {/* Subtitle Description */}
          <p className="text-[#7e8695] text-base sm:text-lg max-w-2xl leading-relaxed">
            Every delayed reply, unanswered question, and missed follow-up creates another
            opportunity for your competitors.
          </p>
        </header>
        {/* END: SectionHeader */}

        {/* BEGIN: ProblemVisualDashboard */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5"
          data-purpose="lead-visual-grid"
        >
          {/* Visual Motif Card: Unresolved Queue / Dot Matrix */}
          <div
            className="lg:col-span-4 bg-[#0f1115]/90 border border-[#1f232b] rounded-xl p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur"
            data-purpose="queue-dot-matrix-card"
          >
            {/* Ambient radial glow behind the red dot */}
            <div
              aria-hidden="true"
              className="absolute -top-10 -right-10 w-44 h-44 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="mb-5">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                <span className="uppercase tracking-wider">Queue Health</span>
                <span className="text-[#10b981] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] inline-block animate-ping" />
                  Live Loss
                </span>
              </div>
              <p className="text-sm text-zinc-400">Incoming unattended inquiry matrix</p>
            </div>

            {/* Dot Matrix Visual representation */}
            <div
              aria-label="Agent radar dot matrix display"
              className="py-6 px-4 bg-black/40 rounded-lg border border-white/[0.04] flex items-center justify-center my-auto"
            >
              <div className="grid grid-cols-8 gap-2.5 sm:gap-3">
                {Array.from({ length: 48 }).map((_, idx) => {
                  if (idx === alertDotIndex) {
                    return (
                      <div
                        key={idx}
                        className="w-2.5 h-2.5 -m-0.5 rounded-full bg-[#10b981] pulse-dot relative z-10"
                      />
                    );
                  }
                  const dotColor = lighterDotIndices.has(idx) ? 'bg-zinc-700' : 'bg-zinc-800';
                  return <div key={idx} className={`w-2 h-2 rounded-full ${dotColor}`} />;
                })}
              </div>
            </div>

            {/* Terminal Status Footer */}
            <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>ABANDONED LEAD DETECTED</span>
              <span className="text-[#10b981]">03:42 AM</span>
            </div>
          </div>

          {/* Top Problem Cards (001 & 002) */}
          {topProblems.map((item) => (
            <article
              key={item.id}
              className="lg:col-span-4 bg-[#0f1115]/90 border border-[#1f232b] hover:border-[#2d3340] transition-colors duration-200 rounded-xl p-6 flex flex-col justify-between relative group"
              data-purpose="problem-card"
            >
              <div>
                {/* Header with Tag and Monospace Code */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-5">
                  <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">{item.id}</span>
                </div>

                {/* Micro Icon Accent */}
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-[#066546]/60 transition-colors">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-2">{item.title}</h3>

                {/* Copy */}
                <p className="text-[#7e8695] text-sm leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-6 pt-3 text-[11px] font-mono text-zinc-600 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#10b981]" />
                <span>{item.footer}</span>
              </div>
            </article>
          ))}
        </div>
        {/* END: ProblemVisualDashboard */}

        {/* BEGIN: ProblemSecondaryGrid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-purpose="secondary-cards-grid"
        >
          {secondaryProblems.map((item) => (
            <article
              key={item.id}
              className="bg-[#0f1115]/90 border border-[#1f232b] hover:border-[#2d3340] transition-colors duration-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between group"
              data-purpose="problem-card"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-4">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">{item.id}</span>
                </div>

                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-[#066546]/60 transition-colors">
                  {item.icon}
                </div>

                <h3 className="text-base font-bold text-white tracking-tight mb-2">{item.title}</h3>

                <p className="text-[#7e8695] text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-zinc-500">
                {item.footer}
              </div>
            </article>
          ))}
        </div>
        {/* END: ProblemSecondaryGrid */}
      </section>
      {/* END: ProblemSectionContainer */}
    </div>
  );
}
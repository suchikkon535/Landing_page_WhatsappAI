"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Send, Zap } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Instagram"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="LinkedIn">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Facebook">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

function YoutubeIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="YouTube">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const footerLinks = {
  Product: [
    { label: "Platform Features", href: "#features" },
    { label: "AI Orchestration", href: "#solutions" },
    { label: "API & Integrations", href: "#integrations" },
    { label: "Industry Deployments", href: "#industries" },
    { label: "Transparent Pricing", href: "#pricing" },
    { label: "Interactive Demo", href: "#product-demo" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Knowledge Base", href: "/help" },
    { label: "Engineering Blog", href: "/blog" },
    { label: "API Reference", href: "/api-docs" },
    { label: "Developer Sandbox", href: "/community" },
  ],
  Company: [
    { label: "About Konpilot AI", href: "/about" },
    { label: "Careers & Culture", href: "/careers" },
    { label: "Contact Engineering", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: LinkedinIcon },
  { label: "Facebook", href: "https://facebook.com/", icon: FacebookIcon },
  { label: "YouTube", href: "https://youtube.com/", icon: YoutubeIcon },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#050608] border-t border-[#1f232b] text-slate-100 font-sans selection:bg-[#10b981]/30 selection:text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
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

      {/* Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[700px] -translate-x-1/2 bg-gradient-to-b from-[#10b981]/[0.05] via-[#066546]/[0.02] to-transparent blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Top Section: Brand & Newsletter Row */}
        <div className="pb-12 border-b border-white/[0.05] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Konpilot"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#7e8695] max-w-md leading-relaxed">
              Hyper-scale AI messaging infrastructure engineered for high-concurrency enterprise
              orchestration and multi-agent coordination.
            </p>

            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#180d11] border border-[#066546]/40 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
              <span className="text-[10px] font-mono text-[#10b981] uppercase tracking-wider">
                All systems operational
              </span>
            </div>
          </div>

          {/* Newsletter Input Box */}
          <div className="lg:col-span-6 bg-[#0f1115] border border-[#1f232b] rounded-xl p-5">
            <div className="flex items-center gap-2 text-xs font-mono text-white mb-2">
              <Zap size={14} className="text-[#10b981]" />
              <span>SUBSCRIBE TO ENGINE TELEMETRY</span>
            </div>
            <p className="text-[11px] text-[#7e8695] mb-4">
              Get weekly updates on multi-agent RAG releases and channel API specs.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-[#180d11] border border-[#066546]/50 flex items-center gap-2 text-xs font-mono text-[#10b981]">
                <Check size={14} />
                <span>Subscription verified. Telemetry active.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter engineering email..."
                  className="bg-black/40 border border-[#1f232b] focus:border-[#10b981] text-xs font-mono px-3.5 py-2.5 rounded-lg text-white placeholder-zinc-500 outline-none transition-colors w-full"
                />
                <button
                  type="submit"
                  className="bg-[#10b981] hover:bg-[#10b981]/90 text-white p-2.5 rounded-lg font-mono transition-all shrink-0 shadow-[0_0_12px_rgba(255,51,75,0.35)]"
                >
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Main Footer Links Columns */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 border-b border-white/[0.05]">
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-white font-semibold uppercase tracking-wider">
                Connect With Us
              </span>
              <p className="text-xs text-[#7e8695] mt-2 mb-4">
                Follow developer announcements and Graph API updates.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-[#0f1115] border border-[#1f232b] hover:border-[#066546]/60 hover:bg-[#180d11] text-zinc-400 hover:text-[#10b981] flex items-center justify-center transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={title} className="lg:col-span-3 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                <span className="text-[11px] font-mono tracking-wider font-semibold text-[#10b981] uppercase">
                  {title}
                </span>
                <span className="text-[10px] font-mono text-zinc-600">00{index + 1}</span>
              </div>

              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-xs text-[#7e8695] hover:text-white transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={12}
                        className="text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:text-[#10b981] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar Telemetry Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span>© {currentYear || "2025"} Konpilot AI Inc.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-zinc-400">Engine Protocol: v4.8.1-stable</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Compliance SLA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
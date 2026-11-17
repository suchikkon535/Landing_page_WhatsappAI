"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#07080a]/85 backdrop-blur-xl border-b border-[#1f232b] transition-all font-sans">
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

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand Logo & Radar Pulse Indicator */}
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "How It Works", href: "#how-it-works" },
            { label: "Industries", href: "#industries" },
            { label: "Pricing", href: "#pricing" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-mono uppercase tracking-wider text-[#7e8695] hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/login"
            className="px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-[#7e8695] hover:text-white hover:bg-[#0f1115] border border-transparent hover:border-[#1f232b] transition-all"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold bg-[#10b981] text-white shadow-[0_0_16px_rgba(255,51,75,0.35)] hover:bg-[#10b981]/90 hover:shadow-[0_0_24px_rgba(255,51,75,0.55)] transition-all"
          >
            <Zap size={13} />
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-8 h-8 rounded-lg bg-[#0f1115] border border-[#1f232b] flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f1115] border-b border-[#1f232b] px-4 py-5 flex flex-col gap-4">
          {[
            { label: "How It Works", href: "#how-it-works" },
            { label: "Industries", href: "#industries" },
            { label: "Pricing", href: "#pricing" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono uppercase tracking-wider text-[#7e8695] hover:text-white py-1"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/[0.05] flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider text-zinc-300 bg-[#07080a] border border-[#1f232b]"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold bg-[#10b981] text-white shadow-[0_0_16px_rgba(255,51,75,0.35)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
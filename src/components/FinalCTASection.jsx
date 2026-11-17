
"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";

const particles = [
  { left: "8%", top: "24%", delay: "0s", size: "3px" },
  { left: "17%", top: "72%", delay: "1.2s", size: "4px" },
  { left: "27%", top: "15%", delay: "2.1s", size: "2px" },
  { left: "39%", top: "82%", delay: "0.7s", size: "3px" },
  { left: "52%", top: "12%", delay: "1.7s", size: "4px" },
  { left: "65%", top: "78%", delay: "2.5s", size: "2px" },
  { left: "77%", top: "22%", delay: "0.4s", size: "3px" },
  { left: "89%", top: "65%", delay: "1.5s", size: "4px" },
  { left: "94%", top: "35%", delay: "2.8s", size: "2px" },
  { left: "45%", top: "48%", delay: "1s", size: "2px" },
];

export default function FinalCTASection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#08090d] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
    >
      {/* Radial background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.16] blur-[130px]" />

        <div className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-purple-600/[0.13] blur-[110px]" />

        <div className="absolute bottom-[5%] right-[10%] h-72 w-72 rounded-full bg-indigo-500/[0.12] blur-[110px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
            maskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 75%)",
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="absolute animate-cta-particle rounded-full bg-blue-300 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 backdrop-blur-sm">
          <Sparkles size={14} className="text-blue-400" />
          <span className="text-xs font-medium tracking-wide text-blue-200">
            THE FUTURE OF CUSTOMER COMMUNICATION
          </span>
        </div>

        {/* Headline */}
        <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Stop Missing Messages.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Start Growing Your Business.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
          Let AI handle repetitive conversations, capture more leads, and help
          your business deliver faster customer experiences across WhatsApp
          and Instagram.
        </p>

        {/* CTA Buttons */}
        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-8 text-sm font-semibold text-white shadow-[0_8px_35px_rgba(59,130,246,0.28)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-400 hover:to-indigo-400 hover:shadow-[0_12px_45px_rgba(59,130,246,0.4)] sm:w-auto"
          >
            Get Started Today
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08] sm:w-auto"
          >
            <CalendarDays size={17} className="text-gray-300" />
            Book a Demo
          </Link>
        </div>

        {/* Supporting text */}
        <div className="mt-9 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
          <p className="text-xs font-medium tracking-wide text-gray-500 sm:text-sm">
            Your smarter customer communication starts here.
          </p>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/20" />
        </div>

        {/* Bottom decorative indicator */}
        <div className="mx-auto mt-16 flex w-fit items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-gray-500">
            Smarter conversations. Better growth.
          </span>
        </div>
      </div>

      {/* Particle animation */}
      <style jsx>{`
        @keyframes cta-particle {
          0%, 100% {
            opacity: 0.15;
            transform: translateY(0) scale(0.8);
          }
          50% {
            opacity: 0.9;
            transform: translateY(-18px) scale(1.2);
          }
        }

        .animate-cta-particle {
          animation: cta-particle 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-cta-particle {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

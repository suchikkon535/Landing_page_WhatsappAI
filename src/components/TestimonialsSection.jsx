
"use client";

import {
  Quote,
  Star,
  MessageCircle,
} from "lucide-react";

const testimonials = [
  {
    name: "Sample Customer 01",
    role: "Founder",
    company: "Sample D2C Brand",
    initials: "SC",
    avatarStyle: "from-blue-500 to-indigo-600",
    rating: 5,
    quote:
      "We wanted a better way to manage incoming customer messages. Konpilot represents the kind of automation that can help teams respond faster and stay organized.",
  },
  {
    name: "Sample Customer 02",
    role: "Business Owner",
    company: "Sample Design Studio",
    initials: "SC",
    avatarStyle: "from-purple-500 to-fuchsia-600",
    rating: 5,
    quote:
      "Managing enquiries across messaging platforms can become overwhelming. A unified workspace with intelligent automation makes that process much simpler.",
  },
  {
    name: "Sample Customer 03",
    role: "Marketing Manager",
    company: "Sample Growth Agency",
    initials: "SC",
    avatarStyle: "from-cyan-500 to-blue-600",
    rating: 5,
    quote:
      "The ability to automate repetitive conversations while keeping the team involved is exactly the kind of workflow modern businesses need.",
  },
];

function TestimonialCard({ testimonial, index }) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101116] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#13151d]"
    >
      {/* Development label */}
      <div className="mb-7 flex items-center justify-between">
        <span className="rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-300">
          Development Sample
        </span>

        <Quote
          size={25}
          className="text-white/15 transition-colors group-hover:text-blue-400/50"
        />
      </div>

      {/* Rating */}
      <div className="mb-5 flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-amber-400 text-amber-400"
          />
        ))}
        <span className="ml-2 text-xs text-gray-500">
          Illustrative rating
        </span>
      </div>

      {/* Testimonial */}
      <blockquote className="flex-1 text-[15px] leading-7 text-gray-300">
        “{testimonial.quote}”
      </blockquote>

      {/* Divider */}
      <div className="my-7 h-px bg-white/[0.07]" />

      {/* Customer details */}
      <div className="flex items-center gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.avatarStyle} text-sm font-bold text-white shadow-lg`}
        >
          {testimonial.initials}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-white">
            {testimonial.name}
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>

      {/* Card number */}
      <span className="absolute bottom-7 right-7 text-xs font-medium tabular-nums text-white/10">
        0{index + 1}
      </span>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#08090d] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
            <MessageCircle size={14} className="text-blue-400" />
            <span className="text-xs font-medium tracking-wide text-gray-400">
              CUSTOMER EXPERIENCES
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Businesses deserve{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              better conversations.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            See how intelligent automation can transform the way businesses
            manage customer communication.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Development notice */}
        <p className="mt-8 text-center text-xs leading-6 text-gray-600">
          These are illustrative development samples, not verified customer
          reviews or endorsements. Replace them with approved customer
          testimonials before publishing.
        </p>
      </div>
    </section>
  );
}

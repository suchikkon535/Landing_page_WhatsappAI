"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
  subject: "",
  message: "",
};

const inputClassName =
  "mt-2 w-full rounded-lg border border-[#252a33] bg-[#08090c] px-3.5 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-[#10b981]";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "submitting", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus({ type: "error", message: result.error || "Unable to send your message." });
        return;
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Thanks for reaching out. Your message has been received.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "We couldn't reach the server. Please try again.",
      });
    }
  }

  if (status.type === "success") {
    return (
      <div
        role="status"
        className="flex min-h-full flex-col items-center justify-center rounded-xl border border-[#10b981]/30 bg-[#10b981]/[0.06] px-6 py-12 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-[#10b981]" />
        <h2 className="mt-5 text-xl font-semibold text-white">Message received</h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#a2a9b5]">{status.message}</p>
        <button
          type="button"
          onClick={() => setStatus({ type: "idle", message: "" })}
          className="mt-6 text-sm font-medium text-[#10b981] transition-colors hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-zinc-200">
          Name <span className="text-[#10b981]">*</span>
          <input
            name="name"
            autoComplete="name"
            maxLength={120}
            required
            value={form.name}
            onChange={updateField}
            placeholder="Your name"
            className={inputClassName}
          />
        </label>
        <label className="block text-sm font-medium text-zinc-200">
          Work email <span className="text-[#10b981]">*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            value={form.email}
            onChange={updateField}
            placeholder="you@company.com"
            className={inputClassName}
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-zinc-200">
        Company
        <input
          name="company"
          autoComplete="organization"
          maxLength={160}
          value={form.company}
          onChange={updateField}
          placeholder="Your company"
          className={inputClassName}
        />
      </label>

      <label className="block text-sm font-medium text-zinc-200">
        Phone <span className="text-[#10b981]">*</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={32}
          required
          value={form.phone}
          onChange={updateField}
          placeholder="Your phone number"
          className={inputClassName}
        />
      </label>

      <label className="block text-sm font-medium text-zinc-200">
        What can we help with? <span className="text-[#10b981]">*</span>
        <input
          name="subject"
          maxLength={160}
          required
          value={form.subject}
          onChange={updateField}
          placeholder="Product demo, partnerships, support..."
          className={inputClassName}
        />
      </label>

      <label className="block text-sm font-medium text-zinc-200">
        Message <span className="text-[#10b981]">*</span>
        <textarea
          name="message"
          rows={5}
          maxLength={5000}
          required
          value={form.message}
          onChange={updateField}
          placeholder="Tell us a little about what you need..."
          className={`${inputClassName} resize-y`}
        />
      </label>

      {status.type === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={status.type === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#10b981] px-5 py-3.5 text-sm font-semibold text-[#04120d] transition-colors hover:bg-[#34d399] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status.type === "submitting" ? "Sending..." : "Send message"}
        {status.type !== "submitting" && <ArrowRight size={16} />}
      </button>
    </form>
  );
}

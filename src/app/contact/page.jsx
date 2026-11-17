import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Konpilot AI",
  description: "Talk to the Konpilot AI team about your messaging and automation needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#07080a] text-slate-100 selection:bg-[#10b981]/30 selection:text-white">
      <Navbar />
      <section className="relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 -z-10 h-80 w-[min(90vw,800px)] -translate-x-1/2 rounded-full bg-[#10b981]/[0.08] blur-[140px]"
        />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#10b981]">
              Let&apos;s talk
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Make every conversation count.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#7e8695] sm:text-lg">
              Tell us what you&apos;re building. Our team will help you find the right way to
              automate, connect, and grow.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 rounded-2xl border border-[#1f232b] bg-[#0b0d10]/90 p-5 shadow-2xl shadow-black/30 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:p-10">
            <aside className="flex flex-col justify-between gap-8 border-b border-[#1f232b] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#10b981]">
                  Contact the team
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  We&apos;re here to help.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#7e8695]">
                  Share a few details and we&apos;ll get back to you about your goals, questions,
                  or next steps.
                </p>
              </div>
              <div className="rounded-xl border border-[#1f232b] bg-black/20 p-5">
                <p className="text-sm font-medium text-white">What happens next?</p>
                <p className="mt-2 text-sm leading-relaxed text-[#7e8695]">
                  Your message goes directly to our team. We&apos;ll follow up using the email
                  address you provide.
                </p>
              </div>
            </aside>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

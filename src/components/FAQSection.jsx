
"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircleQuestion,
  ArrowUpRight,
} from "lucide-react";

const faqs = [
  {
    question: "What is this AI customer management platform?",
    answer:
      "Konpilot is an AI-powered customer communication platform designed to help businesses manage WhatsApp and Instagram conversations, automate repetitive responses, capture leads, and organize customer interactions in one workspace.",
  },
  {
    question: "How does WhatsApp integration work?",
    answer:
      "You connect your WhatsApp Business account through the supported integration setup. Once connected, your business can manage incoming messages and configure AI-powered responses and automation. A compatible Meta business setup may be required.",
  },
  {
    question: "Can I connect my Instagram business account?",
    answer:
      "Yes. You can connect an eligible Instagram professional account using the supported Meta integration flow. This allows your business to manage supported Instagram conversations through the platform.",
  },
  {
    question: "Can I train the AI using my own business data?",
    answer:
      "You can configure your AI knowledge base using business information such as FAQs, product details, pricing, and company policies, so its responses can be tailored to your business.",
  },
  {
    question: "Can AI automatically capture and qualify leads?",
    answer:
      "Yes. With the appropriate workflows configured, AI can collect information such as customer requirements, budget, and location, then organize enquiries based on your qualification criteria.",
  },
  {
    question: "Can I transfer conversations to a human agent?",
    answer:
      "Yes. Conversations can be handed over to your team when human assistance is needed. This helps your team handle complex questions, sensitive requests, and important sales opportunities.",
  },
  {
    question: "Does the platform support Shopify and WooCommerce?",
    answer:
      "Shopify and WooCommerce integrations are not currently confirmed as available. Features that require store or order data will depend on a supported integration being implemented and enabled.",
  },
  {
    question: "Can I automate COD order verification?",
    answer:
      "COD verification can be handled through configured messaging workflows. Automated order verification requires access to the relevant order information and a compatible store integration.",
  },
  {
    question: "How are AI conversation credits calculated?",
    answer:
      "AI conversation credits represent usage of AI-powered features. The exact credit consumption rules depend on the platform's billing policy and selected plan. Check your plan details for the applicable limits and usage rules.",
  },
  {
    question: "Are WhatsApp messaging charges included in the subscription?",
    answer:
      "WhatsApp subscription pricing and Meta messaging charges are separate considerations. Any applicable Meta or WhatsApp charges may be billed separately according to your account, message category, and current Meta pricing.",
  },
  {
    question: "Can multiple team members manage conversations?",
    answer:
      "Yes. Team collaboration can be configured according to your subscription's member limits. Available access and management permissions depend on the plan and enabled features.",
  },
  {
    question: "Is my customer data secure?",
    answer:
      "Customer data should be handled through appropriate access controls and secure data-handling practices. For specific information about data storage, processing, retention, and security measures, refer to the platform's privacy policy. We do not claim security certifications that have not been independently verified.",
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState([0]);

  const toggleItem = (index) => {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#08090d] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-purple-600/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
            <MessageCircleQuestion
              size={14}
              className="text-blue-400"
            />
            <span className="text-xs font-medium tracking-wide text-gray-400">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Questions?{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              We've got answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Everything you need to know about managing conversations,
            automating customer communication, and growing with Konpilot.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-4xl">
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {faqs.map((faq, index) => {
              const isOpen = openItems.includes(index);
              const answerId = `faq-answer-${index}`;

              return (
                <div key={faq.question} className="group">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left transition-colors duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`hidden pt-0.5 text-xs font-medium tabular-nums sm:block ${
                          isOpen ? "text-blue-400" : "text-gray-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-sm font-medium leading-6 transition-colors sm:text-base ${
                          isOpen
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-blue-400/30 bg-blue-500/10 text-blue-400"
                          : "border-white/10 bg-white/[0.03] text-gray-400 group-hover:border-white/20 group-hover:text-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={15} />
                      ) : (
                        <Plus size={15} />
                      )}
                    </span>
                  </button>

                  <div
                    id={answerId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-6 pl-0 text-sm leading-7 text-gray-400 sm:pl-9">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400">
            Still have questions about Konpilot?
          </p>

          <a
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            Talk to our team
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

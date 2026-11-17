
const integrations = [
  {
    name: "WhatsApp",
    color: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.1 4 4.1-1.08A10 10 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-2.44.64.65-2.38-.2-.31A8.1 8.1 0 1 1 12.04 20.1Zm4.45-6.07c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.3.98 2.46c.12.16 1.68 2.56 4.07 3.59.57.25 1.02.4 1.37.51.57.18 1.08.15 1.49.09.45-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    color: "#E4405F",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function IntegrationsTrust() {
  return (
    <section className="relative border-y border-white/[0.08] bg-black/30 px-6 py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400">
            Connected channels
          </p>
          <h2 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
            Everything connected. One intelligent workspace.
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-7">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="group flex cursor-default items-center gap-3 text-white/45 transition-all duration-300 hover:text-white"
            >
              <span
                className="transition-colors duration-300"
                style={{ "--brand-color": integration.color }}
              >
                <span className="block transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--brand-color)]">
                  {integration.icon}
                </span>
              </span>
              <span className="text-sm font-medium tracking-wide transition-colors duration-300 group-hover:text-white/90">
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/30">
          Built around the channels your customers already use.
        </p>
      </div>
    </section>
  );
}

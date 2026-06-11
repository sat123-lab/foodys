const partners = [
  "Paradise",
  "Shadab",
  "Bhagat Tarachand",
  "Elco",
  "Pandit Kulfi",
  "Swarn Surbhi",
  "Karim's",
  "Bademiya",
];

export const PartnersMarquee = () => {
  return (
    <section className="py-24 bg-ink text-ink-foreground overflow-hidden grain">
      <div className="container mb-12">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-saffron mb-3">Our food partners</p>
            <h2 className="text-4xl md:text-6xl">
              India's iconic kitchens,
              <br />
              <span className="italic font-light">under one roof.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/60 text-sm leading-relaxed">
            We collaborate with the country's most beloved heritage brands — bringing
            authentic recipes to travellers nationwide.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-12 px-12 py-6 border-r border-white/10"
            >
              <span className="font-heading text-5xl md:text-7xl text-white/30 hover:text-saffron transition-colors duration-500">
                {p}
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" className="text-saffron shrink-0">
                <circle cx="7" cy="7" r="3" fill="currentColor" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

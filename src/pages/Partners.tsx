import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import bgPartners from "@/assets/bg-partners.mp4.asset.json";

const partners = [
  { name: "Paradise", region: "Hyderabad", since: "1953", desc: "The original Hyderabadi biryani institution." },
  { name: "Shadab", region: "Hyderabad", since: "1965", desc: "Legendary Mughlai kebabs and slow-cooked nihari." },
  { name: "Bhagat Tarachand", region: "Mumbai", since: "1964", desc: "Iconic Zaveri Bazar Punjabi-Sindhi vegetarian." },
  { name: "Elco", region: "Mumbai", since: "1975", desc: "Bandra's beloved chaat & street food temple." },
  { name: "Pandit Kulfi", region: "Delhi", since: "1958", desc: "Hand-churned kulfi recipes passed through generations." },
  { name: "Swarn Surbhi", region: "Lucknow", since: "1980", desc: "Awadhi vegetarian fine dining, reimagined for travel." },
  { name: "Karim's", region: "Delhi", since: "1913", desc: "Old Delhi's storied Mughlai destination." },
  { name: "Bademiya", region: "Mumbai", since: "1946", desc: "Colaba's cult-status midnight kebab counter." },
];

const Partners = () => (
  <>
    <PageHeader
      videoSrc={bgPartners.url}
      overlayClassName="bg-paper/80"
      title={
        <>
          India's most loved kitchens, <span className="italic font-light text-terracotta">amplified.</span>
        </>
      }
      description="We don't reinvent recipes — we protect them. Each partner brings decades (sometimes a century) of culinary heritage to our network."
    />

    <section className="py-20 bg-cream grain">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="bg-paper p-10 group hover:bg-ink hover:text-ink-foreground transition-colors duration-500 cursor-default"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-xs tracking-[0.25em] uppercase text-terracotta group-hover:text-saffron">
                  Est. {p.since}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-white/50">{p.region}</span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">{p.name}</h3>
              <p className="text-muted-foreground group-hover:text-white/70 leading-relaxed">{p.desc}</p>
              <div className="mt-8 h-px bg-ink/20 group-hover:bg-saffron/40 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CtaBanner />
  </>
);

export default Partners;

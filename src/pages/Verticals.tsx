import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import airport from "@/assets/vertical-airport.jpg";
import highway from "@/assets/vertical-highway.jpg";
import metro from "@/assets/vertical-metro.jpg";

const verticals = [
  {
    no: "01",
    title: "Airports",
    img: airport,
    locations: ["Hyderabad RGIA", "Delhi T3", "Mumbai T2", "Bengaluru KIA", "Chennai", "Kolkata"],
    desc: "From premium dine-in lounges to grab-and-go QSR, we operate across India's busiest terminals — serving travellers within minutes of touching down.",
  },
  {
    no: "02",
    title: "Highways",
    img: highway,
    locations: ["Mumbai-Pune Expressway", "Yamuna Expressway", "NH-44 Punjab", "Bengaluru-Mysuru", "Chennai-Bengaluru"],
    desc: "Iconic dhaba experiences reimagined as clean, modern flagships. Stop, stretch, and feast on regional specialities you'd otherwise have to drive hours to find.",
  },
  {
    no: "03",
    title: "Metros",
    img: metro,
    locations: ["Hyderabad Metro", "Delhi Metro", "Bengaluru Metro", "Mumbai Metro Line 1"],
    desc: "Hot, fresh meals served in under 90 seconds at platform-side kiosks — engineered for the daily commuter who refuses to compromise on taste.",
  },
];

const Verticals = () => (
  <>
    <PageHeader
      title="Three networks. One promise."
      description="Wherever Indians are travelling — by air, road or rail — Foody's is there with a hot, honest plate of home."
    />

    <section className="bg-paper">
      {verticals.map((v, i) => (
        <motion.article
          key={v.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
          className={`py-24 grain ${i % 2 === 0 ? "bg-paper" : "bg-cream"}`}
        >
          <div className="container grid md:grid-cols-12 gap-12 items-center">
            <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden shadow-warm">
                <img
                  src={v.img}
                  alt={v.title}
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-6">
              <p className="font-body text-sm text-terracotta mb-4">{v.no} / 03</p>
              <h2 className="text-6xl md:text-7xl leading-[0.9] mb-6">
                {v.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                {v.desc}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-ink mb-3">Live locations</p>
              <ul className="flex flex-wrap gap-2">
                {v.locations.map((l) => (
                  <li
                    key={l}
                    className="px-3 py-1.5 border border-ink/20 text-sm hover:bg-ink hover:text-ink-foreground transition-colors"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      ))}
    </section>

    <CtaBanner />
  </>
);

export default Verticals;

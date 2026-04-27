import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import airport from "@/assets/vertical-airport.jpg";
import highway from "@/assets/vertical-highway.jpg";
import metro from "@/assets/vertical-metro.jpg";

const items = [
  {
    no: "01",
    title: "Airports",
    desc: "Premium QSR and dine-in experiences inside India's busiest terminals.",
    img: airport,
  },
  {
    no: "02",
    title: "Highways",
    desc: "Iconic dhabas reimagined as clean, modern roadside flagships.",
    img: highway,
  },
  {
    no: "03",
    title: "Metros",
    desc: "Quick, hot meals served at the platform — without compromise.",
    img: metro,
  },
];

export const Verticals = () => {
  return (
    <section className="py-32 bg-paper grain">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4">Our verticals</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] text-balance">
              Local iconic flavours,
              <br />
              <span className="italic font-light text-terracotta">where you least expect them.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <Link to="/verticals" className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                  <img
                    src={item.img}
                    alt={`${item.title} vertical`}
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                  <div className="absolute top-6 left-6 text-ink-foreground/80 font-serif text-sm">
                    {item.no} / 03
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-ink-foreground">
                    <h3 className="font-serif text-4xl mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80 max-w-xs">{item.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-saffron opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                      Discover <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

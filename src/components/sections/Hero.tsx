import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import spices from "@/assets/spices.jpg";
import bgHome from "@/assets/bg-home.mp4.asset.json";
import { VideoBackground } from "@/components/VideoBackground";
import { RealisticFood } from "@/components/RealisticFood";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-paper">
      <VideoBackground src={bgHome.url} overlayClassName="bg-paper/65" />
      {/* Decorative spice circle */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute -right-40 -top-40 size-[600px] rounded-full opacity-40 blur-3xl"
      >
        <div className="w-full h-full rounded-full bg-gradient-spice" />
      </motion.div>

      <div className="container relative pt-24 pb-24 min-h-screen flex flex-col">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-terracotta mb-12"
        >
          <span className="block w-12 h-px bg-terracotta" />
          Food For Travel · Since 2014
        </motion.div>

        {/* Headline */}
        <div className="grid md:grid-cols-12 gap-8 items-end flex-1">
          <div className="md:col-span-7">
            <h1 className="font-serif font-black text-[14vw] md:text-[10vw] leading-[0.85] tracking-tight">
              {"Flavours".split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="italic font-light text-stroke"
              >
                of India
              </motion.span>
              <motion.span
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
                className="inline-block ml-4 text-terracotta"
              >
                .
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-3 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <Link
                to="/verticals"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-ink text-ink-foreground hover:bg-terracotta transition-colors duration-300"
              >
                <span className="tracking-wide">Explore our verticals</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/about" className="text-sm tracking-wide underline underline-offset-4 decoration-terracotta hover:text-terracotta transition-colors">
                About our company
              </Link>
            </motion.div>
          </div>

          {/* Right column: realistic spinning thali, shifted up & right */}
          <div className="md:col-span-5 relative min-h-[420px] md:min-h-[600px] md:-mt-16 md:-mr-10">
            <RealisticFood hero className="absolute inset-0" />

            {/* Floating spice chip kept for personality */}
            <motion.div
              animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 -bottom-6 size-32 rounded-full overflow-hidden border-4 border-paper shadow-warm hidden md:block z-10"
            >
              <img src={spices} alt="" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>

        {/* Marquee tagline at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-8 grid grid-cols-3 gap-8 max-w-2xl"
        >
          {[
            { k: "Airports", v: "12+" },
            { k: "Highways", v: "40+" },
            { k: "Metros", v: "8+" },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-serif text-4xl md:text-5xl text-terracotta">{s.v}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">{s.k}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

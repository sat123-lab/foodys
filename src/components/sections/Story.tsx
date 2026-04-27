import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import storyImg from "@/assets/story-craft.jpg";

export const Story = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="py-32 bg-cream grain overflow-hidden">
      <div className="container grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative aspect-[3/4] overflow-hidden">
          <motion.img
            style={{ y }}
            src={storyImg}
            alt="Chef rolling fresh naan dough by hand"
            width={1280}
            height={1600}
            loading="lazy"
            className="absolute inset-0 w-full h-[120%] object-cover"
          />
        </div>
        <div className="md:col-span-7 md:pl-8">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6">Our craft</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] text-balance">
            Every recipe, a
            <span className="italic font-light text-terracotta"> hand-written </span>
            love letter to a region.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            From the slow-cooked dum of Hyderabad to the smoky tandoors of Punjab, we honour
            the original technique — then engineer it to travel without losing its soul.
            Served fresh through our smart proprietary logistics system.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 max-w-md">
            {[
              { v: "200K+", k: "Meals served daily" },
              { v: "60+", k: "Locations live" },
              { v: "15", k: "Cuisine regions" },
              { v: "98%", k: "Quality compliance" },
            ].map((s) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-serif text-4xl text-ink">{s.v}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.k}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

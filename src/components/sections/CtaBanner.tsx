import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import biryani from "@/assets/dish-biryani.jpg";

export const CtaBanner = () => {
  return (
    <section className="relative py-32 bg-ink text-ink-foreground overflow-hidden grain">
      <motion.img
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.25 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src={biryani}
        alt=""
        className="absolute right-0 top-0 h-full w-1/2 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/40" />

      <div className="container relative">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-saffron mb-6">Partner with us</p>
          <h2 className="text-5xl md:text-7xl leading-[0.95] mb-8 text-balance">
            Bring Foody's to your
            <span className="italic font-light text-saffron"> next destination.</span>
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl">
            Concession spaces, brand collaborations, supply partnerships — we're listening.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-saffron text-ink hover:bg-paper transition-colors duration-300"
          >
            <span className="font-medium tracking-wide">Start a conversation</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

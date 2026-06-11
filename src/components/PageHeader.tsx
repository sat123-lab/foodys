import { motion } from "framer-motion";
import { WaveBackground } from "@/components/WaveBackground";

interface PageHeaderProps {
  title: React.ReactNode;
  description?: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => (
  <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 bg-foody-green overflow-hidden">
    <div className="container relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl font-bold leading-tight text-white max-w-4xl"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
    <WaveBackground />
  </section>
);

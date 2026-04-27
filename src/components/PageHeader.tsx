import { motion } from "framer-motion";
import { VideoBackground } from "@/components/VideoBackground";
import { RealisticFood } from "@/components/RealisticFood";

interface PageHeaderProps {
  title: React.ReactNode;
  description?: string;
  /** Optional background video URL (use the .url from a videogen asset.json) */
  videoSrc?: string;
  /** Tailwind overlay classes for the video, defaults to a paper wash */
  overlayClassName?: string;
}

export const PageHeader = ({
  title,
  description,
  videoSrc,
  overlayClassName = "bg-paper/80",
}: PageHeaderProps) => (
  <section className="relative pt-28 md:pt-44 pb-10 md:pb-20 bg-paper grain overflow-hidden min-h-[80vh]">
    {videoSrc && <VideoBackground src={videoSrc} overlayClassName={overlayClassName} />}
    {/* Realistic spinning dish — offset to the right, slightly above center for an asymmetric, attractive layout */}
    <div className="hidden md:block absolute -right-16 top-16 w-[55%] h-[80%] pointer-events-none">
      <RealisticFood className="w-full h-full opacity-95" />
    </div>
    <div className="container relative">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-6xl md:text-8xl leading-[0.9] text-balance max-w-5xl"
      >
        {title}
      </motion.h1>
      
      {/* Mobile centered RealisticFood */}
      <div className="md:hidden flex justify-center my-8">
        <RealisticFood className="w-[80%] max-w-[300px] opacity-95" />
      </div>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  </section>
);

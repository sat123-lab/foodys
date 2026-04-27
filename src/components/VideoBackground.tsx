import { motion } from "framer-motion";

interface VideoBackgroundProps {
  src: string;
  /** Tailwind classes for the dark/color overlay applied above the video */
  overlayClassName?: string;
  /** Optional poster image while the video loads */
  poster?: string;
}

/**
 * Fullscreen autoplaying, looping background video.
 * Sits absolutely behind page content. The parent must be `relative`.
 */
export const VideoBackground = ({
  src,
  overlayClassName = "bg-paper/70",
  poster,
}: VideoBackgroundProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    aria-hidden="true"
  >
    <video
      className="w-full h-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
    <div className={`absolute inset-0 ${overlayClassName}`} />
    {/* subtle grain overlay to keep editorial feel */}
    <div className="absolute inset-0 grain opacity-60" />
  </motion.div>
);

import { motion } from "framer-motion";

export const Logo = ({ className = "", size = "default" }: { className?: string; size?: "default" | "small" | "footer" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className={`flex items-center ${className}`}
  >
    <img
      src="/images/website-logo.png"
      alt="Foody's"
      className={`w-auto object-contain ${
        size === "footer"
          ? "h-9 md:h-10"
          : size === "small"
            ? "h-12 md:h-14"
            : "h-14 md:h-[72px]"
      }`}
    />
  </motion.div>
);

import { motion } from "framer-motion";
import thali from "@/assets/realistic-thali.png";

interface RealisticFoodProps {
  className?: string;
  hero?: boolean;
}

/**
 * Cinematic, photorealistic floating thali with a fast continuous spin.
 */
export const RealisticFood = ({ className = "", hero = false }: RealisticFoodProps) => {
  return (
    <div className={`relative pointer-events-none ${className}`} aria-hidden="true">
      {/* Warm radial glow behind the dish */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 55%, hsl(var(--terracotta) / 0.35), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Soft "steam" wisps */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-[18%] w-24 h-24 rounded-full bg-paper/60 blur-2xl"
          style={{ x: "-50%" }}
          initial={{ opacity: 0, y: 0, scale: 0.6 }}
          animate={{ opacity: [0, 0.5, 0], y: -120, scale: 1.4 }}
          transition={{
            duration: 5 + i,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Entry wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Continuous fast spin layer */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full flex items-center justify-center"
        >
          {/* Gentle float layer */}
          <motion.img
            src={thali}
            alt=""
            width={1024}
            height={1024}
            loading={hero ? "eager" : "lazy"}
            className={`w-full h-auto ${
              hero ? "max-w-[620px]" : "max-w-[480px]"
            } drop-shadow-[0_30px_60px_rgba(60,20,5,0.45)] select-none`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RealisticFood;

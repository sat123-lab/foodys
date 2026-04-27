import { motion } from "framer-motion";
import logo from "@/assets/foodys-logo.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className={`flex items-center ${className}`}
  >
    <img
      src={logo}
      alt="Foody's"
      width={160}
      height={80}
      className="h-16 md:h-20 w-auto object-contain"
    />
  </motion.div>
);

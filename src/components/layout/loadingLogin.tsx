"use client";
import { motion } from "framer-motion";

export default function LoadingLogin() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] pointer-events-none overflow-hidden"
      exit={{ opacity: 0 }}
    >
      {/* Porta Esquerda (IP) */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "0%", "0%", "-100%"] }}
        transition={{
          times: [0, 0.4, 0.6, 1], // Fecha rápido, segura, e abre
          duration: 3,
          ease: [0.87, 0, 0.13, 1],
        }}
        className="absolute inset-y-0 left-0 w-1/2 bg-igreja-teal z-50 flex items-center justify-end pr-8 border-r border-white/10 shadow-2xl"
      >
        <span className="text-white font-serif text-9xl font-bold opacity-20 select-none">
          IP
        </span>
      </motion.div>

      {/* Porta Direita (B) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: ["100%", "0%", "0%", "100%"] }}
        transition={{
          times: [0, 0.4, 0.6, 1],
          duration: 3,
          ease: [0.87, 0, 0.13, 1],
        }}
        className="absolute inset-y-0 right-0 w-1/2 bg-igreja-teal z-50 flex items-center justify-start pl-8 border-l border-white/10 shadow-2xl"
      >
        <span className="text-white font-serif text-9xl font-bold opacity-20 select-none">
          B
        </span>
      </motion.div>

      {/* Brilho no encontro das portas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute inset-0 z-[60] bg-white mix-blend-overlay"
      />
    </motion.div>
  );
}

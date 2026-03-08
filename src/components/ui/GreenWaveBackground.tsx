"use client";

import { motion } from "framer-motion";

export default function GreenWaveBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-green-900 to-green-950">

      {/* Partículas leves */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-green-200 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Onda principal */}
      <motion.svg
        viewBox="0 0 1440 320"
        className="absolute top-1/3 w-[150%] left-[-20%] opacity-60"
        animate={{ x: [0, 60, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          fill="url(#greenGradient)"
          d="M0,160L60,170C120,180,240,200,360,202.7C480,205,600,192,720,181.3C840,171,960,160,1080,170.7C1200,181,1320,213,1380,229.3L1440,245L1440,320L0,320Z"
        />

        <defs>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#4ade80" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Segunda onda */}
      <motion.svg
        viewBox="0 0 1440 320"
        className="absolute top-[45%] w-[150%] left-[-20%] opacity-40"
        animate={{ x: [0, -80, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          fill="#4ade80"
          fillOpacity="0.2"
          d="M0,96L80,112C160,128,320,160,480,170.7C640,181,800,171,960,160C1120,149,1280,139,1360,133.3L1440,128L1440,320L0,320Z"
        />
      </motion.svg>

    </div>
  );
}
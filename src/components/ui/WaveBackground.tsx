"use client";

import { motion } from "framer-motion";

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg
        className="absolute bottom-0 w-[200%] h-[95%] opacity-20"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="#0ea5e9" // Você pode trocar por um verde como #22c55e
          className="fill-igreja-teal"
          d="M0,160L60,170C120,180,240,200,360,192C480,184,600,148,720,138C840,128,960,148,1080,165C1200,182,1320,192,1380,197L1440,202V320H0Z"
          animate={{
            x: ["0%", "-50%", "0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      <svg
        className="absolute bottom-0 w-[200%] h-[80%] opacity-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="#ffffff"
          d="M0,200L80,186C160,172,320,144,480,144C640,144,800,172,960,186C1120,200,1280,200,1360,200L1440,200V320H0Z"
          animate={{
            x: ["0%", "-40%", "0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#052c2c_100%)]" />
    </div>
  );
}

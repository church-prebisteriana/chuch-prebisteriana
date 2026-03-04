"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SectionVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full 
      h-[500px]               /* Celular */
      sm:h-[600px]            /* Tablet */
      md:h-[50vh]             /* Laptop */
      lg:h-[65vh]             /* Desktop */
      xl:h-[80vh]             /* Monitor Grande */
      overflow-hidden bg-black"
    >
      {/* Vídeo de Fundo Persistente */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVisible ? "opacity-70" : "opacity-0"
        }`}
        poster="/video/video-1.jpg"
      >
        <source src="/video/video-1.mp4" type="video/mp4" />
      </video>

      {/* Camada de Contraste */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Container de Texto com Motion */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6">
        
        {/* Título: Movimento de baixo para cima */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1] // Efeito de frenagem suave
          }}
          className="
            text-2xl            /* Mobile */
            sm:text-3xl         /* Tablet */
            md:text-4xl         /* Laptop */
            lg:text-5xl         /* Desktop */
            font-black uppercase leading-tight max-w-5xl shadow-2xl tracking-tighter"
        >
          Compareça ao próximo <br className="hidden sm:block" /> evento da igreja.
        </motion.h2>

        {/* Subtítulo: Aparece logo depois com um leve atraso */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4, // Espera o título subir um pouco
            ease: "easeOut" 
          }}
          className="
            text-base           /* Mobile */
            sm:text-sm          /* Tablet */
            md:text-2xl         /* Laptop */
            lg:text-3xl         /* Desktop */
            font-medium md:font-black 
            pt-4 sm:pt-6 md:pt-10 
            opacity-90 max-w-3xl"
        >
          Te vejo no culto do próximo domingo 19:30
        </motion.p>

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import logoIgreja from "@/public/image/logo_igreja.png";
import { motion } from "framer-motion";



export default function Loading() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-white overflow-hidden"
    >
      {/* 1. O FEIXE DE LUZ (Barra que cruza a tela) */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-igreja-dourado to-transparent opacity-30"
      />

      <div className="relative flex flex-col items-center">
        
        {/* 2. LOGO COM EFEITO "REVEAL" (Surge debaixo para cima com blur) */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-20 h-20 mb-6"
        >
          <Image 
            src={logoIgreja} 
            alt="Logo" 
            fill 
            className="object-contain  contrast-125" 
          />
        </motion.div>

        {/* 3. TEXTO MINIMALISTA (Letras que se espalham) */}
        <motion.div className="overflow-hidden flex">
          {"IPB IMBITUBA".split("").map((letra, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="font-roboto text-sm tracking-[0.6em] text-slate-400 font-light"
            >
              {letra === " " ? "\u00A0" : letra}
            </motion.span>
          ))}
        </motion.div>

        {/* 4. O DETALHE FINAL: Círculo de expansão sutil */}
        <motion.div 
          animate={{ 
            scale: [1, 2],
            opacity: [0.2, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-igreja-teal rounded-full"
        />
      </div>

      {/* 5. NÚMERO PERCENTUAL (Apenas decorativo, mas passa autoridade) */}
      <motion.div 
        className="absolute bottom-10 right-10 font-mono text-xs text-slate-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        LUMEN / 2026
      </motion.div>
    </motion.div>
  );
}





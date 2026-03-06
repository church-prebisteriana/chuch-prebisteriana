"use client";

import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";

export default function SectionOne() {
  return (
    <section className="bg-gray-50 py-20 md:py-32 px-5 flex justify-center text-black overflow-hidden">
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-4xl w-full gap-6">
        {/* 1. Esquerda para Direita */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-igreja-dourado font-bold uppercase tracking-widest text-base md:text-lg">
            Bem-vindo à Igreja Presbiteriana de Imbituba
          </h2>
        </motion.div>

        {/* 2. Direita para Esquerda */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
         
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-igreja-teal leading-tight">
            Nossa Missão
          </h1>
        </motion.div>

       
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
      
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-gray-600 leading-relaxed text-lg md:text-2xl max-w-4xl text-justify">
            Existimos para ajudar as pessoas a encontrarem o caminho de volta
            para Deus através do evangelho genuíno. Alcançamos aqueles que estão
            distantes, restauramos o sonho de Deus para o mundo e reproduzimos
            essa missão em cada novo discípulo, fundamentados na soberania das
            Escrituras e no amor cristão.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="w-full md:w-auto"
        >
          <div className="pt-4 flex justify-center md:justify-start">
            <Button
              asChild
              className="bg-igreja-dourado hover:bg-igreja-dourado-dark rounded-none text-white w-full md:w-60 h-16 md:h-18 text-lg cursor-pointer transition-all"
            >
              <a
                href="/sobre-nos"
                className="flex justify-center items-center gap-2"
              >
                Conheça nossa história
                <span className="flex items-center">
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="currentColor"
                  >
                    <path d="M13 10V6H0V4H13V0L18 5L13 10Z" />
                  </svg>
                </span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

  );
}

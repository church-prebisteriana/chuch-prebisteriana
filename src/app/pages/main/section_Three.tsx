"use client";

import Image from "next/image";
import autor1 from "@/public/image/membros/pastor-emersn.jpg";
import autor2 from "@/public/image/membros/suelly.jpg";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SectionThree() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const items = [
    {
      img: autor1,
      text: "Na igreja presbiteriana nosso foco é a evangelização, a evangelização é a missão da igreja, a missão da igreja é a evangelização.",
      name: "Emerson Baran",
      position: "Pastor",
    },
    {
      img: autor2,
      text: "Coordeno o grupo de mulheres presbiterianas, buscando sempre a edificação e o serviço ao Reino de Deus.",
      name: "Suelly",
      position: "Coordenadora de Mulheres",
    },
  ];

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const time = setTimeout(nextStep, 6000);
    return () => clearTimeout(time);
  }, [index, nextStep]);

  // ... (mantenha os imports e a lógica do estado iguais)

  return (
    <section className="w-full bg-igreja-teal py-20 md:py-48 lg:py-64 px-5 flex justify-center text-white overflow-x-hidden relative">
      <div className="max-w-6xl w-full relative flex flex-col items-center">
        {/* Setas de Navegação - Ajustadas para acompanhar o novo tamanho */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center justify-between z-20">
          <button
            onClick={prevStep}
            className="pointer-events-auto md:-ml-16 lg:-ml-25 transition-transform hover:scale-110 cursor-pointer"
          >
            <ArrowLeft size={48} className="opacity-50 hover:opacity-100" />
          </button>
          <button
            onClick={nextStep}
            className="pointer-events-auto md:-mr-16 lg:-mr-20 transition-transform hover:scale-110 cursor-pointer"
          >
            <ArrowRight size={48} className="opacity-50 hover:opacity-100" />
          </button>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full"
          >
            {/* Imagem maior no Desktop */}
            <div className="relative w-40 h-40 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] flex-shrink-0">
              <Image
                src={items[index].img}
                alt={items[index].name}
                fill
                className="object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
            </div>

            <div className="flex flex-col justify-center text-center md:text-left flex-1">
              {/* Aspas maiores no Desktop */}
              <span className="text-6xl lg:text-9xl font-serif opacity-20 leading-none">
                “
              </span>

              {/* Texto do Depoimento Aumentado */}
              <p className="text-xl md:text-3xl lg:text-4xl font-ibarra italic leading-relaxed mb-10">
                {items[index].text}
              </p>

              <div className="border-l-4 border-white/30 pl-6">
                {/* Nome e Cargo Aumentados */}
                <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-widest mb-2">
                  {items[index].name}
                </h1>
                <h2 className="text-white/70 text-lg md:text-2xl font-medium">
                  {items[index].position}
                </h2>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CONTROLES MOBILE - Mantidos pequenos */}
        <div className="flex md:hidden gap-8 mt-10 z-30">
          <button onClick={prevStep} className="p-3 rounded-full bg-white/10">
            <ArrowLeft size={24} />
          </button>
          <button onClick={nextStep} className="p-3 rounded-full bg-white/10">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

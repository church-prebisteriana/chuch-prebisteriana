"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

import churchMembers from "@/public/image/index/heroSection/foto da igreja 1.jpg";

import { usePathname, useRouter } from "next/navigation";
import { historyCards, itemsFath } from "@/lib/church";


export default function SectionChurch() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const router = useRouter();
  const pathname = usePathname();

  const [itemsFathIndex, setItemsFathIndex] = useState(0);
  const [historyIndex, setHistoryIndex] = useState(0);

  const nextHistory = () =>
    setHistoryIndex((prev) => (prev + 1) % historyCards.length);

  const prevHistory = () =>
    setHistoryIndex(
      (prev) => (prev - 1 + historyCards.length) % historyCards.length
    );
  const nextFath = () =>
    setItemsFathIndex((prev) => (prev + 1) % itemsFath.length);

  const prevFath = () =>
    setItemsFathIndex(
      (prev) => (prev - 1 + itemsFath.length) % itemsFath.length
    );


  const handleNavigation = (href?: string) => {
    if (!href || href === "#") return;
    if (href === pathname) {
      return;
    }
    if (href === "/documents/contistuiçãoIPB.pdf") {
      window.open(href, "_blank", "noopener noreferrer");
      return;
    }

    router.push(href);
  };

  return (
    <section
      ref={containerRef}
      className="bg-[#fcfcfc] text-slate-900 overflow-x-hidden"
    >
      {/* 1. HERO SECTION */}
      <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src={churchMembers}
            alt="Igreja"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </motion.div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1 border border-white/30 rounded-full text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 backdrop-blur-sm">
              Desde 2023
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tighter">
              I.P. <span className="italic font-light">Imbituba</span>
            </h1>
            <div className="h-16 md:h-24 w-[1px] bg-gradient-to-b from-white to-transparent mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* 2. CARD DE BOAS-VINDAS */}
      <div className="xl:max-w-5xl 2xl:max-w-7xl mx-auto px-6 -mt-16 md:-mt-24 relative z-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-16 lg:p-20 shadow-2xl rounded-sm border-t-4 border-igreja-teal"
        >
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight tracking-tight text-slate-800">
              Uma comunidade firmada na{" "}
              <span className="text-igreja-teal">Rocha</span> e movida pela
              Graça.
            </h2>
            <p className="text-base xl:text-base 2xl:text-lg text-slate-500 leading-relaxed italic border-l-2 border-slate-100 pl-6">
              "Convidamos você a mergulhar em nossa trajetória, compreender
              nossos pilares de fé e descobrir como sua vida pode florescer em
              comunhão conosco."
            </p>
          </div>
        </motion.div>
      </div>

      {/* 3. GRID DE HISTÓRIA / CARDS PRINCIPAIS */}
      <div className="xl:max-w-5xl 2xl:max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {historyCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNavigation(item.href)}
              className={`${index === historyIndex ? "block" : "hidden md:block"
                }`}
            >
              <motion.div
                whileHover={{ y: -10 }}
               
                className="group relative aspect-[4/5] w-full overflow-hidden rounded-sm cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-igreja-teal font-mono text-[10px] tracking-[0.2em] uppercase font-bold mb-2">
                    {item.subtitle}
                  </p>
                  <h3 className="text-white text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <span className="uppercase tracking-widest group-hover:text-white transition-colors">
                      Explorar
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="flex md:hidden items-center justify-between mt-10 max-w-[200px] mx-auto">
          <button
            onClick={prevHistory}
            className="p-3 rounded-full bg-slate-900 text-white"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextHistory}
            className="p-3 rounded-full bg-slate-900 text-white"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* 4. SEÇÃO DE DOUTRINA (PADRÕES DA FÉ) */}
      <div className="bg-slate-50 py-24">
        <div className="xl:max-w-5xl 2xl:max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-12">
            <div className="max-w-2xl">
              <span className="text-igreja-teal text-center font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3 block">
                Doutrina e Instrução
              </span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 leading-tight">
                Padrões da{" "}
                <span className="font-serif italic text-igreja-teal  ">Fé</span>
              </h2>
            </div>
            <p className="max-w-xs text-slate-400 text-sm leading-relaxed">
              Documentos históricos que expressam de forma sistemática as
              verdades fundamentais das Escrituras.
            </p>
          </div>
        <div></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
            {itemsFath.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => handleNavigation(item.href)}
                className={`group flex flex-col ${index === 0 ? "md:col-span-3" : ""} ${index === itemsFathIndex ? "block" : "hidden md:block"
                  }`}
              >
                <div className={`relative overflow-hidden rounded-sm bg-white shadow-md group-hover:shadow-2xl transition-all duration-500 ${index === 0 ? "aspect-[16/6]" : "aspect-[4/5]"}`}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="mt-8">
                  <span className="font-mono text-[10px] text-slate-300 tracking-[0.3em] uppercase block mb-2">
                    Documento // 0{index + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-tighter group-hover:text-igreja-teal transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-slate-200 mt-4 group-hover:w-full group-hover:bg-igreja-teal transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex md:hidden items-center justify-between mt-10 max-w-[200px] mx-auto">
            <button
              onClick={prevFath}
              className="p-3 rounded-full bg-slate-900 text-white"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextFath}
              className="p-3 rounded-full bg-slate-900 text-white"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

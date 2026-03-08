"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

// Assets (Mantendo seus imports originais)
import churchMembers from "@/public/image/foto da igreja 1.jpg";
import photo1 from "@/public/image/foto da igreja 1.jpg";
import photo2 from "@/public/image/igreja/img_sobre_historia.png";
import photo3 from "@/public/image/igreja/manual.png";
import minister from "@/public/image/igreja/advice/pastor-emersn.jpg";
import official from "@/public/image/igreja/advice/rodrigo.jpg";
import official2 from "@/public/image/igreja/advice/ronaldo.jpg";
import confession from "@/public/image/minister/confissão de fé.png";
import catecismoMaior from "@/public/image/minister/catecismo maior.png";
import catecismoMenos from "@/public/image/minister/catecismo menor.png";
import schedule from "@/public/image/igreja/agendamento de atividades.jpg";
import { usePathname, useRouter } from "next/navigation";

export default function SectionChurch() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

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

  const itemsFath = [
    {
      title: "Confissão de fé",
      img: confession,
      href: "/church/confessionOfFaith",
    },
    {
      title: "Catecismo Maior",
      img: catecismoMaior,
      href: "/church/largeCatechism",
    },
    {
      title: "Catecismo Menor",
      img: catecismoMenos,
      href: "/church/smallCatechism",
    },
  ];

  const historyCards = [
    {
      title: "Nossa História",
      subtitle: "Imbituba",
      img: photo1,
      color: "bg-igreja-teal",
      href: "/church/hystoryIPB_Imbituba",
    },
    {
      title: "Raízes Reformadas",
      subtitle: "IPB Brasil",
      img: photo2,
      color: "bg-slate-800",
      href: "/church/hystoryIPB",
    },
    {
      title: "Nossa Doutrina",
      subtitle: "Manual",
      img: photo3,
      color: "bg-amber-700",
      href: "/documents/contistuiçãoIPB.pdf",
    },
    {
      title: "Agendamento de Atividades",
      subtitle: "Agenda",
      img: schedule,
      color: "bg-amber-700",
      href: "/church/calendar",
    },
  ];

  const council = [
    {
      name: "Emerson Baran",
      role: "Pastor Efetivo",
      photo: minister,
      bio: "Liderando com dedicação e amor à Palavra.",
    },
    {
      name: "Rodrigo Pinho",
      role: "Presbítero",
      photo: official,
      bio: "Auxiliando no pastoreio e governo da igreja local.",
    },
    {
      name: "Ronaldo Damazio",
      role: "Tesoureiro",
      photo: official2,
      bio: "Zelando com integridade pela mordomia cristã.",
    },
  ];

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

  useEffect(() => {
    const updateSize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const nextStep = useCallback(() => {
    setIndex((prev) => (prev + 1) % council.length);
  }, [council.length]);

  const prevStep = useCallback(() => {
    setIndex((prev) => (prev - 1 + council.length) % council.length);
  }, [council.length]);

  // const visibleItems = Array.from({ length: itemsToShow }).map((_, i) => {
  //   return adviceList[(index + i) % adviceList.length];
  // });

  const visibleItems: any = [];
  for (let i = 0; i < itemsToShow; i++) {
    const skip = (index + i) % council.length;
    visibleItems.push(council[skip]);
  }

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
              Desde 2017
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tighter">
              IPB <span className="italic font-light">Imbituba</span>
            </h1>
            <div className="h-16 md:h-24 w-[1px] bg-gradient-to-b from-white to-transparent mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* 2. CARD DE BOAS-VINDAS */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 md:-mt-24 relative z-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-16 lg:p-20 shadow-2xl rounded-sm border-t-4 border-igreja-teal"
        >
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-slate-800">
              Uma comunidade firmada na{" "}
              <span className="text-igreja-teal">Rocha</span> e movida pela
              Graça.
            </h2>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed italic border-l-2 border-slate-100 pl-6">
              "Convidamos você a mergulhar em nossa trajetória, compreender
              nossos pilares de fé e descobrir como sua vida pode florescer em
              comunhão conosco."
            </p>
          </div>
        </motion.div>
      </div>

      {/* 3. GRID DE HISTÓRIA / CARDS PRINCIPAIS */}
      <div className="max-w-[1440px] mx-auto px-6 py-24">
        {/* Grid Responsivo: 1 col (mobile), 2 col (tablet), 3 col (laptop), 4 col (desktop grande) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {historyCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleNavigation(item.href)}
              // Lógica de visibilidade mobile: só mostra o ativo se for carrossel, ou grid normal em telas maiores
              className={`${
                index === historyIndex ? "block" : "hidden sm:block"
              }`}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-[450px] md:h-[550px] w-full overflow-hidden rounded-xl cursor-pointer shadow-lg"
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

        {/* Controles Carrossel Mobile (História) */}
        <div className="flex sm:hidden items-center justify-between mt-8 max-w-[200px] mx-auto">
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-12">
            <div className="max-w-2xl">
              <span className="text-igreja-teal font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3 block">
                Doutrina e Instrução
              </span>
              <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-slate-900 leading-tight">
                Padrões da{" "}
                <span className="font-serif italic text-igreja-teal">Fé</span>
              </h2>
            </div>
            <p className="max-w-xs text-slate-400 text-sm leading-relaxed">
              Documentos históricos que expressam de forma sistemática as
              verdades fundamentais das Escrituras.
            </p>
          </div>

          {/* Grid Doutrina: 1 col (mobile), 3 col (desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {itemsFath.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => handleNavigation(item.href)}
                className={`group flex flex-col ${
                  index === itemsFathIndex ? "block" : "hidden md:block"
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-white shadow-md group-hover:shadow-2xl transition-all duration-500">
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

          {/* Controles Carrossel Mobile (Doutrina) */}
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

      {/* 5. SEÇÃO CONSELHO (ESTILO EDITORIAL) */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-20 gap-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-igreja-teal" />
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-slate-400">
              Liderança e Governo
            </h2>
          </div>
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-slate-900">
            O{" "}
            <span className="font-serif italic text-igreja-teal">Conselho</span>
          </h2>
        </div>

        {/* Layout de Destaque para o Conselho (Mantendo sua lógica de Slide) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white p-6 md:p-12 rounded-xl shadow-sm border border-slate-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={council[index].name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="relative aspect-square w-full max-w-md mx-auto"
            >
              <Image
                src={council[index].photo}
                alt={council[index].name}
                fill
                className="object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col justify-center">
            <span className="text-igreja-teal font-mono text-sm tracking-widest uppercase mb-4 block">
              {council[index].role}
            </span>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 leading-none mb-6 uppercase tracking-tighter">
              {council[index].name}
            </h3>
            <p className="text-slate-500 text-xl leading-relaxed italic border-l-4 border-igreja-teal/20 pl-6 mb-8">
              "{council[index].bio}"
            </p>

            <div className="flex items-center gap-6 mt-4">
              <button
                onClick={() =>
                  setIndex(
                    (prev) => (prev - 1 + council.length) % council.length
                  )
                }
                className="p-4 rounded-full bg-slate-900 text-white hover:bg-igreja-teal transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={() => setIndex((prev) => (prev + 1) % council.length)}
                className="p-4 rounded-full bg-slate-900 text-white hover:bg-igreja-teal transition-colors"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

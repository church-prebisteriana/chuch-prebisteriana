// "use client";

// import Image from "next/image";
// import churchMembers from "@/public/image/foto da igreja 1.jpg";
// import { motion } from "framer-motion";
// import HeroSection from "@/src/components/ui/HeroBanner";
// import { Button } from "@/src/components/ui/button";
// import { NavItem } from "@/lib/utils";
// import photo1 from "@/public/image/foto da igreja 1.jpg";
// import photo2 from "@/public/image/igreja/img_sobre_historia.png";
// import photo3 from "@/public/image/igreja/manual.png";
// import minister from "@/public/image/igreja/advice/pastor-emersn.jpg";
// import official from "@/public/image/igreja/advice/rodrigo.jpg";
// import official2 from "@/public/image/igreja/advice/ronaldo.jpg";
// import { useCallback, useEffect, useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// export default function SectionChurch() {
//   const [index, setIndex] = useState(0);
//   const [itemsToShow, setItemsToShow] = useState(3);
//   const items: NavItem[] = [
//     {
//       title: "Conheça a História da IPB de Imbituba",

//       img: photo1,
//     },
//     {
//       title: "História da IPB do Brasil",

//       img: photo2,
//     },
//     {
//       title: "Manual",

//       img: photo3,
//     },
//   ];

//   const adviceList = [
//     { name: "Emerson Baran", position: "Pastor", photo: minister },
//     { name: "Rodrigo Pinho", position: "Assistente", photo: official },
//     { name: "Ronaldo Damazio", position: "Tesoureiro", photo: official2 },
//   ];

//   useEffect(() => {
//     const updateSize = () => {
//       // Se a tela for menor que 768px (Mobile/Tablet), mostramos apenas 1
//       // Caso contrário (Desktop), mostramos 3
//       setItemsToShow(window.innerWidth < 768 ? 1 : 3);
//     };

//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   const nextStep = useCallback(() => {
//     setIndex((prev) => (prev + 1) % adviceList.length);
//   }, [adviceList.length]);

//   const prevStep = useCallback(() => {
//     setIndex((prev) => (prev - 1 + adviceList.length) % adviceList.length);
//   }, [adviceList.length]);

//   // Esta função pega a lista e "rotaciona" para que sempre mostre a quantidade certa
//   // const visibleItems = Array.from({ length: itemsToShow }).map((_, i) => {
//   //   return adviceList[(index + i) % adviceList.length];
//   // });

//   const visibleItems = [];
//   for (let i = 0; i < itemsToShow; i++) {
//     const skip = (index + i) % adviceList.length;
//     visibleItems.push(adviceList[skip]);
//   }

//   return (
//     <section className="bg-gray-100 overflow-hidden ">
//       <HeroSection
//         title="Igreja Presbiteriana de Imbituba"
//         image={churchMembers}
//       />

//       <div className="flex justify-center items-center mt-20">
//         <div className="flex flex-col items-center md:items-center text-center md:text-center max-w-8xl w-full gap-8">
//           {/* 2. Direita para Esquerda */}
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           >
//             <h1 className="text-4xl md:text-6xl font-black text-igreja-teal leading-tight">
//               A Igreja
//             </h1>
//           </motion.div>

//           {/* 3. Baixo para Cima (Tempo 1) */}
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//           >
//             <p className="text-gray-600 leading-relaxed text-lg md:text-4xl max-w-4xl text-justify">
//               Nesta sensão conhecerá a igreja presbiteriana de imbituba, sua
//               história, crenças e missão e como você pode se envolver na igreja.
//             </p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-6 md:gap-10 px-6 mt-10">
//             {items.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 30, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="relative group overflow-hidden  shadow-md cursor-pointer"
//               >
//                 <Image
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
//                 />
//                 {/* Overlay: sempre visível no mobile, hover no desktop */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/50">
//                   <h2 className="text-white text-xl md:text-2xl font-bold uppercase tracking-widest text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     {item.title}
//                   </h2>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//           <div className="flex flex-col items-center mt-20 bg-igreja-teal w-full px-6 md:px-24 py-16 md:py-20">
//             <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-10 text-center">
//               CONHEÇA A ORGANIZAÇÃO DO CONSELHO
//             </h1>

//             <div className="relative flex items-center justify-center w-full max-w-6xl mt-10">
//               {/* Botões Desktop */}
//               <div className="hidden md:flex absolute -left-20 -right-20 lg:-left-20 lg:-right-20 top-1/2 -translate-y-1/2 justify-between pointer-events-none z-30">
//                 <button
//                   onClick={prevStep}
//                   className="pointer-events-auto p-2 text-white hover:scale-125 transition-transform"
//                 >
//                   <ArrowLeft
//                     size={48}
//                     className="opacity-60 hover:opacity-100"
//                   />
//                 </button>

//                 <button
//                   onClick={nextStep}
//                   className="pointer-events-auto p-2 text-white hover:scale-125 transition-transform"
//                 >
//                   <ArrowRight
//                     size={48}
//                     className="opacity-60 hover:opacity-100"
//                   />
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 w-full justify-items-center">
//                 {visibleItems.map((item, idx) => (
//                   <motion.div
//                     key={`${item.name}-${idx}`}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.4 }}
//                     className="relative group overflow-hidden shadow-lg cursor-pointer w-full aspect-[3/4] max-w-[250px] md:max-w-[25vh] rounded-lg md:rounded-xl"
//                   >
//                     <Image
//                       src={item.photo}
//                       alt={item.name}
//                       className="w-full h-full object-cover transition-transform opacity-85 duration-700 group-hover:scale-110"
//                     />

//                     {/* OVERLAY: Escurece apenas no Hover */}
//                     <div className="absolute inset-0 bg-transparent group-hover:bg-black/40 transition-colors duration-500 flex flex-col items-center justify-end pb-6 md:pb-8">
//                       <div className="text-center px-1">
//                         <h2 className="text-white text-lg md:text-2xl font-bold uppercase tracking-widest">
//                           {item.name}
//                         </h2>
//                         <p className="text-white text-xs md:text-lg font-bold uppercase mt-1">
//                           {item.position}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex md:hidden gap-8 mt-10 z-30">
//               <button
//                 onClick={prevStep}
//                 className="p-3 rounded-full bg-white/10 text-white"
//               >
//                 <ArrowLeft size={24} />
//               </button>
//               <button
//                 onClick={nextStep}
//                 className="p-3 rounded-full bg-white/10 text-white"
//               >
//                 <ArrowRight size={24} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Quote,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

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
import { usePathname, useRouter } from "next/navigation";

export default function SectionChurch() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentIndex2, setCurrentIndex2] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const nextItem2 = () => {
    setCurrentIndex2((prev) => (prev + 1) % historyCards.length);
  };

  const prevItem2 = () => {
    setCurrentIndex2(
      (prev) => (prev - 1 + historyCards.length) % historyCards.length
    );
  };

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % itemsFath.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + itemsFath.length) % itemsFath.length);
  };

  const itemsFath = [
    { title: "Confissão de fé", img: confession },
    { title: "Catecismo Maior", img: catecismoMaior },
    { title: "Catecismo Menor", img: catecismoMenos },
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
      href: "/church/hystoryIPB_Imbituba",
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

    router.push(href);
  };

  useEffect(() => {
    const updateSize = () => {
      // Se a tela for menor que 768px (Mobile/Tablet), mostramos apenas 1
      // Caso contrário (Desktop), mostramos 3
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

  // Esta função pega a lista e "rotaciona" para que sempre mostre a quantidade certa
  // const visibleItems = Array.from({ length: itemsToShow }).map((_, i) => {
  //   return adviceList[(index + i) % adviceList.length];
  // });

  const visibleItems: any = [];
  for (let i = 0; i < itemsToShow; i++) {
    const skip = (index + i) % council.length;
    visibleItems.push(council[skip]);
  }

  return (
    <section ref={containerRef} className="bg-[#fcfcfc] text-slate-900 ">
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1 border border-white/30 rounded-full text-white/80 text-sm tracking-[0.3em] uppercase mb-6 backdrop-blur-sm">
              Desde 2017
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tighter">
              IPB <span className="italic font-light">Imbituba</span>
            </h1>
            <div className="h-20 w-[1px] bg-gradient-to-b from-white to-transparent mx-auto" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
          <div className="bg-white p-10 md:p-20 shadow-2xl rounded-sm border-t-4 border-igreja-teal">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-slate-800">
                Uma comunidade firmada na{" "}
                <span className="text-igreja-teal">Rocha</span> e movida pela
                Graça.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed italic border-l-2 border-slate-100 pl-6">
                "Nesta seção, convidamos você a mergulhar em nossa trajetória,
                compreender nossos pilares de fé e descobrir como sua vida pode
                florescer em comunhão conosco."
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {historyCards.map((item, index) => {
            // Lógica de visibilidade: No mobile apenas o currentIndex2 aparece
            const isVisible = index === currentIndex2;

            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => handleNavigation(item.href)}
                // Flex no desktop, Hidden no mobile se não for o ativo
                className={`w-full ${isVisible ? "flex" : "hidden lg:flex"}`}
              >
                <motion.div
                  whileHover={{ y: -15 }}
                  className="group relative h-[400px] md:h-[500px] w-full max-w-[450px] mx-auto overflow-hidden rounded-2xl cursor-pointer shadow-xl border border-white/5"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                  />

                  {/* Overlay de gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />

                  <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full transform transition-all duration-500">
                    <p className="text-igreja-teal font-mono text-xs mb-2 tracking-[0.2em] uppercase font-bold">
                      {item.subtitle}
                    </p>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-white/60 text-sm group-hover:text-white transition-colors">
                      <span className="font-semibold uppercase tracking-wider text-xs">
                        Explorar
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Controles do Carrossel de História (Visíveis apenas no Mobile/Tablet pequeno) */}
        <div className="flex lg:hidden items-center justify-between mt-10 px-4 max-w-[450px] mx-auto">
          <button
            onClick={prevItem2}
            
            className="p-4 rounded-full bg-zinc-900 text-white active:scale-95 transition-transform"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex gap-2">
            {historyCards.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === currentIndex2 ? "w-8 bg-igreja-teal" : "w-2 bg-zinc-200"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextItem2}
            className="p-4 rounded-full bg-zinc-900 text-white active:scale-95 transition-transform"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="mt-32 mb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-6 border-b border-zinc-100 pb-10">
        <div className="text-left">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-igreja-teal font-bold tracking-[0.4em] uppercase text-xs mb-2 block"
          >
            Doutrina e Instrução
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-light tracking-tighter text-zinc-900 leading-none"
          >
            Padrões da{" "}
            <span className="font-serif italic text-igreja-teal">Fé</span>
          </motion.h1>
        </div>
        <p className="max-w-xs text-zinc-400 text-sm leading-relaxed mb-2">
          Documentos históricos que expressam de forma sistemática as verdades
          fundamentais das Escrituras.
        </p>
      </div>

      {/* Grid Desktop / Carousel Mobile */}
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Container dos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 md:mb-24">
          {itemsFath.map((item, index) => {
            // No mobile, escondemos os itens que não são o currentIndex
            const isVisible = index === currentIndex;

            return (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                // Classe crucial: flex no desktop, hidden no mobile se não for o ativo
                className={`group flex-col cursor-pointer ${
                  isVisible ? "flex" : "hidden md:flex"
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-igreja-teal/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="mt-8 flex flex-col gap-2 relative">
                  <span className="font-mono text-[10px] text-zinc-300 tracking-[0.3em] uppercase">
                    Documento // 0{index + 1}
                  </span>
                  <h2 className="text-2xl font-bold text-zinc-800 uppercase tracking-tighter transition-colors group-hover:text-igreja-teal">
                    {item.title}
                  </h2>
                  <div className="w-8 h-px bg-zinc-200 mt-4 group-hover:w-full group-hover:bg-igreja-teal transition-all duration-700" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controles do Carrossel (Visíveis apenas no Mobile) */}
        <div className="flex md:hidden items-center justify-between mt-10 px-4">
          <button
            onClick={prevItem}
            className="p-4 rounded-full bg-zinc-900 text-white active:scale-95 transition-transform"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex gap-2">
            {itemsFath.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === currentIndex ? "w-8 bg-igreja-teal" : "w-2 bg-zinc-200"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextItem}
            className="p-4 rounded-full bg-zinc-900 text-white active:scale-95 transition-transform"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="mt-32 w-full bg-white overflow-hidden border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-24">
          {/* Cabeçalho: Direita para o Centro e Esquerda para o Centro */}
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <span className="h-px w-12 bg-igreja-teal" />
              <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-zinc-400">
                Governo Local
              </h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light tracking-tighter text-zinc-900"
            >
              O{" "}
              <span className="font-serif italic text-igreja-teal">
                Conselho
              </span>
            </motion.h1>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="hidden md:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 justify-between pointer-events-none z-30 px-4">
              <button
                onClick={prevStep}
                className="pointer-events-auto w-16 h-16 bg-zinc-900 text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-igreja-teal hover:scale-125 active:scale-95 -translate-x-1/2"
              >
                <ArrowLeft size={24} />
              </button>

              <button
                onClick={nextStep}
                className="pointer-events-auto w-16 h-16 bg-zinc-900 text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-igreja-teal hover:scale-125 active:scale-95 translate-x-1/2"
              >
                <ArrowRight size={24} />
              </button>
            </div>

            {/* LADO ESQUERDO: Vem da Esquerda para o Centro */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={visibleItems[0].name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto"
                >
                  <div className="absolute -inset-4 border border-zinc-100 rounded-sm -z-10 translate-x-8 translate-y-8" />
                  <Image
                    src={visibleItems[0].photo}
                    alt={visibleItems[0].name}
                    fill
                    className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navegação Mobile */}
              <div className="flex justify-center md:hidden gap-8 mt-10 z-30">
                <button
                  onClick={prevStep}
                  className="pointer-events-auto w-16 h-16 bg-zinc-900 text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-igreja-teal hover:scale-125 active:scale-95"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={nextStep}
                  className="pointer-events-auto w-16 h-16 bg-zinc-900 text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-igreja-teal hover:scale-125 active:scale-95"
                >
                  <ArrowRight size={24} />
                </button>
              </div>

              {/* Navegação Desktop */}
            </motion.div>

            {/* LADO DIREITO: Vem da Direita para o Centro */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={visibleItems[0].name + "info"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-igreja-teal font-mono text-sm tracking-widest uppercase mb-4 block">
                    {visibleItems[0].role}
                  </span>
                  <h3 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-none mb-8 tracking-tighter uppercase">
                    {visibleItems[0].name}
                  </h3>
                  <div className="relative py-10 border-y border-zinc-100">
                    <p className="text-zinc-500 text-xl md:text-2xl leading-relaxed font-light italic">
                      "{visibleItems[0].bio}"
                    </p>
                    <span className="absolute top-4 left-0 text-8xl text-zinc-50 opacity-10 font-serif leading-none select-none">
                      “
                    </span>
                  </div>
                  <div className="mt-12 flex items-center gap-6">
                    <div className="flex gap-1">
                      {council.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 transition-all duration-500 ${
                            visibleItems[0].name === council[i].name
                              ? "w-12 bg-igreja-teal"
                              : "w-4 bg-zinc-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
                      Liderança Oficial
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className="mt-32 w-full bg-white overflow-hidden border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-24">
         
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-igreja-teal" />
              <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-zinc-400">
                Governo Local
              </h2>
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-zinc-900">
              O{" "}
              <span className="font-serif italic text-igreja-teal">
                Conselho
              </span>
            </h1>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={visibleItems[0].name} // Focado no item central ou primeiro visível
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto"
                >
                  
                  <div className="absolute -inset-4 border border-zinc-100 rounded-sm -z-10 translate-x-8 translate-y-8" />

                  <Image
                    src={visibleItems[0].photo}
                    alt={visibleItems[0].name}
                    fill
                    className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  />
                </motion.div>
                <div className="flex justify-center md:hidden gap-8 mt-10 z-30">
                  <button
                    onClick={prevStep}
                    className=" pointer-events-auto w-16 h-16 bg-zinc-900 text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-igreja-teal hover:scale-125 active:scale-95"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <button
                    onClick={nextStep}
                    className="pointer-events-auto w-16 h-16 bg-zinc-900 text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-igreja-teal hover:scale-125 active:scale-95"
                  >
                    <ArrowRight size={24} />
                  </button>
                </div>
              </AnimatePresence>

            
              <div className="relative flex items-center justify-center w-full max-w-6xl mt-10"></div>
              <div className="hidden md:flex absolute -left-20 -right-20 lg:-left-20 lg:-right-180 top-1/2 -translate-y-1/2 justify-between pointer-events-none z-30">
                <button
                  onClick={prevStep}
                  className="pointer-events-auto w-16 h-16 bg-zinc-900 text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-igreja-teal hover:scale-125 active:scale-95"
                >
                  <ArrowLeft size={24} />
                </button>

                <button
                  onClick={nextStep}
                  className="pointer-events-auto w-16 h-16 bg-zinc-900 text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-igreja-teal hover:scale-125 active:scale-95"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>


            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={visibleItems[0].name + "info"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-igreja-teal font-mono text-sm tracking-widest uppercase mb-4 block">
                    {visibleItems[0].role}
                  </span>

                  <h3 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-none mb-8 tracking-tighter uppercase">
                    {visibleItems[0].name}
                  </h3>

                  <div className="relative py-10 border-y border-zinc-100">
                    <p className="text-zinc-500 text-xl md:text-2xl leading-relaxed font-light italic italic">
                      "{visibleItems[0].bio}"
                    </p>
                   
                    <span className="absolute top-4 left-0 text-8xl text-zinc-50 opacity-10 font-serif leading-none select-none">
                      “
                    </span>
                  </div>

                  <div className="mt-12 flex items-center gap-6">
                    <div className="flex gap-1">
                      
                      {council.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 transition-all duration-500 ${
                            visibleItems[0].name === council[i].name
                              ? "w-12 bg-igreja-teal"
                              : "w-4 bg-zinc-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
                      Liderança Oficial
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

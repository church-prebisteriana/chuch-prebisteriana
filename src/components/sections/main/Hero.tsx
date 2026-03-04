// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import logoIgreja from "@/src/app/image/logo_igreja.png";
// import ImageHome from "../../ui/ImagensHome";
// import { usePathname } from "next/navigation";

// export default function Hero() {
//   const pathname = usePathname();
//   return (
//     /* h-[80vh] fixa a altura no mobile para o justify-center funcionar */
//     <div className="relative w-full h-[80vh] md:h-screen bg-black overflow-hidden">
//       {/* 1. Fundo de Imagens */}
//       <div className="absolute inset-0 z-0">
//         <ImageHome />
//       </div>

//       {/* 2. Overlay escuro ajustado para mobile */}
//       <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

//       <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.5 }}
//           className="max-w-5xl"
//         >
//           <h1 className="font-serif text-white text-4xl md:text-7xl italic font-light leading-tight tracking-tight">
//             "Porque dele, e por meio dele, e para ele são{" "}
//             <span className="text-igreja-teal">todas as coisas.</span>"
//           </h1>
//           <p className="text-white/50 font-mono text-sm tracking-[0.5em] uppercase mt-12">
//             Igreja Presbiteriana de Imbituba
//           </p>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 15, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-10 w-px h-24 bg-gradient-to-b from-igreja-teal to-transparent"
//         />
//       </div>
//     </div>

//     // Substitua o conteúdo do Hero por este conceito:
//   );
// }

"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageHome from "../../ui/ImagensHome";
import logoIgreja from "@/src/app/image/logo_igreja.png";
export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative w-full h-screen bg-igreja-teal flex flex-col md:flex-row overflow-hidden">
      {/* Lado Esquerdo: Imagem com Máscara e Movimento */}
      <motion.div
        style={{ y: y2 }}
        className="relative w-full md:w-7/12 h-1/2 md:h-full overflow-hidden"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent hidden md:block" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden" />
        <ImageHome />
      </motion.div>

      {/* Lado Direito: Conteúdo Tipográfico Assimétrico */}
      <div className="relative w-full md:w-5/12 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-12 z-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Label Minimalista */}
          <span className="inline-block px-3 py-1 border border-igreja-dourado/50 text-white text-[10px] tracking-[0.3em] uppercase mb-8">
            Imbituba • SC
          </span>

          {/* Título com Serif Moderno e Quebra Irregular */}
          <h1 className="text-white text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
            Tudo <br />
            <span className="italic text-transparent pr-4 bg-clip-text bg-gradient-to-r from-igreja-teal to-white/60">
              por Ele
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/40 mt-8 max-w-sm font-light leading-relaxed text-lg"
          >
            Porque dele, por meio dele, e para ele são{" "}
            <span className="text-white/80 italic">todas as coisas</span>.
          </motion.p>
        </motion.div>

        {/* Call to Action Minimalista */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 w-24 h-px bg-igreja-teal origin-left"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-4 flex items-center gap-4"
        >
          <Image src={logoIgreja} alt="Logo igreja" width={30} />
          <p className="text-[15px] text-white/30 font-mono tracking-widest uppercase">
            Igreja Presbiteriana
          </p>
        </motion.div>
      </div>

      {/* Elemento Flutuante de Scroll (Lateral) */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4">
        <span className="[writing-mode:vertical-lr] text-[10px] text-white/20 tracking-[0.5em] uppercase">
          Deslize
        </span>
        <motion.div
          animate={{ height: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px bg-igreja-teal"
        />
      </div>

      {/* Ruído de Textura (Overlay) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
    </section>
  );
}

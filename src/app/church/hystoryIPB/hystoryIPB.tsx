"use client";

import HeroSection from "@/src/components/ui/HeroBanner";
import photo1 from "@/public/image/hystoryIPB/IGREJA PREBISTERIANA.jpg";
import { motion } from "framer-motion";
import logoIPB from "@/public/image/logo_igreja.png";
import Image from "next/image";

export default function HystoryIPB() {
  return (
    <main className="bg-[#fdfdfd] text-zinc-900 selection:bg-igreja-dourado selection:text-white">
      {/* Hero Cinematográfico */}
      <HeroSection title="Legado e Fé" image={photo1} />

      {/* Container Principal Estilo Revista */}
      <article className="max-w-5xl mx-auto px-6 py-16 md:py-28">
        {/* Cabeçalho Editorial */}
        <header className="border-b border-gray-300 pb-12 mb-16">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-igreja-teal mb-6 leading-tight">
              Breve História da <br />
              <span className="text-igreja-dourado-dark">
                Igreja Presbiteriana do Brasil
              </span>
            </h1>
            <div className="w-32 h-2 bg-igreja-dourado"></div>
          </motion.div>
        </header>

        {/* Corpo do Texto */}
        <div className="space-y-10 text-zinc-800 leading-relaxed">
          {/* Início com Letra Capitular */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl first-letter:text-7xl first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:text-igreja-teal text-justify font-serif">
              A Igreja Presbiteriana do Brasil (IPB) tem uma história rica e
              significativa que remonta ao século XIX. Seu surgimento está
              intrinsecamente ligado ao trabalho missionário de Ashbel Green
              Simonton (1833-1867), um jovem pastor norte-americano que
              desembarcou no Rio de Janeiro em 12 de agosto de 1859.
            </p>
          </motion.div>

          {/* Citação em Destaque */}
          <motion.section
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-igreja-dourado my-16 italic"
          >
            <p className="text-2xl md:text-3xl font-serif text-gray-700 leading-snug">
              "Simonton, juntamente com o Rev. José Manoel da Conceição, o
              primeiro pastor evangélico brasileiro, foram as figuras mais
              notáveis dos primórdios."
            </p>
          </motion.section>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-justify">
              O Rev. Simonton enfrentou desafios significativos ao estabelecer a
              primeira igreja presbiteriana no Rio de Janeiro. Ele pregou seu
              primeiro sermão em português em 1860 e fundou a Primeira Igreja
              Presbiteriana do Rio de Janeiro. Simonton também foi responsável
              pela criação do primeiro jornal evangélico do país, a
              <span className="font-bold text-igreja-teal ml-1 underline decoration-igreja-dourado/40">
                Imprensa Evangélica
              </span>
              .
            </p>
          </motion.div>

          {/* Grid de Informações Rápidas (Desktop 2 col / Mobile 1 col) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}   
              className="bg-igreja-teal text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="font-black text-2xl mb-4 uppercase tracking-widest border-b border-white/20 pb-2">
                  Expansão
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  A IPB cresceu rapidamente, estabelecendo igrejas em várias
                  cidades do Brasil, tornando-se uma federação que compartilha
                  teologia e governo comuns.
                </p>
              </div>
              <span className="text-4xl mt-6 opacity-20">⛪</span>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-100 p-8 rounded-3xl border border-zinc-200 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="font-black text-2xl text-igreja-teal mb-4 uppercase tracking-widest border-b border-zinc-300 pb-2">
                  Doutrina
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Fundamentada na Confissão de Fé de Westminster, focando na
                  soberania de Deus e na autoridade das Escrituras.
                </p>
              </div>
              <span className="text-4xl mt-6 opacity-20">📖</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-justify">
              A base doutrinária da IPB está fundamentada na Confissão de Fé de
              Westminster. Essa confissão sintetiza as principais crenças,
              incluindo a soberania de Deus, a salvação pela graça e a
              centralidade de Cristo. A IPB crê na Trindade, na depravação total
              do ser humano, na justificação pela fé, na ressurreição dos mortos
              e na volta de Cristo.
            </p>
          </motion.div>

          {/* Seção Final de Impacto */}

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <footer className="mt-20 pt-16 border-t border-zinc-200">
              <div className="bg-igreja-teal text-white p-10 md:p-16 rounded-[40px] text-center space-y-6">
                <h4 className="text-igreja-dourado font-bold uppercase tracking-widest text-sm">
                  Legado Continuado
                </h4>
                <p className="text-xl md:text-3xl font-light leading-relaxed">
                  "A IPB tem desempenhado um papel vital na vida religiosa e
                  social do Brasil, promovendo a fé reformada, a educação e a
                  ação social."
                </p>
                <div className="flex justify-center gap-4 text-3xl">
                  <Image src={logoIPB} alt="Logo IPB" width={60} />
                </div>
              </div>
            </footer>
          </motion.div>
        </div>
      </article>
    </main>
  );
}

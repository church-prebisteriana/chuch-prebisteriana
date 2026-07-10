"use client";
import HeroSection from "@/src/components/ui/HeroBanner";
import photos1 from "@/public/image/feargod/fearfod.jpg";
import { motion } from "framer-motion";

export default function ContentfearGod() {
  // Configuração de animação para os blocos de texto
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <div className="bg-white pb-20">
      {/* Hero com título impactante */}
      <HeroSection title="Palavra Pastoral para 2026" image={photos1} />

      <article className="max-w-5xl mx-auto px-6 mt-16 md:mt-24">
        {/* 1. Bloco de Destaque do Tema */}
        <motion.div
          {...fadeInUp}
          className="border-l-4 border-igreja-dourado pl-6 py-4 mb-12 bg-gray-50 italic text-xl md:text-3xl text-igreja-teal font-serif"
        >
          “Sacerdotes do Mediador Jesus”
          <span className="block text-sm mt-2 font-sans font-bold not-italic text-gray-400">
            Tema Pastoral de 2026
          </span>
        </motion.div>

        {/* 2. Introdução com Letra Capitular (Estilo Editorial) */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-8"
        >
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-igreja-teal first-letter:mr-3 first-letter:float-left">
            Amados irmãos da Igreja Presbiteriana de Imbituba, a Palavra
            Pastoral para 2026 se ergue sob o tema: “Sacerdotes do Mediador
            Jesus”.
          </p>
        </motion.div>

        {/* 3. Corpo do Texto - Dividido em Parágrafos para melhor leitura */}
        <div className="space-y-8 text-gray-600 text-2xl leading-relaxed text-justify">
          <motion.p {...fadeInUp} transition={{ delay: 0.3 }}>
            Neste ano, somos chamados a viver e exercer plenamente nosso{" "}
            <span className="text-igreja-teal font-semibold">
              sacerdócio real
            </span>
            . As orientações pastorais para aprofundarmos nessa vocação serão
            transmitidas através do nosso Devocionário Diário de 2026, que
            trará subtemas mensais para a nossa reflexão e crescimento.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden p-8 rounded-2xl bg-igreja-teal text-white my-12"
          >
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <svg
                width="200"
                height="200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.948 1.561c-3.22 1.962-3.033 7.403-2.948 10.164h-8zm-13 0c0-5.141 3.892-10.519 10-11.725l.948 1.561c-3.22 1.962-3.033 7.403-2.948 10.164h-8z" />
              </svg>
            </div>
            <p className="relative z-10 text-xl md:text-3xl font-serif italic mb-4">
              Nossa área de atuação prática será guiada pelo acróstico DOCES.
              Que estas cinco colunas nos sustentem.
            </p>
            <ul className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-3 text-sm md:text-base font-sans not-italic">
              <li className="bg-white/10 rounded-lg px-3 py-2 text-center">
                <span className="block font-bold text-igreja-dourado">D</span>
                Discipulado
              </li>
              <li className="bg-white/10 rounded-lg px-3 py-2 text-center">
                <span className="block font-bold text-igreja-dourado">O</span>
                Oração
              </li>
              <li className="bg-white/10 rounded-lg px-3 py-2 text-center">
                <span className="block font-bold text-igreja-dourado">C</span>
                Comunhão
              </li>
              <li className="bg-white/10 rounded-lg px-3 py-2 text-center">
                <span className="block font-bold text-igreja-dourado">E</span>
                Evangelização
              </li>
              <li className="bg-white/10 rounded-lg px-3 py-2 text-center">
                <span className="block font-bold text-igreja-dourado">S</span>
                Santificação
              </li>
            </ul>
          </motion.div>

          <motion.p {...fadeInUp} transition={{ delay: 0.5 }}>
            Nosso anuário 2026, além de conter este guia devocional e as
            direções, trará informações gerais da igreja, planejamento anual,
            atividades agendadas, a{" "}
            <span className="text-igreja-dourado font-bold italic">
              lista atualizada de nossa membresia
            </span>{" "}
            e uma lista de cânticos para a edificação.
          </motion.p>

          {/* 4. Conclusão / Assinatura Pastoral */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-16 p-10 border-2 border-dashed border-igreja-dourado/30 rounded-3xl text-center"
          >
            <h3 className="text-2xl md:text-4xl font-serif text-igreja-teal mb-4 italic">
              Que sejamos sacerdotes fiéis a Cristo, nosso Mediador.
            </h3>
            <p className="text-gray-500 mb-6 uppercase tracking-widest text-sm">
              Pastor Emerson
            </p>
            <div className="w-16 h-1 bg-igreja-dourado mx-auto"></div>
          </motion.div>
        </div>
      </article>

      {/* Footer do Artigo decorativo */}
      <footer className="max-w-4xl mx-auto px-6 mt-20 flex items-center justify-between border-t border-gray-100 pt-8 text-gray-400 text-sm">
        <p>Publicado por Igreja Presbiteriana de Imbituba</p>
        <div className="flex gap-4">
          <span className="hover:text-igreja-dourado cursor-pointer">
            Compartilhar
          </span>
        </div>
      </footer>
    </div>
  );
}

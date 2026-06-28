"use client";

import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";


export default function SectionOne() {

  return (
    <section className="bg-gray-50 py-20 md:py-32 px-5 flex justify-center text-black overflow-hidden">
      <div className="flex flex-col items-center md:items-start text-center md:text-left xl:max-w-3xl 2xl:max-w-4xl w-full gap-6">
        {/* 1. Esquerda para Direita */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}

          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-igreja-dourado xl:text-sm 2xl:text-lg font-bold uppercase tracking-widest text-base ">
            Bem-vindo à Igreja Presbiteriana de Imbituba
          </h2>
        </motion.div>

        {/* 2. Direita para Esquerda */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}

          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-black text-igreja-teal leading-tight">
            Nossa Missão
          </h1>
        </motion.div>


        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-gray-600 leading-relaxed text-lg xl:text-base md:text-xl xl:max-w-3xl 2xl:max-w-4xl text-justify">
            A I.P. de Imbituba existe para glorificar ao Rei mediador Jesus Cristo por meio do cumprimento de aliança através: da verdadeira adoração bíblica; da formação de discípulos de Cristo por meio do ensino bíblico de linha reformada; do envolvimento missionário local e global; da comunhão e do envolvimento dos irmãos com seus dons em ministérios; de vidas consagradas ao Senhor em oração e santificação.
          </p>
        </motion.div>


        {/* Nossa Atuação */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <h3 className="text-igreja-teal font-bold text-xl xl:text-2xl mb-3">
            Nossa Atuação
          </h3>
          <p className="text-gray-500 text-sm mb-4 italic">
            Cumprimento de Atos 1.8, &ldquo;tanto (...) como&rdquo;:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {[
              { title: 'Nossa "Jerusalém"', items: ["Imbituba"] },
              {
                title: 'Nossa "Judéia"',
                items: ["Garopaba/SC: Rev. José César", "Campos Missionários do PLSC"],
              },
              {
                title: 'Nossa "Samaria"',
                items: ["Missão Indígena Pará: Rev. Alessandro"],
              },
              {
                title: 'Nosso "Confins da Terra"',
                items: ["Panamá: Rev. Raimundo"],
              },
            ].map((region) => (
              <div
                key={region.title}
                className="border-l-4 border-igreja-dourado pl-4 py-1"
              >
                <p className="font-semibold text-gray-700 text-sm">{region.title}</p>
                <ul className="mt-1 space-y-0.5">
                  {region.items.map((item) => (
                    <li key={item} className="text-gray-500 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Nossos Princípios Doutrinários */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <h3 className="text-igreja-teal font-bold text-xl xl:text-2xl mb-4">
            Nossos Princípios Doutrinários
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {/* Cinco Princípios da Reforma */}
            <div>
              <h4 className="font-semibold text-gray-700 text-sm border-b border-igreja-dourado pb-1 mb-2">
                Cinco Princípios da Reforma
              </h4>
              <ol className="space-y-1">
                {[
                  "Somente a Escritura",
                  "Somente a Fé",
                  "Somente a Graça",
                  "Somente Cristo",
                  "Somente Glória a Deus",
                ].map((item, i) => (
                  <li key={item} className="text-gray-500 text-sm flex gap-2">
                    <span className="text-igreja-dourado font-bold">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Cinco Pontos do Calvinismo */}
            <div>
              <h4 className="font-semibold text-gray-700 text-sm border-b border-igreja-dourado pb-1 mb-2">
                Cinco Pontos do Calvinismo
              </h4>
              <ol className="space-y-1">
                {[
                  "Depravação Total",
                  "Eleição Incondicional",
                  "Expiação Limitada",
                  "Graça Irresistível",
                  "Perseverança dos Santos",
                ].map((item, i) => (
                  <li key={item} className="text-gray-500 text-sm flex gap-2">
                    <span className="text-igreja-dourado font-bold">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Tema Norteador da Bíblia */}
            <div>
              <h4 className="font-semibold text-gray-700 text-sm border-b border-igreja-dourado pb-1 mb-2">
                Tema Norteador da Bíblia
              </h4>
              <ol className="space-y-1">
                {["Reino", "Mediador"].map((item, i) => (
                  <li key={item} className="text-gray-500 text-sm flex gap-2">
                    <span className="text-igreja-dourado font-bold">{i + 1}.</span>
                    {item}
                  </li>
                ))}
                <li className="text-gray-500 text-sm flex gap-2 items-start">
                  <span className="text-igreja-dourado font-bold shrink-0">3.</span>
                  <span className="text-left">
                    Aliança
                    <ul className="mt-1 space-y-0.5 pl-4">
                      {[
                        "Mandato Espiritual",
                        "Mandato Social",
                        "Mandato Cultural",
                      ].map((sub, j) => (
                        <li key={sub} className="text-gray-400 text-sm">
                          {String.fromCharCode(97 + j)}) {sub}
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="w-full md:w-auto"
        >
          <div className="pt-4 flex justify-center md:justify-start">
            <Button
              asChild
              className="bg-igreja-dourado hover:bg-igreja-dourado-dark rounded-none text-white w-full md:w-60 h-16 md:h-18 xl:h-15 xl:text-base 2xl:text-lg  cursor-pointer transition-all"
            >
              <a
                href="/church/hystoryIPB_Imbituba"
                className="flex justify-center items-center gap-2"
              >
                Nossa história
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

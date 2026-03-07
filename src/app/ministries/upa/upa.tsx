"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Newspaper,
  Flame,
  Zap,
  Users,
  BookOpen,
  Quote,
  History,
} from "lucide-react";
import HeroSection from "@/src/components/ui/HeroBanner";

// Assets originais
import photoUPA from "@/public/image/UPA/UPA.jpg";
import photoLogo from "@/public/image/UPA/logoUPA2.png";

export default function ContentUPA() {
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Diretoria UPA (Espaço para preencher)
  const boardUPA = [
    { role: "Presidente", name: "Em Definição", photo: "" },
    { role: "Vice-Pres.", name: "Em Definição", photo: "" },
    { role: "Secretário", name: "Em Definição", photo: "" },
    { role: "Tesoureiro", name: "Em Definição", photo: "" },
  ];

  return (
    <main className="bg-[#f9f7f2] text-[#1a1a1a] font-serif overflow-x-hidden selection:bg-orange-100 min-h-screen">
      {/* 1. HERO BANNER */}
      <div className="relative overflow-hidden border-b-4 border-black">
        <HeroSection
          title="União Presbiteriana de Adolescentes"
          image={photoUPA}
        />

        {/* Sombra (Gradiente) na parte de baixo para suavizar a transição */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f9f7f2] to-transparent" />

        {/* Opcional: Sombra na parte de cima para dar contraste ao título */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent" />
      </div>
      <article className="max-w-7xl mx-auto px-4 md:px-10 pb-40 pt-16">
        {/* 2. CABEÇALHO DO JORNAL (RESPONSIVO) */}
        <motion.header
          className="border-b-4 border-black pb-10 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-black py-3 mb-8 font-sans text-xs md:text-sm uppercase tracking-[0.3em] font-black gap-4 text-center">
            <span>Imbituba - SC</span>
            <span className="font-black text-base md:text-lg text-orange-600 border-x-2 border-black px-6">
              Edição Juvenil 2026
            </span>
            <span>União de Adolescentes IPB</span>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <Image
                src={photoLogo}
                alt="Logo UPA"
                width={200}
                height={200}
                className="grayscale contrast-140 mix-blend-multiply hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="md:col-span-9 text-center md:text-right space-y-4">
              <span className="text-zinc-500 font-sans font-black tracking-[0.4em] uppercase text-sm block">
                Voz da Juventude Presbiteriana
              </span>
              <h1 className="text-7xl md:text-[11rem] font-sans font-black tracking-tighter leading-[0.8] text-black uppercase">
                UPA <br />{" "}
                <span className="font-light italic font-serif text-orange-600 tracking-normal lowercase">
                  Imbituba
                </span>
              </h1>
            </div>
          </div>
        </motion.header>

        {/* 3. CONTEÚDO EM COLUNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 gap-y-20">
          {/* COLUNA 1: DEFINIÇÃO E MOTO (TEXTO ORIGINAL) */}
          <motion.aside
            className="space-y-12 border-r border-zinc-300 pr-8 lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            variants={fadeInUp}
          >
            <div className="border-b-2 border-black pb-8">
              <Zap className="text-orange-500 mb-4" size={32} />
              <h3 className="font-sans font-black uppercase text-3xl tracking-tighter text-black mb-4">
                O que é?
              </h3>
              <p className="text-lg leading-relaxed text-justify">
                A UPA é a União Presbiteriana de Adolescentes, que reúne
                participantes entre 12 e 18 anos em torno da Palavra de Deus.
              </p>
            </div>

            <div className="bg-orange-600 text-white p-8 rounded-sm shadow-xl text-center relative overflow-hidden group">
              <Flame className="absolute -right-4 -bottom-4 text-orange-400 w-24 h-24 opacity-20 group-hover:rotate-12 transition-transform" />
              <h4 className="font-sans font-black uppercase text-xs mb-4 tracking-widest opacity-80">
                O Moto Bíblico
              </h4>
              <p className="font-serif italic text-2xl leading-tight">
                "Alegra-te, jovem, na tua juventude... e anda pelos caminhos do
                teu coração."
              </p>
              <span className="block mt-4 font-mono text-xs uppercase font-bold tracking-widest text-orange-200">
                Eclesiastes 11:9
              </span>
            </div>

            <div className="text-center italic text-zinc-500 border-t border-zinc-200 pt-8 text-lg">
              Objetivo: "Fortalecimento das identidades cristãs e comunhão."
            </div>
          </motion.aside>

          {/* COLUNA 2 & 3: HISTÓRIA (TEXTO ORIGINAL AMPLIADO) */}
          <motion.section
            className="md:col-span-2 space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            variants={fadeInUp}
          >
            <div className="text-center border-y-2 border-black py-8">
              <h2 className="text-5xl md:text-7xl font-sans font-black text-black uppercase tracking-tighter leading-none mb-2">
                CRÔNICA DA UPA
              </h2>
              <p className="text-2xl font-serif text-zinc-600 italic">
                De 1954 aos Desafios da Atualidade
              </p>
            </div>

            <div className="md:columns-2 gap-10 space-y-8 text-lg md:text-xl leading-relaxed text-zinc-900 text-justify">
              <div className="flex items-center gap-2 text-orange-600 mb-4 break-inside-avoid">
                <History size={24} />
                <h3 className="text-xl font-black uppercase tracking-widest">
                  Origens no Brasil
                </h3>
              </div>

              <p className="first-letter:text-8xl first-letter:font-black first-letter:text-black first-letter:float-left first-letter:mr-4 first-letter:leading-none">
                A União nasceu em 9 de julho de 1967 na IP do Rio de Janeiro,
                fruto do ministério de <strong>Dorcas Araújo Machado</strong>.
                Ela percebeu que adolescentes chegavam cedo aos cultos sem
                atividades direcionadas, solicitando então um salão para iniciar
                evangelismo, teatro e gincanas bíblicas.
              </p>

              <div className="bg-zinc-100 p-6 border-l-8 border-orange-500 break-inside-avoid shadow-inner">
                <p className="text-base italic font-serif">
                  "Houve uma bonita parte da história antes, em 1954, em
                  Governador Valadares, sob orientação da irmã Gracia Maria
                  Galati."
                </p>
              </div>

              <p>
                O lema proclamado na época era:{" "}
                <em>
                  "Levar os jovens a fazer o propósito de amar ao Senhor Jesus e
                  nunca se separar dele."
                </em>{" "}
                Naquele dia, 32 sócios foram arrolados.
              </p>

              <h3 className="text-2xl font-bold text-black border-b-2 border-black pb-2 mt-12 mb-6 break-inside-avoid uppercase">
                Organização Nacional
              </h3>
              <p>
                Atualmente, a UPA conta com a{" "}
                <strong>CNA (Confederação Nacional de Adolescentes)</strong>,
                que fortalece ações em todas as regiões. O trabalho conta
                inclusive com a designação de um pastor em tempo integral focado
                nos desafios desta fase da vida.
              </p>
            </div>
          </motion.section>

          {/* COLUNA 4: DIRETORIA E COLUNA SOCIAL */}
          <motion.aside
            className="space-y-12 border-l border-zinc-300 pl-8 lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            variants={fadeInUp}
          >
            <div className="bg-zinc-900 text-white p-8 rounded-sm shadow-xl">
              <Users size={32} className="text-orange-500 mb-4" />
              <h4 className="font-sans font-black uppercase text-base mb-6 tracking-widest text-white border-b border-zinc-700 pb-2">
                Liderança UPA
              </h4>

              <div className="space-y-8">
                {boardUPA.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-zinc-800 rounded-full shrink-0 flex items-center justify-center border border-zinc-700 group-hover:border-orange-500 transition-colors">
                      <Users
                        size={20}
                        className="text-zinc-500 group-hover:text-orange-500"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-black uppercase text-orange-500 tracking-widest">
                        {m.role}
                      </p>
                      <p className="text-sm font-bold text-zinc-100 uppercase leading-none mt-1">
                        {m.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t-4 border-black pt-8">
              <h3 className="font-sans font-black uppercase text-2xl tracking-tighter text-black mb-6">
                Atividades UPA
              </h3>
              <ul className="space-y-4 font-mono text-sm uppercase tracking-tight text-zinc-800">
                <li className="flex gap-3 border-b border-zinc-200 pb-3">
                  {" "}
                  <span className="text-orange-600 font-black">•</span> Teatro &
                  Música{" "}
                </li>
                <li className="flex gap-3 border-b border-zinc-200 pb-3">
                  {" "}
                  <span className="text-orange-600 font-black">•</span> Gincanas
                  Bíblicas{" "}
                </li>
                <li className="flex gap-3 border-b border-zinc-200 pb-3">
                  {" "}
                  <span className="text-orange-600 font-black">•</span>{" "}
                  Evangelismo Pessoal{" "}
                </li>
                <li className="flex gap-3 pb-3">
                  {" "}
                  <span className="text-orange-600 font-black">•</span>{" "}
                  Congressos Nacionais{" "}
                </li>
              </ul>
            </div>
          </motion.aside>
        </div>

        {/* 4. RODAPÉ DO JORNAL */}
        <motion.footer
          className="mt-40 pt-20 border-t-4 border-black text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={fadeIn}
        >
          <Quote className="mx-auto text-zinc-300 mb-8" size={60} />
          <p className="max-w-4xl mx-auto text-3xl md:text-5xl font-serif italic text-zinc-700 mb-16 leading-tight">
            "Não possuíam nenhuma atividade direcionada... nascendo assim a
            União Presbiteriana de Adolescentes."
          </p>

          <div className="flex flex-col items-center gap-6 font-sans text-sm uppercase tracking-[0.5em] font-black text-black">
            <div className="h-1 w-32 bg-black" />
            <span>
              Igreja Presbiteriana de Imbituba • UPA 2026 • Fonte: Portal UPA
            </span>
          </div>
        </motion.footer>
      </article>
    </main>
  );
}

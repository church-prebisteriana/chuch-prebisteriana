"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Newspaper,
  Baby,
  BookOpen,
  History,
  Quote,
  Star,
  Users,
  Sun,
} from "lucide-react";
import HeroSection from "@/src/components/ui/HeroBanner";

// Assets originais
import photoLogo from "@/public/image/UCP/ucp logo.png";
import photoMain from "@/public/image/UCP/UCP 2.jpg";

export default function ContentUCP() {
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const year = new Date().getFullYear();

  // Diretoria UCP (Espaço para preencher)
  const boardUCP = [
    { role: "Diretora Nomeada", name: "Em Definição", photo: "" },
    { role: "Auxiliar", name: "Em Definição", photo: "" },
  ];

  return (
    <main className="bg-[#fdfbf7] text-[#1a1a1a] font-serif overflow-x-hidden selection:bg-blue-100 min-h-screen">
      {/* 1. HERO BANNER COM EFEITO DE SOMBRA E GRADIENTE */}
      <div className="relative overflow-hidden border-b-8 border-[#004a8d]">
        <HeroSection
          image={photoMain}
          title="União de Crianças Presbiterianas"
        />

        {/* Gradiente Inferior para suavizar a transição */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/40 to-transparent" />

        {/* Sombra Superior para destacar o título */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent" />
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
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-black py-4 mb-8 font-sans text-xs md:text-sm uppercase tracking-[0.3em] font-black gap-4 text-center">
            <span>Imbituba - SC</span>
            <span className="font-black text-base md:text-lg text-[#004a8d] border-x-2 border-black px-6 flex items-center gap-2">
              <Star size={18} fill="#ffcc00" className="text-[#ffcc00]" />
              Edição Infantil {year}
              <Star size={18} fill="#ffcc00" className="text-[#ffcc00]" />
            </span>
            <span>Igreja Presbiteriana do Brasil</span>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <Image
                src={photoLogo}
                alt="Logo UCP"
                width={200}
                height={200}
                className="grayscale contrast-125 mix-blend-multiply hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="md:col-span-9 text-center md:text-right space-y-4">
              <span className="text-zinc-500 font-sans font-black tracking-[0.4em] uppercase text-sm block">
                Formando os Servos de Amanhã
              </span>
              <h1 className="text-7xl md:text-[11rem] font-sans font-black tracking-tighter leading-[0.8] text-[#004a8d] uppercase">
                UCP <br />{" "}
                <span className="font-light italic font-serif text-[#ffcc00] tracking-normal lowercase">
                  Mirim
                </span>
              </h1>
            </div>
          </div>
        </motion.header>

        {/* 3. LAYOUT DE COLUNAS EDITORIAIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 gap-y-20">
          {/* COLUNA 1: DEFINIÇÃO E MISSÃO (TEXTO ORIGINAL AMPLIADO) */}
          <motion.aside
            className="space-y-12 border-r border-zinc-300 pr-8 lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            variants={fadeInUp}
          >
            <div className="border-b-2 border-black pb-8">
              <Baby className="text-[#004a8d] mb-4" size={40} />
              <h3 className="font-sans font-black uppercase text-3xl tracking-tighter text-black mb-4 uppercase">
                O QUE É?
              </h3>
              <p className="text-xl leading-relaxed text-justify">
                A UCP é uma sociedade interna que une crianças de{" "}
                <strong>06 a 11 anos</strong>, proporcionando crescimento
                espiritual e social.
              </p>
            </div>

            <div className="bg-[#004a8d] text-white p-8 rounded-sm shadow-xl text-center relative overflow-hidden group">
              <Sun className="absolute -right-4 -bottom-4 text-[#ffcc00] w-24 h-24 opacity-20 group-hover:rotate-45 transition-transform" />
              <h4 className="font-sans font-black uppercase text-xs mb-4 tracking-widest text-[#ffcc00]">
                Nossa Missão
              </h4>
              <p className="font-serif italic text-2xl leading-tight">
                "Anunciar o evangelho, edificar vidas e modelar servos para a
                obra de Deus."
              </p>
            </div>

            <div className="text-center italic text-zinc-500 border-t border-zinc-200 pt-8 text-lg">
              Fonte: Secretaria Geral do Trabalho da Infância – IPB
            </div>
          </motion.aside>

          {/* COLUNA 2 & 3: CRÔNICA HISTÓRICA (TEXTO ORIGINAL AMPLIADO) */}
          <motion.section
            className="md:col-span-2 space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            variants={fadeInUp}
          >
            <div className="text-center border-y-2 border-black py-8 bg-[#fffcf0]">
              <h2 className="text-5xl md:text-7xl font-sans font-black text-black uppercase tracking-tighter leading-none mb-2 uppercase">
                LIGA JUVENIL
              </h2>
              <p className="text-2xl font-serif text-[#004a8d] italic">
                As Raízes do Trabalho Infantil na IPB
              </p>
            </div>

            <div className="md:columns-2 gap-10 space-y-8 text-lg md:text-xl leading-relaxed text-zinc-900 text-justify">
              <div className="flex items-center gap-2 text-[#004a8d] mb-4 break-inside-avoid">
                <History size={24} />
                <h3 className="text-xl font-black uppercase tracking-widest uppercase">
                  Memórias de 1940
                </h3>
              </div>

              <p className="first-letter:text-8xl first-letter:font-black first-letter:text-[#004a8d] first-letter:float-left first-letter:mr-4 first-letter:leading-none">
                Na Igreja de S. José Del Rei (MG), havia a{" "}
                <strong>Liga Juvenil</strong>. Na casa da{" "}
                <strong>Sra. Lavínia</strong>, as crianças se reuniam para
                brincadeiras, histórias e deliciosos lanches.
              </p>

              <div className="bg-blue-50 p-6 border-l-8 border-[#004a8d] break-inside-avoid shadow-inner italic">
                "Em 1978, nasceu a revista 'Juvenis por Cristo', que orientava
                líderes com sugestões e lições bíblicas até 1995."
              </div>

              <p>
                Em 1980, em São Paulo, propôs-se o nome{" "}
                <strong>União de Crianças Presbiterianas – UCP</strong>. Até
                então, o trabalho era vinculado à Secretaria Nacional de SAFs.
              </p>

              <h3 className="text-2xl font-bold text-black border-b-2 border-black pb-2 mt-12 mb-6 break-inside-avoid uppercase">
                Atividades Atuais
              </h3>
              <p>
                A UCP de Imbituba realiza estudos bíblicos, oração e projetos
                missionários. É um espaço onde aprendem noções de diversos
                cargos e funções na igreja.
              </p>
            </div>
          </motion.section>

          {/* COLUNA 4: LIDERANÇA E INTEGRAÇÃO */}
          <motion.aside
            className="space-y-12 border-l border-zinc-300 pl-8 lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            variants={fadeInUp}
          >
            <div className="bg-[#1a1a1a] text-white p-8 rounded-sm shadow-xl">
              <Users size={32} className="text-[#ffcc00] mb-4" />
              <h4 className="font-sans font-black uppercase text-base mb-6 tracking-widest text-white border-b border-zinc-700 pb-2 uppercase">
                Condução UCP
              </h4>

              <div className="space-y-8">
                {boardUCP.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-zinc-800 rounded-full shrink-0 flex items-center justify-center border border-zinc-700 group-hover:border-[#ffcc00] transition-colors overflow-hidden">
                      <Users
                        size={20}
                        className="text-zinc-500 group-hover:text-[#ffcc00]"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-black uppercase text-[#ffcc00] tracking-widest">
                        {m.role}
                      </p>
                      <p className="text-sm font-bold text-zinc-100 uppercase leading-none mt-1">
                        {m.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-zinc-500 mt-6 italic">
                Nomeada pelo conselho da IP Imbituba.
              </p>
            </div>

            <div className="border-t-4 border-black pt-8">
              <h3 className="font-sans font-black uppercase text-2xl tracking-tighter text-black mb-6 uppercase">
                Forças Unidas
              </h3>
              <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                A UCP é uma das forças de integração da IPB Imbituba, junto com:
              </p>
              <ul className="space-y-3 font-mono text-xs uppercase tracking-tight text-zinc-800">
                <li className="flex gap-3 border-b border-zinc-200 pb-2">
                  {" "}
                  <span className="text-[#004a8d] font-black">✓</span> UPH & SAF{" "}
                </li>
                <li className="flex gap-3 border-b border-zinc-200 pb-2">
                  {" "}
                  <span className="text-[#004a8d] font-black">✓</span> UMP & UPA{" "}
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
            "Preparando as crianças para uma jornada de fé e serviço,
            glorificando a Deus acima de tudo." 🙏🌟
          </p>

          <div className="flex flex-col items-center gap-6 font-sans text-sm uppercase tracking-[0.5em] font-black text-black">
            <div className="h-1 w-32 bg-[#ffcc00]" />
            <span>Igreja Presbiteriana de Imbituba • UCP {year}</span>
          </div>
        </motion.footer>
      </article>
    </main>
  );
}

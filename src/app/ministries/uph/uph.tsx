
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Newspaper, Flame, Users, Flag } from "lucide-react";
import HeroSection from "@/src/components/ui/HeroBanner";

// Assets originais
import photoUPH from "@/public/image/UPH/União prebisteriana dos homens.jpg";
import logoUPH from "@/public/image/UPH/UPH logo.png";

// Lista da Diretoria com fotos (ajuste os caminhos conforme seus arquivos)
const boardMembers = [
  { role: "Presidente", name: "Emerson Barsan", photo: "/image/membros/pastor-emersn.jpg" },
  { role: "Vice-Pres.", name: "Gilson Ferreira", photo: "/image/membros/gilson.jpg" },
  { role: "Secretário", name: "Bruno Viera", photo: "/image/membros/bruno.jpg" },
  { role: "Tesoureiro", name: "Rodrigo Pinho", photo: "/image/membros/rodrigo.jpg" },
  { role: "Tesoureiro", name: "Ronaldo Damasio", photo: "/image/membros/ronaldo.jpg" },
];

export default function UPHContent() {
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-[#f4f1ea] text-[#1a1a1a] font-serif overflow-x-hidden selection:bg-zinc-200 min-h-screen">
      {/* 1. BANNER PRINCIPAL */}
      <HeroSection title="União Presbiteriana de Homens" image={photoUPH} />

      <article className="max-w-7xl mx-auto px-4 md:px-10 pb-40 pt-16">
        {/* 2. CABEÇALHO DO BOLETIM INFORMATIVO */}
        <motion.header
          className="border-b-4 border-black pb-10 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-black py-4 md:py-3 mb-8 font-sans text-xs md:text-sm uppercase tracking-widest font-bold gap-4 md:gap-0 text-center md:text-left">
            {/* Localização */}
            <span className="order-2 md:order-1">Imbituba - SC</span>

            {/* Título Central - Ganha destaque no mobile */}
            <span className="font-black text-base md:text-lg order-1 md:order-2 border-b-2 border-black md:border-0 pb-2 md:pb-0 w-full md:w-auto">
              Boletim Ano 2026
            </span>

            {/* Instituição */}
            <span className="order-3 md:order-3">
              Igreja Presbiteriana do Brasil
            </span>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <Image
                src={logoUPH}
                alt="Logo UPH"
                width={220}
                height={220}
                className="grayscale opacity-90 mix-blend-multiply"
              />
            </div>

            <div className="md:col-span-9 text-center md:text-right space-y-4">
              <span className="text-zinc-600 font-sans font-black tracking-[0.3em] uppercase text-base block">
                Sociedade Interna Masculina
              </span>
              <h1 className="text-7xl md:text-[9rem] font-sans font-black tracking-tighter leading-[0.8] text-black uppercase">
                União de <br />{" "}
                <span className="font-light italic font-serif text-black tracking-normal">
                  Homens
                </span>
              </h1>
            </div>
          </div>
        </motion.header>

        {/* 3. LAYOUT DE COLUNAS EDITORIAIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 gap-y-20">
          {/* COLUNA 1: IDENTIDADE E MOTO */}
          <motion.aside
            className="space-y-12 border-r border-zinc-300 pr-8 lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            variants={fadeInUp}
          >
            <div className="border-b-2 border-black pb-8">
              <Newspaper className="text-zinc-400 mb-4" size={32} />
              <h3 className="font-sans font-black uppercase text-4xl tracking-tighter text-black mb-4 uppercase">
                Identidade
              </h3>
              <p className="text-xl leading-relaxed text-justify">
                A UPH é o braço masculino da IPB, focada em organizar e treinar
                homens para o serviço fiel no Reino de Deus.
              </p>
            </div>

            <div className="bg-white p-8 border border-zinc-200 shadow-sm text-center rounded-sm">
              <Flag className="text-[#bf9b30] mx-auto mb-4" size={36} />
              <h4 className="font-sans font-black uppercase text-sm mb-4 tracking-widest text-black">
                O Moto da UPH
              </h4>
              <p className="font-serif italic text-2xl text-zinc-700 leading-tight">
                "Confiança em Jesus, Entusiasmo no Trabalho e União entre os
                Irmãos."
              </p>
            </div>

            <div className="text-center italic text-zinc-500 border-t border-zinc-200 pt-8 text-lg">
              Lema: "O homem crente, fervoroso no espírito e servindo ao
              Senhor."
            </div>
          </motion.aside>

          {/* COLUNA 2 & 3: ARTIGO PRINCIPAL */}
          <motion.section
            className="md:col-span-2 space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            variants={fadeInUp}
          >
            <div className="text-center">
              <h2 className="text-6xl font-sans font-black text-black uppercase tracking-tighter leading-none mb-4 uppercase">
                SEJA BEM-VINDO
              </h2>
              <p className="text-3xl font-serif text-zinc-700 max-w-xl mx-auto italic">
                À Força de Integração Masculina da IPB Imbituba
              </p>
              <div className="h-1 w-40 bg-black mx-auto mt-8" />
            </div>

            <div className="md:columns-2 gap-10 space-y-8 text-lg leading-relaxed text-zinc-900 text-justify">
              <h3 className="text-3xl font-bold text-black border-b-2 border-black pb-2 mb-6 break-inside-avoid uppercase">
                O que é UPH?
              </h3>
              <p className="first-letter:text-7xl first-letter:font-black first-letter:text-black first-letter:float-left first-letter:mr-4 first-letter:leading-none">
                <strong>A União Presbiteriana de Homens (UPH)</strong> é uma das
                sociedades internas da{" "}
                <strong>Igreja Presbiteriana do Brasil (IPB)</strong>, com o
                objetivo de organizar o trabalho masculino dentro das igrejas,
                congregações e pontos de pregação. Seu foco é promover a
                comunhão, o crescimento espiritual e o engajamento dos homens na
                missão da igreja, com intuito de promover a glória do Senhor
                Jesus Cristo.
              </p>
              <p>
                A história da UPH remonta aos primórdios da organização da IPB.
                Antes mesmo de 1900, já havia homens presbiterianos organizados
                em igrejas locais sob o nome de “Esforço Cristão”. A UPH foi
                oficialmente estabelecida em 1966, com a realização do I
                Congresso Nacional dos Homens Presbiterianos.
              </p>

              <h3 className="text-3xl font-bold text-black border-b-2 border-black pb-2 mt-12 mb-6 break-inside-avoid uppercase">
                Estrutura
              </h3>
              <p className="text-2xl">A organização se divide em esferas de atuação:</p>
              <ul className="list-none space-y-4 text-base italic text-zinc-800 ">
                <li className="border-l-4 border-[#bf9b30] pl-4 text-lg">
                  <strong>Local:</strong> Força de integração na IPB Imbituba
                  para estudo e serviço.
                </li>
                <li className="border-l-4 border-zinc-300 pl-4 text-lg">
                  <strong>Presbiterial:</strong> Federações regionais de homens.
                </li>
                <li className="border-l-4 border-zinc-300 pl-4 text-lg">
                  <strong>Sinodal:</strong> Coordenação em nível
                  estadual/sinodal.
                </li>
                <li className="border-l-4 border-zinc-300 pl-4 text-lg">
                  <strong>Nacional:</strong> A Confederação Nacional (CNHP) como
                  entidade máxima.
                </li>
              </ul>
            </div>
          </motion.section>

          {/* COLUNA 4: MEDITAÇÃO E DIRETORIA COM FOTOS */}
          <motion.aside
            className="space-y-12 border-l border-zinc-300 pl-8 lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            variants={fadeInUp}
          >
            <div className="bg-zinc-900 text-white p-8 rounded-sm shadow-xl">
              <Flame className="text-[#bf9b30] mb-4" size={32} />
              <h4 className="font-sans font-black uppercase text-xl mb-4 tracking-widest text-white">
                Palavra Bíblica
              </h4>
              <p className="font-serif text-base leading-relaxed italic opacity-90 text-lg">
                "Homens, sede vigilantes, permanecei firmes na fé, portai-vos
                varonilmente, fortalecei-vos. Todos os vossos atos sejam feitos
                com amor." <br /> (1 Coríntios 16:13-14)
              </p>
            </div>

            {/* DIRETORIA COM FOTOS PEQUENAS */}
            <div className="border-t-4 border-black pt-8">
              <Users className="text-black mb-4" size={32} />
              <h3 className="font-sans font-black uppercase text-2xl tracking-tighter text-black mb-8 uppercase">
                Diretoria Atual
              </h3>

              <div className="space-y-8">
                {boardMembers.map((member, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-4 border-b border-zinc-200 pb-5 last:border-0"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.1 * idx }}
                    variants={fadeInUp}
                  >
                    <div className="relative w-30 h-30 shrink-0 overflow-hidden rounded-full border border-black/10 shadow-sm">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover grayscale contrast-125" // Estilo gravura de jornal
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans font-black text-[10px] uppercase tracking-widest text-[#bf9b30]">
                        {member.role}
                      </span>
                      <span className="font-mono text-sm font-bold text-zinc-800 uppercase leading-none mt-1">
                        {member.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
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
          <p className="max-w-4xl mx-auto text-3xl md:text-4xl font-serif italic text-zinc-700 mb-16 leading-tight">
            "A UPH busca fortalecer a fé, a liderança e o testemunho dos homens,
            incentivando-os a serem ativos na igreja, na família e na
            sociedade." 🙏📖
          </p>

          <div className="flex flex-col items-center gap-6 font-sans text-sm uppercase tracking-[0.5em] font-black text-black">
            <div className="h-1 w-32 bg-black" />
            <span>Igreja Presbiteriana de Imbituba • Boletim UPH {new Date().getFullYear()}</span>
          </div>
        </motion.footer>
      </article>
    </main>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Quote,
  Award,
  ScrollText,
  Heart,
  BookOpen,
  History,
  Info,
} from "lucide-react";
import HeroSection from "@/src/components/ui/HeroBanner";

// Assets originais
import photoSAF from "@/public/image/SAF/SAF.jpg";
import logoSaf from "@/public/image/SAF/simbolo.jpg";

export default function ContentSaf() {
  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const boardMembers = [
    {
      role: "Presidente",
      name: "Suelly Barsan",
      photo: "/image/membros/suelly.jpg",
    },
    { role: "Vice-Pres.", name: "A definir", photo: "" },
    {
      role: "Secretária",
      name: "A definir",
      photo: "/image/membros/teste.jpg",
    },
    {
      role: "Tesoureira",
      name: "A definir",
      photo: "/image/membros/teste.jpg",
    },
  ];

  return (
    <main className="bg-[#fcfaf7] text-[#1a202c] font-serif overflow-x-hidden selection:bg-blue-100 min-h-screen">
      {/* 1. HERO BANNER */}
      <div className="relative border-b-4 border-[#003366]">
        <HeroSection title="Sociedade Auxiliadora Feminina" image={photoSAF} />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#fcfaf7] to-transparent" />
      </div>

      <article className="max-w-7xl mx-auto px-6 md:px-12 pb-40 pt-20">
        {/* 2. CABEÇALHO EDITORIAL RESPONSIVO */}
        <motion.header
          className="border-b border-black/10 pb-16 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row justify-between items-center py-4 mb-12 font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-bold text-[#003366] gap-4 text-center">
            <span>Imbituba - Santa Catarina</span>
            <span className="font-black text-lg border-x-2 border-[#003366] px-8 py-1">
              Desde 1884
            </span>
            <span>Trabalho Feminino IPB</span>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative p-1 border border-black/20 group">
                <Image
                  src={logoSaf}
                  alt="Símbolo SAF"
                  width={240}
                  height={240}
                  className="grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply"
                />
              </div>
            </div>
            <div className="md:col-span-8 text-center md:text-right space-y-4">
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-[#003366] uppercase">
                Sociedade <br />{" "}
                <span className="font-light italic tracking-normal lowercase text-zinc-500">
                  Auxiliadora
                </span>
              </h1>
              <p className="text-[#bf9b30] font-sans text-lg md:text-2xl uppercase tracking-[0.2em] font-black">
                Igreja Presbiteriana de Imbituba
              </p>
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* COLUNA ESQUERDA - IDENTIDADE E DIRETORIA */}
          <motion.aside
            className="lg:col-span-4 space-y-12 border-r border-black/5 pr-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <div className="space-y-6">
              <ScrollText className="text-[#003366]" size={32} />
              <h3 className="font-sans font-black uppercase text-xl tracking-widest text-[#003366]">
                O Moto
              </h3>
              <p className="text-2xl italic leading-snug text-zinc-700 border-l-4 border-[#bf9b30] pl-6">
                "Sejamos verdadeiras auxiliadoras, prontas para todo o bom
                trabalho."
              </p>
            </div>

            <div className="bg-[#003366] text-white p-10 shadow-2xl rounded-sm">
              <Heart className="text-[#bf9b30] mb-6" size={32} />
              <h3 className="font-sans font-black uppercase text-xs tracking-[0.3em] mb-4">
                Lema Oficial
              </h3>
              <p className="text-xl font-light italic leading-relaxed">
                "Servindo ao Senhor com alegria e amor, em prol da Sua causa."
              </p>
            </div>

            <div className="pt-10 border-t border-black/10">
              <h3 className="font-sans font-black uppercase text-sm tracking-widest text-[#003366] mb-8 flex items-center gap-2">
                <Users size={20} /> Diretoria Atual
              </h3>
              <div className="space-y-8">
                {boardMembers.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-full border-2 border-zinc-200 group-hover:border-[#bf9b30] transition-colors bg-zinc-100">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-zinc-300">
                          <Users size={24} />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans font-black text-[10px] uppercase tracking-widest text-[#bf9b30]">
                        {member.role}
                      </span>
                      <span className="font-mono text-sm font-bold text-zinc-800 uppercase leading-none mt-1">
                        {member.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* COLUNA DIREITA - CONTEÚDO HISTÓRICO AMPLIADO */}
          <motion.section
            className="lg:col-span-8 space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-[#bf9b30]">
                <History size={24} />
                <span className="font-sans font-bold uppercase tracking-widest text-sm">
                  Registro Histórico
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#003366] uppercase tracking-tighter leading-none">
                Trajetória da <br />{" "}
                <span className="text-zinc-400 italic font-light lowercase tracking-normal">
                  Mulher Presbiteriana
                </span>
              </h2>
              <div className="h-1 w-24 bg-[#bf9b30]" />

              <div className="md:columns-2 gap-10 space-y-8 text-lg md:text-xl leading-relaxed text-zinc-800 text-justify">
                <p className="text-xs font-mono text-zinc-400 border-b border-zinc-100 pb-2 break-inside-avoid">
                  Fonte: Confederação Nacional <a className="text-[#bf9b30] hover:underline" href="http://www.saf.org.br" target="_blank" rel="noopener noreferrer">http://www.saf.org.br</a>
                </p>  

                <p className="first-letter:text-8xl first-letter:font-black first-letter:text-[#003366] first-letter:float-left first-letter:mr-4 first-letter:leading-[0.65]">
                  Desde a chegada da IPB no Brasil, encontramos pequenos grupos
                  de mulheres surgindo para auxiliar no trabalho de cada
                  congregação. O trabalho feminino crescia e não demorou muito
                  para que se organizasse em Sociedades Femininas, conscientes
                  de seu papel como parte do Corpo de Cristo.
                </p>

                <div className="bg-zinc-50 p-6 border-l-4 border-[#003366] break-inside-avoid">
                  <h4 className="font-bold text-[#003366] mb-2 flex items-center gap-2">
                    <BookOpen size={18} /> Primeira Sociedade
                  </h4>
                  <p className="text-sm italic">
                    Criada em Recife (PE), em 11 de novembro de 1884, com o nome
                    de “Associação Evangélica de Senhoras”.
                  </p>
                </div>

                <p>
                  Em 1921, por iniciativa da missionária Genoveva Marchant,
                  formou-se a primeira Federação, composta de 12 SAFs. Já em
                  1926, uma comissão de 100 mulheres compareceu à Assembleia
                  Geral para pedir a criação de Federações em todos os
                  Presbitérios.
                </p>

                <p>
                  O nome atual,{" "}
                  <strong>Sociedade Auxiliadora Feminina (SAF)</strong>, foi
                  adotado em 1941 durante o 1º Congresso Nacional, visando
                  incentivar o ingresso de moças com sua juventude e dinamismo.
                </p>

                <h4 className="text-2xl font-bold text-[#003366] border-b border-black/10 pb-2 mb-4 break-inside-avoid uppercase tracking-tighter">
                  Atividades e Pilares
                </h4>
                <p>
                  As mulheres da SAF estão envolvidas em visitação a enfermos,
                  evangelismo, ação social, apoio a missionários, estudo da
                  Palavra e intercessão. Elas contribuem para o fortalecimento
                  da fé e o serviço ao próximo em Imbituba.
                </p>

                <h4 className="text-2xl font-bold text-[#003366] border-b border-black/10 pb-2 mb-4 break-inside-avoid uppercase tracking-tighter">
                  Níveis de Atuação
                </h4>
                <ul className="list-none space-y-6 text-base italic text-zinc-600">
                  <li className="border-l-4 border-[#003366] pl-6 group">
                    <strong className="text-[#003366] not-italic block uppercase text-xs mb-1">
                      Local (Imbituba)
                    </strong>
                    Reuniões para estudo bíblico, oração e apoio prático nas
                    necessidades da igreja local.
                  </li>
                  <li className="border-l-4 border-zinc-200 pl-6">
                    <strong className="text-zinc-800 not-italic block uppercase text-xs mb-1">
                      Presbiterial
                    </strong>
                    Federações que congregam várias igrejas, promovendo
                    treinamentos regionais.
                  </li>
                  <li className="border-l-4 border-zinc-200 pl-6">
                    <strong className="text-zinc-800 not-italic block uppercase text-xs mb-1">
                      Sinodal
                    </strong>
                    Coordenação estadual, facilitando a unidade entre as
                    federações.
                  </li>
                  <li className="border-l-4 border-zinc-200 pl-6">
                    <strong className="text-zinc-800 not-italic block uppercase text-xs mb-1">
                      Nacional
                    </strong>
                    A CNSAFs é a entidade máxima, provendo recursos para todo o
                    Brasil.
                  </li>
                </ul>
              </div>
            </div>

            <motion.div
              className="bg-zinc-100 p-12 border-y-2 border-zinc-200 relative"
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.5 }}
              variants={fadeIn}
            >
              <Quote
                className="absolute top-8 right-8 text-zinc-300"
                size={60}
              />
              <p className="text-3xl font-serif italic text-zinc-600 leading-tight max-w-2xl">
                "As mulheres da SAF são uma força de integração vital para a
                vida da igreja local."
              </p>
            </motion.div>
          </motion.section>
        </div>

        {/* 4. RODAPÉ FINAL */}
        <footer className="mt-40 pt-24 border-t-4 border-[#003366] text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={fadeInUp}
            className="space-y-12"
          >
            <Award className="mx-auto text-[#bf9b30]" size={48} />
            <h2 className="text-4xl md:text-6xl font-black text-[#003366] uppercase tracking-tighter">
              Alegria e Amor <br />{" "}
              <span className="italic font-serif font-light text-zinc-400 lowercase tracking-normal">
                servindo ao mestre
              </span>
            </h2>
            <p className="text-xl font-serif italic text-zinc-500 max-w-2xl mx-auto">
              Objetivando principalmente a honra e glória do Senhor e Salvador
              Jesus Cristo. 🙏🌸
            </p>
            <div className="flex flex-col items-center gap-6 mt-16">
              <div className="h-px w-32 bg-zinc-200" />
              <p className="font-sans font-black uppercase tracking-[0.5em] text-xs text-[#003366]">
                Igreja Presbiteriana de Imbituba • SAF 2026
              </p>
            </div>
          </motion.div>
        </footer>
      </article>
    </main>
  );
}

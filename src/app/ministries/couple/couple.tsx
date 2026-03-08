// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   Heart,
//   Quote,
//   BellRing,
//   BookOpen,
//   Users,
//   Flower,
//   Award
// } from "lucide-react";
// import HeroSection from "@/src/components/ui/HeroBanner";

// // Assets originais
// import photoMain from "@/public/image/couple/couple.jpg";

// export default function CouplePage() {
//   const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
//   const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

//   return (
//     <main className="bg-[#fcfaf7] text-[#1a202c] font-serif overflow-x-hidden selection:bg-blue-100 min-h-screen">

//       {/* 1. HERO BANNER - ESTILO ÁLBUM DE LUXO */}
//       <div className="relative border-b-4 border-[#003366]">
//         <HeroSection title="Ministério de Casais" image={photoMain} />
//         <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#fcfaf7] to-transparent" />
//       </div>

//       <article className="max-w-7xl mx-auto px-6 md:px-12 pb-40 pt-20">

//         {/* 2. CABEÇALHO EDITORIAL (RESPONSIVO) */}
//         <motion.header
//           className="border-b border-black/10 pb-16 mb-24"
//           initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1 }} variants={fadeIn}
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center py-4 mb-12 font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-bold text-[#003366] gap-4 text-center">
//             <span>Imbituba - Santa Catarina</span>
//             <span className="font-black text-lg border-x-2 border-[#003366] px-8 py-1">
//               Casamento Bíblico
//             </span>
//             <span>Igreja Presbiteriana do Brasil</span>
//           </div>

//           <div className="text-center space-y-4 max-w-4xl mx-auto">
//             <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-[#003366] uppercase">
//               Ministério de <br /> <span className="font-light italic tracking-normal lowercase text-zinc-500">Casais</span>
//             </h1>
//             <p className="text-[#bf9b30] font-sans text-lg md:text-2xl uppercase tracking-[0.2em] font-black border-t border-black/5 pt-6">
//               Igreja Presbiteriana de Imbituba
//             </p>
//           </div>
//         </motion.header>

//         {/* 3. COLUNAS TIPO REVISTA CLÁSSICA CRISTÃ */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

//           {/* COLUNA ESQUERDA - IDENTIDADE E OBJETIVOS (Vem de Baixo) */}
//           <motion.aside
//             className="lg:col-span-4 space-y-12 border-r border-black/5 pr-10"
//             initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }} variants={fadeInUp}
//           >
//             <div className="space-y-6">
//               <Heart className="text-[#003366]" size={32} />
//               <h3 className="font-sans font-black uppercase text-xl tracking-widest text-[#003366]">O Propósito</h3>
//               <p className="text-2xl italic leading-snug text-zinc-700 border-l-4 border-[#bf9b30] pl-6">
//                 "Fortalecimento matrimonial, edificação espiritual das famílias e promoção da glória de Deus."
//               </p>
//             </div>

//             <div className="bg-[#003366] text-white p-10 shadow-2xl rounded-sm relative overflow-hidden group">
//                <BellRing className="absolute -right-4 -bottom-4 text-[#bf9b30] w-24 h-24 opacity-20 group-hover:rotate-45 transition-transform" />
//                <h3 className="font-sans font-black uppercase text-xs tracking-[0.3em] mb-4">Visão Bíblica</h3>
//                <p className="text-xl font-light italic leading-relaxed">
//                  "A família é uma instituição criada por Deus."
//                </p>
//             </div>

//             <div className="pt-10 border-t border-black/10">
//               <h3 className="font-sans font-black uppercase text-sm tracking-widest text-[#003366] mb-8">Padrão Orientador</h3>
//               <div className="bg-white p-8 border border-zinc-100 shadow-xl text-center">
//                  <BookOpen className="text-black mx-auto mb-4" size={32} />
//                  <h4 className="font-bold text-lg text-black mb-3">A Bíblia</h4>
//                  <p className="text-sm text-zinc-500 leading-relaxed text-justify">
//                    "Autoridade suprema para orientar o casamento, a família e a vida cristã."
//                  </p>
//               </div>
//             </div>
//           </motion.aside>

//           {/* COLUNA DIREITA - CONTEÚDO PRINCIPAL (Vem da Direita) */}
//           <motion.section
//             className="lg:col-span-8 space-y-16"
//             initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }} variants={fadeInUp}
//           >
//             <div className="space-y-8">
//               <h2 className="text-4xl md:text-6xl font-black text-[#003366] uppercase tracking-tighter leading-none">
//                 Caminhando Juntos <br /> <span className="text-zinc-400 italic font-light lowercase tracking-normal">na fé e no amor</span>
//               </h2>
//               <div className="h-1 w-24 bg-[#bf9b30]" />

//               <div className="md:columns-2 gap-10 space-y-8 text-lg md:text-xl leading-relaxed text-zinc-800 text-justify">
//                 <p className="first-letter:text-8xl first-letter:font-black first-letter:text-[#003366] first-letter:float-left first-letter:mr-4 first-letter:leading-[0.65]">
//                   <span>O</span> Ministério de Casais da Igreja Presbiteriana de Imbituba é dedicado ao fortalecimento do relacionamento matrimonial e à edificação espiritual das famílias. Buscamos edificar os casais por meio do ensino bíblico, da comunhão cristã, do discipulado e do serviço dentro da igreja.
//                 </p>

//                 <h4 className="text-2xl font-bold text-[#003366] border-b border-black/10 pb-2 mb-4 break-inside-avoid">Princípios Bíblicos</h4>
//                 <p>
//                   O objetivo central do ministério é glorificar a Deus em todas as coisas. Os casamentos são vistos como uma oportunidade de refletir o caráter de Cristo, demonstrando amor, perdão, graça, compromisso e fidelidade.
//                 </p>

//                 <h4 className="text-2xl font-bold text-[#003366] border-b border-black/10 pb-2 mb-4 break-inside-avoid">Edificação e Discipulado</h4>
//                 <p>
//                   Promovemos encontros, estudos bíblicos, palestras e seminários que auxiliam no fortalecimento do vínculo entre marido e esposa. Além das atividades coletivas, incentivamos o discipulado entre casais mais experientes e casais mais jovens.
//                 </p>

//                 <h4 className="text-2xl font-bold text-[#003366] border-b border-black/10 pb-2 mb-4 break-inside-avoid uppercase tracking-tighter">Eventos e Atividades</h4>
//                 <ul className="list-none space-y-6 text-base italic text-zinc-600">
//                   <li className="border-l-4 border-[#003366] pl-6"><strong>Encontros:</strong> Retiros espirituais e jantares de comunhão genuína.</li>
//                   <li className="border-l-4 border-zinc-200 pl-6"><strong>Educação:</strong> Estudos temáticos, palestras sobre vida conjugal e criação de filhos.</li>
//                   <li className="border-l-4 border-zinc-200 pl-6"><strong>Oração:</strong> Momentos de oração conjunta e aconselhamento espiritual.</li>
//                 </ul>
//               </div>
//             </div>

//             <motion.div
//               className="bg-zinc-100 p-12 border-y-2 border-zinc-200 relative shadow-inner rounded-sm"
//               initial="hidden" whileInView="visible" transition={{ delay: 0.5 }} variants={fadeIn}
//             >
//               <Quote className="absolute top-8 right-8 text-zinc-300" size={60} />
//               <p className="text-3xl font-serif italic text-zinc-600 leading-tight max-w-2xl">
//                 "O casamento se torna também um instrumento de serviço no Reino de Deus."
//               </p>
//             </motion.div>
//           </motion.section>
//         </div>

//         {/* 4. RODAPÉ FINAL */}
//         <footer className="mt-40 pt-24 border-t-4 border-[#003366] text-center">
//           <motion.div initial="hidden" whileInView="visible" transition={{ duration: 1 }} variants={fadeInUp} className="space-y-12">
//             <Award className="mx-auto text-[#bf9b30]" size={48} />
//             <h2 className="text-4xl md:text-6xl font-black text-[#003366] uppercase tracking-tighter leading-[0.85]">
//               Cuidando e Fortalecendo <br /> <span className="italic font-serif font-light text-zinc-400 lowercase tracking-normal">a Família Cristã</span>
//             </h2>
//             <p className="text-xl font-serif italic text-zinc-500 max-w-2xl mx-auto">
//               Que seus lares sejam ambientes de amor, respeito, fé e ensino da Palavra de Deus. 🙏💍
//             </p>
//             <div className="flex flex-col items-center gap-6 mt-16">
//               <div className="h-px w-32 bg-zinc-200" />
//               <p className="font-sans font-black uppercase tracking-[0.5em] text-xs text-[#003366]">
//                 Igreja Presbiteriana de Imbituba • 2026
//               </p>
//             </div>
//           </motion.div>
//         </footer>

//       </article>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  BookOpen,
  Users,
  Sparkles,
  Anchor,
  Quote,
  Plus,
  Star,
} from "lucide-react";
import HeroSection from "@/src/components/ui/HeroBanner";

// Assets originais
import photoMain from "@/public/image/couple/couple.jpg";

export default function CouplePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  const year = new Date().getFullYear();

  return (
    <main className="bg-[#fcfcfc] text-[#1a1a1a] font-sans overflow-x-hidden selection:bg-rose-100 min-h-screen">
      {/* 1. HERO - IMPACTO VISUAL */}
      <section className="relative  w-full overflow-hidden border-b-[12px] border-zinc-900">
        <HeroSection title="" image={photoMain} />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 , delay: 0.2} }
            className="text-3xl md:text-[9rem] font-black text-white leading-[0.8] tracking-tighter uppercase italic drop-shadow-2xl"
          >
            Ministério de Casais.
          </motion.h1>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-[2px] w-12 bg-[#bf9b30]" />
            <span className="text-white font-serif italic text-sm md:text-2xl">
              Igreja Presbiteriana de Imbituba
            </span>
            <div className="h-[2px] w-12 bg-[#bf9b30]" />
          </div>
        </div>
      </section>

      {/* 2. CONTEÚDO EDITORIAL COMPLETO */}
      <article className="max-w-6xl mx-auto px-6 py-32">
        {/* INTRODUÇÃO E PROPÓSITO */}
        <div className="grid md:grid-cols-12 gap-16 mb-40 items-start">
          <motion.div
            className="md:col-span-5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 , delay: 0.2} }
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              O Nosso <br /> <span className="text-[#bf9b30]">Propósito.</span>
            </h2>
            <Heart className="text-zinc-200 w-32 h-32 absolute -left-10 -top-10 -z-10" />
          </motion.div>

          <motion.div
            className="md:col-span-7 space-y-6 text-xl md:text-2xl leading-relaxed text-zinc-700 font-light text-justify"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 , delay: 0.2} }
          >
            <p>
              O Ministério de Casais da Igreja Presbiteriana de Imbituba é um
              ministério dedicado ao fortalecimento do relacionamento
              matrimonial, à edificação espiritual das famílias e à promoção da
              glória de Deus por meio de lares firmados na Palavra.
            </p>
            <p>
              Reconhecendo que a família é uma instituição criada por Deus, o
              ministério busca apoiar casais em todas as fases da vida conjugal,
              promovendo crescimento espiritual, emocional e relacional. Seu
              propósito é edificar os casais por meio do ensino bíblico, da
              comunhão cristã, do discipulado e do serviço dentro da igreja,
              incentivando relacionamentos saudáveis que reflitam o amor de
              Cristo.
            </p>
          </motion.div>
        </div>

        {/* MURAL DE PRINCÍPIOS (TODO O SEU TEXTO AQUI) */}
        <div className="space-y-32">
          {/* SEÇÃO: BÍBLIA E GLÓRIA DE DEUS */}
          <section className="grid md:grid-cols-2 gap-20 border-t border-zinc-100 pt-20">
            <div className="space-y-8">
              <motion.div
                className="flex items-center gap-4 text-[#bf9b30]"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 , delay: 0.2} }
              >
                <BookOpen size={24} />
                <h3 className="font-black uppercase tracking-widest text-sm">
                  Bíblia como Padrão
                </h3>
              </motion.div>
              <motion.p
                className="text-lg leading-relaxed text-zinc-600 text-justify"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 , delay: 0.2} }
              >
                O Departamento de Casais fundamenta todas as suas atividades na
                Palavra de Deus. A Bíblia é reconhecida como a autoridade
                suprema para orientar o casamento, a família e a vida cristã. Os
                casais são incentivados a desenvolver uma vida devocional
                conjunta, estudando as Escrituras, orando juntos e aplicando os
                princípios bíblicos no cotidiano do lar.
              </motion.p>
            </div>

            <div className="space-y-8">
              <motion.div
                className="flex items-center gap-4 text-[#bf9b30]"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 , delay: 0.2} }
              >
                <Star size={24} />
                <h3 className="font-black uppercase tracking-widest text-sm">
                  Glória de Deus
                </h3>
              </motion.div>
              <motion.p
                className="text-lg leading-relaxed text-zinc-600 text-justify"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 , delay: 0.2} }
              >
                O objetivo central do ministério é glorificar a Deus em todas as
                coisas. Os casamentos são vistos como uma oportunidade de
                refletir o caráter de Cristo, demonstrando amor, perdão, graça,
                compromisso e fidelidade. Dessa forma, cada casal é encorajado a
                viver de maneira que seu relacionamento seja um testemunho do
                evangelho.
              </motion.p>
            </div>
          </section>

          {/* SEÇÃO: EDIFICAÇÃO E DISCIPULADO */}
          <section className="bg-zinc-900 text-white p-12 md:p-20 rounded-3xl shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Users size={200} />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                
                <motion.h4    variants={fadeInUp} initial="hidden" whileInView="visible" className="text-[#bf9b30] font-black uppercase tracking-[0.3em] text-xs">
                  Crescimento Mútuo
                </motion.h4>
                <motion.h3  variants={fadeInUp} initial="hidden" whileInView="visible" className="text-4xl font-bold uppercase tracking-tighter">
                  Edificação dos Relacionamentos
                </motion.h3>
                <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" className="text-zinc-400 leading-relaxed text-justify">
                  O ministério promove encontros, estudos bíblicos, palestras,
                  seminários e momentos de aconselhamento que auxiliam no
                  fortalecimento do vínculo entre marido e esposa. Os casais são
                  estimulados a cultivar diálogo, respeito, compreensão e
                  cuidado mútuo, desenvolvendo uma relação sólida capaz de
                  enfrentar desafios.
                </motion.p>
              </div>
              <div className="space-y-6">
                <motion.h4 variants={fadeInRight} initial="hidden" whileInView="visible" className="text-[#bf9b30] font-black uppercase tracking-[0.3em] text-xs">
                  Mentoria
                </motion.h4>
                <motion.h3 variants={fadeInRight} initial="hidden" whileInView="visible" className="text-4xl font-bold uppercase tracking-tighter">
                  Discipulado e Maturidade
                </motion.h3>
                <motion.p  variants={fadeInRight} initial="hidden" whileInView="visible" className="text-zinc-400 leading-relaxed text-justify">
                  Incentivamos o discipulado entre casais mais experientes e
                  casais mais jovens. Esse acompanhamento promove aprendizado
                  prático, troca de experiências e apoio espiritual,
                  contribuindo para o amadurecimento na fé e no compromisso um
                  com o outro.
                </motion.p>
              </div>
            </div>
          </section>

          {/* SEÇÃO: ENVOLVIMENTO E AMBIENTE */}
          <section className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-56 h-56 rounded-full border-2 border-dashed border-[#bf9b30] flex items-center justify-center p-4">
                <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" className="w-full h-full bg-[#bf9b30] rounded-full flex items-center justify-center text-white shadow-2xl">
                  <Anchor size={60} />
                </motion.div>
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div className="space-y-4">
                <motion.h3  variants={fadeInRight} initial="hidden" whileInView="visible" className="text-3xl font-black uppercase tracking-tighter">
                  Envolvimento na Vida da Igreja
                </motion.h3>
                <motion.p variants={ fadeInRight} initial="hidden" whileInView="visible" className="text-lg text-zinc-600 leading-relaxed text-justify">
                  Os casais são encorajados a participar ativamente da vida da
                  igreja local. São convidados a servir em diferentes
                  ministérios, colaborar na organização de eventos e apoiar
                  famílias, tornando o casamento um instrumento de serviço no
                  Reino de Deus.
                </motion.p>
              </div>
              <div className="space-y-4">
                <motion.h3  variants={fadeInLeft} initial="hidden" whileInView="visible" className="text-3xl font-black uppercase tracking-tighter">
                  Ambiente Saudável e Acolhedor
                </motion.h3>
                <motion.p variants={fadeInLeft} initial="hidden" whileInView="visible" className="text-lg text-zinc-600 leading-relaxed text-justify">
                  Proporcionamos momentos de comunhão genuína, onde possam
                  compartilhar experiências, fortalecer amizades e caminhar
                  juntos na fé em um ambiente respeitoso e acolhedor.
                </motion.p>
              </div>
            </div>
          </section>

          {/* GRID DE EVENTOS (VISUAL) */}
          <section className="pt-20 border-t border-zinc-100">
            <div className="mb-12">
              <motion.h3  variants={fadeInLeft} initial="hidden" whileInView="visible" className="text-4xl font-black uppercase tracking-tighter mb-4">
                Eventos e Atividades
              </motion.h3>
              <motion.p variants={fadeInLeft} initial="hidden" whileInView="visible" className="text-zinc-500 uppercase tracking-widest text-xs font-bold">
                Fortalecendo a Família Cristã
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  t: "Retiros Espirituais",
                  d: "Momentos de renovo e foco total no relacionamento.",
                },
                {
                  t: "Jantares Temáticos",
                  d: "Comunhão e celebração da vida a dois.",
                },
                {
                  t: "Palestras e Cursos",
                  d: "Comunicação, finanças e criação de filhos.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-10 bg-white border border-zinc-100 hover:border-[#bf9b30] transition-colors group"
                >
                  <Plus className="text-[#bf9b30] mb-6 group-hover:rotate-90 transition-transform" />
                  <motion.h4    variants={fadeInLeft} initial="hidden" whileInView="visible" className="text-xl font-bold uppercase mb-4">{item.t}</motion.h4>
                  <motion.p variants={fadeInLeft} initial="hidden" whileInView="visible" className="text-sm text-zinc-500 leading-relaxed">
                    {item.d}
                  </motion.p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RODAPÉ ARTÍSTICO COM CITAÇÃO */}
        <footer className="mt-60 pt-40 border-t border-zinc-100 text-center">
          <motion.div
            className="max-w-4xl mx-auto space-y-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            
          >
            <Quote className="mx-auto text-zinc-100" size={120} />
            <h2 className="text-4xl md:text-7xl font-serif italic text-zinc-400 leading-[1.1]">
              "Lares firmados na Palavra, preparando famílias para uma{" "}
              <span className="text-zinc-900 not-italic font-black">
                jornada de fé
              </span>{" "}
              e impacto nas futuras gerações."
            </h2>
            <div className="flex flex-col items-center gap-8 mt-20">
              <div className="h-24 w-[2px] bg-[#bf9b30]" />
              <p className="font-sans font-black uppercase tracking-[0.5em] text-[10px] text-zinc-400">
                Igreja Presbiteriana de Imbituba • Ministério de Casais {year}
              </p>
            </div>
          </motion.div>
        </footer>
      </article>
    </main>
  );
}

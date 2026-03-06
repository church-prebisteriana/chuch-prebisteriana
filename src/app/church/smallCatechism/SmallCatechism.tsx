"use client";
import HeroSection from "@/src/components/ui/HeroBanner";
import catecismoMenos from "@/public/image/small catechism/castelo.jpg";
import { motion } from "framer-motion";
import logo from "@/public/image/logo_igreja.png";
import {
  BookOpenText,
  ToyBrick,
  Boxes,
  DraftingCompass,
  Users,
  Cross,
  HeartHandshake,
  Workflow,
  Sparkles,
  MessageCircle,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function SmallCatechism() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-[#1a1d24] text-[#eeeff2] selection:bg-[#c94b30]/30 selection:text-white font-sans overflow-x-hidden min-h-screen">
      {/* CAPA */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <HeroSection
          title="Breve Catecismo de Westminster"
          image={catecismoMenos}
        />
        <div className="absolute inset-0 bg-[#1a1d24]/50" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a1d24] to-transparent" />
      </div>

      <article className="max-w-7xl mx-auto px-6 pb-40">
        {/* HEADER */}
        <header className="relative z-10 -mt-20 mb-32 border-b-2 border-zinc-800 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <motion.div
              className="md:col-span-8 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInLeft}
            >
              <span className="text-[#c94b30] font-mono tracking-[0.5em] uppercase text-xs block">
                Edição Especial: Padrões Teológicos (1647)
              </span>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase text-white">
                Breve <br />{" "}
                <span className="font-light italic font-serif text-[#eeeff2] lowercase tracking-normal">
                  Catecismo
                </span>
              </h1>
            </motion.div>
            <motion.div
              className="md:col-span-4 text-left md:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInRight}
            >
              <p className="text-zinc-500 font-sans text-xs uppercase tracking-widest font-bold">
                Westminster Standards <br /> Categoria: Credos e Confissões
              </p>
            </motion.div>
          </div>
        </header>

        {/* PARTE 1: FUNDAMENTOS (1-11) */}
        <section className="mb-40">
          <motion.div
            className="bg-white text-[#1a1d24] p-12 md:p-24 rounded-sm relative overflow-hidden mb-24 shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <Sparkles className="absolute right-10 top-10 text-[#c94b30]/10 w-40 h-40 rotate-12" />
            <span className="text-[#c94b30] font-mono font-bold uppercase tracking-widest text-xs">
              Pergunta 1
            </span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-10 leading-none uppercase tracking-tighter">
              Qual é o fim principal do homem?
            </h2>
            <p className="text-3xl md:text-5xl font-serif italic text-[#1a1d24] leading-tight">
              Resposta. O fim principal do homem é glorificar a Deus, e gozá-lo
              para sempre.
            </p>
            <p className="mt-10 text-[#c94b30] font-mono text-sm uppercase border-t border-zinc-100 pt-6">
              Rom 11.36; Sal. 73.24-26; João. 17.22,24
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              className="lg:col-span-8 space-y-16 pr-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              variants={fadeInLeft}
            >
              {[
                {
                  n: 2,
                  q: "Que regra Deus nos deu para nos dirigir?",
                  r: "A palavra de Deus, que se acha nas Escrituras do Velho e do Novo Testamentos, é a única regra para nos dirigir na maneira de o glorificar e gozar.",
                  v: "Gal.1.8,9; Isaías. 8.20; Luc. 16.29,31; II Tim. 3.15-17;",
                },
                {
                  n: 3,
                  q: "O que as Escrituras principalmente ensinam?",
                  r: "As Escrituras ensinam, principalmente, o que o homem deve crer a respeito de Deus, e o dever que Deus requer do homem.",
                  v: "Mq. 6.8; Jo. 20.31; Jo.3.16",
                },
                {
                  n: 5,
                  q: "Há mais de um Deus?",
                  r: "Há um só Deus, o Deus vivo e verdadeiro.",
                  v: "Dt. 6.4; Jr. 10.10",
                },
                {
                  n: 6,
                  q: "Quantas pessoas há na Divindade?",
                  r: "Há três pessoas na Divindade: O pai, o Filho e o Espírito Santo, e estas três pessoas são um Deus, da mesma substância, iguais em poder e glória.",
                  v: "Mt. 3.16,17; Mt. 28.19; II Co. 13.13",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="border-b border-zinc-800 pb-12 group"
                >
                  <span className="text-zinc-600 font-mono font-bold text-xs">
                    P. {item.n}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-3 mb-6 tracking-tight uppercase group-hover:text-[#c94b30] transition-colors">
                    {item.q}
                  </h3>
                  <p className="text-lg leading-relaxed text-zinc-300 text-justify mb-6">
                    {item.r}
                  </p>
                  <p className="text-zinc-600 font-mono text-xs italic tracking-tight">
                    {item.v}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="lg:col-span-4 sticky top-10 h-fit"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInRight}
            >
              <div className="bg-[#121418] p-10 border border-zinc-800 shadow-xl rounded-sm">
                <BookOpenText className="text-[#c94b30] mb-6" size={32} />
                <h3 className="text-sm font-sans font-black uppercase text-zinc-300 mb-6 tracking-widest">
                  4. Definição: O que é Deus?
                </h3>
                <p className="text-[#eeeff2] font-serif italic text-2xl leading-relaxed mb-6 text-justify">
                  Deus é espírito, infinito, eterno e imutável em seu ser,
                  sabedoria, poder, santidade, justiça, bondade e verdade.
                </p>
                <p className="text-zinc-600 font-mono text-[10px] uppercase border-t border-zinc-800 pt-6">
                  Jo 4.24; Sl. 90.2; Ml 3.16; Tg. 1.17; I Rs. 8.27; Jr. 23.24;
                  Is. 40.22; Sl. 147.5; Rm. 16.27; Ap. 19.6; Is. 57.15; Dt.
                  32.4; Ex. 34.6.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PARTE 2: DECRETOS (7-11) */}
        <motion.section
          className="mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <header className="flex items-center gap-6 mb-16 border-l-8 border-[#c94b30] pl-8 py-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white">
              Decretos <br />{" "}
              <span className="italic font-serif text-[#eeeff2] lowercase font-light">
                & Criação
              </span>
            </h2>
            <div className="h-px grow bg-zinc-800" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                n: 7,
                q: "Que são os decretos de Deus?",
                r: "Os Decretos de Deus são o seu eterno propósito, segundo o conselho da sua vontade, pelo qual, para a sua própria glória, ele preordenou tudo o que acontece.",
                v: "Ef. 1.11; At. 4.27-28; Sl. 33.11",
              },
              {
                n: 8,
                q: "Como Deus executa seus decretos?",
                r: "Deus executa os seus decretos nas obras da criação e da providência.",
                v: "Ap. 4.11; Ef. 1.11",
              },
              {
                n: 9,
                q: "Qual é a obra da criação?",
                r: "A obra da criação é aquela pela qual Deus fez todas as coisas do nada, pela palavra do seu poder, no espaço de seis dias, e tudo muito bem.",
                v: "Hb. 11.3; Gênesis 1.1-31",
              },
              {
                n: 10,
                q: "Como Deus criou o homem?",
                r: "Deus criou o homem, macho e fêmea, conforme a sua própria imagem, em conhecimento, retidão e santidade, com domínio sobre as criaturas.",
                v: "Gn 1.27; Cl. 3.10; Ef. 4.24",
              },
              {
                n: 11,
                q: "Quais são as obras da providência?",
                r: "As obras da providência de Deus são a sua maneira muito santa, sábia e poderosa de preservar e governar todas as suas criaturas, e todas as ações delas.",
                v: "Sl. 145.17; Sl. 104.24; Hb. 1.3",
              },
            ].map((i) => (
              <div
                key={i.n}
                className="p-8 border border-zinc-800 bg-[#121418] hover:border-[#c94b30]/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-sans font-bold text-[#c94b30] uppercase mb-4 tracking-widest">
                    {i.n}. {i.q}
                  </h3>
                  <p className="text-base text-zinc-300 text-justify mb-6 leading-relaxed">
                    {i.r}
                  </p>
                </div>
                <p className="text-[10px] text-zinc-600 font-mono italic leading-tight border-t border-zinc-800 pt-4 mt-4">
                  {i.v}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* PARTE 3: QUEDA (12-19) */}
        <motion.section
          className="mb-40 bg-[#121418] py-20 px-8 rounded-sm shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 space-y-8">
              <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                O Pacto, <br /> a Queda
              </h2>
              <p className="text-zinc-400 italic text-xl border-l-4 border-[#c94b30] pl-6">
                Miséria do pecado
              </p>
            </div>
            <div className="md:col-span-7 space-y-10 text-lg text-zinc-300 leading-relaxed text-justify">
              <p>
                <strong>12. Pacto de Vida:</strong> Quando Deus criou o homem,
                fez com ele um pacto de vida, com a condição de perfeita
                obediência, proibindo a árvore do conhecimento.
              </p>
              <p>
                <strong>13. A Queda:</strong> Nossos primeiros pais, deixados à
                liberdade da vontade, caíram do estado em que foram criados,
                pecando contra Deus.
              </p>

              <div className="p-10 bg-white text-[#1a1d24] rounded-sm shadow-2xl relative">
                <Boxes className="absolute -left-6 -top-6 text-[#c94b30] w-12 h-12" />
                <h3 className="text-3xl font-serif italic mb-6">
                  14. Que é pecado?
                </h3>
                <p className="text-4xl font-black text-[#1a1d24] uppercase tracking-tight">
                  "Qualquer falta de conformidade com a lei de Deus, ou
                  transgressão dessa lei."
                </p>
              </div>

              <p>
                <strong>16. Posteridade:</strong> Todo o gênero humano, que de
                Adão procede, pecou nele e caiu com ele na sua primeira
                transgressão.
              </p>
              <p>
                <strong>18-19. Pecado Original e Miséria:</strong> Corrupção de
                toda a natureza e perda da comunhão com Deus, debaixo de Sua ira
                e maldição para sempre.
              </p>
            </div>
          </div>
        </motion.section>

        {/* PARTE 4: REDENTOR (20-28) */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-8 space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeInRight}
          >
            <h2 className="text-5xl font-black uppercase text-white tracking-tighter leading-none mb-12 text-right">
              O Redentor
            </h2>
            {[
              {
                n: 20,
                q: "Deus deixou perecer?",
                r: "Deus elegeu alguns para a vida eterna e entrou com eles em um pacto de graça, para os trazer a um estado de salvação por meio de um Redentor.",
              },
              {
                n: 21,
                q: "Quem é o Redentor?",
                r: "O único Redentor é o Senhor Jesus Cristo, que, sendo o eterno Filho de Deus, se fez homem e continua a ser Deus e homem para sempre.",
              },
              {
                n: 23,
                q: "Que ofícios Cristo exerce?",
                r: "Ofícios de profeta, sacerdote e rei, tanto no seu estado de humilhação como no de exaltação.",
              },
              {
                n: 27,
                q: "Humilhação:",
                r: "Consistiu em ele nascer em condição baixa, sujeito à lei, sofrer a ira de Deus e a amaldiçoada morte na cruz.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="space-y-3 border-r-2 border-zinc-800 pr-8 pb-4 text-right"
              >
                <h4 className="text-[#c94b30] font-black uppercase text-[10px] tracking-widest">
                  {item.n}. {item.q}
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.r}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.div
            className="lg:col-span-4 flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInLeft}
          >
            <div className="bg-[#c94b30] p-10 rounded-sm text-white shadow-2xl">
              <Cross size={40} className="mb-6 text-white/50" />
              <h3 className="text-2xl font-black uppercase mb-4">
                28. Exaltação
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                "Ressurgir dos mortos no terceiro dia; subir ao Céu, estar
                sentado à mão direita de Deus Pai, e vir para julgar o mundo no
                último dia."
              </p>
            </div>
          </motion.div>
        </section>

        {/* PARTE 5: APLICAÇÃO (29-38) */}
        <motion.section
          className="mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 bg-white text-[#1a1d24]">
              <Workflow className="text-[#c94b30] mb-6" />
              <h3 className="text-xl font-bold uppercase mb-4">
                31. Vocação Eficaz
              </h3>
              <p className="text-sm">
                Obra do Espírito pela qual convence-nos do pecado, ilumina
                nossos entendimentos e renova nossa vontade.
              </p>
            </div>
            <div className="p-10 border border-zinc-800">
              <ShieldCheck className="text-[#c94b30] mb-6" />
              <h3 className="text-xl font-bold uppercase mb-4">
                33. Justificação
              </h3>
              <p className="text-sm text-zinc-400">
                Ato da livre graça onde Deus perdoa pecados e aceita como justos
                por causa da justiça de Cristo.
              </p>
            </div>
            <div className="p-10 border border-zinc-800">
              <Users className="text-[#c94b30] mb-6" />
              <h3 className="text-xl font-bold uppercase mb-4">34. Adoção</h3>
              <p className="text-sm text-zinc-400">
                Recebidos no número dos filhos de Deus, com direito a todos os
                Seus privilégios.
              </p>
            </div>
          </div>
        </motion.section>

        {/* PARTE 6: LEI MORAL (39-81) */}
        <motion.section
          className="mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <div className="text-center mb-24">
            <Scale size={40} className="text-[#c94b30] mx-auto mb-4" />
            <h2 className="text-5xl font-black uppercase text-white">
              Os Mandamentos
            </h2>
          </div>
          <div className="columns-1 md:columns-2 gap-16 space-y-12">
            {[
              {
                n: 42,
                q: "Resumo:",
                r: "Amar ao Senhor de todo o coração, alma, forças e entendimento; e ao próximo como a nós mesmos.",
              },
              {
                n: 45,
                q: "1º Mandamento:",
                r: "Não terás outros deuses diante de mim. Exige conhecer e adorar o único Deus verdadeiro.",
              },
              {
                n: 49,
                q: "2º Mandamento:",
                r: "Não farás imagens. Exige guardar puros todo o culto e ordenanças instituidas.",
              },
              {
                n: 53,
                q: "3º Mandamento:",
                r: "Não tomarás o nome em vão. Exige o uso santo e reverente dos Seus títulos.",
              },
              {
                n: 57,
                q: "4º Mandamento:",
                r: "Lembra-te de santificar o Sábado. Consagrar um dia inteiro em cada sete.",
              },
              {
                n: 63,
                q: "5º Mandamento:",
                r: "Honrarás a teu pai e a tua mãe. Conservação da honra em todas as relações.",
              },
              {
                n: 67,
                q: "6º Mandamento:",
                r: "Não matarás. Esforços lícitos para preservar a vida.",
              },
              {
                n: 70,
                q: "7º Mandamento:",
                r: "Não adulterarás. Preservação da castidade em coração, palavras e conduta.",
              },
              {
                n: 73,
                q: "8º Mandamento:",
                r: "Não furtarás. Lícito adiantamento das riquezas.",
              },
              {
                n: 76,
                q: "9º Mandamento:",
                r: "Não dirás falso testemunho. Manutenção da verdade entre os homens.",
              },
              {
                n: 79,
                q: "10º Mandamento:",
                r: "Não cobiçarás. Pleno contentamento com a nossa condição.",
              },
            ].map((m) => (
              <div
                key={m.n}
                className="break-inside-avoid border-l-2 border-[#c94b30] pl-6 space-y-2"
              >
                <h4 className="font-bold text-white uppercase text-xs">
                  #{m.n} {m.q}
                </h4>
                <p className="text-sm text-zinc-400 text-justify">{m.r}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* PARTE 7: ORAÇÃO (98-107) */}
        <motion.section
          className="mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <div className="bg-[#121418] p-12 md:p-24 border-t-8 border-[#c94b30]">
            <MessageCircle className="text-[#c94b30] mb-8" size={40} />
            <h2 className="text-4xl font-black uppercase mb-12">
              A Oração do Senhor
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 text-sm text-zinc-400">
              <p>
                <strong>98. Oração:</strong> Oferecimento de desejos a Deus, em
                nome de Cristo, com confissão e agradecimento.
              </p>
              <p>
                <strong>100. Prefácio:</strong> Aproximar-nos com reverência e
                confiança como filhos a um pai.
              </p>
              <p>
                <strong>101. 1ª Petição:</strong> Que Deus nos habilite a
                glorificá-lo em tudo.
              </p>
              <p>
                <strong>102. 2ª Petição:</strong> Que o reino de Satanás seja
                destruído e o da graça adiantado.
              </p>
              <p>
                <strong>104. 4ª Petição:</strong> Da livre dádiva de Deus
                recebamos porção suficiente.
              </p>
              <p>
                <strong>107. Conclusão:</strong> Confiar somente em Deus e
                louvá-lo. Amém.
              </p>
            </div>
          </div>
        </motion.section>

        {/* RODAPÉ */}
        <footer className="mt-40 pt-20 border-t border-zinc-800 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={fadeInUp}
            className="inline-block"
          >
            <div className="p-12 border border-zinc-800 bg-[#121418] rounded-sm">
              <Image
                src={logo}
                alt="Logo"
                width={50}
                className="mx-auto mb-6"
              />
              <p className="text-zinc-500 font-sans font-black uppercase tracking-[0.4em] text-xs">
                Igreja Presbiteriana de Imbituba • 2026
              </p>
            </div>
          </motion.div>
        </footer>
      </article>
    </main>
  );
}

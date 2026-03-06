"use client";
import HeroSection from "@/src/components/ui/HeroBanner";
import catecismoMaior from "@/public/image/large catechism/castelo.jpg";
import { motion } from "framer-motion";
import {
  BookOpen,
  History,
  ShieldCheck,
  Landmark,
  ScrollText,
  Shield,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Scale,
} from "lucide-react";

export default function LargeCatechism() {
  // Variantes de animação para reutilização
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
    <main className="bg-[#f2f5f2] text-emerald-950 selection:bg-emerald-200 selection:text-emerald-900 font-serif overflow-x-hidden">
      {/* CAPA DA EDIÇÃO */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <HeroSection
          title="Catecismo Maior de Westminster (1647 - 1648)"
          image={catecismoMaior}
        />
        <div className="absolute inset-0 bg-emerald-900/30" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f2f5f2] to-transparent" />
      </div>

      <article className="max-w-6xl mx-auto px-6 pb-32">
        {/* CABEÇALHO EDITORIAL */}
        <header className="relative z-10 -mt-24 bg-white p-12 md:p-20 shadow-2xl border-b-4 border-emerald-700 mb-24">
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInRight}
            >
              <span className="text-emerald-700 font-sans font-black tracking-[0.6em] uppercase text-[10px]">
                Série Padrões Doutrinários (1647-1648)
              </span>
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInLeft}
            >
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-emerald-950 uppercase">
                O Catecismo <br />
                <span className="font-light italic font-serif text-emerald-600 lowercase ml-4 tracking-normal">
                  Maior
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              variants={fadeInUp}
            >
              <div className="w-24 h-1 bg-emerald-100 mx-auto" />
              <p className="text-zinc-400 font-sans text-xs uppercase tracking-widest mt-6">
                Categoria: Credos e Confissões Reformadas
              </p>
            </motion.div>
          </div>
        </header>

        {/* PARTE 1: DOUTRINAS FUNDAMENTAIS (1-11) */}
        <section className="mb-32">
          {/* PERGUNTA 1 - Vem de BAIXO */}
          <motion.div
            className="bg-emerald-900 text-white p-12 md:p-20 rounded-sm relative overflow-hidden mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <Landmark className="absolute right-[-2%] bottom-[-2%] w-64 h-64 text-white/5 rotate-12" />
            <span className="text-emerald-400 font-sans font-bold uppercase tracking-widest text-xs">
              Pergunta 1
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
              Qual é o fim supremo e principal do homem?
            </h2>
            <p className="text-2xl md:text-4xl font-serif italic text-emerald-100 leading-snug">
              Resposta. O fim supremo e principal do homem e glorificar a Deus e
              gozá-lo para sempre.
            </p>
            <p className="mt-8 text-emerald-400 font-mono text-sm uppercase">
              Rom. 11:36; 1 Cor. 10:31; Sal. 73:24-26; João 17:22-24.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* COLUNA DE TEXTO 2-6 - Vem da ESQUERDA */}
            <motion.div
              className="lg:col-span-8 space-y-12 pr-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              variants={fadeInLeft}
            >
              {[
                {
                  n: 2,
                  q: "Donde se infere que há um Deus?",
                  r: "A própria luz da natureza no espírito do homem e as obras de Deus claramente manifestam que existe um Deus; porém só a sua Palavra e o seu Espírito o revelam de um modo suficiente e eficazmente aos homens para a sua salvação.",
                  v: "Rom. 1:19-20; 1 Cor. 2:9-10: II Tim. 3,15-17.",
                },
                {
                  n: 3,
                  q: "Que é a Palavra de Deus?",
                  r: "As Escrituras Sagradas, o Velho e o Novo Testamento, são a Palavra de Deus, a única regra de fé e prática.",
                  v: "II Tim. 3:16; 11 Pedro 1:19 21; Isa. 8:20; Luc. 16:29, 31; Gal. 1:8-9.",
                },
                {
                  n: 5,
                  q: "Que é o que as Escrituras principalmente ensinam?",
                  r: "As Escrituras ensinam principalmente o que o homem deve crer acerca de Deus e o dever que Deus requer do homem.",
                  v: "João 20:31; 11 Tim. 1:13.",
                },
                {
                  n: 6,
                  q: "Que revelam as Escrituras acerca de Deus?",
                  r: "As Escrituras revelam o que Deus é, quantas pessoas há na Divindade, os seus decretos e como Ele os executa.",
                  v: "Mas. 3:16-17; Isa. 46:9-10; At. 4:27-28.",
                },
              ].map((item) => (
                <div key={item.n} className="border-b border-emerald-100 pb-10">
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">
                    {item.n}. {item.q}
                  </h3>
                  <p className="text-lg leading-relaxed text-zinc-700 text-justify mb-4">
                    {item.r}
                  </p>
                  <p className="text-emerald-600/60 font-mono text-xs italic">
                    {item.v}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* ASIDE DESTAQUE (4) - Vem da DIREITA */}
            <motion.div
              className="lg:col-span-4 sticky top-10 h-fit"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInRight}
            >
              <div className="bg-emerald-50 p-8 border-l-4 border-emerald-600 shadow-sm">
                <h3 className="text-sm font-sans font-black uppercase text-emerald-700 mb-6">
                  4. Autoridade das Escrituras
                </h3>
                <p className="text-emerald-950 font-medium leading-relaxed mb-6 text-justify">
                  Demonstra-se que as Escrituras são a Palavra de Deus - pela
                  majestade e pureza do seu conteúdo, pela harmonia de todas as
                  suas partes, e pelo propósito do seu conjunto, que é dar toda
                  a glória a Deus; pela sua luz e pelo poder que possuem para
                  convencer e converter os pecadores e para edificar e confortar
                  os crentes para a salvação.
                </p>
                <p className="text-emerald-700 italic text-sm border-t border-emerald-200 pt-6">
                  O Espírito de Deus, porém, dando testemunho, pelas Escrituras
                  e juntamente com elas no coração do homem, é o único capaz de
                  completamente persuadi-lo.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PARTE 2: QUEM É DEUS (7-11) - Vem de BAIXO */}
        <motion.section
          className="mb-32 py-20 bg-emerald-950 text-white rounded-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto px-8 text-center">
            <span className="text-emerald-400 font-mono tracking-widest text-xs uppercase mb-10 block">
              Pergunta 7
            </span>
            <h2 className="text-5xl md:text-7xl font-light italic mb-12 tracking-tighter">
              Quem é Deus?
            </h2>
            <p className="text-2xl md:text-4xl leading-[1.3] text-emerald-50 mb-16 text-justify font-light px-4">
              Deus é{" "}
              <span className="text-emerald-400 font-bold">espírito</span>, em
              si e por si infinito em seu ser, glória, bem-aventurança e
              perfeição; todo - suficiente, eterno, imutável, insondável,
              onipresente, infinito em poder, sabedoria, santidade, justiça,
              misericórdia e clemência, longânimo e cheio de bondade e verdade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-16 mt-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                variants={fadeInUp}
              >
                <h4 className="text-emerald-500 font-sans font-bold uppercase text-[10px] mb-2">
                  8. Unidade
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Há um só Deus, o Deus vivo e verdadeiro. (Deut. 6:4)
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                variants={fadeInUp}
              >
                <h4 className="text-emerald-500 font-sans font-bold uppercase text-[10px] mb-2">
                  9. Trindade
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Pai, Filho e Espírito Santo; um só Deus verdadeiro, da mesma
                  substância, iguais em poder.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                variants={fadeInUp}
              >
                <h4 className="text-emerald-500 font-sans font-bold uppercase text-[10px] mb-2">
                  10-11. Igualdade
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Atribuindo-lhes os mesmos nomes, atributos, obras e culto que
                  só a Deus pertencem.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* PARTE 3: DECRETOS E CRIAÇÃO (12-19) */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* COLUNA ESQUERDA (12-13) - Vem da ESQUERDA */}
            <motion.div
              className="lg:col-span-5 space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInLeft}
            >
              <h2 className="text-4xl font-black text-emerald-900 leading-none uppercase tracking-tighter mb-12">
                Decretos e a <br />{" "}
                <span className="text-emerald-600 font-light italic font-serif lowercase">
                  Execução
                </span>
              </h2>
              <div className="bg-white p-8 shadow-xl border border-emerald-50">
                <h3 className="font-bold mb-4">12. Atos Sábios</h3>
                <p className="text-zinc-600 text-sm leading-relaxed text-justify">
                  Os decretos de Deus são os atos sábios, livres e santos do
                  conselho da sua vontade, pelos quais, desde toda a eternidade,
                  Ele, para a sua própria glória, imutavelmente predestinou tudo
                  o que acontece.
                </p>
              </div>
              <div className="p-8 bg-emerald-50">
                <h3 className="font-bold mb-4">
                  13. Referência a Anjos e Homens
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed text-justify italic">
                  Ele elegeu alguns anjos para a glória, e, em Cristo, escolheu
                  alguns homens para a vida eterna e os meios para consegui-la;
                  deixou e predestinou os mais à desonra e à ira por causa dos
                  seus pecados.
                </p>
              </div>
            </motion.div>

            {/* COLUNA DIREITA (14-18) - Vem da DIREITA */}
            <motion.div
              className="lg:col-span-7 space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInRight}
            >
              {[
                {
                  n: 14,
                  q: "Como executa Deus os seus decretos?",
                  r: "Deus executa os seus decretos nas obras da criação e da providência, segundo a sua presciência infalível e o livre e imutável conselho da rua vontade.",
                },
                {
                  n: 15,
                  q: "Que é a obra da criação?",
                  r: "A obra da criação é aquela pela qual Deus, pela palavra do seu poder, fez do nada o mundo, e tudo quanto nele há, para si no espaço de seis dias, e tudo muito bom.",
                },
                {
                  n: 16,
                  q: "Como criou Deus os anjos?",
                  r: "Deus criou todos os anjos como espíritos imortais, santos, poderosos e excelentes em conhecimento, para executarem os seus mandamentos e louvarem o seu nome, todavia sujeitos à mudança.",
                },
                {
                  n: 18,
                  q: "Quais são as obras da providência de Deus?",
                  r: "As obras da providência de Deus são a sua mui santa, sábia e poderosa maneira de preservar e governar todas as suas criaturas e todas as suas ações, para a sua própria glória.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="border-l-2 border-emerald-100 pl-8"
                >
                  <span className="text-xs font-sans font-bold text-emerald-400">
                    P. {item.n}
                  </span>
                  <h3 className="text-xl font-bold text-emerald-950 mb-4">
                    {item.q}
                  </h3>
                  <p className="text-lg leading-relaxed text-zinc-700 text-justify">
                    {item.r}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PARTE 4: QUEDA E MISÉRIA (20-29) - Vem de BAIXO */}
        <motion.section
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <div className="bg-zinc-900 text-zinc-100 p-12 md:p-20 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-16 border-t-8 border-emerald-600 shadow-lg">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase text-emerald-500 tracking-tighter leading-none">
                O Homem <br /> e a Queda
              </h2>
              <p className="text-zinc-400 text-justify leading-relaxed">
                Nossos primeiros pais, sendo deixados à liberdade da sua própria
                vontade, transgrediram o mandamento de Deus... Essa queda
                reduziu o gênero humano a um estado de pecado e miséria.
              </p>
              <div className="p-6 bg-white/5 border border-white/10 italic text-zinc-100">
                <strong>24. Que é pecado?</strong> <br />
                Pecado é qualquer falta de conformidade com a lei de Deus, ou a
                transgressão de qualquer lei por Ele dada como regra.
              </div>
            </div>
            <div className="space-y-10">
              {[
                {
                  n: 25,
                  q: "Em que consiste o pecado desse estado?",
                  r: "Consiste na culpa do primeiro pecado de Adão, na falta de retidão e na corrupção da sua natureza pela qual se tornou inteiramente indisposto, incapaz e oposto a todo o bem espiritual.",
                },
                {
                  n: 27,
                  q: "Qual é a miséria que a queda trouxe?",
                  r: "A perda da comunhão com Deus, o seu desagrado e maldição; de modo que somos por natureza filhos da ira, escravos de Satanás e expostos a todas as punições.",
                },
                {
                  n: 29,
                  q: "Punições no mundo vindouro?",
                  r: "A separação eterna da presença consoladora de Deus e os tormentos mais penosos na alma e no corpo, sem intermissão, no fogo do inferno para sempre.",
                },
              ].map((i) => (
                <div key={i.n} className="space-y-2">
                  <h4 className="text-emerald-400 font-bold uppercase text-[10px] tracking-widest">
                    {i.n}. {i.q}
                  </h4>
                  <p className="text-sm text-zinc-300 text-justify leading-relaxed">
                    {i.r}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PARTE 5: PACTO E MEDIADOR (30-56) - Layout Colunas, vem de BAIXO */}
        <motion.section
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <header className="mb-16 border-b border-zinc-200 pb-10">
            <h2 className="text-5xl font-black text-emerald-950 uppercase tracking-tighter">
              O Pacto da Graça
            </h2>
            <p className="text-emerald-600 font-serif italic text-2xl mt-4">
              Pela mediação do Deus-Homem
            </p>
          </header>

          <div className="columns-1 md:columns-3 gap-12 space-y-12">
            {[
              {
                title: "30. Livramento",
                text: "Deus não deixa todos os homens perecer... mas, por puro amor livra os escolhidos pelo pacto da graça.",
              },
              {
                title: "36. O Mediador",
                text: "0 único Mediador é o Senhor Jesus Cristo, eterno Filho de Deus, fêz-se homem, e continua a ser Deus e homem em duas naturezas perfeitas.",
              },
              {
                title: "42. Chamado Cristo",
                text: "0 nosso Mediador foi chamado Cristo, porque foi ungido com o Espírito Santo para exercer as funções de profeta, sacerdote e rei.",
              },
              {
                title: "46-50 Humilhação",
                text: "Tomou a forma de servo em sua concepção, nascendo de uma mulher de humilde posição, lutando com as tentações de Satanás, e suportando a penosa morte da cruz.",
              },
              {
                title: "51-56 Exaltação",
                text: "Compreende a sua ressurreição, ascensão, o estar sentado à destra do Pai, e a sua segunda vinda para julgar o mundo em retidão.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="break-inside-avoid border-l-2 border-emerald-100 pl-6 space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                variants={fadeInUp}
              >
                <h3 className="font-bold text-emerald-800 pb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-justify leading-relaxed text-zinc-700">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PARTE 6: APLICAÇÃO E IGREJA (57-90) */}
        <section className="mb-32">
          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            {/* Esquerda - Vem da ESQUERDA */}
            <motion.div
              className="md:col-span-4 bg-emerald-50 p-10 flex flex-col justify-center border-t-2 border-emerald-600 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInLeft}
            >
              <ShieldCheck className="text-emerald-600 w-12 h-12 mb-6" />
              <h2 className="text-2xl font-black uppercase text-emerald-950 mb-6">
                Justificação e Santificação
              </h2>
              <p className="text-xs text-emerald-800/70 leading-relaxed text-justify space-y-4">
                <span>
                  70. Justificação é um ato da livre graça, perdoando pecados e
                  aceitando o pecador unicamente pela perfeita obediência de
                  Cristo.
                </span>
                <br />
                <br />
                <span>
                  75. Santificação é a obra da graça renovando o homem interior
                  segundo a imagem de Deus.
                </span>
              </p>
            </motion.div>
            {/* Direita - Vem da DIREITA */}
            <motion.div
              className="md:col-span-8 p-12 bg-white shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInRight}
            >
              <h3 className="text-emerald-400 font-sans font-bold uppercase text-[10px] mb-4">
                61-64. Natureza da Igreja
              </h3>
              <div className="space-y-6 text-sm text-zinc-700 leading-relaxed text-justify">
                <p>
                  <strong>Igreja Visível:</strong> Composta de todos quantos
                  professam a verdadeira religião, juntamente com seus filhos.
                  Sob o cuidado especial de Deus.
                </p>
                <p>
                  <strong>Igreja Invisível:</strong> O número completo dos
                  eleitos, que têm sido e hão de ser reunidos em um corpo sob
                  Cristo, a cabeça.
                </p>
                <p>
                  <strong>80-81. Certeza:</strong> Aqueles que verdadeiramente
                  crêem podem ter a certeza infalível de que estão no estado de
                  graça, embora crentes verdadeiros possam esperar muito tempo
                  antes de consegui-la.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PARTE 7: A LEI MORAL E MANDAMENTOS (91-105) - GRID FINAL */}
        <section className="mb-32">
          <motion.header
            className="mb-16 border-b border-zinc-200 pb-10 flex items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeInLeft}
          >
            <Scale className="text-emerald-700" size={30} />
            <h2 className="text-4xl font-bold text-emerald-950 uppercase tracking-tighter">
              A Lei Moral: O Dever Exigido
            </h2>
          </motion.header>

          {/* PERGUNTAS 93-103 - Vêm de BAIXO */}
          <div className="space-y-12 mb-20">
            {[
              {
                n: 93,
                q: "Que é a lei moral?",
                r: "A declaração da vontade de Deus, feita ao gênero humano, dirigindo e obrigando todas as pessoas à conformidade e obediência perfeita e perpétua a ela - nos apetites e disposições do homem inteiro.",
              },
              {
                n: 98,
                q: "Onde se acha resumidamente compreendida?",
                r: "Nos dez mandamentos, dados no monte Sinai. Os quatro primeiros contêm os deveres para com Deus e os outros seis os nossos deveres para com o homem.",
              },
              {
                n: 101,
                q: "Qual é o prefácio dos dez mandamentos?",
                r: 'O prefácio é: "Eu sou o Senhor teu Deus, que te tirei da terra do Egito, da casa da servidão". Manifesta soberania como JEOVA, eterno e todo-poderoso Deus.',
              },
              {
                n: 103,
                q: "Qual é o primeiro mandamento?",
                r: '"Não terás outros deuses diante de mim."',
                v: "Exo. 20:3",
              },
            ].map((i, idx) => (
              <motion.div
                key={i.n}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 items-baseline border-b border-emerald-50 pb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                variants={fadeInUp}
              >
                <span className="text-5xl font-black text-emerald-100 italic">
                  #{i.n}
                </span>
                <div className="md:col-span-3">
                  <h4 className="text-xl font-bold mb-2 text-emerald-900">
                    {i.q}
                  </h4>
                  <p className="text-zinc-600 leading-relaxed text-justify">
                    {i.r}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOX FINAL 104 E 105 - TEXTO COMPLETO PESADO */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 104 - Vem da ESQUERDA */}
            <motion.div
              className="bg-emerald-900 text-white p-10 md:p-16 rounded-sm shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInLeft}
            >
              <h3 className="text-2xl font-bold border-b border-emerald-700 pb-6 mb-8 text-emerald-400 uppercase tracking-tighter flex items-center gap-3">
                <CheckCircle2 size={24} /> 104. Deveres Exigidos
              </h3>
              <p className="text-sm leading-[1.8] text-justify text-emerald-50">
                O conhecer e reconhecer Deus como único verdadeiro Deus e nosso
                Deus, e adorá-lo e glorificá-lo como tal; pensar e meditar nÊle,
                highly apreciá-lo, honrá-lo, adorá-lo, escolhê-lo, amá-lo,
                desejá-lo e temê-lo; crêr nÊle, confiando, regozijando-nos nÊle;
                prestando-Lhe toda a obediência e submissão do homem todo; ter
                cuidado de o agradar em tudo e tristeza quando Ele é ofendido; e
                andar humildemente com Ele.
              </p>
            </motion.div>
            {/* 105 - Vem da DIREITA */}
            <motion.div
              className="bg-white p-10 md:p-16 border-4 border-emerald-900 shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInRight}
            >
              <h3 className="text-2xl font-bold border-b border-zinc-100 pb-6 mb-8 text-emerald-900 uppercase tracking-tighter flex items-center gap-3">
                <AlertTriangle size={24} className="text-emerald-700" /> 105.
                Pecados Proibidos
              </h3>
              <p className="text-[12px] leading-[1.6] text-justify text-zinc-600 space-y-4">
                O ateísmo, negar ou não ter um Deus; a idolatria, ter ou adorar
                mais do que um Deus; o não tê-lo e não confessá-lo; a
                ignorância, o esquecimento, as falsas opiniões; o pesquisar
                audaz e curioso dos seus segredos; toda a impiedade, ódio de
                Deus, egoísmo; a incredulidade, heresia; a dureza de coração; a
                soberba; a segurança carnal; todos os pactos com o diabo; o
                consultar com ele e dar ouvidos às suas sugestões; o fazer pouco
                caso e desprezar a Deus e aos mandamentos... e o atribuir o
                louvor à fortuna, aos ídolos, ou a nós mesmos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONCLUSÃO FINAL ESTILO MANIFESTO - Vem de BAIXO */}
        <footer className="mt-40 pt-20 border-t-2 border-emerald-950 text-center">
          <motion.div
            className="inline-block relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <ScrollText
              size={100}
              className="absolute -top-12 -left-12 text-emerald-700/10 rotate-[-15deg]"
            />
            <div className="bg-emerald-950 text-white p-12 md:p-24 relative z-10 rounded-sm shadow-2xl">
              <h2 className="text-6xl font-serif italic mb-10 leading-none">
                Conclusão teológica
              </h2>
              <p className="text-2xl text-emerald-100/60 font-light leading-relaxed max-w-3xl mx-auto mb-16 text-justify px-4">
                O Catecismo Maior preserva a integridade da fé reformada,
                servindo como uma ferramenta educacional e apologética para a
                igreja através dos séculos. Cada resposta é uma pedra angular na
                fundação da verdade bíblica.
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-emerald-400" />
                <span className="font-sans font-black uppercase tracking-[0.3em] text-emerald-400 text-xs">
                  Documentos Históricos IPB
                </span>
                <span className="h-px w-12 bg-emerald-400" />
              </div>
            </div>
          </motion.div>
        </footer>
      </article>
    </main>
  );
}

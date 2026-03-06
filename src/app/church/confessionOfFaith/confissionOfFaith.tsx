
"use client";
import HeroSection from "@/src/components/ui/HeroBanner";
import confession from "@/public/image/confissão de fé/confissão de fé.jpg";
import {
  Quote,
  BookOpen,
  History,
  ShieldCheck,
  Landmark,
  ScrollText,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ConfissionOfFaith() {
  // Variantes de animação para reutilização
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="bg-[#f9f8f6] text-zinc-900 selection:bg-igreja-teal/30 font-serif overflow-x-hidden">
      {/* CAPA EDITORIAL IMPACTANTE */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <HeroSection
          title="Confissão de Fé de Westminster"
          image={confession}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#f9f8f6] to-transparent" />
      </div>

      <article className="max-w-6xl mx-auto px-6 pb-32">
        {/* MANCHETE DE REVISTA */}
        <header className="relative z-10 -mt-32 mb-24 bg-white p-12 md:p-24 shadow-2xl border-b-8 border-igreja-teal">
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeInRight}
            >
              <span className="text-igreja-teal font-sans font-black tracking-[0.5em] uppercase text-xs">
                Edição Especial: Símbolos de Fé
              </span>
            </motion.p>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInLeft}
            >
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-zinc-900 uppercase">
                Introdução Geral <br />
                <span className="font-light italic font-serif text-igreja-teal lowercase ml-4">
                  e
                </span>{" "}
                História
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              variants={fadeInUp}
            >
              <p className="text-zinc-400 font-sans text-sm md:text-lg max-w-xl mx-auto leading-relaxed border-t border-zinc-100 pt-6">
                Uma análise profunda sobre a declaração doutrinária que serve
                como bússola para a fé reformada há séculos.
              </p>
            </motion.div>
          </div>
        </header>

        {/* LAYOUT DE REVISTA - 2 COLUNAS DE TEXTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* COLUNA DA ESQUERDA (INTRODUÇÃO) - Vem da ESQUERDA */}
          <motion.div 
            className="lg:col-span-8 space-y-8 text-lg leading-relaxed text-zinc-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            variants={fadeInLeft}
          >
            <h2 className="text-igreja-teal font-sans font-black text-2xl uppercase tracking-widest border-l-4 border-igreja-teal pl-4 mb-10">
              Parte 1 - Introdução
            </h2>

            <h3 className="text-3xl font-serif italic text-zinc-900 mb-6">
              O que é uma confissão de fé?
            </h3>

            <p className="text-justify first-letter:text-9xl first-letter:font-black first-letter:text-igreja-teal first-letter:mr-4 first-letter:float-left first-letter:leading-[0.7] first-letter:mt-2">
              Em resumo, uma confissão de fé é uma declaração sistematizada das
              doutrinas fundamentais da Bíblia. Sendo assim, ela não substitui
              as Escrituras, mas tem um propósito de servir como um guia para a
              interpretação coerente da Palavra de Deus, ajudando a igreja a
              manter-se firme na verdade. Os crentes reformados entendem que a
              Bíblia é a autoridade máxima, mas reconhecem que uma confissão bem
              estruturada é essencial para evitar interpretações erradas ou
              subjetivas da fé cristã.
            </p>

            <p className="text-justify">
              A importância das confissões de fé se torna evidente quando
              olhamos para a história da igreja. Ao longo dos séculos, muitos
              grupos cristãos se desviaram da sã doutrina devido à falta de
              clareza e unidade em seus ensinamentos. Ter uma confissão de fé
              bem definida ajuda a igreja a permanecer firme contra heresias,
              modismos teológicos e interpretações equivocadas das Escrituras.
            </p>

            <div className="my-16 flex flex-col md:flex-row items-center gap-8 bg-zinc-100/50 p-10 rounded-sm border-r-4 border-igreja-teal">
              <Quote size={60} className="text-igreja-teal/20 shrink-0" />
              <p className="text-2xl font-serif italic text-zinc-600 leading-tight">
                "Desde os tempos da igreja mais primitiva, os cristãos têm
                utilizado credos e confissões para expressar e preservar a fé."
              </p>
            </div>

            <p className="text-justify">
              Mas afinal, o que é uma confissão de fé? Qual a sua importância
              para a vida cristã? E por que igrejas reformadas, especialmente as
              Presbiterianas, adotam uma confissão como padrão doutrinário?
            </p>

            <p className="text-justify">
              A Confissão de Fé de Westminster, elaborada no século XVII, é uma
              das mais importantes declarações doutrinárias da tradição
              reformada. Ela sintetiza a teologia calvinista e estabelece um
              padrão doutrinário sólido para Igrejas Presbiterianas ao redor do
              mundo. Mas o que levou à necessidade dessa confissão? Para
              entendermos isso, é preciso olhar para o seu contexto histórico e
              os motivos que levaram à sua formulação.
            </p>

            <p className="text-justify bg-igreja-teal/5 p-6 border-l-2 border-igreja-teal font-medium italic">
              Nos próximos tópicos, exploraremos o cenário político e religioso
              da época, os objetivos dos teólogos que elaboraram a Confissão e
              por que, até hoje, ela continua sendo um documento essencial para
              a fé reformada.
            </p>
          </motion.div>

          {/* COLUNA DA DIREITA (ASIDE/HISTÓRIA) - Vem da DIREITA */}
          <motion.div 
            className="lg:col-span-4 space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={fadeInRight}
          >
            <div className="sticky top-10">
              <div className="bg-white p-8 shadow-xl border border-zinc-100">
                <History className="text-igreja-teal mb-4" />
                <h2 className="text-2xl font-bold mb-6 font-sans uppercase tracking-tighter">
                  2. Breve Histórico
                </h2>
                <div className="space-y-6 text-sm text-zinc-500 text-justify leading-relaxed">
                  <p>
                    A Confissão de Fé de Westminster foi escrita entre 1643 e
                    1648, durante a Assembleia de Westminster, realizada na
                    Inglaterra. Esse foi um período de grande instabilidade
                    política e religiosa, marcado por conflitos entre o rei e
                    o Parlamento, além de disputas entre anglicanos, puritanos
                    e outros grupos cristãos.
                  </p>
                  <p>
                    Para entender a importância dessa confissão, precisamos
                    examinar o contexto em que ela surgiu.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CONTINUAÇÃO COM ANIMAÇÕES DE BAIXO PARA CIMA */}
        <motion.div 
          className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <div className="lg:col-span-12 space-y-10">
            <h3 className="text-3xl font-serif italic border-b border-zinc-200 pb-4">
              2.1. O Contexto Político e Religioso
            </h3>
            <div className="columns-1 md:columns-2 gap-12 text-zinc-700 leading-relaxed text-justify text-lg space-y-6">
              <p>
                No século XVII, a Inglaterra estava em meio a uma crise
                profunda. O rei Carlos I defendia uma igreja anglicana com forte
                influência católica, enquanto o Parlamento, dominado pelos
                puritanos, desejava uma reforma mais profunda na igreja,
                tornando-a mais próxima das doutrinas bíblicas. Esse conflito
                culminou na Guerra Civil Inglesa (1642-1651), onde os puritanos
                e os apoiadores do Parlamento lutaram contra as forças do rei.
              </p>
              <p>
                Nesse cenário, o Parlamento convocou a Assembleia de Westminster
                em 1643, reunindo teólogos, pastores e estudiosos reformados
                para estabelecer um padrão doutrinário unificado para a igreja
                na Inglaterra, Escócia e Irlanda. O objetivo era criar uma base
                teológica sólida para reformar a igreja nacional e afastá-la das
                influências católicas remanescentes no anglicanismo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2.2 - Vem da ESQUERDA */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           variants={fadeInLeft}
           className="mt-20"
        >
            <h3 className="text-3xl font-serif italic border-b border-zinc-200 pb-4 pt-10">
              2.2. A Assembleia de Westminster
            </h3>
            <p className="text-lg leading-relaxed text-zinc-700 text-justify mt-6">
              A Assembleia de Westminster foi composta por cerca de 120
              teólogos, além de parlamentares e representantes da Igreja da
              Escócia. A maioria dos participantes era de orientação puritana e
              calvinista, com forte influência da tradição reformada. Os
              trabalhos da Assembleia duraram cinco anos, resultando na
              Confissão de Fé de Westminster, no Catecismo Maior e no Breve
              Catecismo. Esses documentos foram adotados oficialmente pela
              Igreja da Escócia e influenciaram profundamente igrejas reformadas
              ao redor do mundo, incluindo o presbiterianismo.
            </p>
        </motion.div>

        {/* PROPÓSITO - Vem de BAIXO */}
        <motion.div 
          className="bg-zinc-900 text-white p-12 md:p-20 my-20 rounded-sm relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <Landmark className="absolute right-10 top-10 text-white/5 w-40 h-40" />
          <h2 className="text-4xl font-light mb-10 italic text-igreja-teal">
            2.3. O Propósito da Confissão
          </h2>
          <ul className="space-y-6 text-xl font-light text-zinc-300">
            <li className="flex gap-4 items-start">
              <span className="text-igreja-teal font-bold">I.</span> 1.
              Unificar a fé reformada na Inglaterra, Escócia e Irlanda.
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-igreja-teal font-bold">II.</span> 2.
              Estabelecer um padrão doutrinário sólido, baseado nas
              Escrituras.
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-igreja-teal font-bold">III.</span> 3.
              Rejeitar práticas e doutrinas católicas, como a
              transubstanciação e a supremacia papal.
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-igreja-teal font-bold">IV.</span> 4.
              Defender a teologia reformada contra ensinos errôneos dentro
              do anglicanismo.
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-igreja-teal font-bold">V.</span> 5.
              Prover um guia para a fé cristã, que pudesse ser utilizado
              para ensino, pregação e defesa da verdade bíblica.
            </li>
          </ul>
        </motion.div>

        {/* 2.4 - Vem da DIREITA */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           variants={fadeInRight}
        >
            <h3 className="text-3xl font-serif italic border-b border-zinc-200 pb-4">
              2.4. A influência da Confissão de Westminster
            </h3>
            <p className="text-lg leading-relaxed text-zinc-700 text-justify mt-6">
              Embora tenha sido elaborada na Inglaterra, a Confissão de
              Westminster teve um impacto maior na Escócia, onde foi adotada
              oficialmente pela Igreja Presbiteriana. Ao longo dos séculos, essa
              confissão se tornou a principal referência doutrinária das igrejas
              reformadas ao redor do mundo, incluindo o Presbiterianismo no
              Brasil, que a utiliza até hoje como sua base teológica. Nos
              próximos tópicos, veremos quais foram os principais motivos para a
              formulação da Confissão e por que ela continua sendo essencial
              para a fé reformada.
            </p>
        </motion.div>

        {/* SEÇÃO 3 - MOTIVOS - Vem de BAIXO */}
        <motion.section 
          className="mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <div className="flex flex-col items-center mb-20">
            <span className="h-px w-24 bg-igreja-teal mb-4" />
            <h2 className="text-5xl font-black text-center uppercase tracking-tighter">
              3. Motivos para a Formulação
            </h2>
          </div>

          <div className="space-y-12 text-lg leading-relaxed text-zinc-700 text-justify">
            <p>
              Como vimos, a Confissão de Fé de Westminster não surgiu por acaso.
              Sua formulação foi impulsionada por diversos fatores teológicos,
              políticos e eclesiásticos. O século XVII foi um período de grandes
              mudanças na Europa, e as igrejas na Inglaterra, Escócia e Irlanda
              enfrentavam desafios significativos. Diante disso, teólogos
              reformados perceberam a necessidade de estabelecer um padrão
              doutrinário sólido para guiar a fé e a prática dos cristãos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
              <div className="space-y-6">
                <h3 className="text-xl font-sans font-bold text-igreja-teal uppercase tracking-widest">
                  3.1. Unificação Doutrinária
                </h3>
                <p>
                  A Igreja da Inglaterra (anglicana) ainda mantinha muitos
                  elementos herdados do catolicismo romano, o que gerava
                  conflitos internos. Diferentes grupos dentro da igreja
                  defendiam posições teológicas diversas:
                </p>
                <ul className="space-y-2 text-sm text-zinc-500 italic">
                  <li>• Anglicanos tradicionalistas desejavam manter a estrutura hierárquica.</li>
                  <li>• Puritanos defendiam uma reforma mais profunda (calvinista).</li>
                  <li>• Presbiterianos escoceses precisavam fortalecer sua posição oficial.</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-sans font-bold text-igreja-teal uppercase tracking-widest">
                  3.2. A Crise e a Reforma
                </h3>
                <p>
                  Desde a Reforma Protestante do século XVI, igrejas reformadas
                  adotaram confissões para expressar sua fé de forma clara.
                  Exemplos disso são: a Confissão Belga (1561), a Confissão de
                  Augsburgo (1530) e o Catecismo de Heidelberg (1563).
                </p>
                <p>
                  A Confissão de Westminster seguiu essa tradição, mas com uma
                  abordagem mais detalhada e sistemática da teologia reformada.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold pt-10">
              3.3. Proteção Contra Heresias e Ensinos Errôneos
            </h3>
            <p>
              A igreja sempre enfrentou desafios teológicos, e no século XVII
              não foi diferente. Havia um crescimento de movimentos teológicos
              que iam contra a doutrina reformada, como: Arminianismo, que
              negava a eleição incondicional e a soberania absoluta de Deus;
              Catolicismo romano, que tentava reafirmar a supremacia do Papa; e
              Grupos sectários, que promoviam interpretações extremas sem base
              sólida.
            </p>

            <h3 className="text-2xl font-bold pt-10">
              3.4. Padrão para Ensino e Pregação
            </h3>
            <p>
              Uma das funções mais importantes de uma confissão de fé é fornecer
              um guia confiável para o ensino bíblico. Com a Reforma, o acesso à
              Bíblia foi ampliado, mas muitos pregadores careciam de formação
              teológica estruturada. A Confissão de Westminster serviu como: um
              manual para pastores ensinarem a sã doutrina; uma base para
              catequese e discipulado; e um referencial para a pregação.
            </p>

            <h3 className="text-2xl font-bold pt-10">
              3.5. Impacto no Presbiterianismo
            </h3>
            <p>
              Embora tenha sido escrita na Inglaterra, a Confissão de
              Westminster teve seu maior impacto na Escócia e nos países de
              tradição presbiteriana. No Brasil, a Igreja Presbiteriana adota a
              Confissão de Fé de Westminster como padrão doutrinário,
              reafirmando seu compromisso com a fé reformada e a centralidade
              das Escrituras.
            </p>
          </div>
        </motion.section>

        {/* PARTE 4 E 5 - Texto vindo da ESQUERDA */}
        <motion.section 
          className="mt-32 border-t-2 border-zinc-100 pt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInLeft}
        >
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-serif italic mb-10 leading-tight">
                4. Por Que os Crentes Possuem uma Confissão de Fé?
              </h2>
              <p className="text-zinc-500 mb-8 text-justify">
                Desde os tempos bíblicos, o povo de Deus tem utilizado
                declarações doutrinárias. Se a Bíblia é suficiente, qual a
                importância de uma confissão? Ela serve como um instrumento de
                clareza, unidade e defesa da verdade.
              </p>
              <Shield className="text-igreja-teal/20 w-32 h-32" />
            </div>
            <div className="lg:col-span-7 space-y-8 text-lg text-zinc-700 text-justify">
              <p>
                <strong>4.1. Expressão Coletiva:</strong> A fé cristã é
                comunitária. Em Deuteronômio 6:4, vemos o Shema Israel: "Ouve, ó
                Israel...". No Novo Testamento: "Tu és o Cristo..." (Mateus
                16:16). Essas confissões preservam a fé.
              </p>
              <p>
                <strong>4.2. Defesa Contra Heresias:</strong> Respostas a
                ataques como o Arianismo, combatido pelo Credo de Niceia (325
                d.C.). Westminster fortalece a fé contra desafios modernos.
              </p>
              <p>
                <strong>4.3. Ajuda na Interpretação:</strong> A Bíblia é
                suficiente (2 Timóteo 3:16-17), mas sem interpretação coerente,
                gera erros. A confissão resume doutrinas e evita subjetividade.
              </p>
              <p>
                <strong>4.4. Preservação para o Futuro:</strong> Em 2 Timóteo
                2:2, Paulo instrui Timóteo a transmitir o ensino. É um legado de
                geração em geração.
              </p>
              <p>
                <strong>4.5. Unidade e Identidade:</strong> Garante uma fé comum
                entre membros e um referencial teológico sólido para a
                liderança.
              </p>
            </div>
          </div>
        </motion.section>

        {/* PARTE 5 - Texto vindo da DIREITA */}
        <motion.section 
          className="mt-32 bg-white p-12 md:p-20 shadow-sm border border-zinc-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInRight}
        >
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-10 text-igreja-teal">
            5. Por que Nós Presbiterianos Utilizamos a Confissão?
          </h2>
          <div className="grid md:grid-cols-2 gap-16 text-zinc-700 leading-relaxed text-justify">
            <div className="space-y-6 text-sm">
              <p>
                <strong>5.1. Reflexo da Teologia Reformada:</strong> Enfatiza a
                soberania de Deus, centralidade das Escrituras e salvação pela
                graça.
              </p>
              <p>
                <strong>5.2. Autoridade Subordinada:</strong> Não colocamos a
                Confissão acima da Bíblia. Pastores afirmam aceitá-la como
                resumo fiel subordinado às Escrituras.
              </p>
              <p>
                <strong>5.3. Guia de Organização:</strong> Aborda o governo
                presbiteriano, disciplina e o princípio regulador do culto.
              </p>
            </div>
            <div className="space-y-6 text-sm">
              <p>
                <strong>5.4. Continuidade Histórica:</strong> Adotada desde
                1646, liga historicamente os presbiterianos ao redor do globo.
              </p>
              <p>
                <strong>5.5. Ensino e Discipulado:</strong> Essencial para
                instrução de novos membros, formação de líderes e catequese.
              </p>
            </div>
          </div>
        </motion.section>

        {/* PARTE 6 - RELEVÂNCIA - Vem de BAIXO */}
        <motion.section 
          className="mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-light italic mb-16 text-center">
            6. A Relevância da Confissão Hoje
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 text-white p-8 space-y-4">
              <h4 className="text-igreja-teal font-bold uppercase text-xs">
                6.1. Verdade Imutável
              </h4>
              <p className="text-sm text-zinc-400">
                “O céu e a terra passarão, mas as minhas palavras jamais
                passarão.” (Mateus 24:35)
              </p>
            </div>
            <div className="bg-white p-8 border border-zinc-200 space-y-4">
              <h4 className="text-igreja-teal font-bold uppercase text-xs">
                6.2. Proteção
              </h4>
              <p className="text-sm text-zinc-500">
                Ajuda a combater o evangelho centrado no homem, a relativização
                da Escritura e o sincretismo.
              </p>
            </div>
            <div className="bg-igreja-teal p-8 text-white space-y-4">
              <h4 className="font-bold uppercase text-xs text-zinc-900">
                6.3. Aplicação Prática
              </h4>
              <p className="text-sm text-white/80">
                Orienta sobre oração, o culto público e privado, a santificação
                e o papel da igreja.
              </p>
            </div>
            <div className="bg-zinc-100 p-8 space-y-4 md:col-span-2 lg:col-span-3">
              <h4 className="text-zinc-400 font-bold uppercase text-xs">
                6.4 e 6.5 Educação e Unidade
              </h4>
              <p className="text-zinc-600 text-sm">
                Utilizada para catequese, treinamento e para garantir uma mesma
                identidade reformada e visão teológica comum.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CONCLUSÃO FINAL - Vem de BAIXO */}
        <footer className="mt-40 pt-20 border-t border-zinc-900 text-center">
          <motion.h2 
            className="text-6xl font-serif italic mb-10 leading-none"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Conclusão
          </motion.h2>
          <motion.p 
            className="text-2xl text-zinc-500 leading-relaxed max-w-3xl mx-auto mb-20 text-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Confissão de Fé de Westminster é um dos documentos mais
            importantes da tradição reformada. Ela preserva a verdade bíblica,
            orienta a vida da igreja e fortalece o ensino e o discipulado.
          </motion.p>

          <motion.div 
            className="inline-block relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ScrollText
              size={100}
              className="absolute -top-12 -left-12 text-igreja-teal/10 rotate-[-15deg]"
            />
            <div className="bg-zinc-900 text-white p-12 md:p-24 relative z-10">
              <p className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
                “Toda a Escritura é divinamente inspirada e proveitosa para
                ensinar, repreender, corrigir e instruir em justiça.”
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-igreja-teal" />
                <span className="font-sans font-black uppercase tracking-[0.3em] text-igreja-teal">
                  2 Timóteo 3:16
                </span>
                <span className="h-px w-12 bg-igreja-teal" />
              </div>
            </div>
          </motion.div>
        </footer>
      </article>
    </main>
  );
}
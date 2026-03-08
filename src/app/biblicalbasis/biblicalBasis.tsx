"use client";
import HeroSection from "@/src/components/ui/HeroBanner";
import photo1 from "@/public/image/biblicsbase/breadcrumbs-bg-2.jpg";
import { motion } from "framer-motion";

export default function ContentBiblicalBasis() {
  // Efeito de surgimento suave (Baixo para Cima)
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  const topics = [
    {
      num: "1",
      title: "Jesus deu a ordem",
      verse:
        "“E disse-lhes: Ide por todo o mundo e pregai o evangelho a toda criatura.” (Mc 16.15)",
    },
    {
      num: "2",
      title: "Jesus deu o Exemplo",
      verse:
        "“dizendo: O tempo está cumprido, e o reino de Deus está próximo; arrependei-vos e crede no evangelho.” (Mc 1.14,15)",
    },
    {
      num: "3",
      title: "Jesus envia seus discípulos",
      verse:
        "“Depois disto, o Senhor designou outros setenta; e os enviou de dois em dois, para que o precedessem em cada cidade e lugar aonde ele estava para ir.” (Lc 10.1)",
    },
    {
      num: "4",
      title: "Jesus mostrou o método",
      verse:
        "“Mas o que foi semeado em boa terra é o que ouve a palavra e a compreende; este frutifica e produz a cem, a sessenta e a trinta por um.” (Mt 13.18-23)",
    },
    {
      num: "5",
      title: "Jesus estará conosco sempre",
      verse:
        "“Ide, portanto, fazei discípulos de todas as nações... E eis que estou convosco todos os dias até à consumação do século.” (Mt 28.18-20)",
    },
    {
      num: "6",
      title: "Jesus deu poder e área de atuação",
      verse:
        "“mas recebereis poder, ao descer sobre vós o Espírito Santo, e sereis minhas testemunhas...” (At 1.8)",
    },
    {
      num: "7",
      title: "Jesus é o centro da evangelização",
      verse:
        "“Então, Filipe explicou; e, começando por esta passagem da Escritura, anunciou-lhe a Jesus.” (At 8.35)",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <HeroSection title="Base Bíblica para Evangelização" image={photo1} />

      <article className="max-w-4xl mx-auto px-6 mt-16 md:mt-24">
        {/* 1. Versículo Chave */}
        <motion.div
          {...fadeInUp}
          className="border-l-4 border-igreja-dourado pl-6 py-4 mb-12 bg-white shadow-sm italic text-xl md:text-2xl text-igreja-teal font-serif"
        >
          “E disse-lhes: Ide por todo o mundo e pregai o evangelho a toda
          criatura.”
          <span className="block text-sm mt-2 font-sans font-bold not-italic text-gray-400">
            Marcos 16:15
          </span>
        </motion.div>

        {/* 2. Texto Introdutório com Capitular */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-lg md:text-xl leading-relaxed mb-16"
        >
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-igreja-teal first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            A igreja do Senhor Jesus Cristo tem a responsabilidade de levar as
            boas novas em todo o lugar. Antes mesmo de qualquer atitude nossa, é
            necessário dar as bases bíblicas quanto à tarefa de evangelização,
            pois senão vira um ativismo sem alicerce.
          </p>
        </motion.div>

        {/* 3. Bloco de Teologia Reformada */}
        <motion.div
          {...fadeInUp}
          className="bg-igreja-teal/5 border border-igreja-teal/10 p-8 rounded-2xl mb-20"
        >
          <h3 className="text-igreja-teal font-bold uppercase tracking-widest text-sm mb-4">
            Perspectiva Reformada
          </h3>
          <p className="text-gray-600 leading-relaxed italic">
            Como reformados, cremos nos 5 Pontos do Calvinismo como a expressão
            bíblica de como ocorre a salvação. Ficamos descansados no Senhor
            pelos resultados, pois o trabalho nunca será em vão desde que
            confiemos em Suas promessas.
          </p>
        </motion.div>

        {/* 4. Lista de Tópicos (Grid de Estudos) */}
        <div className="grid grid-cols-1 gap-12">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: 0.1 * index }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-igreja-dourado text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {topic.num}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-igreja-teal group-hover:text-igreja-dourado transition-colors">
                  {topic.title}
                </h3>
              </div>
              <div className="pl-12">
                <p className="text-gray-600 text-lg italic bg-white p-4 rounded-lg border-l-2 border-gray-200">
                  {topic.verse}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 5. Conclusão */}
        <motion.div
          {...fadeInUp}
          className="mt-24 p-10 bg-igreja-teal text-white text-center rounded-none relative overflow-hidden"
        >
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-serif mb-6 italic">
              Missão Cumprida
            </h4>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Portanto, cabe a cada crente no Senhor levar este evangelho para
              aqueles que precisam desta preciosa salvação.
            </p>
          </div>
          {/* Decoração sutil de fundo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
        </motion.div>
      </article>

      <footer className="max-w-4xl mx-auto px-6 mt-16 text-center text-gray-400 text-[10px] tracking-[0.4em] uppercase">
        Soli Deo Gloria
      </footer>
    </div>
  );
}

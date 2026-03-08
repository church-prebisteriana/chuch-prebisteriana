"use client";
import HeroSection from "@/src/components/ui/HeroBanner";
import photo1 from "@/public/image/together//bg-img-1.jpg";
import { motion } from "framer-motion";

export default function ContentTogether() {
  // Configuração da animação que você prefere (baixo para o centro)
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Banner */}
      <HeroSection title="Congregai-vos!" image={photo1} />

      <article className="max-w-4xl mx-auto px-6 mt-16 md:mt-24">
        {/* 1. Versículo de Destaque */}
        <motion.div
          {...fadeInUp}
          className="border-l-4 border-igreja-dourado pl-6 py-4 mb-12 bg-white shadow-sm italic text-xl md:text-2xl text-igreja-teal font-serif"
        >
          “Não deixemos de congregar-nos, como é costume de alguns; antes,
          façamos admoestações e tanto mais quanto vedes que o Dia se aproxima.”
          <span className="block text-sm mt-2 font-sans font-bold not-italic text-gray-400">
            Hebreus 10:25
          </span>
        </motion.div>

        {/* 2. Introdução com Letra Capitular */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12"
        >
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-igreja-teal first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            O costume de alguns irmãos é deixar de frequentar a igreja por
            diversas razões. Porém, quando observamos a Palavra, não existem
            desculpas para buscar a Deus na igreja. Veja, então, que a ordem de
            Deus é para:
          </p>
        </motion.div>

        {/* 3. Tópicos do Artigo */}
        <div className="space-y-12">
          {[
            {
              num: "1",
              title: "Congregar",
              text: "Não se pode passar pela mente o deixar de congregar, pelo contrário, cada irmão(ã) deve permanecer firme buscando ao Senhor junto com os demais.",
            },
            {
              num: "2",
              title: "Seguir a vontade do Senhor",
              text: "Perceba que esses “alguns” não devem ser exemplos. A vontade de Deus deve prevalecer não importando a circunstância. A regra de fé e prática é a Bíblia.",
            },
            {
              num: "3",
              title: "Admoestar",
              text: "A ideia é estarmos juntos para incentivar, animar, aconselhar uns aos outros. Isso só é possível quando estamos juntos, recebendo orientação e ânimo vindo dos irmãos.",
            },
            {
              num: "4",
              title: "Vigiar",
              text: "A palavra “Dia” significa a 2ª vinda de Cristo. A orientação de Jesus em vigiar é seguida neste verso com enfoque de vigiar junto com os irmãos.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 * index }}
              className="flex gap-6"
            >
              <span className="text-4xl md:text-5xl font-serif text-igreja-dourado/30 font-bold shrink-0">
                {item.num}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-igreja-teal mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. Conclusão e Reflexão Final */}
        <motion.div
          {...fadeInUp}
          className="mt-20 pt-10 border-t border-gray-200"
        >
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic text-center max-w-2xl mx-auto">
            “Oh! Como é bom e agradável viverem unidos os irmãos!”
          </p>

          <div className="mt-10 bg-igreja-teal p-8 md:p-12 rounded-none text-white text-center shadow-xl">
            <h4 className="text-2xl font-serif mb-4">Qual o seu costume?</h4>
            <p className="text-white/80 text-lg mb-6">
              Caso esteja faltando nos trabalhos da igreja, mude de atitude e
              venha congregar! Faça a vontade do Senhor.
            </p>
            <div className="w-12 h-1 bg-igreja-dourado mx-auto"></div>
          </div>
        </motion.div>
      </article>

      <footer className="max-w-4xl mx-auto px-6 mt-16 text-center text-gray-400 text-sm tracking-widest uppercase">
        Igreja Presbiteriana de Imbituba
      </footer>
    </div>
  );
}

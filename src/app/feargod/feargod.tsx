"use client";
import HeroSection from "@/src/components/ui/HeroBanner";
import photos1 from "@/public/image/feargod/fearfod.jpg";
import { motion } from "framer-motion";

export default function ContentfearGod() {
  // Configuração de animação para os blocos de texto
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <div className="bg-white pb-20">
      {/* Hero com título impactante */}
      <HeroSection title="Temer a Deus" image={photos1} />

      <article className="max-w-5xl mx-auto px-6 mt-16 md:mt-24">
        {/* 1. Bloco de Citação Bíblica (Destaque) */}
        <motion.div
          {...fadeInUp}
          className="border-l-4 border-igreja-dourado pl-6 py-4 mb-12 bg-gray-50 italic text-xl md:text-3xl text-igreja-teal font-serif"
        >
          “...Não estendas a mão sobre o rapaz e nada lhe faças; pois agora sei
          que temes a Deus, porquanto não me negaste o filho, teu único filho.”
          <span className="block text-sm mt-2 font-sans font-bold not-italic text-gray-400">
            Gênesis 22:12
          </span>
        </motion.div>

        {/* 2. Introdução com Letra Capitular (Estilo Editorial) */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-8"
        >
          <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-igreja-teal first-letter:mr-3 first-letter:float-left">
            Muitos querem obedecer a Deus por motivos totalmente contrários à
            Palavra, como, por exemplo, permuta para salvação. Qual deve ser a
            base de seu temor e obediência à Deus?
          </p>
        </motion.div>

        {/* 3. Corpo do Texto - Dividido em Parágrafos para melhor leitura */}
        <div className="space-y-8 text-gray-600 text-2xl leading-relaxed text-justify">
          <motion.p {...fadeInUp} transition={{ delay: 0.3 }}>
            Abraão, sendo obediente ao Senhor, tomou seu único filho e
            ofereceu-Lhe em sacrifício; porém, no momento de sacrificar Isaque,
            o Senhor impediu-lhe. Ele colocou esta prova diante de seu servo
            para que o mesmo viesse a{" "}
            <span className="text-igreja-teal font-semibold">
              confiar nas promessas
            </span>{" "}
            e obedecer ao grandioso Rei.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden p-8 rounded-2xl bg-igreja-teal text-white my-12"
          >
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <svg
                width="200"
                height="200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.948 1.561c-3.22 1.962-3.033 7.403-2.948 10.164h-8zm-13 0c0-5.141 3.892-10.519 10-11.725l.948 1.561c-3.22 1.962-3.033 7.403-2.948 10.164h-8z" />
              </svg>
            </div>
            <p className="relative z-10 text-xl md:text-3xl font-serif italic">
              "O Senhor proveu um cordeiro no lugar de seu filho já apontando o
              que o Messias, Jesus Cristo, estava por fazer: morrer
              substitutivamente."
            </p>
          </motion.div>

          <motion.p {...fadeInUp} transition={{ delay: 0.5 }}>
            Assim como Abraão temeu ao Senhor e agiu imediatamente em obediência
            à ordem divina, você deve obedecer à Palavra de Deus em confiança
            nas eternas e benditas promessas do grande Rei, provedor de perdão e
            comunhão com Ele mesmo. Nosso temor deve ter, como base, a{" "}
            <span className="text-igreja-dourado font-bold italic">
              fé nas promessas eternas
            </span>
            .
          </motion.p>

          <motion.p {...fadeInUp} transition={{ delay: 0.6 }}>
            Nossas atitudes devem ser oriundas de um coração cheio de fé no
            Grande Rei Provedor! O único que pode saciar sua sede da Verdade é
            Jesus que te chama para viver esta liberdade da escravidão eterna.
          </motion.p>

          {/* 4. Conclusão / Call to Action Criativo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-16 p-10 border-2 border-dashed border-igreja-dourado/30 rounded-3xl text-center"
          >
            <h3 className="text-2xl md:text-4xl font-serif text-igreja-teal mb-4 italic">
              Creia no grande Libertador
            </h3>
            <p className="text-gray-500 mb-6 uppercase tracking-widest text-sm">
              A grande Verdade: Jesus Cristo.
            </p>
            <div className="w-16 h-1 bg-igreja-dourado mx-auto"></div>
          </motion.div>
        </div>
      </article>

      {/* Footer do Artigo decorativo */}
      <footer className="max-w-4xl mx-auto px-6 mt-20 flex items-center justify-between border-t border-gray-100 pt-8 text-gray-400 text-sm">
        <p>Publicado por Igreja Presbiteriana de Imbituba</p>
        <div className="flex gap-4">
          <span className="hover:text-igreja-dourado cursor-pointer">
            Compartilhar
          </span>
        </div>
      </footer>
    </div>
  );
}

"use client";

import photos1 from "@/public/image/event-1-390x273.jpg";
import photos2 from "@/public/image/event-2-390x273.jpg";

import photos3 from "@/public/image/event-3-390x273.jpg";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface NavItem {
  title: string;
  subtitles: string;
  img: StaticImageData;
}

export default function SectionTwo() {
  const items: NavItem[] = [
    {
      title: "Temer a Deus",
      subtitles: "IPI, 23 Janeiro de 2023",
      img: photos1,
    },
    {
      title: "Congregai-vos ",
      subtitles: "IPI, 23 Janeiro de 2023",
      img: photos2,
    },
    {
      title: "Base Bíblica Para Evangelização ",
      subtitles: "IPI, 23 Janeiro de 2023",
      img: photos3,
    },
  ];

  return (
    <section className="bg-mauve-50 py-20 px-4 flex justify-center overflow-hidden">
      {/* Container com largura máxima controlada e gap generoso */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            
            transition={{
              duration: 0.8 + index * 0.2,
              delay: 0.6 + (index * 0.2),
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="flex flex-col group "
          >
            {/* 1. Imagem em proporção retangular (Landscape) */}
            <div className="relative w-full aspect-[15/11] mb-6 overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* 2. Subtítulo (Data e Local) - Menor e discreto */}
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-igreja-dourado mb-1 font-medium">
              {item.subtitles}
            </span>

            {/* 3. Título - Alinhado à esquerda, elegante */}
            <h3 className="text-2xl  lg:text-4xl   text-igreja-teal mb-4 group-hover:text-igreja-dourado transition-colors">
              {item.title}
            </h3>

            {/* 4. Link "Read More" igual ao da foto */}
            <div className="flex items-center text-[1rem] font-semibold  text-gray-500 group-hover:text-igreja-dourado transition-colors cursor-pointer">
              Leia Mais <span className="ml-2">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import photoIgreja from "@/src/app/image/photo_church.png";
import photoIgreja2 from "@/src/app/image/foto da igreja 1.jpg";
import photoIgreja3 from "@/src/app/image/foto da igreja 2.jpg";
import photoIgreja4 from "@/src/app/image/foto da igreja 3.jpg";
import photoIgreja5 from "@/src/app/image/foto da igreja 4.jpg";
import photoIgreja6 from "@/src/app/image/foto da igreja 5.jpg";
import photoIgreja7 from "@/src/app/image/foto da igreja 6.jpg";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageHome() {
  const [index, setIndex] = useState(0);
  const imagens = [
    photoIgreja,
    photoIgreja2,
    photoIgreja3,
    photoIgreja4,
    photoIgreja5,
    photoIgreja6,
    photoIgreja7,
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [index, imagens.length]);

  return (
    /* h-full e w-full garantem que o fundo preencha tudo */
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.7, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={imagens[index]}
            alt="Imagens da Igreja"
            fill
            priority
           sizes="h-[100vh]"
            /* ISSO AQUI VAI TIRAR AS BORDAS LATERAIS NO MOBILE */
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

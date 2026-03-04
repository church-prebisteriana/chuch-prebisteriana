"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

// Assets (Mantendo seus imports originais)
import churchMembers from "@/public/image/igreja/fotos dos membros da igreja.jpg";
import photo1 from "@/public/image/minister/ministries-1-390x495.png";
import photo2 from "@/public/image/minister/ministries-1-390x495.jpg";
import photo3 from "@/public/image/minister/ministries-10-390x495.png";
import photo4 from "@/public/image/minister/fotos de crianças.png";
import photo5 from "@/public/image/minister/ministries-7-1200x800-original.jpg";

import { usePathname, useRouter } from "next/navigation";

export default function MinistriesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const ministries = [
    {
      title: "UPH",
      tags: "#Homens #Ação",
      img: photo1,
      align: "justify-start",
      href: "/",
    },
    {
      title: "SAF",
      tags: "#Mulheres #Cuidado",
      img: photo2,
      align: "justify-end",
      href: "/",
    },
    {
      title: "UPA",
      tags: "#Jovens #Futuro",
      img: photo3,
      align: "justify-center",
      href: "/",
    },
    {
      title: "UCP",
      tags: "#Crianças #Ensino",
      img: photo4,
      align: "justify-start",
      href: "/",
    },
    {
      title: "CASAIS",
      tags: "#Família #União",
      img: photo5,
      align: "justify-end",
      href: "/",
    },
  ];

  const handleNavigation = (href?: string) => {
    if (!href || href === "#") return;
    if (href === pathname) {
      return;
    }

    router.push(href);
  };

  return (
    <section className="bg-igreja-teal text-[#e0e0e0] min-h-screen overflow-hidden font-sans">
      {/* 1. HERO: COLAGEM RAW (BRUTA) */}
      <div className="relative h-[70vh] w-full flex items-center justify-center p-6 md:p-20 overflow-hidden">
        {/* Imagem de fundo com textura de ruído */}
        <Image
          src={churchMembers}
          alt="Membros"
          fill
          className="object-cover opacity-10 grayscale mix-blend-luminosity"
        />

        <div className="relative z-10 max-w-7xl w-full">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-[#bf9b30] font-mono tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block"
          >
            Igreja Presbiteriana de Imbituba
          </motion.span>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-6xl md:text-[10rem] font-extrabold text-white leading-[0.9] tracking-tighter uppercase"
          >
            NOSSO
            <p
              className="text-transparent"
              style={{ WebkitTextStroke: "2px #bf9b30" }}
            >
              MINISTÉRIO.
            </p>
          </motion.h1>
        </div>
      </div>

      {/* 2. TEXTO INTRODUTÓRIO ASSIMÉTRICO */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-5 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="md:col-span-3 space-y-6 border-l-4 border-[#bf9b30] pl-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight uppercase">
            Um Corpo, Muitos Membros, Um Só{" "}
            <span className="italic text-[#bf9b30]">Propósito.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="md:col-span-2 text-lg text-zinc-400 leading-relaxed font-light"
        >
          Nossa missão se manifesta através do serviço e do cuidado mútuo. Por
          meio das nossas sociedades internas e ministérios específicos,
          buscamos edificar cada membro da família através do ensino bíblico e
          da comunhão cristã.
        </motion.p>
      </div>

      {/* 3. LAYOUT EXPLOSIVO (MURAL DE COLAGEM) */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-40 space-y-32 md:space-y-60 ">
        {ministries.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex w-full ${item.align} relative cursor-pointer`}
            onClick={() => handleNavigation(item.href)}
          >
            {/* O CARD DE COLAGEM */}
            <div className="group relative w-full max-w-sm md:max-w-md aspect-[3/4] overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1  ">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 "
              />

              {/* Overlay de Textura e Cor */}
              <div className="absolute inset-0 bg-gradient-to-t from-igreja-teal via-igreja-teal/20 to-transparent opacity-80 group-hover:via-[#bf9b30]/20 transition-all duration-500" />

              {/* Conteúdo do Card */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end ">
                <span className="text-white/60 font-mono text-xs uppercase tracking-widest mb-2 block ">
                  {item.tags}
                </span>
                <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none transition-all group-hover:text-[#bf9b30] ">
                  {item.title}
                </h2>
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus size={24} />
                </div>
              </div>
            </div>

            {/* NÚMERO GIGANTE DE FUNDO (Apenas Desktop) */}
            <span className="absolute -top-20 -left-20 text-[20rem] font-black text-white/25 select-none z-0 hidden md:block">
              0{index + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

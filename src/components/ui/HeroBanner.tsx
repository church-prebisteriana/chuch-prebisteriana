"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface HeroSectionProps {
  title: string;
  image: StaticImageData;
  height?: string; // Opcional, caso queira mudar o tamanho em páginas diferentes
}

export default function HeroSection({
  title,
  image,
  height = "h-[50vh] md:h-[70vh]",
}: HeroSectionProps) {
  const pathname = usePathname();
  return (
    <div className={`relative w-full ${height} bg-black overflow-hidden`}>
      <Image
        src={image}
        alt={title}
        priority
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <motion.h2
          key={pathname}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-6xl font-ibarra font-bold tracking-tight text-center"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}

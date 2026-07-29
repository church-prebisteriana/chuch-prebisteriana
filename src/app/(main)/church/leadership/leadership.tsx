"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { StaticImageData } from "next/image";

import { council } from "@/lib/church";

interface CouncilMember {
  name: string;
  role: string;
  subtitle: string;
  photo: StaticImageData;
  bio: string;
  tier: "pastor" | "presbitero" | "diacono" | "ministerio";
}

type CardSlot = "left" | "center" | "right" | "single";

const OFFICER_TIERS: {
  key: CouncilMember["tier"];
  label: string;
  size: "xl" | "lg" | "md";
}[] = [
  { key: "pastor", label: "Pastor", size: "xl" },
  { key: "presbitero", label: "Presbíteros", size: "lg" },
  { key: "diacono", label: "Diáconos", size: "md" },
];

const sizeClasses = {
  xl: "w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64",
  lg: "w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36",
  md: "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32",
};

function getSlot(index: number, total: number): CardSlot {
  if (total === 1) return "single";
  if (total === 2) return index === 0 ? "left" : "right";
  if (index === 0) return "left";
  if (index === total - 1) return "right";
  return "center";
}

function CommentText({
  member,
  side = "left",
}: {
  member: CouncilMember;
  side?: "left" | "right";
}) {
  return (
    <div
      className={`text-left max-w-[15rem] sm:max-w-[17rem] ${
        side === "left"
          ? "border-l border-white/30 pl-4"
          : "border-r border-white/30 pr-4"
      }`}
    >
      <p className="text-[9px] tracking-[0.22em] uppercase text-white/45 font-light">
        {member.role}
        {member.subtitle ? ` — ${member.subtitle}` : ""}
      </p>
      <p className="mt-2 font-serif text-sm md:text-base text-white leading-snug">
        {member.name}
      </p>
      <div className="mt-3 h-px w-10 bg-white/25" />
      <p className="mt-3 text-[12px] md:text-sm font-light italic leading-relaxed text-white/70">
        &ldquo;{member.bio}&rdquo;
      </p>
    </div>
  );
}

function MemberNode({
  member,
  size,
  slot,
  delay,
}: {
  member: CouncilMember;
  size: "xl" | "lg" | "md";
  slot: CardSlot;
  delay: number;
}) {
  const [open, setOpen] = useState(false);

  // Só o centro empurra o card para a direita
  const photoShift =
    open && slot === "center"
      ? "translate-x-4 md:translate-x-8"
      : "translate-x-0";

  const showCommentLeft = open && (slot === "left" || slot === "center" || slot === "single");
  const showCommentRight = open && slot === "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className="relative flex items-center justify-center w-full sm:w-auto"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex items-center gap-3 md:gap-4">
        {/* Comentário à esquerda (cards da esquerda e do centro) */}
        <AnimatePresence>
          {showCommentLeft && (
            <motion.div
              initial={{ opacity: 0, x: 10, width: 0 }}
              animate={{ opacity: 1, x: 0, width: "auto" }}
              exit={{ opacity: 0, x: 8, width: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden shrink-0 hidden sm:block"
            >
              <CommentText member={member} side="left" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Foto + nome */}
        <div
          className={`flex flex-col items-center gap-3.5 text-center transition-transform duration-500 ease-out ${photoShift}`}
        >
          <div
            className={`relative ${sizeClasses[size]} shrink-0 overflow-hidden rounded-full transition-all duration-500 ${
              open
                ? "ring-1 ring-white/85 ring-offset-4 ring-offset-[#1a4a4f]"
                : "ring-1 ring-white/25 ring-offset-2 ring-offset-[#1a4a4f]"
            }`}
          >
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 160px, 256px"
              className={`object-cover object-[center_20%] transition-all duration-700 ${
                open ? "grayscale-0" : "grayscale-[0.4]"
              }`}
            />
          </div>

          <div className="max-w-[10rem] md:max-w-[12rem] space-y-1">
            <h3 className="text-sm md:text-base font-serif text-white leading-snug">
              {member.name}
            </h3>
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-light">
              {member.subtitle || member.role}
            </p>
          </div>
        </div>

        {/* Comentário à direita (card do final da direita — sem empurrar) */}
        <AnimatePresence>
          {showCommentRight && (
            <motion.div
              initial={{ opacity: 0, x: -10, width: 0 }}
              animate={{ opacity: 1, x: 0, width: "auto" }}
              exit={{ opacity: 0, x: -8, width: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden shrink-0 hidden sm:block"
            >
              <CommentText member={member} side="left" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile: comentário abaixo */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-1/2 z-20 mt-4 w-[min(18rem,85vw)] -translate-x-1/2 sm:hidden"
          >
            <CommentText member={member} side="left" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function LeadershipPage() {
  const members = council as CouncilMember[];
  const officers = members.filter((m) => m.tier !== "ministerio");
  const ministries = members.filter((m) => m.tier === "ministerio");
  const officerTiers = OFFICER_TIERS.map(({ key, label, size }) => ({
    label,
    size,
    members: officers.filter((m) => m.tier === key),
  })).filter((tier) => tier.members.length > 0);

  return (
    <section className="relative min-h-screen overflow-x-hidden text-white bg-gradient-to-b from-igreja-teal via-[#1c5258] to-[#143a3e]">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <header className="flex flex-col items-center text-center mb-14 md:mb-20">
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/50 font-light mb-5">
            Oficiais e Governo
          </span>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif font-light tracking-tight">
            A <span className="italic">Liderança</span>
          </h1>
          <div className="mt-8 h-px w-14 bg-white/30" />
          <p className="mt-8 text-white/50 text-sm font-light leading-relaxed max-w-md">
            Estrutura pastoral, consistório e diaconato a serviço da igreja
            local. Passe o mouse sobre cada pessoa para ler o comentário.
          </p>
        </header>

        <div className="flex flex-col items-center">
          {officerTiers.map((tier, tierIndex) => (
            <div key={tier.label} className="w-full">
              {tierIndex > 0 && (
                <div className="mx-auto my-9 md:my-12 flex justify-center">
                  <div className="h-9 md:h-11 w-px bg-white/20" />
                </div>
              )}

              <p className="mb-7 text-center text-[10px] tracking-[0.32em] uppercase text-white/40 font-light">
                {tier.label}
              </p>

              <div
                className={`flex flex-wrap items-start justify-center gap-y-10 gap-x-2 sm:gap-x-6 md:gap-x-10 ${
                  tier.members.length === 1
                    ? "max-w-lg mx-auto"
                    : "max-w-4xl mx-auto"
                }`}
              >
                {tier.members.map((member, memberIndex) => (
                  <MemberNode
                    key={member.name}
                    member={member}
                    size={tier.size}
                    slot={getSlot(memberIndex, tier.members.length)}
                    delay={tierIndex * 0.08 + memberIndex * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {ministries.length > 0 && (
          <div className="mt-24 md:mt-32 pt-16 border-t border-white/15">
            <div className="text-center mb-12">
              <p className="text-[10px] tracking-[0.35em] uppercase text-white/40 font-light mb-3">
                Liderança de Ministérios
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-light">
                Servindo nas áreas da igreja
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {ministries.map((member, i) => (
                <MemberNode
                  key={member.name}
                  member={member}
                  size="md"
                  slot={getSlot(i, ministries.length)}
                  delay={0.1 + i * 0.06}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

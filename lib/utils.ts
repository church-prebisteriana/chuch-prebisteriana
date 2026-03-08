import { clsx, type ClassValue } from "clsx";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormattedDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const month = now.toLocaleString("pt-BR", { month: "long" });
  const year = now.getFullYear();

  return `${day} de ${month} de ${year}`;
}
export function getYearDate() {
  const now = new Date();
  const year = now.getFullYear();

  return year;
}

export interface NavItem {
  title: string;
  subtitles?: string;
  img: StaticImageData;
}
  
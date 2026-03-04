import { clsx, type ClassValue } from "clsx";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface NavItem {
  title: string;
  subtitles?: string;
  img: StaticImageData;
}

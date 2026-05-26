import photo1 from "@/public/image/index/heroSection/foto da igreja 1.jpg";
import photo2 from "@/public/image/igreja/img_sobre_historia.png";
import photo3 from "@/public/image/igreja/manual.png";
import minister from "@/public/image/igreja/advice/pastor-emersn.jpg";
import official from "@/public/image/igreja/advice/rodrigo.jpg";
import official2 from "@/public/image/igreja/advice/ronaldo-damazio.png";
import confession from "@/public/image/minister/confissão de fé.png";
import catecismoMaior from "@/public/image/minister/catecismo maior.png";
import catecismoMenos from "@/public/image/minister/catecismo menor.png";
import schedule from "@/public/image/igreja/agendamento de atividades.jpg";

export const itemsFath = [
  {
    title: "Confissão de fé",
    img: confession,
    href: "/church/confessionOfFaith",
  },
  {
    title: "Catecismo Maior",
    img: catecismoMaior,
    href: "/church/largeCatechism",
  },
  {
    title: "Catecismo Menor",
    img: catecismoMenos,
    href: "/church/smallCatechism",
  },
];

export const historyCards = [
  {
    title: "Nossa História",
    subtitle: "Imbituba",
    img: photo1,
    color: "bg-igreja-teal",
    href: "/church/hystoryIPB_Imbituba",
  },
  {
    title: "Raízes Reformadas",
    subtitle: "IPB Brasil",
    img: photo2,
    color: "bg-slate-800",
    href: "/church/hystoryIPB",
  },
  {
    title: "Nossa Doutrina",
    subtitle: "Manual",
    img: photo3,
    color: "bg-amber-700",
    href: "/documents/contistuiçãoIPB.pdf",
  },
  {
    title: "Agendamento de Atividades",
    subtitle: "Agenda",
    img: schedule,
    color: "bg-amber-700",
    href: "/church/calendar",
  },
];

export const council = [
  {
    name: "Emerson Baran",
    role: "Pastor Efetivo",
    photo: minister,
    bio: "Liderando com dedicação e amor à Palavra.",
  },
  {
    name: "Rodrigo Pinho",
    role: "Presbítero",
    photo: official,
    bio: "Auxiliando no pastoreio e governo da igreja local.",
  },
  {
    name: "Ronaldo Damazio",
    role: "Tesoureiro",
    photo: official2,
    bio: "Zelando com integridade pela mordomia cristã.",
  },
];

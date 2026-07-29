import photo1 from "@/public/image/index/heroSection/foto da igreja 1.jpg";
import photo2 from "@/public/image/igreja/img_sobre_historia.png";
import photo3 from "@/public/image/igreja/manual.png";
import minister from "@/public/image/membros/pastor-emersn.jpg";
import officialBruno from "@/public/image/membros/bruno.jpg";
import officialGilson from "@/public/image/membros/gilson.jpeg";
import officialRonaldo from "@/public/image/membros/ronaldo-damazio.png";
import officialJefferson from "@/public/image/membros/jeferson.png";
import officialJoaquim from "@/public/image/membros/joaquim.png";
import officialRodrigo from "@/public/image/membros/rodrigo.jpg";
import officialMaria from "@/public/image/membros/maria.png";
import confession from "@/public/image/minister/confissão de fé.png";
import catecismoMaior from "@/public/image/minister/catecismo maior.png";
import catecismoMenos from "@/public/image/minister/catecismo menor.png";
import schedule from "@/public/image/igreja/agendamento de atividades.jpg";
import ImgHystoryConfectionFath from '@/public/image/hystoryconfectionFath/historia-da-confissão-de fé-card.png'

export const itemsFath = [

  {
    title: "História de Westminster",
    img: ImgHystoryConfectionFath,
    href: "/church/hystoryconfessionOfFaith",
  },
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
    name: "Rev. Emerson Baran",
    role: "Pastor",
    subtitle: "Pastor da IP Imbituba",
    photo: minister,
    bio: "Na igreja presbiteriana nosso foco é a evangelização: a evangelização é a missão da igreja.",
    tier: "pastor" as const,
  },
  {
    name: "Presb. Bruno",
    role: "Presbítero",
    subtitle: "Oficial da Igreja",
    photo: officialBruno,
    bio: "Servindo no pastoreio e no governo da igreja local.",
    tier: "presbitero" as const,
  },
  {
    name: "Presb. Gilson",
    role: "Presbítero",
    subtitle: "Tesoureiro da Igreja",
    photo: officialGilson,
    bio: "Administrar com fidelidade e transparência os recursos dedicados ao Reino de Deus.",
    tier: "presbitero" as const,
  },
  {
    name: "Presb. Ronaldo",
    role: "Presbítero",
    subtitle: "Professor Escola Dominical",
    photo: officialRonaldo,
    bio: "Zelar com integridade pela mordomia cristã e servir à igreja com dedicação.",
    tier: "presbitero" as const,
  },
  {
    name: "Diác. Jefferson",
    role: "Diácono",
    subtitle: "Presidente da UPH",
    photo: officialJefferson,
    bio: "Coordeno a U.P.H. com o propósito de liderar e orientar irmãos para que, em tudo, o nome do Senhor seja glorificado.",
    tier: "diacono" as const,
  },
  {
    name: "Diác. Joaquim",
    role: "Diácono",
    subtitle: "Presidente da Junta Diaconal",
    photo: officialJoaquim,
    bio: "Diaconia é o amor do Senhor em ação. Servir como diácono é colocar o coração ao serviço de Jesus.",
    tier: "diacono" as const,
  },
  {
    name: "Diác. Rodrigo",
    role: "Diácono",
    subtitle: "Oficial da Igreja",
    photo: officialRodrigo,
    bio: "Servindo a igreja na diaconia com dedicação e amor ao próximo.",
    tier: "diacono" as const,
  },
  {
    name: "Maria Heloisa",
    role: "Liderança",
    subtitle: "Presidente da UPA",
    photo: officialMaria,
    bio: "Inspirador ver a dedicação dos nossos adolescentes a Cristo. Eles não são o amanhã: são o serviço de hoje na igreja.",
    tier: "ministerio" as const,
  },
];

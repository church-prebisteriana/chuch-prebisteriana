type typeCalendar = {
  month: string;
  activities: {
    day: string;
    title: string;
    time: string;
    description: string;
    location: string;
    category: "Culto" | "Evento" | "Reunião" | "Outros"; // Categorias fixas facilitam o código
    featured: boolean; // Se for true, podemos dar um destaque visual
  }[];
};
export function getMonthNow() {
  const month = new Date().toLocaleString("pt-BR", { month: "long" });
  return month.charAt(0).toUpperCase() + month.slice(1);
}
export const SchuduleChurch: typeCalendar[] = [
  {
    month: "Março",
    activities: [
      {
        day: "1",
        title: "Reunião de Pastores",
        time: "19:00",
        description: "Planejamento mensal do conselho",
        location: "Igreja Presbiteriana de Imbituba",
        category: "Reunião",
        featured: false,
      },
      {
        day: "21",
        title: "Congresso de Casais",
        time: "20:00",
        description: "Evento especial com palestrante convidado",
        location: "Igreja Presbiteriana de Imbituba",
        category: "Evento",
        featured: true, // Este evento vai ganhar um destaque no design!
      },
    ],
  },
  {
    month: "Abril",
    activities: [
      {
        day: "12",
        title: "Culto de Páscoa",
        time: "19:00",
        description: "Celebração da Ressurreição",
        location: "Templo Principal",
        category: "Culto",
        featured: true,
      },
    ],
  },
];

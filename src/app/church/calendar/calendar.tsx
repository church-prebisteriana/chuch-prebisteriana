"use client";
import photo from "@/public/image/igreja/agenda.jpeg";
import HeroSection from "@/src/components/ui/HeroBanner";
import { SchuduleChurch, getMonthNow } from "@/lib/calendar";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowUpRight, Star } from "lucide-react";

export default function ContentCalendar() {
  const monthNow = getMonthNow();

  const currentMonthData = SchuduleChurch.find(
    (item) => item.month.toLowerCase() === monthNow.toLowerCase()
  );

  // Mapeamento de cores para as categorias
  const categoryStyles = {
    Culto: "bg-igreja-teal text-white",
    Evento: "bg-igreja-dourado text-white",
    Reunião: "bg-slate-700 text-white",
    Outros: "bg-gray-400 text-white",
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="relative">
        <HeroSection title="Agenda de Atividades" image={photo} />
       
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-gray-50 z-10 pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16 md:mt-24">
        {/* Cabeçalho da Agenda */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8 gap-4">
          <div>
            <span className="text-igreja-teal font-bold tracking-[0.3em] uppercase text-sm mb-2 block">
              Programação Mensal
            </span>
            <h1 className="text-5xl md:text-7xl font-serif italic text-slate-800">
              {monthNow}
            </h1>
          </div>
          <p className="text-slate-400 font-medium italic">
            "Para tudo há uma ocasião certa..."
          </p>
        </div>

        {!currentMonthData ? (
          <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
            <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-500">
              Nenhuma atividade agendada para este mês.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {currentMonthData.activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // Destaque visual se featured for true (borda dourada e sombra maior)
                className={`group relative flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl transition-all duration-300 border ${
                  activity.featured
                    ? "border-igreja-dourado/40 shadow-md ring-1 ring-igreja-dourado/10"
                    : "border-transparent shadow-sm"
                } hover:shadow-xl`}
              >
                {/* O DIA - Elemento 3D Minimalista */}
                <div className="flex-shrink-0 flex md:flex-col items-center justify-center bg-igreja-teal text-white w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-[0_6px_0_0_#064e4e] group-hover:translate-y-[-2px] group-hover:shadow-[0_8px_0_0_#064e4e] transition-all">
                  <span className="text-3xl md:text-4xl font-black">
                    {activity.day}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
                    {monthNow.substring(0, 3)}
                  </span>
                </div>

                {/* CONTEÚDO */}
                <div className="flex-grow space-y-3">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                    <div className="space-y-1">
                      {/* Badge da Categoria */}
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-1 ${
                          categoryStyles[activity.category]
                        }`}
                      >
                        {activity.category}
                      </span>
                      <h3 className="text-3xl font-bold text-slate-800 group-hover:text-igreja-teal transition-colors flex items-center gap-2">
                        {activity.title}
                        {activity.featured && (
                          <Star
                            size={18}
                            className="text-igreja-dourado fill-igreja-dourado"
                          />
                        )}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-igreja-dourado bg-igreja-dourado/10 px-3 py-1 rounded-full w-fit shrink-0">
                      <Clock size={14} />
                      <span className="text-xs font-bold">{activity.time}</span>
                    </div>
                  </div>

                  <p className="text-slate-500 leading-relaxed text-sm md:text-xl italic">
                    {activity.description}
                  </p>

                  <div className="flex items-center gap-2 text-slate-400 text-lg mt-4">
                    <MapPin size={16} className="text-igreja-teal" />
                    <span className="font-medium">{activity.location}</span>
                  </div>
                </div>

                {/* Ícone Decorativo lateral */}
                <div className="hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pr-4">
                  <ArrowUpRight className="text-igreja-teal" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <footer className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="h-px w-20 bg-igreja-dourado mx-auto mb-6" />
        <p className="text-xs text-gray-400 tracking-[0.5em] uppercase">
          Igreja Presbiteriana de Imbituba
        </p>
      </footer>
    </div>
  );
}

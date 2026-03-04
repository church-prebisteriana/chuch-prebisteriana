import Image from "next/image";
import igreja from "@/public/image/foto da igreja 1.jpg";

export default function SectionLocation() {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7030.014738914519!2d-48.676105!3d-28.237456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9526b59da003170b%3A0x24b727d4197f0209!2sIgreja%20Presbiteriana%20de%20Imbituba!5e0!3m2!1spt-BR!2sus!4v1772157027667!5m2!1spt-BR!2sus";
  const googleMapsAppUrl = "https://www.google.com/maps/dir/?api=1&destination=Igreja+Presbiteriana+de+Imbituba";

  return (
    <section className="bg-white py-20 md:py-32 px-6 flex justify-center overflow-hidden">
      <div className="max-w-6xl w-full">
        
        {/* Cabeçalho */}
        <div className="mb-16">
          <h2 className="text-igreja-dourado font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
            Onde nos encontrar
          </h2>
          <h1 className="font-ibarra text-4xl md:text-6xl font-bold text-igreja-teal leading-tight">
            Igreja Presbiteriana <br /> de Imbituba
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          
          {/* Lado 1: Foto e Horário */}
          <div className="flex flex-col">
            <div className="relative aspect-[16/10] md:flex-1 rounded-sm overflow-hidden shadow-sm mb-8">
              <Image
                src={igreja}
                alt="Fachada da Igreja"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            
            <div className="border-l-2 border-igreja-teal pl-6 py-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                Nossos Cultos
              </h4>
              <p className="font-ibarra text-2xl text-slate-700">
                Todo Domingo às <span className="text-igreja-teal font-bold">19:30h</span> e <span className="text-igreja-teal font-bold">21:00h</span>
              </p>
            </div>
          </div>

          {/* Lado 2: Mapa e Endereço com Botão Lado a Lado */}
          <div className="flex flex-col">
            <div className="relative aspect-[16/10] md:flex-1 rounded-sm overflow-hidden border border-gray-100 shadow-sm mb-8">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Endereço e Botão Lado a Lado */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-2 border-gray-200 pl-6 py-2 gap-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Endereço
                </h4>
                <p className="font-ibarra text-xl text-slate-600">
                  Av. Vinte Um de Junho, s/n — Centro <br />
                  Imbituba, SC
                </p>
              </div>

              {/* Botão posicionado ao lado do texto no Desktop */}
              <a 
                href={googleMapsAppUrl}
                target="_blank"
                title="Clique para acessar o localização"
                rel="noopener noreferrer"
                className="bg-igreja-teal text-white px-6 py-3  text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-igreja-dourado transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap"
              >
                Como Chegar <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
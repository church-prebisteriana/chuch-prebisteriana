"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import SocialButtons from "@/src/components/ui/social_icons";
import { useState, useEffect } from "react"; // Adicionado useEffect
import { usePathname, useRouter } from "next/navigation"; // Adicionado useRouter
import router from "next/router";


type SubmenuItem = {
  name: string;
  href: string;
};

type MenuType = "Igreja" | "Ministerio" | "Mídia" | "Contato" | null;
type NavItem = {
  name: MenuType | "Inicio" | "Contato";
  submenu?: SubmenuItem[];
  href?: string;
};


export default function FooterPage() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



  const pathname = usePathname();
  const router = useRouter();

  const handleLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      router.push("/login");
    }, 1400);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
      setIsLoggingIn(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (href?: string) => {
    if (!href || href === "#") return;
    if (href === pathname) {
      setMenuOpen(false);
      return;
    }
    if (href === "/documents/contistuiçãoIPB.pdf") {
      window.open(href, "_blank", "noopener noreferrer");
      return;
    }
    // setTimeout(() => {
    //   setMenuOpen(false);
    // }, 3000);

    router.push(href);
  };
  const navItems: NavItem[] = [
    { name: "Inicio" },
    {
      name: "Igreja",
      submenu: [
        { name: "Nossa Igreja", href: "/church" },
        { name: "História do padrão de fé", href: "/church/hystoryconfessionOfFaith" },
        { name: "Confissão de fé", href: "/church/confessionOfFaith" },
        { name: "Catecismo maior", href: "/church/largeCatechism" },
        { name: "Catecismo menor", href: "/church/smallCatechism" },
        { name: "Breve História da IPB", href: "/church/hystoryIPB" },
        { name: "História da IPB de Imbituba", href: "/church/hystoryIPB_Imbituba" },
        { name: "Manual Presbiteriano", href: "/church/manualPresbyterian" },
      ],
    },
    {
      name: "Ministerio",
      submenu: [
        { name: "Conheça Nosso Ministério", href: "/ministries" },
        { name: "UPH", href: "/ministries/uph" },
        { name: "SAF", href: "/ministries/saf" },
        { name: "UPA", href: "/ministries/upa" },
        { name: "UCP", href: "/ministries/ucp" },
        { name: "Casais", href: "/ministries/couples" },
      ],
    },
    {
      name: "Mídia",
      submenu: [
        { name: "Calendário da Igreja", href: "/church/calendar" },
        { name: "Fotos", href: "/churchPhotos" },
        { name: "Vídeos", href: "/churchVideos" },

        { name: "Manual Presbiteriano", href: "/documents/contistuiçãoIPB.pdf" },
      ],
    },
    { name: "Contato", href: "/contacts" },
  ];

  return (
    <footer className="bg-gray-50 px-6 md:px-12 py-16 font-roboto border-t border-neutral-200 ">
      {/* A mágica acontece aqui: grid-cols-1 para celular, 
        sm:grid-cols-2 para tablet e md:grid-cols-4 para desktop.
      */}
      <div className="xl:max-w-4xl 2xl:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:gap-8 2xl:gap-12 ">
        {navItems.map((item, index) => {
          // Pulamos o "Inicio" no footer para focar nas categorias de conteúdo
          if (item.name === "Inicio") return null;

          return (
            <div
              key={index}
              className={`flex flex-col ${item.name === "Contato"
                ? "md:pl-12 border-l md:border-neutral-200 min-w-fit"
                : "md:col-span-1"
                }`}
            >
              {/* Título da Coluna com sua cor personalizada */}

              <motion.h3
                initial={{
                  // Se for Contato, começa no X (lado), senão no Y (baixo)
                  x: item.name === "Contato" ? 50 : 0,
                  y: item.name === "Contato" ? 0 : 50,
                  opacity: 0,
                }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="font-bold text-lg mb-5 text-igreja-teal border-b border-igreja-teal/10 pb-2"
              >
                {item.name}
              </motion.h3>

              {/* Renderização Condicional do Submenu */}
              {item.submenu && item.submenu.length > 0 ? (
                <motion.ul
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    delay: index * 0.1 + 0.2, // Aparece logo após o título daquela coluna
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-3"
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-gray-600  hover:text-igreja-dourado hover:translate-x-1 transition-all duration-200 cursor-pointer text-sm md:text-base xl:text-sm 2xl:text-sm list-none"
                      onClick={() => {
                        if (subItem.href) {
                          router.push(subItem.href);
                        }
                      }}
                    >
                      {subItem.name}
                    </li>
                  ))}
                </motion.ul>
              ) : (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    duration: 1,
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}

                  className="text-gray-600 text-sm leading-relaxed "
                >
                  {item.name === "Contato" ? (
                    <div className="flex flex-col gap-4 text-gray-600 xl:min-w-[300px] 2xl:min-w-[300px] w-full">
                      {/* Bloco de Endereço */}

                      <div className="group">
                        <a
                          href="https://maps.google.com/?q=Av.+Vinte+Um+de+Junho,+Imbituba"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 md:gap-4"
                        >
                          <FaMapMarkerAlt
                            size={18}
                            className="text-gray-600 group-hover:text-igreja-dourado transition-colors md:w-6 md:h-6"
                          />
                          {/* text-sm no mobile (14px) e text-lg no desktop (18px) */}
                          <p className="text-sm md:text-base xl:text-sm 2xl:text-base group-hover:text-igreja-dourado leading-tight md:leading-normal">
                            Av. Vinte Um de Junho, s/n - Centro, Imbituba - SC.
                          </p>
                        </a>
                      </div>

                      {/* Bloco de E-mail */}
                      <div className="group">
                        <a
                          href="mailto:ipbimbituba@gmail.com"
                          className="flex items-center gap-3 md:gap-4"
                        >
                          <FaEnvelope
                            size={18}
                            className="text-gray-600 md:w-7 md:h-7 transition-colors"
                          />
                          <p className="text-sm md:text-base xl:text-sm 2xl:text-base leading-tight md:leading-normal">
                            {/* Escondemos o texto longo no mobile para economizar espaço */}
                            <span className="hidden md:inline">
                              Por favor nos envie contato para E-mail:{" "}
                            </span>
                            <span className="text-igreja-dourado-dark hover:text-igreja-teal break-all block md:inline">
                              ipbimbituba@gmail.com
                            </span>
                          </p>
                        </a>
                      </div>

                      {/* Bloco de WhatsApp */}
                      <div className="group">
                        <a
                          href="https://wa.me/5548998680229"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 md:gap-4"
                        >
                          <FaWhatsapp
                            size={18}
                            className="text-gray-600 group-hover:text-igreja-dourado md:w-6 md:h-6"
                          />
                          <p className="text-sm md:text-base xl:text-sm 2xl:text-base group-hover:text-igreja-dourado">
                            WhatsApp:{" "}
                            <span className="font-bold text-green-900 md:text-base xl:text-sm 2xl:text-base md:ml-1">
                              (48) 99868-0229
                            </span>
                          </p>
                        </a>
                      </div>

                      {/* Redes Sociais */}
                      <div className="mt-2 md:mt-4">
                        <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                          Siga-nos
                        </p>
                        <SocialButtons
                          className="justify-center  gap-4 md:gap-5 items-center"
                          iconClassName="w-6 h-6 xl:w-5 xl:h-5 2xl:w-7 2xl:h-7"
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm md:text-base">
                      Mais informações em breve.
                    </p>
                  )}
                </motion.div>
                /* Caso especial para quando não há submenu (ex: Contato) */
              )}
            </div>
          );
        })}
      </div>

      {/* Faixa Inferior de Copyright */}
      {/* Bloco de Missão e Frase de Destaque */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20 pt-10 border-t border-neutral-200 text-center"
      >
        <h4 className="text-igreja-teal font-bold uppercase tracking-widest text-xs mb-4">
          Igreja Presbiteriana de Imbituba: Fé, Família e Serviço.
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed italic font-roboto px-4">
          "Somos uma comunidade bíblica dedicada a adorar a Deus com alegria e
          servir ao próximo com amor. Nossa missão é conhecer a Jesus e torná-lo
          conhecido, vivendo sob a guia do Espírito Santo e compartilhando a
          Palavra com o mundo. Seja bem-vindo à nossa família — aqui, você é
          sempre desejado e acolhido."
        </p>
      </motion.div>

      {/* Faixa Final de Créditos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-12 pt-6 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-[10px] uppercase tracking-widest"
      >
        <p>© {new Date().getFullYear()} Igreja Presbiteriana de Imbituba</p>
        <p>Desenvolvido por Tiago da Silva Couto</p>
      </motion.div>
    </footer>
  );
}

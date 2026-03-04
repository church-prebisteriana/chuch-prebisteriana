"use client";
import { useState, useEffect } from "react"; // Adicionado useEffect
import { usePathname, useRouter } from "next/navigation"; // Adicionado useRouter
import SocialButtons from "@/src/components/ui/social_icons";
import logoIgreja from "@/public/image/logo_igreja.png";
import Image from "next/image";
import { Menu, ArrowLeft, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import LoadingTelaCheia from "@/src/app/loading"; // Importe seu componente de loading
type SubmenuItem = {
  name: string;
  href: string;
};

type MenuType = "Igreja" | "Ministerio" | "Midias" | "Contato" | null;
type NavItem = {
  name: MenuType | "Inicio" | "Contato";
  submenu?: SubmenuItem[];
  href?: string;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<MenuType>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  // --- LÓGICA DE LOADING FIXO ---
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Toda vez que o pathname mudar, desligamos o loading
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
    setTimeout(() => {
      setMenuOpen(false);
    }, 300);

    router.push(href);
  };

  const navItems: NavItem[] = [
    { name: "Inicio", href: "/" },
    {
      name: "Igreja",
      href: "/church",
      // submenu: [
      //   "Agenda de Atividades",
      //   "Padrões da fé",
      //   "Oficiais",
      //   "Breve História da IPB",
      //   "História da IPB de Imbituba",
      //   "Manual Presbiteriano",
      // ],
    },
    { name: "Ministerio", href: "/ministries" },
    {
      name: "Midias",
      submenu: [
        { name: "Fotos", href: "/media/photos" },
        { name: "Mensagens", href: "/media/messages" },
        { name: "Devocionarios 2025", href: "/media/devotionals" },
        { name: "Vídeos", href: "/media/videos" },
      ],
    },
    { name: "Contato", href: "/contact" },
  ];

  return (
    <>
      {/* EXIBIÇÃO DA TELA DE LOADING */}
      {isFirstLoad && <LoadingTelaCheia />}

      <nav className="w-full sticky top-0 z-[100] bg-gray-50 px-4 md:px-8 pt-5 pb-10 py-4 font-roboto">
        {/* Barra de Redes Sociais */}
        <div className="hidden md:flex justify-between items-center w-full pb-2 pt-1 border-b border-gray-100">
          <div className="flex justify-between gap-10">
            <div className="flex items-center gap-2 group">
              <a
                href="https://wa.me/5548998680229"
                target="_blank"
                rel="noopener noreferrer"
                title="Falar no WhatsApp da Igreja"
                className="flex items-center gap-2"
              >
                <FaWhatsapp
                  className="text-gray-600 group-hover:text-igreja-dourado text-sm transition-colors cursor-pointer"
                  size={15}
                />
                <p className="text-sm text-gray-500 group-hover:hover:text-igreja-dourado">
                  48 9868-0229
                </p>
              </a>
            </div>

            <div className="flex items-center group gap-4 cursor-pointer">
              <a
                href="https://www.google.com/maps?ll=-28.238226,-48.673836&z=16&t=m&hl=pt-BR&gl=US&mapclient=embed&cid=2645627098017759753"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <IoLocationSharp
                  className="text-gray-600 group-hover:hover:text-igreja-dourado text-sm transition-colors"
                  size={15}
                />
                <p className="text-sm text-gray-500 group-hover:hover:text-igreja-dourado">
                  Av. Vinte Um de Junho, s/n - Centro, Imbituba - SC
                </p>
              </a>
            </div>
          </div>
          <SocialButtons />
        </div>

        {/* Container Principal do Menu */}
        <div className="flex flex-row-reverse md:flex-row justify-between items-center w-full pt-2">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <Image
              src={logoIgreja}
              alt="Logo da igreja"
              width={80}
              height={80}
              className="w-12 h-12 md:w-8 md:h-8 transition-all duration-300"
            />
            <h1 className="hidden md:block text-igreja-teal font-semibold text-xl">
              Igreja Presbiteriana de Imbituba
            </h1>
          </div>

          <div className="flex items-center">
            <ul className="hidden md:flex md:items-center md:gap-8">
              {navItems.map((item, index) => {
                // Verifica se a rota atual começa com o href do item (para manter selecionado em subpáginas)
                const isActive =
                  pathname === item.href ||
                  item.submenu?.some((sub) => pathname === sub.href);

                return (
                  <li
                    key={index}
                    className="relative"
                    // MOVIDO PARA CÁ: Enquanto o mouse estiver na LI, o menu fica aberto
                    onMouseEnter={() => setHoveredMenu(item.name)}
                    onMouseLeave={() => {
                      setHoveredMenu(null);
                      setHoveredIndex(null);
                    }}
                  >
                    {item.submenu ? (
                      <div className="relative">
                        <button
                          className={`font-extralight transition-colors cursor-pointer text-xl flex items-center gap-1 ${
                            isActive
                              ? "text-igreja-dourado font-normal"
                              : "text-gray-400 hover:text-igreja-teal"
                          }`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              hoveredMenu === item.name
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        </button>

                        {/* O menu agora não "some" porque o mouse ainda está dentro da LI pai */}
                        <ul
                          className={`absolute top-full left-[-25] w-64 bg-white shadow-xl rounded-md z-[110] transition-all ${
                            hoveredMenu === item.name
                              ? "block opacity-100"
                              : "hidden opacity-0"
                          }`}
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              onClick={() => handleNavigation(subItem.href)}
                              onMouseEnter={() => setHoveredIndex(subIndex)}
                              className="flex items-center cursor-pointer py-3 px-4 font-extralight transition-all duration-300 hover:bg-gray-50 text-gray-500 hover:text-igreja-teal text-xl whitespace-nowrap"
                            >
                              <div className="w-5 flex items-center justify-center">
                                {hoveredIndex === subIndex && (
                                  <span className="text-igreja-teal font-bold">
                                    {">"}
                                  </span>
                                )}
                              </div>

                              <span
                                className={`transition-all duration-300 ${
                                  hoveredIndex === subIndex
                                    ? "translate-x-1 text-igreja-teal"
                                    : "translate-x-0 text-gray-400"
                                }`}
                              >
                                {subItem.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div
                        onClick={() => handleNavigation(item.href)}
                        className={`font-extralight cursor-pointer transition-colors text-xl ${
                          isActive
                            ? "text-igreja-dourado font-normal"
                            : "text-gray-400 hover:text-igreja-teal"
                        }`}
                      >
                        {item.name}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center z-[60] text-gray-400 overflow-hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu
                size={32}
                className={`absolute transition-all duration-300 transform ${
                  menuOpen
                    ? "opacity-0 scale-50 -rotate-90"
                    : "opacity-100 scale-100 rotate-0"
                }`}
              />
              <ArrowLeft
                size={32}
                className={`absolute transition-all duration-300 transform ${
                  menuOpen
                    ? "opacity-100 scale-100 rotate-0" // Volta para a esquerda (original)
                    : "opacity-0 scale-50 rotate-180" // Começa rotacionada para a direita
                }`}
              />
            </button>
          </div>
        </div>

        {/* MENU MOBILE LATERAL */}
        <ul
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 text-gray-600 pt-20 transform transition-transform duration-500 md:hidden shadow-2xl ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {navItems.map((item, index) => {
            // Verifica se este item é o link atual da página
            const isActive = pathname === item.href;

            return (
              <li key={index} className="mb-2">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => {
                        const name = item.name as MenuType;
                        setOpenDropdown(openDropdown === name ? null : name);
                      }}
                      className={`font-extralight w-full text-left pl-6 py-3 transition-all duration-300 flex justify-between items-center ${
                        openDropdown === item.name
                          ? "bg-igreja-teal text-white shadow-inner"
                          : "text-gray-600 hover:bg-igreja-teal/10"
                      }`}
                    >
                      <span>{item.name}</span>
                      <span
                        className={`pr-6 transition-transform ${
                          openDropdown === item.name ? "rotate-90" : ""
                        }`}
                      ></span>
                    </button>

                    {openDropdown === item.name && (
                      <ul className="bg-gray-50 py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            onClick={() => handleNavigation(subItem.href)}
                            className="font-extralight pl-10 py-4 text-gray-500 hover:bg-igreja-teal hover:text-white active:bg-igreja-teal active:text-white cursor-pointer transition-colors"
                          >
                            {subItem.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  /* ESTE É O BOTÃO QUE NÃO TEM LISTA */
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`font-extralight block w-full text-left pl-6 py-4 transition-all duration-200 outline-none
            ${
              isActive
                ? "bg-igreja-teal text-white" // Cor se já estiver na página
                : "text-gray-600 hover:bg-igreja-teal hover:text-white active:bg-igreja-teal active:text-white"
            }`}
                  >
                    {item.name}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

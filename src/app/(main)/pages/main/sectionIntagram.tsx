
"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface Post {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: string;
  // ADICIONE ESTE BLOCO AQUI EMBAIXO:
  children?: {
    data: {
      media_url: string;
      media_type: string;
    }[];
  };
}

// Componente para um card individual (para organizar melhor o código)
const InstagramCard = ({ post, onClickImagem }: { post: any, onClickImagem: (image: string) => void }) => {



  // Verificação simples para pular vídeos se a media_type não for IMAGE ou CAROUSEL_ALBUM
  if (post.media_type === "VIDEO") return null;

  // Para álbuns, o media_url da raiz nem sempre vem preenchido pela API do Instagram.
  // Usamos a primeira foto dos children como capa nesse caso.
  const coverUrl =
    post.media_type === "CAROUSEL_ALBUM" && post.children?.data?.length
      ? post.children.data[0].media_url
      : post.media_url;

  if (!coverUrl) return null;

  return (
    <a
      onClick={() => onClickImagem(post.media_url)}
      className="group relative block aspect-square overflow-hidden rounded-2xl cursor-pointer ..."
    >
      {/* Imagem Principal */}
      <img
        src={coverUrl}
        alt={post.caption || "Post do Instagram"}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Overlay que aparece no Hover */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
        {/* Ícone do Instagram no canto superior */}
        <div className="absolute top-3 right-3 opacity-70">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.281 0 3.689-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.281-.014-3.689-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.689.014 15.281 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </div>

        {/* Legenda (truncada para não quebrar o layout) */}
        {post.caption && (
          <p className="text-sm font-light line-clamp-2 leading-relaxed opacity-90">
            {post.caption}
          </p>
        )}

        {/* Linha decorativa ou infos extras */}
        <div className="w-10 h-0.5 bg-white/70 mt-3 rounded"></div>
      </div>
    </a>
  );
};

const InstagramSectionMinimal = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [indexCarrosel, setIndexCarrosel] = useState(0)






  const [imagemSelect, setImagemSelect] = useState<string | null>(null)


  const [posts, setPosts] = useState<Post[]>([]);
  const [feedError, setFeedError] = useState(false);
  const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

  const nextStep = useCallback((e: any) => {
    e.stopPropagation();
    setDirection(1);
    setIndex((prev) => {
      const novoIndex = (prev + 1) % posts.length;
      setIndexCarrosel(0); // <--- Zera o carrossel ao mudar de post
      return novoIndex;
    });
  }, [posts]);

  const prevStep = useCallback((e: any) => {
    e.stopPropagation();
    setDirection(-1);
    setIndex((prev) => {
      const novoIndex = (prev - 1 + posts.length) % posts.length;
      setIndexCarrosel(0); // <--- Zera o carrossel ao mudar de post
      return novoIndex;
    });
  }, [posts]);

  useEffect(() => {
    // Função que verifica se a tecla pressionada foi o ESC
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setImagemSelect(null); // Fecha o modal
        setIndexCarrosel(0);   // Zera o carrossel interno
      }
    };
    // Só precisamos "ouvir" o teclado se o modal estiver aberto!
    if (imagemSelect) {
      window.addEventListener("keydown", handleKeyDown);
    }
    // Limpeza: remove o "ouvinte" quando o modal fechar para não pesar o site
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imagemSelect]);


  useEffect(() => {
    const fetchPhotos = async () => {
      // Importante adicionar media_type na query para filtrar vídeos
      const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption,media_type,children{media_url,media_type}&access_token=${token}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
          console.error("Erro da API do Instagram:", data.error.message);
          setFeedError(true);
          return;
        }

        // Filtra para garantir que pegamos apenas imagens/carrosséis e limita a 6
        const onlyImages =
          data.data?.filter((photo: { media_type: string }) => photo.media_type !== "VIDEO").slice(0, 12) || [];
        setPosts(onlyImages);
      } catch (err) {
        console.error("Erro ao carregar Instagram:", err);
        setFeedError(true);
      }
    };

    if (token) fetchPhotos();
  }, [token]);

  useEffect(() => {
    if (imagemSelect) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // <-- Adicione esta linha
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset"; // <-- Adicione esta linha
    }
  }, [imagemSelect]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Acompanhe nossa comunidade
            </h2>
            <p className="text-xl text-gray-600 mt-2 font-light">
              Siga-nos no Instagram para ficar por dentro de tudo.
            </p>
          </div>
          <a
            href={`https://instagram.com/ipbimbituba`} // Coloque o user da igreja
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 sm:mt-0 inline-flex items-center gap-2.5 px-6 py-3 bg-igreja-teal text-white font-semibold rounded-xl shadow-md hover:bg-igreja-teal/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.281 0 3.689-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.281-.014-3.689-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.689.014 15.281 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @ipimbituba
          </a>
        </div>


        {/* Grid de Fotos */}
        {feedError ? (
          <div className="text-center py-12 px-6 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-600">
              Não foi possível carregar as fotos do Instagram no momento.
            </p>
            <a
              href="https://instagram.com/ipbimbituba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-igreja-teal font-semibold hover:underline"
            >
              Confira diretamente no nosso perfil.
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {posts.map((post, index) => (
              <InstagramCard key={post.id} post={post}
                onClickImagem={() => {
                  setIndex(index)
                  setIndexCarrosel(0)
                  setImagemSelect(post.id)
                }}
              />
            ))}
          </div>
        )}
      </div>

      {imagemSelect && (
        <div
          // fixed e inset-0 fazem a div cobrir a tela inteira. bg-black/80 dá o fundo transparente
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        //  onClick={() => setImagemSelect(null)} // Clicar no fundo fecha o modal
        >
          {/* Container da imagem */}
          <div className="relative max-w-4xl max-h-[90vh]">

            {/* Botão de Fechar no canto superior */}
            <button
              onClick={() => { setImagemSelect(null); setIndexCarrosel(0); }}
              className=" text-xl absolute -top-10 right-0 text-white hover:text-gray-300 cursor-pointer"
            >
              Fechar (X)
            </button>

            <div className=" absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center text-white justify-between z-20">
              <button onClick={prevStep} className=" pointer-events-auto md:-ml-16 lg:-ml-25 transition-transform hover:scale-110 cursor-pointer">
                <ArrowLeft size={48} className=" opacity-80 hover:opacity-100" />
              </button>
              <button onClick={nextStep} className="pointer-events-auto md:-mr-16 lg:-mr-20 transition-transform hover:scale-110 cursor-pointer">
                <ArrowRight size={48} className="opacity-80 hover:opacity-100" />
              </button>
            </div>
            {/* A imagem grande */}
            {/* Lógica para saber qual imagem mostrar */}
            <div className="relative inline-flex justify-center w-full">

              {/* Lógica para saber qual imagem mostrar */}
              {posts[index]?.media_type === "CAROUSEL_ALBUM" && posts[index]?.children?.data ? (
                <img
                  src={posts[index].children.data[indexCarrosel].media_url}
                  alt="Foto expandida carrossel"
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <img
                  src={posts[index]?.media_url}
                  alt="Foto expandida"
                  className="max-w-full max-h-[90vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              )}
              {/* Bolinhas do Carrossel (Agora sobre a imagem!) */}
              {posts[index]?.media_type === "CAROUSEL_ALBUM" && posts[index]?.children?.data && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 cursor-pointer">
                  {posts[index].children.data.map((_: any, i: number) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIndexCarrosel(i); // Muda para a foto da bolinha clicada
                      }}
                      className={`h-2.5 rounded-full shadow-md transition-all duration-300 ${i === indexCarrosel ? "bg-igreja-teal w-8" : "bg-igreja-teal/50 w-2.5 hover:bg-igreja-teal cursor-pointer"
                        }`}
                    />
                  ))}
                </div>
              )}

            </div>

            <div className="w-full mt-4 bg-white/10 backdrop-blur-md p-4 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">

              {/* Legenda */}
              <p className="text-white text-sm md:text-base line-clamp-2 md:line-clamp-3 text-center md:text-left">
                {posts[index]?.caption || "Sem legenda"}
              </p>

              {/* Botão de acessar o link */}
              <a
                href={posts[index]?.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-5 py-2.5 bg-igreja-teal/50 hover:bg-igreja-teal text-white text-sm font-semibold rounded-lg shadow-md transition-colors"
              >
                Ver no Instagram
              </a>
            </div>
            {/* CONTROLES MOBILE - Mantidos pequenos */}
            <div className="flex items-center justify-center text-white md:hidden gap-8 mt-10 z-30">
              <button onClick={prevStep} className="p-4 rounded-full bg-white/10">
                <ArrowLeft size={24} />
              </button>
              <button onClick={nextStep} className="p-4 rounded-full bg-white/10">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default InstagramSectionMinimal;

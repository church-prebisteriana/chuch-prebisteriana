// "use client";

// import { ArrowLeft, ArrowRight, X } from "lucide-react";

// import { useState, useEffect, useCallback } from "react";

// import { motion, AnimatePresence } from "framer-motion";

// import HeroSection from "@/src/components/ui/HeroBanner";

// import photo1 from "@/public/image/biblicsbase/breadcrumbs-bg-2.jpg";



// interface Post {

//     id: string;

//     media_url: string;

//     permalink: string;

//     caption?: string;

//     media_type: string;

//     children?: {

//         data: { media_url: string; media_type: string }[];

//     };

// }



// // Bento layout: every 7 items, index 0 = large featured, index 4 = wide

// const getCardSpan = (index: number) => {

//     const pattern = index % 7;

//     if (pattern === 0) return "md:col-span-2 md:row-span-2";

//     if (pattern === 4) return "md:col-span-2";

//     return "";

// };



// // --- Lightbox ---

// const PhotoLightbox = ({

//     posts,

//     index,

//     indexCarrosel,

//     onClose,

//     onNext,

//     onPrev,

//     onCarouselChange,

// }: {

//     posts: Post[];

//     index: number;

//     indexCarrosel: number;

//     onClose: () => void;

//     onNext: (e: React.MouseEvent) => void;

//     onPrev: (e: React.MouseEvent) => void;

//     onCarouselChange: (i: number) => void;

// }) => {

//     const post = posts[index];

//     const isCarousel = post?.media_type === "CAROUSEL_ALBUM" && post?.children?.data;

//     const currentImage = isCarousel

//         ? post.children!.data[indexCarrosel].media_url

//         : post?.media_url;



//     return (

//         <motion.div

//             initial={{ opacity: 0 }}

//             animate={{ opacity: 1 }}

//             exit={{ opacity: 0 }}

//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"

//         >

//             <div className="relative w-full max-w-5xl">

//                 {/* Close */}

//                 <button

//                     onClick={onClose}

//                     className="absolute -top-12 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"

//                 >

//                     <X size={18} />

//                     <span className="text-sm font-medium">Fechar</span>

//                 </button>



//                 {/* Desktop arrows */}

//                 <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center justify-between z-20">

//                     <button

//                         onClick={onPrev}

//                         className="pointer-events-auto -ml-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 cursor-pointer"

//                     >

//                         <ArrowLeft size={28} />

//                     </button>

//                     <button

//                         onClick={onNext}

//                         className="pointer-events-auto -mr-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 cursor-pointer"

//                     >

//                         <ArrowRight size={28} />

//                     </button>

//                 </div>



//                 {/* Photo */}

//                 <motion.img

//                     key={`${index}-${indexCarrosel}`}

//                     initial={{ opacity: 0, scale: 0.97 }}

//                     animate={{ opacity: 1, scale: 1 }}

//                     transition={{ duration: 0.25 }}

//                     src={currentImage}

//                     alt={post?.caption || "Foto da Igreja"}

//                     className="w-full max-h-[72vh] object-contain rounded-xl shadow-2xl"

//                 />



//                 {/* Carousel dots */}

//                 {isCarousel && (

//                     <div className="flex justify-center gap-2 mt-4">

//                         {post.children!.data.map((_, i) => (

//                             <button

//                                 key={i}

//                                 onClick={() => onCarouselChange(i)}

//                                 className={`h-2 rounded-full transition-all duration-300 ${i === indexCarrosel

//                                         ? "bg-igreja-teal w-7"

//                                         : "bg-white/30 w-2 hover:bg-white/60"

//                                     }`}

//                             />

//                         ))}

//                     </div>

//                 )}



//                 {/* Caption bar */}

//                 <div className="mt-4 bg-white/5 backdrop-blur border border-white/10 p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-3">

//                     <p className="text-white/75 text-sm line-clamp-2 flex-1 font-light">

//                         {post?.caption || "Sem legenda"}

//                     </p>

//                     <a

//                         href={post?.permalink}

//                         target="_blank"

//                         rel="noopener noreferrer"

//                         className="shrink-0 px-5 py-2 bg-igreja-teal hover:bg-igreja-teal/80 text-white text-sm font-semibold rounded-lg transition-colors"

//                     >

//                         Ver no Instagram

//                     </a>

//                 </div>



//                 {/* Mobile arrows */}

//                 <div className="flex md:hidden items-center justify-center gap-6 mt-6">

//                     <button onClick={onPrev} className="p-4 rounded-full bg-white/10 text-white cursor-pointer">

//                         <ArrowLeft size={22} />

//                     </button>

//                     <button onClick={onNext} className="p-4 rounded-full bg-white/10 text-white cursor-pointer">

//                         <ArrowRight size={22} />

//                     </button>

//                 </div>

//             </div>

//         </motion.div>

//     );

// };



// // --- Photo Card ---

// const PhotoCard = ({

//     post,

//     index,

//     onClick,

// }: {

//     post: Post;

//     index: number;

//     onClick: () => void;

// }) => (

//     <motion.div

//         initial={{ opacity: 0, y: 24 }}

//         whileInView={{ opacity: 1, y: 0 }}

//         viewport={{ once: true }}

//         transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}

//         onClick={onClick}

//         className={`${getCardSpan(index)} group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-200`}

//     >

//         <img

//             src={post.media_url}

//             alt={post.caption || "Foto da Igreja"}

//             className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"

//             loading="lazy"

//         />



//         {/* Gradient overlay on hover */}

//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />



//         {/* Bottom content */}

//         <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">

//             {post.caption && (

//                 <p className="text-white text-sm line-clamp-2 font-light leading-relaxed mb-2">

//                     {post.caption}

//                 </p>

//             )}

//             <div className="w-8 h-0.5 bg-igreja-dourado rounded transition-all duration-500 group-hover:w-14" />

//         </div>



//         {/* Top-right Instagram icon */}

//         <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-80 transition-all duration-300 translate-y-1 group-hover:translate-y-0">

//             <svg className="w-5 h-5 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">

//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.281 0 3.689-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.281-.014-3.689-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.689.014 15.281 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />

//             </svg>

//         </div>



//         {/* Carousel badge */}

//         {post.media_type === "CAROUSEL_ALBUM" && (

//             <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex gap-0.5">

//                 {[1, 0.6, 0.35].map((o, i) => (

//                     <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" style={{ opacity: o }} />

//                 ))}

//             </div>

//         )}

//     </motion.div>

// );



// // --- Gallery Section ---

// const ChurchPhotosGallery = () => {

//     const [posts, setPosts] = useState<Post[]>([]);

//     const [index, setIndex] = useState(0);

//     const [indexCarrosel, setIndexCarrosel] = useState(0);

//     const [lightboxOpen, setLightboxOpen] = useState(false);

//     const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;



//     const openLightbox = useCallback((i: number) => {

//         setIndex(i);

//         setIndexCarrosel(0);

//         setLightboxOpen(true);

//     }, []);



//     const closeLightbox = useCallback(() => {

//         setLightboxOpen(false);

//         setIndexCarrosel(0);

//     }, []);



//     const nextPost = useCallback(

//         (e: React.MouseEvent) => {

//             e.stopPropagation();

//             setIndex((prev) => (prev + 1) % posts.length);

//             setIndexCarrosel(0);

//         },

//         [posts.length]

//     );



//     const prevPost = useCallback(

//         (e: React.MouseEvent) => {

//             e.stopPropagation();

//             setIndex((prev) => (prev - 1 + posts.length) % posts.length);

//             setIndexCarrosel(0);

//         },

//         [posts.length]

//     );



//     useEffect(() => {

//         const handleKey = (e: KeyboardEvent) => {

//             if (!lightboxOpen) return;

//             if (e.key === "Escape") closeLightbox();

//             if (e.key === "ArrowRight") { setIndex((p) => (p + 1) % posts.length); setIndexCarrosel(0); }

//             if (e.key === "ArrowLeft") { setIndex((p) => (p - 1 + posts.length) % posts.length); setIndexCarrosel(0); }

//         };

//         window.addEventListener("keydown", handleKey);

//         return () => window.removeEventListener("keydown", handleKey);

//     }, [lightboxOpen, posts.length, closeLightbox]);



//     useEffect(() => {

//         const val = lightboxOpen ? "hidden" : "unset";

//         document.body.style.overflow = val;

//         document.documentElement.style.overflow = val;

//         return () => { document.body.style.overflow = "unset"; document.documentElement.style.overflow = "unset"; };

//     }, [lightboxOpen]);



//     useEffect(() => {

//         if (!token) return;

//         const fetchPhotos = async () => {

//             const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption,media_type,children{media_url,media_type}&access_token=${token}`;

//             try {

//                 const res = await fetch(url);

//                 const data = await res.json();

//                 const images = data.data?.filter((p: Post) => p.media_type !== "VIDEO") ?? [];

//                 setPosts(images);

//             } catch (err) {

//                 console.error("Erro ao carregar fotos:", err);

//             }

//         };

//         fetchPhotos();

//     }, [token]);



//     return (

//         <section className="py-20 bg-gray-50 overflow-hidden">

//             <div className="max-w-7xl mx-auto px-6">



//                 {/* Header */}

//                 <div className="text-center mb-16">

//                     <motion.span

//                         initial={{ opacity: 0, y: 10 }}

//                         whileInView={{ opacity: 1, y: 0 }}

//                         viewport={{ once: true }}

//                         className="inline-flex items-center gap-3 text-xs font-bold tracking-widest text-igreja-dourado uppercase mb-5"

//                     >

//                         <span className="h-px w-10 bg-igreja-dourado inline-block" />

//                         Nossa História em Imagens

//                         <span className="h-px w-10 bg-igreja-dourado inline-block" />

//                     </motion.span>



//                     <motion.h2

//                         initial={{ opacity: 0, y: 16 }}

//                         whileInView={{ opacity: 1, y: 0 }}

//                         viewport={{ once: true }}

//                         transition={{ delay: 0.1 }}

//                         className="text-4xl md:text-5xl font-extrabold text-igreja-teal tracking-tight font-ibarra leading-tight"

//                     >

//                         Memórias que Edificam

//                     </motion.h2>



//                     <motion.p

//                         initial={{ opacity: 0, y: 16 }}

//                         whileInView={{ opacity: 1, y: 0 }}

//                         viewport={{ once: true }}

//                         transition={{ delay: 0.18 }}

//                         className="text-gray-500 mt-4 max-w-lg mx-auto text-lg font-light leading-relaxed"

//                     >

//                         Cada foto é um testemunho vivo da graça de Deus em nossa comunidade —

//                         registros de fé, celebração e comunhão.

//                     </motion.p>

//                 </div>



//                 {/* Bento Grid */}

//                 <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">

//                     {posts.map((post, i) => (

//                         <PhotoCard key={post.id} post={post} index={i} onClick={() => openLightbox(i)} />

//                     ))}

//                 </div>



//                 {/* CTA */}

//                 <motion.div

//                     initial={{ opacity: 0, y: 20 }}

//                     whileInView={{ opacity: 1, y: 0 }}

//                     viewport={{ once: true }}

//                     className="text-center mt-16 flex flex-col items-center gap-3"

//                 >

//                     <p className="text-gray-400 text-sm font-light tracking-wide">

//                         Acompanhe nossa comunidade

//                     </p>

//                     <a

//                         href="https://instagram.com/ipbimbituba"

//                         target="_blank"

//                         rel="noopener noreferrer"

//                         className="inline-flex items-center gap-3 px-8 py-4 bg-igreja-teal text-white font-semibold rounded-xl shadow-lg hover:bg-igreja-teal/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"

//                     >

//                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">

//                             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.281 0 3.689-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.281-.014-3.689-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.689.014 15.281 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />

//                         </svg>

//                         Seguir @ipbimbituba

//                     </a>

//                 </motion.div>

//             </div>



//             {/* Lightbox */}

//             <AnimatePresence>

//                 {lightboxOpen && (

//                     <PhotoLightbox

//                         posts={posts}

//                         index={index}

//                         indexCarrosel={indexCarrosel}

//                         onClose={closeLightbox}

//                         onNext={nextPost}

//                         onPrev={prevPost}

//                         onCarouselChange={setIndexCarrosel}

//                     />

//                 )}

//             </AnimatePresence>

//         </section>

//     );

// };



// export default function ChurchPhotosInstagram() {

//     return (

//         <div>

//             <HeroSection title="Galeria de Fotos" image={photo1} />

//             <ChurchPhotosGallery />

//         </div>

//     );

// }

"use client";
import { ArrowLeft, ArrowRight, X, Instagram } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/src/components/ui/HeroBanner";
import photo1 from "@/public/image/biblicsbase/breadcrumbs-bg-2.jpg";

interface Post {
    id: string;
    media_url: string;
    permalink: string;
    caption?: string;
    media_type: string;
    children?: {
        data: { media_url: string; media_type: string }[];
    };
}

/** Expande a última publicação (carrossel) em itens individuais no grid. */
function buildDisplayPosts(posts: Post[]): Post[] {
    if (!posts.length) return [];

    const [latest, ...rest] = posts;

    if (
        latest.media_type === "CAROUSEL_ALBUM" &&
        latest.children?.data?.length
    ) {
        const expanded = latest.children.data
            .filter((child) => child.media_type !== "VIDEO")
            .map((child, i) => ({
                id: `${latest.id}-child-${i}`,
                media_url: child.media_url,
                permalink: latest.permalink,
                caption: latest.caption,
                media_type: "IMAGE",
            }));

        return [...expanded, ...rest];
    }

    return posts;
}

// --- Lightbox Premium Minimalista ---
const CleanLightbox = ({
    posts,
    index,
    indexCarrosel,
    onClose,
    onNext,
    onPrev,
    onCarouselChange,
}: {
    posts: Post[];
    index: number;
    indexCarrosel: number;
    onClose: () => void;
    onNext: (e: React.MouseEvent) => void;
    onPrev: (e: React.MouseEvent) => void;
    onCarouselChange: (i: number) => void;
}) => {
    const post = posts[index];
    const isCarousel = post?.media_type === "CAROUSEL_ALBUM" && post?.children?.data;
    const currentImage = isCarousel
        ? post.children!.data[indexCarrosel].media_url
        : post?.media_url;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03100f]/98 p-4 md:p-8 backdrop-blur-sm"
        >
            {/* Botão Fechar Discreto */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 flex items-center gap-2 text-emerald-500/60 hover:text-white transition-colors cursor-pointer tracking-widest text-[11px] uppercase font-light"
            >
                <span>Fechar</span>
                <X size={16} strokeWidth={1.5} />
            </button>

            <div className="relative w-full max-w-4xl flex flex-col items-center">
                {/* Setas Laterais Clássicas */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center justify-between z-20">
                    <button
                        onClick={onPrev}
                        className="pointer-events-auto -ml-20 p-4 border border-emerald-900/40 bg-[#061f1d]/80 text-emerald-100 hover:text-white hover:border-emerald-500/40 transition-all cursor-pointer rounded-none"
                    >
                        <ArrowLeft size={20} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={onNext}
                        className="pointer-events-auto -mr-20 p-4 border border-emerald-900/40 bg-[#061f1d]/80 text-emerald-100 hover:text-white hover:border-emerald-500/40 transition-all cursor-pointer rounded-none"
                    >
                        <ArrowRight size={20} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Exibição da Foto com Moldura Fina */}
                <div className="p-2 border border-emerald-900/60 bg-[#061f1d] shadow-2xl">
                    <motion.img
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={currentImage}
                        alt="Exibição"
                        className="max-w-full max-h-[68vh] object-contain block"
                    />
                </div>

                {/* Paginação do Carrossel */}
                {isCarousel && (
                    <div className="flex justify-center gap-2 mt-4">
                        {post.children!.data.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => onCarouselChange(i)}
                                className={`h-1 transition-all duration-300 ${i === indexCarrosel ? "bg-amber-400 w-8" : "bg-emerald-900 w-3 hover:bg-emerald-700"
                                    }`}
                            />
                        ))}
                    </div>
                )}

                {/* Painel Informativo inferior limpo */}
                <div className="w-full mt-5 max-w-3xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4 border-t border-emerald-900/40 pt-4">
                    <p className="text-emerald-100/70 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
                        {post?.caption || "Registro da comunidade IPB Imbituba."}
                    </p>
                    <a
                        href={post?.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-[11px] uppercase tracking-wider text-amber-400 hover:text-white font-medium border-b border-amber-400/30 pb-0.5 transition-colors"
                    >
                        Ver no Instagram
                    </a>
                </div>

                {/* Controles Mobile */}
                <div className="flex md:hidden items-center justify-center gap-6 mt-6">
                    <button onClick={onPrev} className="p-3 border border-emerald-900/60 text-white bg-[#061f1d]">
                        <ArrowLeft size={16} />
                    </button>
                    <button onClick={onNext} className="p-3 border border-emerald-900/60 text-white bg-[#061f1d]">
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

// --- Card Exposição Clean ---
const ExhibitionCard = ({
    post,
    onClick,
}: {
    post: Post;
    onClick: () => void;
}) => {
    const coverUrl =
        post.media_type === "CAROUSEL_ALBUM" && post.children?.data?.length
            ? post.children.data[0].media_url
            : post.media_url;

    if (!coverUrl) return null;

    return (
    <div className="flex flex-col space-y-3 group cursor-pointer" onClick={onClick}>
        {/* Janela de Imagem Controlada */}
        <div className="relative aspect-square w-full overflow-hidden border border-emerald-900/30 bg-[#03100f]">
            <img
                src={coverUrl}
                alt="Galeria"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-100"
                loading="lazy"
            />

            {/* Badge discreta de Carrossel */}
            {post.media_type === "CAROUSEL_ALBUM" && (
                <div className="absolute top-3 right-3 text-[9px] font-light tracking-widest bg-[#03100f]/90 text-amber-400 px-2 py-0.5 uppercase border border-emerald-900/50">
                    + Fotos
                </div>
            )}
        </div>

        {/* Metadados e legenda abaixo da foto */}
        <div className="space-y-1 px-1">
            {post.caption ? (
                <p className="text-emerald-100/80 text-xs font-light line-clamp-2 leading-relaxed group-hover:text-white transition-colors">
                    {post.caption}
                </p>
            ) : (
                <p className="text-emerald-500/50 text-xs font-light italic">Registro sem descrição</p>
            )}
            <div className="text-[10px] uppercase tracking-widest text-amber-400/60 font-medium pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Expandir Imagem —
            </div>
        </div>
    </div>
    );
};

// --- Galeria Principal ---
const ChurchPhotosGallery = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [index, setIndex] = useState(0);
    const [indexCarrosel, setIndexCarrosel] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

    const displayPosts = useMemo(() => buildDisplayPosts(posts), [posts]);

    const openLightbox = useCallback((i: number) => {
        setIndex(i);
        setIndexCarrosel(0);
        setLightboxOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
        setIndexCarrosel(0);
    }, []);

    const nextPost = useCallback(() => {
        setIndex((prev) => (prev + 1) % displayPosts.length);
        setIndexCarrosel(0);
    }, [displayPosts.length]);

    const prevPost = useCallback(() => {
        setIndex((prev) => (prev - 1 + displayPosts.length) % displayPosts.length);
        setIndexCarrosel(0);
    }, [displayPosts.length]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextPost();
            if (e.key === "ArrowLeft") prevPost();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxOpen, nextPost, prevPost, closeLightbox]);

    useEffect(() => {
        const val = lightboxOpen ? "hidden" : "unset";
        document.body.style.overflow = val;
        document.documentElement.style.overflow = val;
        return () => { document.body.style.overflow = "unset"; document.documentElement.style.overflow = "unset"; };
    }, [lightboxOpen]);

    useEffect(() => {
        if (!token) return;
        const fetchPhotos = async () => {
            // Garantimos que o campo timestamp e media_product_type estejam na query
            const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption,media_type,timestamp,children{media_url,media_type}&access_token=${token}`;
            try {
                const res = await fetch(url);
                const data = await res.json();

                // 1. Filtra removendo os vídeos
                const images = data.data?.filter((p: Post) => p.media_type !== "VIDEO") ?? [];

                // 2. Ordenação Cronológica Absoluta e Segura
                const sortedImages = images.sort((a: any, b: any) => {
                    // Cria objetos de data reais para garantir a comparação de milissegundos
                    const dateA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
                    const dateB = b.timestamp ? new Date(b.timestamp).getTime() : 0;

                    // Se ambas as datas existirem, ordena da mais recente para a mais antiga
                    if (dateA && dateB) {
                        return dateB - dateA;
                    }

                    // Se falhar a data, usa o ID convertendo para número se aplicável
                    return b.id.localeCompare(a.id);
                });

                setPosts(sortedImages);
            } catch (err) {
                console.error("Erro ao carregar fotos:", err);
            }
        };
        fetchPhotos();
    }, [token]);

    return (
        <section className="py-24 bg-[#061f1d] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Título Minimalista e Sofisticado */}
                <div className="text-center mb-20 space-y-3">
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-amber-400 uppercase block">
                        Arquivo Histórico & Comunitário
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-neutral-100 uppercase">
                        Galeria de Imagens
                    </h2>
                    <div className="w-8 h-px bg-emerald-800 mx-auto mt-4" />
                </div>

                {/* Grid Tradicional Equilibrado e Simétrico */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {displayPosts.map((post, i) => (
                        <ExhibitionCard key={post.id} post={post} onClick={() => openLightbox(i)} />
                    ))}
                </div>

                {/* Botão de Rodapé Fino */}
                <div className="text-center mt-24 border-t border-emerald-900/30 pt-10">
                    <a
                        href="https://instagram.com/ipbimbituba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-300 hover:text-amber-400 transition-colors font-medium"
                    >
                        <Instagram size={14} />
                        Acompanhar no Instagram
                    </a>
                </div>
            </div>

            {/* Visualizador Clássico */}
            <AnimatePresence>
                {lightboxOpen && (
                    <CleanLightbox
                        posts={displayPosts}
                        index={index}
                        indexCarrosel={indexCarrosel}
                        onClose={closeLightbox}
                        onNext={nextPost}
                        onPrev={prevPost}
                        onCarouselChange={setIndexCarrosel}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default function ChurchPhotosInstagram() {
    return (
        <div className="bg-[#061f1d] min-h-screen">
            <HeroSection title="Galeria de Fotos" image="https://get.pxhere.com/photo/sea-coast-rock-architecture-hill-chateau-cliff-europe-tower-castle-landmark-italy-fortification-terrain-european-san-marino-945044.jpg" />
            <ChurchPhotosGallery />
        </div>
    );
}
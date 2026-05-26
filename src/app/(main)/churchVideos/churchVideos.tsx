"use client";
import { ArrowLeft, ArrowRight, X, Youtube } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/src/components/ui/HeroBanner";
import photo1 from "@/public/image/biblicsbase/breadcrumbs-bg-2.jpg";

interface YouTubeVideo {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    publishedAt: string;
    videoUrl: string;
}

// --- Lightbox / Player de Vídeo Premium ---
const VideoLightbox = ({
    videos,
    index,
    onClose,
    onNext,
    onPrev,
}: {
    videos: YouTubeVideo[];
    index: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}) => {
    const video = videos[index];
    if (!video) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03100f]/98 p-4 md:p-8 backdrop-blur-sm"
        >
            {/* Fechar */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 flex items-center gap-2 text-emerald-500/60 hover:text-white transition-colors cursor-pointer tracking-widest text-[11px] uppercase font-light"
            >
                <span>Fechar</span>
                <X size={16} strokeWidth={1.5} />
            </button>

            <div className="relative w-full max-w-4xl flex flex-col items-center">
                {/* Setas de Navegação */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center justify-between z-20">
                    <button
                        onClick={onPrev}
                        className="pointer-events-auto -ml-20 p-4 border border-emerald-900/40 bg-[#061f1d]/80 text-emerald-100 hover:text-white hover:border-emerald-500/40 transition-all cursor-pointer"
                    >
                        <ArrowLeft size={20} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={onNext}
                        className="pointer-events-auto -mr-20 p-4 border border-emerald-900/40 bg-[#061f1d]/80 text-emerald-100 hover:text-white hover:border-emerald-500/40 transition-all cursor-pointer"
                    >
                        <ArrowRight size={20} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Player do YouTube Responsivo (Embed) */}
                <div className="w-full aspect-video border border-emerald-900/60 bg-black shadow-2xl">
                    <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* Detalhes do Vídeo */}
                <div className="w-full mt-5 max-w-3xl text-center md:text-left flex flex-col md:flex-row items-start justify-between gap-4 border-t border-emerald-900/40 pt-4">
                    <div className="space-y-1">
                        <h3 className="text-white font-medium text-sm md:text-base line-clamp-1">{video.title}</h3>
                        <p className="text-emerald-100/60 text-xs font-light leading-relaxed line-clamp-2">
                            {video.description || "Sem descrição disponível."}
                        </p>
                    </div>
                    <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-[11px] uppercase tracking-wider text-amber-400 hover:text-white font-medium border-b border-amber-400/30 pb-0.5 transition-colors pt-1"
                    >
                        Assistir no YouTube
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

// --- Card de Vídeo da Exposição ---
const VideoCard = ({
    video,
    onClick,
}: {
    video: YouTubeVideo;
    onClick: () => void;
}) => (
    <div className="flex flex-col space-y-3 group cursor-pointer" onClick={onClick}>
        {/* Janela da Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden border border-emerald-900/30 bg-[#03100f]">
            <img
                src={video.thumbnail}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-100"
                loading="lazy"
            />

            {/* Botão de Play centralizado sutil no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 bg-[#061f1d] border border-amber-400/40 rounded-full text-amber-400">
                    <Youtube size={20} fill="currentColor" />
                </div>
            </div>
        </div>

        {/* Título e Data abaixo */}
        <div className="space-y-1 px-1">
            <h3 className="text-emerald-100/90 text-xs font-medium line-clamp-2 leading-snug group-hover:text-white transition-colors">
                {video.title}
            </h3>
            <p className="text-emerald-600 text-[10px] font-mono">
                {new Date(video.publishedAt).toLocaleDateString("pt-BR")}
            </p>
        </div>
    </div>
);

// --- Componente da Galeria Principal ---
export default function ChurchVideosGallery() {
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

    const nextVideo = useCallback(() => {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % videos.length : 0));
    }, [videos.length]);

    const prevVideo = useCallback(() => {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + videos.length) % videos.length : 0));
    }, [videos.length]);

    useEffect(() => {
        if (!apiKey || !channelId) return;

        const fetchVideos = async () => {
            try {
                // Passo 1: Descobrir o ID da playlist de Uploads do canal (substituindo o 'UC' por 'UU')
                const uploadsPlaylistId = channelId.replace(/^UC/, "UU");

                // Passo 2: Buscar os vídeos contidos nessa playlist (Traz por padrão os mais recentes)
                const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${uploadsPlaylistId}&key=${apiKey}`;

                const res = await fetch(url);
                const data = await res.json();

                if (!data.items) return;

                // Passo 3: Mapear e estruturar os dados limpando o que não precisa
                const formattedVideos: YouTubeVideo[] = data.items.map((item: any) => ({
                    id: item.snippet.resourceId.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
                    publishedAt: item.snippet.publishedAt,
                    videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
                }));

                // Passo 4: Ordenação Cronológica Absoluta de segurança (Mais recente no topo)
                const sortedVideos = formattedVideos.sort((a, b) =>
                    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
                );

                setVideos(sortedVideos);
            } catch (err) {
                console.error("Erro ao carregar vídeos do YouTube:", err);
            }
        };

        fetchVideos();
    }, [apiKey, channelId]);

    return (
        <div className="bg-[#061f1d] min-h-screen">
            <HeroSection title="Galeria de Vídeos" image={photo1} />

            <section className="py-24 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Cabeçalho */}
                    <div className="text-center mb-20 space-y-3">
                        <span className="text-[10px] font-semibold tracking-[0.3em] text-amber-400 uppercase block">
                            Conteúdo Audiovisual recente
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-neutral-100 uppercase">
                            Transmissões & Pregações
                        </h2>
                        <div className="w-8 h-px bg-emerald-800 mx-auto mt-4" />
                    </div>

                    {/* Grid de Vídeos Simétrico (Aspecto de Vídeo 16:9) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {videos.map((video, i) => (
                            <VideoCard key={video.id} video={video} onClick={() => setLightboxIndex(i)} />
                        ))}
                    </div>
                </div>

                {/* Modal/Player de Vídeo ativo */}
                <AnimatePresence>
                    {lightboxIndex !== null && (
                        <VideoLightbox
                            videos={videos}
                            index={lightboxIndex}
                            onClose={() => setLightboxIndex(null)}
                            onNext={nextVideo}
                            onPrev={prevVideo}
                        />
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
}
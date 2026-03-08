"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import WaveBackground from "@/src/components/ui/WaveBackground";
import logoIgreja from "@/public/image/logo_igreja.png"
import Image from "next/image";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#052c2c] relative overflow-hidden px-6 selection:bg-igreja-dourado/20">
      
     <WaveBackground />
     

      {/* 2. CONTEÚDO CENTRALIZADO (Seu Card de Login) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg"
      >
        <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20">
          <div className="text-center mb-10">
            
            <span className="text-igreja-dourado font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">
              Área Restrita
            </span>
            <h2 className="text-4xl font-serif text-slate-900 tracking-tighter italic">
              Portal do{" "}
              <span className="text-igreja-teal not-italic font-black">
                Membro
              </span>
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-auto mt-6" />
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Campo E-mail */}
            <div className="space-y-2">
              <label className="text-slate-500 text-xs font-medium ml-1">
                E-mail corporativo
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-igreja-teal transition-colors"
                  size={20}
                />
                <input
                  type="email"
                  required
                  placeholder="seu.nome@ipb.org.br"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-igreja-teal/20 focus:border-igreja-teal transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div className="space-y-2">
              <label className="text-slate-500 text-xs font-medium ml-1">
                Sua senha segura
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-igreja-teal transition-colors"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-12 text-slate-900 placeholder:text-gray-300 outline-none focus:ring-2 focus:ring-igreja-teal/20 focus:border-igreja-teal transition-all shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <a
                href="#"
                className="text-igreja-teal text-xs font-medium hover:text-igreja-teal-dark transition-colors"
              >
                Esqueceu sua credencial?
              </a>
            </div>

            <button
              type="submit"
              className="w-full group relative bg-igreja-teal text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-[0_6px_0_0_#064e4e] hover:shadow-[0_4px_0_0_#064e4e] hover:translate-y-[2px] active:shadow-none active:translate-y-[6px] transition-all flex items-center justify-center gap-3"
            >
              Entrar no Sistema
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          <div className="mt-12 text-center text-gray-400 text-[10px] tracking-widest uppercase border-t border-gray-100 pt-6">
            Igreja Presbiteriana de Imbituba
          </div>
        </div>
      </motion.div>

      {/* Ruído de Textura Cinematográfico */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
    </main>
  );
}
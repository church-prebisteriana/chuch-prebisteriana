import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

interface SocialProps {
  size?: number;
  className?: string;
  hoverColor?: string;
}

export default function SocialButtons({ size = 20, className = "" }: SocialProps) {
  // Configuração dos links da igreja
  const socialLinks = {
    facebook: "https://facebook.com/ipbimbituba",
    instagram: "https://instagram.com/ipbimbituba",
    linkedin: "#", // Se não tiver, pode deixar "#" ou remover o ícone
    youtube: "https://youtube.com/@ipbimbituba",
  };

  return (
    <div className={`flex gap-4 ${className}`}>
      {/* Facebook */}
      <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer "title="Ir para Pagina do Facebook">
        <FaFacebook 
          size={size} 
          className="text-gray-600 hover:text-igreja-dourado transition-all cursor-pointer hover:scale-110" 
        />
      </a>

      {/* Instagram */}
      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" title="Ir para Pagina do Instagram">
        <FaInstagram 
          size={size} 
          className="text-gray-600 hover:text-igreja-dourado transition-all cursor-pointer hover:scale-110" 
        />
      </a>

      {/* Linkedin */}
      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="Ir para Pagina do Linkedin">
        <FaLinkedin 
          size={size} 
          className="text-gray-600 hover:text-igreja-dourado transition-all cursor-pointer hover:scale-110" 
        />
      </a>

      {/* Youtube */}
      <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" title="Ir para Pagina do Youtube">
        <FaYoutube 
          size={size} 
          className="text-gray-600 hover:text-igreja-dourado transition-all cursor-pointer hover:scale-110" 
        />
      </a>
    </div>
  );
}
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/church-prebisteriana", // Adicione esta linha
  images: {
    unoptimized: true, // Necessário para imagens funcionarem no Pages
  },
};

export default nextConfig;

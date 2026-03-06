import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Necessário para imagens funcionarem no Pages
  },
};

export default nextConfig;

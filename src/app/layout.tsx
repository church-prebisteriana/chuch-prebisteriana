import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Montserrat,Ibarra_Real_Nova, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/navbar";
import FooterPage from "../components/layout/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const ibarra = Ibarra_Real_Nova({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-ibarra",
});

export const metadata: Metadata = {
  title: "IPB | Imbituba",
  description: "Igreja Prebisteriana de Imbituba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={` ${ibarra.className} antialiased relative`}>
    
        <Navbar />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}

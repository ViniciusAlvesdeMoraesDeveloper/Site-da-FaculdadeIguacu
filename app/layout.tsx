

import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";


import "@/styles/globals.css";

import { Toaster } from "@/components/ui/toaster";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  
  title: {
    default: "Faculdade Marinho | Cursos, Pós-Graduação e o Topo do Sucesso",
    
    template: "%s | Faculdade Marinho",
  },
  
  
  description: "A Faculdade Marinho oferece cursos de graduação e pós-graduação focados no sucesso profissional. Encontre sua carreira e alcance o topo conosco.",
  
  
  openGraph: {
    title: "Faculdade Marinho",
    description: "A Faculdade Marinho oferece cursos de graduação e pós-graduação focados no sucesso profissional.",
    url: 'https://seusite.com.br', 
    siteName: 'Faculdade Marinho',
    images: [
      {
        url: 'https://seusite.com.br/images/og-image-default.jpg', 
        width: 1200,
        height: 630,
        alt: 'Logo da Faculdade Marinho e Símbolo do Sucesso',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  
  
  twitter: {
    card: 'summary_large_image',
    title: 'Faculdade Marinho',
    description: 'Encontre sua carreira e alcance o topo do sucesso na Faculdade Marinho.',
  },

  
  icons: {
    icon: '/favicon.ico', 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt-br">
      <body
       
        className={`${poppins.variable} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
"use client";
import React from 'react';
import { useState } from 'react';
import { Facebook, Instagram, Music2, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import ModalGeral from './ModalGeral'; 
import ModalTermosDeUso from './ModalTermoUso'; 

const politicaDePrivacidadeContent: React.ReactNode = (
  <>
    <h2 className="text-xl font-bold mb-4">Política de Privacidade</h2>
    <p>Esta é a política de privacidade que descreve como coletamos e usamos seus dados.</p>
    <p className="mt-2"><strong>Coleta de dados:</strong> Coletamos informações como seu nome, email e dados de uso.</p>
  </>
);

const cookiesContent: React.ReactNode = (
  <>
    <h2 className="text-xl font-bold mb-4">Política de Cookies</h2>
    <p>Nós utilizamos cookies para garantir o bom funcionamento do site e para uma melhor experiência de navegação.</p>
    <p className="mt-2"><strong>O que são cookies:</strong> Pequenos arquivos de texto armazenados no seu navegador.</p>
  </>
);

const Footer = () => {
  const [modalAberto, setModalAberto] = useState<string | null>(null);

  const quickLinks = [
    { text: 'Sobre Nós', href: '/about' },
    { text: 'Cursos', href: '/cursos' },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/faculdade.marinho?igsh=d3QzNmZzMzB3ZGFu" },
    { icon: Music2, href: "https://www.tiktok.com/@faculdade.marinho?is_from_webapp=1&sender_device=pc" },
    { icon: Youtube, href: "https://youtube.com/@faculdademarinho?si=qWmhtcnYpzfP3uCw" },
  ];

  const handleOpenModal = (modalType: string) => {
    setModalAberto(modalType);
  };

  const handleCloseModal = () => {
    setModalAberto(null);
  };

  return (
    <footer className="bg-[#0B093F] text-white left-0 right-0">
      <div className="container mx-auto px-4 py-8">
        {/* Seção das Três Colunas Principais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-16">
          
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/logo-marinho.webp"
                  alt="Faculdade Marinho Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Faculdade Marinho</span>
            </div>
            <p className="text-gray-300 mb-4 leading-normal">
              Transformando vidas através da educação de qualidade há mais de 18 anos. Seja parte da nossa história de sucesso.
            </p>
            <div className="text-white flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Links Rápidos */}
          <div className="md:ml-8 lg:ml-40">
            <h3 className="text-lg font-semibold mb-2">Links Rápidos</h3>
            <ul className="space-y-1 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-orange transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contato */}
          <div id="contato">
            <h3 className="text-lg font-semibold mb-2">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                Luiz Rodrigues dos Santos, 44
                <br />
                Todos os Santos - Coronel Fabriciano/MG
                <br />
                CEP: 35170-061
              </p>
              <p>
                <strong>Telefone:</strong> (31) 98288-3280
              </p>
              <p>
                <strong>E-mail:</strong> faculdademarinho@gmail.com
              </p>
              <p>
                <strong>Horário:</strong>
                <br />
                Seg-Sex: 8h às 18h
                <br />
                Sáb: 8h às 12h
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé inferior com os links dos modais */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              © 2024 Faculdade Marinho. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a
                href="/ModalGeral"
                onClick={(e) => { e.preventDefault(); handleOpenModal('privacidade'); }}
                className="hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleOpenModal('termos'); }}
                className="hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleOpenModal('cookies'); }}
                className="hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Renderização condicional dos modais */}
      {modalAberto === 'privacidade' && (
        <ModalGeral
          title="Política de Privacidade"
          content={politicaDePrivacidadeContent}
          onClose={handleCloseModal}
        />
      )}

      {modalAberto === 'cookies' && (
        <ModalGeral
          title="Política de Cookies"
          content={cookiesContent}
          onClose={handleCloseModal}
        />
      )}

      {modalAberto === 'termos' && (
        <ModalTermosDeUso onClose={handleCloseModal} />
      )}
    </footer>
  );
};

export default Footer;
"use client";

import { Facebook, Instagram, Music2, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { text: 'Sobre Nós', href: '/about' },
    { text: 'Cursos', href: '#cursos' },
  ];

  const socialLinks = [
  
    { icon: Instagram, href: "https://www.instagram.com/faculdade.marinho?igsh=d3QzNmZzMzB3ZGFu" },
    { icon: Music2, href: "https://www.tiktok.com/@faculdade.marinho?is_from_webapp=1&sender_device=pc" },
    { icon: Youtube, href: "https://youtube.com/@faculdademarinho?si=qWmhtcnYpzfP3uCw" },
  ];

  return (
    <footer className="bg-[#0B093F] text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Seção das Três Colunas Principais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-16">
          
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-hero "
              >
                <span className="text-white font-bold text-xl">
                  FM
                </span>
              </div>
              <span className="text-xl font-bold">Faculdade Marinho</span>
            </div>
            <p className="text-gray-300 mb-4 leading-normal">
              Transformando vidas através da educação de qualidade há mais de 15 anos. Seja parte da nossa história de sucesso.
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

        {/* Rodapé inferior */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              © 2024 Faculdade Marinho. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              {["Política de Privacidade", "Termos de Uso", "Cookies"].map((item) => (
                <a key={item} href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
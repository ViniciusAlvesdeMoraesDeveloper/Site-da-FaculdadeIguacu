"use client";

import { Facebook, Instagram, Music2, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { text: 'Sobre Nós', href: '/about' },
    { text: 'Cursos', href: '#cursos' },
  ];

  const courses = [
    "Administração",
    "Engenharia Civil",
    "Direito",
    "Psicologia",
    "Sistemas de Informação",
    "Enfermagem",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "https://www.instagram.com/faculdade.marinho?igsh=d3QzNmZzMzB3ZGFu" },
    { icon: Music2, href: "https://www.tiktok.com/@faculdade.marinho?is_from_webapp=1&sender_device=pc" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-[#0B093F] text-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundImage: "bg-gradient-hero",
                }}
              >
                <span className="text-primary font-bold text-xl">
                  FM
                </span>
              </div>
              <span className="text-xl font-bold">Faculdade Marinho</span>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              Transformando vidas através da educação de qualidade há mais de 15
              anos. Seja parte da nossa história de sucesso.
            </p>
            {/* Troque quickLinks por socialLinks aqui */}
            <div className="text-white flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-white">
              <p>
                Luiz Rodrigues dos Santos, 44
                <br />
                Todos os Santos - Coronel Fabriciano/MG
                <br />
                CEP: 35170-061
              </p>
              <p>
                <strong>Telefone:</strong>
                <br />
                (31) 98288-3280
              </p>
              <p>
                <strong>E-mail:</strong>
                <br />
                faculdademarinho@gmail.com
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

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              © 2024 Faculdade Marinho. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Política de Privacidade", "Termos de Uso", "Cookies"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white hover:text-primary text-sm transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
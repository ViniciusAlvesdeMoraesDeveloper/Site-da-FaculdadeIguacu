"use client"

import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Sobre Nós",
    "Cursos",
    "Vestibular",
    "Portal do Aluno",
    "Biblioteca",
    "Carreiras"
  ];

  const courses = [
    "Administração",
    "Engenharia Civil",
    "Direito",
    "Psicologia",
    "Sistemas de Informação",
    "Enfermagem"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FM</span>
              </div>
              <span className="text-xl font-bold">Faculdade Marinho</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformando vidas através da educação de qualidade há mais de 15 anos. 
              Seja parte da nossa história de sucesso.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
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
                    href="#" 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Cursos</h3>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                Rua dos Estudantes, 123<br />
                Centro - São Paulo/SP<br />
                CEP: 01234-567
              </p>
              <p>
                <strong>Telefone:</strong><br />
                (11) 3456-7890
              </p>
              <p>
                <strong>E-mail:</strong><br />
                contato@faculdademarinho.edu.br
              </p>
              <p>
                <strong>Horário:</strong><br />
                Seg-Sex: 8h às 18h<br />
                Sáb: 8h às 12h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Faculdade Marinho. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
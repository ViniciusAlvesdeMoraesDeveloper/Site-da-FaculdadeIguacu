"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">FM</span>
            </div>
            <span className="text-xl font-bold text-foreground">Faculdade Marinho</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#cursos" className="text-foreground hover:text-primary transition-colors">Cursos</a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">Depoimentos</a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
            <Button className="bg-primary hover:bg-orange-dark text-primary-foreground">Inscreva-se</Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {["Sobre", "Cursos", "Depoimentos", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="bg-primary hover:bg-orange-dark text-primary-foreground w-full">Inscreva-se</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

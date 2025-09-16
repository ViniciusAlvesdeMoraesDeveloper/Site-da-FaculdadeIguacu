"use client"

import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import campusHero from "@/public/assets/campus-hero.jpg";
import Modal from "@/components/Modal"
import {useState} from "react";
import coursesData from "@/json/cursos.json";

const Hero = () => {

  const [showModal, setShowModal] = useState(false);

  function handleModalSubmit(data: { name: string; email: string; course: string; }): void {
    setShowModal(false);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={campusHero.src}
          alt="Campus da Faculdade Marinho"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Expanda seu
            <span
              className="block bg-gradient-to-r from-orange to-orange-light bg-clip-text text-transparent"
            >
              Negócio Educacional
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-white"
          >
            Ofereça cursos de pós-graduação EAD com a legitimidade e segurança de uma
            instituição credenciada pelo MEC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="px-8 py-4 text-lg rounded-md hover:bg-orange-600"
              onClick={() => setShowModal(true)}
            >
              Solicitar Proposta
              <ArrowRight className="ml-2 h-5 w-5"/>
            </Button>
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              onSubmit={(data) => console.log("Form enviado:", data)}
              
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{color: "hsl(var(--orange-primary))"}}>18+
              </div>
              <div className="text-white">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2"
                 style={{color: "hsl(var(--orange-primary))"}}>2.500+
              </div>
              <div className="text-white">Cursos no MEC</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{color: "hsl(var(--orange-primary))"}}>1.640
              </div>
              <div className="text-white">Portaria de Credenciamento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
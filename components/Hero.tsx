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
      <div className="absolute inset-0 z-0 ">
        <img
          src={campusHero.src}
          alt="Campus da Faculdade Iguaçu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Comece a construir seu
            <span
              // Degradê alterado para tons de vermelho padrão do Tailwind
              className="block bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"
            >
              Futuro Profissional
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-white"
          >
            Transforme sua carreira com o ensino superior de qualidade,
            infraestrutura moderna e a credibilidade de uma instituição
            reconhecida pelo MEC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              
              className="px-8 py-4 text-lg rounded-md bg-red-600 hover:bg-red-500"
              onClick={() => setShowModal(true)}
            >
              Inscreva-se Agora
              <ArrowRight className="ml-2 h-5 w-5"/>
            </Button>
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              
              
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              {/* Estilo em linha substituído por text-red-500 */}
              <div className="text-4xl font-bold mb-2 text-red-600">18+
              </div>
              <div className="text-white">Anos de Transformação</div>
            </div>
            <div className="text-center">
              {/* Estilo em linha substituído por text-red-500 */}
              <div className="text-4xl font-bold mb-2 text-red-600">2.500+
              </div>
              <div className="text-white">Alunos Formados</div>
            </div>
            <div className="text-center">
              {/* Estilo em linha substituído por text-red-500 */}
              <div className="text-4xl font-bold mb-2 text-red-600">Nota Máxima
              </div>
              <div className="text-white">Avaliação do MEC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
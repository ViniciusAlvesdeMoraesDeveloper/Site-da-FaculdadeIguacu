import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import campusHero from "@/public/assets/campus-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={campusHero.src} 
          alt="Campus da Faculdade Marinho" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transforme seu
            <span
              className="block bg-gradient-to-r from-orange to-orange-light bg-clip-text text-transparent"
            >
              Futuro Profissional
            </span>
          </h1>
          
          <p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-white"
          >
            Na Faculdade Marinho, oferecemos educação de excelência com foco no mercado de trabalho. 
            Construa sua carreira com quem entende do assunto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className=" px-8 py-4 text-lg rounded-md hover:bg-orange-600"
              onClick={() => {
                const depoimentosEl = document.getElementById("depoimentos");
                if (depoimentosEl) depoimentosEl.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: "hsl(var(--orange-primary))" }}>15+</div>
              <div className="text-white">Anos de Excelência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: "hsl(var(--orange-primary))" }}>5.000+</div>
              <div className="text-white" >Alunos Formados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: "hsl(var(--orange-primary))" }}>98%</div>
              <div className="text-white">Taxa de Empregabilidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

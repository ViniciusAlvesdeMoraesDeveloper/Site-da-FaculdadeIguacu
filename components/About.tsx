import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen, Target } from "lucide-react";
import studentsSuccess from "@/public/assets/students-success.jpg";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Excelência Acadêmica",
      description: "Reconhecida pelo MEC com nota máxima em qualidade de ensino."
    },
    {
      icon: Users,
      title: "Corpo Docente Qualificado",
      description: "Professores mestres e doutores com experiência de mercado."
    },
    {
      icon: BookOpen,
      title: "Metodologia Inovadora",
      description: "Ensino prático e teórico com foco no mundo real."
    },
    {
      icon: Target,
      title: "Foco no Mercado",
      description: "Cursos alinhados com as demandas atuais do mercado de trabalho."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a
              <span className="block text-primary">Faculdade Marinho</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Há mais de 15 anos formando profissionais de excelência para o mercado de trabalho. 
              Nossa missão é proporcionar educação superior de qualidade, preparando nossos alunos 
              para os desafios do mundo moderno.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-orange-dark text-white shadow-orange"
            >
              Conheça Nossa História
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={studentsSuccess.src} 
                alt="Estudantes da Faculdade Marinho" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-orange border-none">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação dos Alunos</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
"use client"; // Adicione esta linha para habilitar hooks do React

import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Target, Users } from "lucide-react";
import studentsSuccess from "@/public/assets/students-success.jpg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Importa o useRouter
import { ArrowRight } from "lucide-react";

const About = () => {
  // Mova a chamada do hook para dentro do componente
  // const [showModal, setShowModal] = useState(false);

  // Use o hook useRouter para navegar entre as páginas
  const router = useRouter();

  const features = [
    {
      icon: Award,
      title: "Tradição e Credibilidade",
      description: "A Faculdade Iguaçu, credenciada pela portaria Nº 1.640, de 19/09/2019, possui 18 anos de experiência educacional, com mais de 2.500 cursos de pós-graduação EAD registrados no MEC, garantindo legitimidade educacional para sua instituição."
    },
    {
      icon: Users,
      title: "Intermediação Especializada",
      description: "A Faculdade Marinho atua como intermediadora exclusiva de negócios educacionais, viabilizando parcerias estratégicas que permitem a abertura de unidades credenciadas para matrícula em cursos de pós-graduação."
    },
    {
      icon: BookOpen,
      title: "Diferencial Competitivo",
      description: "Ofereça cursos reconhecidos e autorizados sem investimentos em infraestrutura acadêmica própria, ampliando seu portfólio educacional com segurança jurídica e pedagógica."
    },
    {
      icon: Target,
      title: "Parceria que Gera Resultados",
      description: "Nossa parceria garante que você possa oferecer o que há de mais inovador em educação, com o respaldo de uma instituição sólida e de alta qualidade."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Parceria que Gera
              <span className="block text-primary">Resultados</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A Faculdade Marinho atua como intermediadora exclusiva
              de negócios educacionais, viabilizando parcerias estratégicas
              que permitem a abertura de unidades credenciadas para
              matrícula em cursos de pós-graduação.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img src={studentsSuccess.src} alt="Estudantes da Faculdade Marinho"
                className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <Card className="absolute -bottom-6 -left-6 bg-background shadow-orange border-none">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">18+</div>
                  <div className="text-sm text-muted-foreground">Anos de Eperiência</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 flex justify-center">
        <Button
          size="lg"
          className="px-8 py-4 text-lg rounded-md hover:bg-orange-600"
          onClick={() => router.push("/")}
        >
          Retornar para a Página Inicial
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default About;
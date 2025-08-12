import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import classroomModern from "@/public/assets/classroom-modern.jpg";

const Courses = () => {
  const courses = [
    { title: "Administração", description: "Forme-se em uma das áreas mais promissoras...", duration: "4 anos", students: "250+ alunos", rating: "4.9", badge: "Mais Procurado", color: "bg-primary" },
    { title: "Engenharia Civil", description: "Construa o futuro com conhecimentos sólidos...", duration: "5 anos", students: "180+ alunos", rating: "4.8", badge: "Mercado Aquecido", color: "bg-secondary" },
    { title: "Direito", description: "Desenvolva senso crítico e conhecimento jurídico...", duration: "5 anos", students: "300+ alunos", rating: "4.9", badge: "Tradição", color: "bg-accent" },
    { title: "Psicologia", description: "Compreenda o comportamento humano e transforme vidas.", duration: "5 anos", students: "120+ alunos", rating: "4.7", badge: "Em Crescimento", color: "bg-primary" },
    { title: "Sistemas de Informação", description: "Domine a tecnologia que move o mundo moderno.", duration: "4 anos", students: "200+ alunos", rating: "4.8", badge: "Alta Demanda", color: "bg-secondary" },
    { title: "Enfermagem", description: "Cuide de pessoas e faça a diferença na sociedade.", duration: "4 anos", students: "150+ alunos", rating: "4.9", badge: "Essencial", color: "bg-accent" }
  ];

  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Cursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos cursos de graduação em diversas áreas...
          </p>
        </div>

        {/* Featured Course */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-elegant border-none">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img src={classroomModern.src} alt="Sala de aula moderna" className="w-full h-full object-cover min-h-[400px]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Destaque
                </Badge>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-foreground">MBA Executivo</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Acelere sua carreira com nosso MBA voltado para executivos...
                </p>
                <div className="flex items-center gap-6 mb-6 text-foreground">
                  <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /><span>18 meses</span></div>
                  <div className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /><span>Turma limitada</span></div>
                  <div className="flex items-center gap-2"><Star className="h-5 w-5 text-primary" /><span>5.0</span></div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-orange-dark text-primary-foreground w-fit">
                  Saiba Mais <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className={`${course.color} text-primary-foreground`}>
                    {course.badge}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-foreground">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>{course.duration}</span></div>
                  <div className="flex items-center gap-2"><Users className="h-4 w-4" /><span>{course.students}</span></div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-orange-dark text-primary-foreground shadow-orange px-8">
            Ver Todos os Cursos <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;

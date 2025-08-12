import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina Silva",
      course: "Administração - 2023",
      text: "A Faculdade Marinho transformou minha vida profissional. Hoje ocupo um cargo de gestão em uma multinacional graças ao excelente ensino que recebi.",
      rating: 4,
      avatar: "AC",
      company: "Manager na Petrobras"
    },
    {
      name: "Carlos Eduardo Santos",
      course: "Engenharia Civil - 2022",
      text: "Os professores são excepcionais e a infraestrutura da faculdade é de primeira. Me sinto preparado para qualquer desafio na minha área.",
      rating: 5,
      avatar: "CE",
      company: "Engenheiro na Construtora ABC"
    },
    {
      name: "Marina Oliveira",
      course: "Psicologia - 2023",
      text: "A metodologia de ensino é inovadora e realmente prepara para o mercado. Consegui abrir minha própria clínica logo após me formar.",
      rating: 4,
      avatar: "MO",
      company: "Psicóloga Clínica"
    },
    {
      name: "Ricardo Ferreira",
      course: "Sistemas de Informação - 2022",
      text: "O curso é muito atualizado com as tendências de tecnologia. Hoje trabalho em uma das maiores empresas de tech do país.",
      rating: 5,
      avatar: "RF",
      company: "Developer na Google"
    },
    {
      name: "Juliana Costa",
      course: "Direito - 2021",
      text: "A formação jurídica que recebi é incomparável. Passei na OAB na primeira tentativa e hoje advogo em um escritório renomado.",
      rating: 5,
      avatar: "JC",
      company: "Advogada no TozziniFreire"
    },
    {
      name: "Pedro Almeida",
      course: "Enfermagem - 2023",
      text: "A experiência prática que tive durante o curso foi fundamental. Me sinto confiante para cuidar das pessoas e fazer a diferença.",
      rating: 5,
      avatar: "PA",
      company: "Enfermeiro no Hospital Albert Einstein"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que nossos
            <span className="text-primary"> Ex-Alunos</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de sucesso de quem passou pela Faculdade Marinho e hoje 
            está transformando o mercado de trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.course}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>

              {/* Decorative gradient border on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-orange-light opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5.000+</div>
            <div className="text-muted-foreground">Alunos Formados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Taxa de Empregabilidade</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Anos de Tradição</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
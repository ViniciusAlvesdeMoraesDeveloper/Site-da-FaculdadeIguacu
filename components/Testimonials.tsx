import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import testimonials from "@/json/testimonials.json";

const Testimonials = () => {
  return (
    <section
      id="depoimentos"
      className="py-20 bg-gradient-subtle"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que nossos <span className="text-red-700">Ex-Alunos</span> dizem
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de sucesso de quem passou pela Faculdade Marinho e se transformou profissionalmente.
          </p>
        </header>


        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" role="list">
          {testimonials.testimonials.map((testimonial, index) => (
            <li
              key={index}

              className="relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md h-full"
              itemScope
              itemProp="hasPart"
              itemType="https://schema.org/Review"
            >

              <Card className="h-full">


                <CardContent className="p-6 flex flex-col h-full">
                  <meta itemProp="reviewAspect" content="Experiência do Aluno" />
                  {/* Cor do Quote alterada para vermelho */}
                  <Quote className="h-8 w-8 text-red-600 mb-4 opacity-50" />
                  <div
                    className="flex gap-1 mb-4"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                    <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                  <p
                    itemProp="reviewBody"

                    className="text-muted-foreground mb-6 leading-relaxed flex-grow"
                  >
                    "{testimonial.text}"
                  </p>
                  <div

                    className="flex items-center gap-4 mt-auto"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="" />
                      {/* Cor do AvatarFallback alterada para vermelho e texto para um tom mais claro */}
                      <AvatarFallback className="bg-red-700 text-red-50 font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div itemProp="name" className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{testimonial.course}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Degradê de hover alterado para tons de vermelho */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { value: "5.000+", label: "Alunos Formados" },
            { value: "98%", label: "Taxa de Empregabilidade" },
            { value: "4.9", label: "Avaliação Média" },
            { value: "18+", label: "Anos de Tradição" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              {/* Cor das estatísticas alterada para vermelho */}
              <div className="text-4xl font-bold text-red-700 mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
"use client"; // Adicione esta linha para habilitar hooks do React

import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Target, Users, Smartphone } from "lucide-react";
import studentsSuccess from "@/public/assets/students-success.jpg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Importa o useRouter
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Importe o componente Image do Next.js

const About = () => {
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

  // Estrutura de dados para agrupar os contatos por área
  const contactSections = [
    {
      title: "Pós-Graduação",
      contacts: [
        {
          number: "(31) 98288-3280",
          href: "https://wa.me/5531982883280?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20parceria%20de%20P%C3%B3s-Gradua%C3%A7%C3%A3o%20com%20a%20Faculdade%20Marinho.%20Poderiam%20me%20ajudar%3F"
        },
        {
          number: "(31) 98325-6247",
          href: "https://wa.me/5531983256247?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20parceria%20de%20P%C3%B3s-Gradua%C3%A7%C3%A3o%20com%20a%20Faculdade%20Marinho.%20Poderiam%20me%20ajudar%3F"
        },
      ]
    },
    {
      title: "Técnico",
      contacts: [
        {
          number: "(31) 99342-2575",
          href: "https://wa.me/5531993422575?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20parceria%20de%20cursos%20t%C3%A9cnicos%20com%20a%20Faculdade%20Marinho.%20Poderiam%20me%20ajudar%3F"
        },
      ]
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
             A Faculdade Marinho atua como intermediadora exclusiva de negócios educacionais, viabilizando parcerias estratégicas para a oferta de cursos de pós-graduação da Faculdade Iguaçu e cursos técnicos da Global Tec. Essa colaboração permite a abertura de unidades credenciadas para matrícula e expande o portfólio educacional das instituições parceiras com segurança e qualidade.
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
              <Image 
                src={studentsSuccess} 
                alt="Estudantes da Faculdade Marinho"
                width={800}
                height={600}
                className="w-full h-[600px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <Card className="absolute -bottom-6 -left-6 bg-background shadow-orange border-none">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">18+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* SEÇÃO DE CONTATOS AGRUPADA POR ÁREA */}
      <div className="container mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Fale com um de nossos consultores</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco através do WhatsApp e tire todas as suas dúvidas sobre nossas parcerias
            educacionais
          </p>
        </div>

        {contactSections.map((section, index) => (
          <div key={index} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">{section.title}</h3>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div
                className={`grid gap-6 ${
                  section.contacts.length === 1
                    ? "grid-cols-1 max-w-md mx-auto"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                }`}
              >
                {section.contacts.map((contact, contactIndex) => (
                  <Card
                    key={contactIndex}
                    className="group border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                      <div className="flex-1">
                        <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                          <Smartphone className="h-10 w-10 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-2 tracking-wide">{contact.number}</h4>
                        <p className="text-muted-foreground mb-6 text-sm">
                          Clique para iniciar uma conversa no WhatsApp
                        </p>
                      </div>

                      <Link href={contact.href} passHref className="w-full">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                          <Smartphone className="mr-2 h-4 w-4" />
                          Iniciar Conversa
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 mt-12 mb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
            <Button
              size="lg"
              className="px-8 py-4 text-lg rounded-full hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              onClick={() => router.push("/")}
            >
              Retornar para a Página Inicial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
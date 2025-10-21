"use client"; // Adicione esta linha para habilitar hooks do React

import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Target, Users, Smartphone, Mail } from "lucide-react";
import studentsSuccess from "@/public/assets/students-success.jpg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


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

  const contactSections = [
    {
      title: "Inscrições e Vendas (Graduação EAD)",
      contacts: [
        // Vendas Graduação EAD
        {
          number: "(31) 9793-1332",
          href: "https://wa.me/553197931332?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20valores%20sobre%20os%20cursos%20de%20Gradua%C3%A7%C3%A3o%20EAD.%20Qual%20o%20pr%C3%B3ximo%20passo%20para%20me%20inscrever%3F"
        }
      ]
    },
    {
      title: "Inscrições e Vendas (Pós-Graduação EAD)",
      contacts: [
        // Vendas Pós-Graduação EAD
        {
          number: "(31) 97326-5179",
          href: "https://wa.me/5531973265179?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos%20de%20P%C3%B3s-Gradua%C3%A7%C3%A3o%20EAD%20e%20como%20posso%20iniciar%20minha%20especializa%C3%A7%C3%A3o%20agora.%20Poderiam%20me%20ajudar%3F"
        }
      ]
    },
    {
      title: "Secretaria e Apoio Acadêmico (EAD)",
      contacts: [
        // Secretária e Financeiro Graduação EAD
        {
          number: "(46) 99907-7686",
          href: "https://wa.me/5546999077686?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Secretaria%20sobre%20minha%20Gradua%C3%A7%C3%A3o%20EAD%20e%20documenta%C3%A7%C3%A3o."
        },
        // Secretária Pós-Graduação EAD / Pedagógico Pós-graduação EAD
        {
          number: "(31) 98360-5495",
          href: "https://wa.me/5531983605495?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20pedag%C3%B3gico%20ou%20ajuda%20com%20documenta%C3%A7%C3%A3o%20da%20minha%20P%C3%B3s-Gradua%C3%A7%C3%A3o%20EAD."
        }
      ]
    },
    {
      title: "Secretaria Presencial e Fixo Matriz",
      contacts: [
        // Secretária Graduação Presencial
        {
          number: "(46) 99903-6975",
          href: "https://wa.me/5546999036975?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Secretaria%20da%20Gradua%C3%A7%C3%A3o%20Presencial."
        },
        // Secretaria Presencial Matriz (Fixo)
        {
          number: "(46) 3552-1464",
          href: "tel:554635521464"
        }
      ]
    },
    {
      title: "Financeiro (Pós-Graduação EAD)",
      contacts: [
        // Financeiro Pós-graduação EAD
        {
          number: "(31) 98112-1349",
          href: "https://wa.me/5531981121349?text=Ol%C3%A1%2C%20gostaria%20de%20tratar%20de%20assuntos%20financeiros%20relacionados%20%C3%A0%20P%C3%B3s-Gradua%C3%A7%C3%A3o%20EAD."
        }
      ]
    },
    {
      title: "Contato para Parceiros (Exclusivo)",
      contacts: [
        // Parceiros
        {
          number: "(31) 98288-3280",
          href: "https://wa.me/5531982883280?text=Ol%C3%A1,%20sou%20um%20parceiro%20e%20gostaria%20de%20suporte."
        }
      ]
    },
    // NOVO CARD DE E-MAILS INSTITUCIONAIS
    {
      title: "E-mails Institucionais",
      contacts: [
        {

          info: "Comercial: faculdadeiguacuead@gmail.com",
          href: "mailto:faculdadeiguacuead@gmail.com",
          icon: Mail,
          buttonText: "Enviar E-mail Comercial"
        },
        {
          info: "Pedagógico: pedagogico@faculdadeiguacu.edu.br",
          href: "mailto:pedagogico@faculdadeiguacu.edu.br",
          icon: Mail,
          buttonText: "Enviar E-mail Pedagógico"
        },
        {
          info: "Jurídico: juridicoiguacu@faculdadeiguacu.edu.br",
          href: "mailto:Juridicoiguacu@faculdadeiguacu.edu.br",
          icon: Mail,
          buttonText: "Enviar E-mail Jurídico"
        }
      ]
    }
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      
      <Header />

      <main className='flex-grow'>
        <section id="sobre" className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Faculdade Iguaçu:
                  <span className="block text-primary">Nossa História</span>
                </span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Credenciada em 2004 (Portaria Nº 2762/04), a Faculdade Iguaçu realiza a formação de profissionais há mais de 15 anos. Com foco na excelência, busca o autoaperfeiçoamento e a prática de uma liberdade consciente, posicionando-se como um lócus do saber, da liberdade acadêmica e da inteligência, contribuindo para o desenvolvimento e inovação na região.
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
                    alt="Estudantes da Faculdade Iguaçu"
                    width={800}
                    height={600}
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <Card className="absolute -bottom-6 -left-6 bg-background shadow-orange border-none">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">2004</div> {/* Ano do Credenciamento */}
                      <div className="text-sm text-muted-foreground">Ano de Fundação/Credenciamento</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* SEÇÃO DE CONTATOS AGRUPADA POR ÁREA */}
          <div className="container mx-auto px-4 mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Entre em Contato Conosco</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fale com nossa equipe e tire suas dúvidas sobre nossos cursos de graduação, pós-graduação e as modalidades presencial e EaD.
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
                    className={`grid gap-6 ${section.contacts.length === 1
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
                              {/* CORREÇÃO: Renderiza o ícone com verificação de tipagem */}
                              {contact.icon ? (
                                <contact.icon className="h-10 w-10 text-primary" />
                              ) : (
                                <Smartphone className="h-10 w-10 text-primary" /> // Fallback para o ícone padrão
                              )}
                            </div>
                            
                            {/* CORREÇÃO: Aplica break-all para o e-mail não quebrar feio */}
                            <h4 className="text-xl font-bold text-foreground mb-2 tracking-wide break-all">
                              {contact.info || contact.number}
                            </h4>

                            <p className="text-muted-foreground mb-6 text-sm">
                              {/* Texto descritivo para E-mail ou WhatsApp */}
                              {contact.icon ? 
                                "Clique para enviar um e-mail"
                                : "Clique para iniciar uma conversa no WhatsApp"
                              }
                            </p>
                          </div>

                          <Link href={contact.href} passHref className="w-full">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                              
                              {contact.icon ? (
                                <Mail className="mr-2 h-4 w-4" />
                              ) : (
                                <Smartphone className="mr-2 h-4 w-4" />
                              )}
                              {/* CORREÇÃO: Usa buttonText se existir, senão usa o padrão */}
                              {contact.buttonText || "Falar com o Consultor"}
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
        </section>
      </main>
  ))};

      <Footer />

    </div >
  )
}

export default About
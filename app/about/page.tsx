"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Target, Users, Smartphone, Mail } from "lucide-react";
import studentsSuccess from "@/public/assets/students-success.jpg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ContactInfo = {
  number?: string;
  info?: string;
  href: string;
  icon?: any;
  buttonText?: string;
};

type ContactSection = {
  title: string;
  contacts: ContactInfo[];
};

const About = () => {
  const router = useRouter();

  const features = [
    {
      icon: Award,
      title: "Tradição e Credibilidade",
      description:
        "A Faculdade Iguaçu, credenciada pela portaria Nº 1.640, de 19/09/2019, possui 18 anos de experiência educacional, com mais de 2.500 cursos de pós-graduação EAD registrados no MEC, garantindo legitimidade educacional para sua instituição.",
    },
    {
      icon: Users,
      title: "Intermediação Especializada",
      description:
        "A Faculdade Marinho atua como intermediadora exclusiva de negócios educacionais, viabilizando parcerias estratégicas que permitem a abertura de unidades credenciadas para matrícula em cursos de pós-graduação.",
    },
    {
      icon: BookOpen,
      title: "Diferencial Competitivo",
      description:
        "Ofereça cursos reconhecidos e autorizados sem investimentos em infraestrutura acadêmica própria, ampliando seu portfólio educacional com segurança jurídica e pedagógica.",
    },
    {
      icon: Target,
      title: "Parceria que Gera Resultados",
      description:
        "Nossa parceria garante que você possa oferecer o que há de mais inovador em educação, com o respaldo de uma instituição sólida e de alta qualidade.",
    },
  ];

  const contactSections: ContactSection[] = [
    {
      title: "Inscrições e Vendas (Graduação EAD)",
      contacts: [
        {
          number: "(31) 9793-1332",
          href: "https://wa.me/553197931332?text=Olá,%20gostaria%20de%20informações%20sobre%20os%20cursos%20de%20Graduação%20EAD.",
        },
      ],
    },
    {
      title: "Inscrições e Vendas (Pós-Graduação EAD)",
      contacts: [
        {
          number: "(31) 97326-5179",
          href: "https://wa.me/5531973265179?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos%20de%20Pós-Graduação%20EAD.",
        },
      ],
    },
    {
      title: "Secretaria e Apoio Acadêmico (EAD)",
      contacts: [
        {
          number: "(46) 99907-7686",
          href: "https://wa.me/5546999077686?text=Olá,%20gostaria%20de%20falar%20com%20a%20Secretaria%20sobre%20minha%20Graduação%20EAD.",
        },
        {
          number: "(31) 98360-5495",
          href: "https://wa.me/5531983605495?text=Olá,%20preciso%20de%20suporte%20pedagógico%20da%20minha%20Pós-Graduação%20EAD.",
        },
      ],
    },
    {
      title: "Secretaria Presencial e Fixo Matriz",
      contacts: [
        {
          number: "(46) 99903-6975",
          href: "https://wa.me/5546999036975?text=Olá,%20gostaria%20de%20falar%20com%20a%20Secretaria%20da%20Graduação%20Presencial.",
        },
        {
          number: "(46) 3552-1464",
          href: "tel:554635521464",
        },
      ],
    },
    {
      title: "Financeiro (Pós-Graduação EAD)",
      contacts: [
        {
          number: "(31) 98112-1349",
          href: "https://wa.me/5531981121349?text=Olá,%20gostaria%20de%20tratar%20de%20assuntos%20financeiros%20da%20Pós-Graduação%20EAD.",
        },
      ],
    },
    {
      title: "Contato para Parceiros (Exclusivo)",
      contacts: [
        {
          number: "(31) 98288-3280",
          href: "https://wa.me/5531982883280?text=Olá,%20sou%20um%20parceiro%20e%20gostaria%20de%20suporte.",
        },
      ],
    },
    {
      title: "E-mails Institucionais",
      contacts: [
        {
          info: "Comercial: faculdadeiguacuead@gmail.com",
          href: "mailto:faculdadeiguacuead@gmail.com",
          icon: Mail,
          buttonText: "Enviar E-mail Comercial",
        },
        {
          info: "Pedagógico: pedagogico@faculdadeiguacu.edu.br",
          href: "mailto: pedagogico@faculdadeiguacu.edu.br",
          icon: Mail,
          buttonText: "Enviar E-mail Pedagógico",
        },
        {
          info: "Jurídico: juridicoiguacu@faculdadeiguacu.edu.br",
          href: "mailto:juridicoiguacu@faculdadeiguacu.edu.br",
          icon: Mail,
          buttonText: "Enviar E-mail Jurídico",
        },
      ],
    },
  ];

  return (
    <div id="Sobre" className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Seção sobre */}
        {/* bg-gradient-subtle substituído por bg-red-50 (tom mais claro) */}
        <section id="sobre" className="py-20 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* text-primary substituído por text-red-700 */}
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Faculdade Iguaçu:
                  <span className="block text-red-700">Nossa História</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  A Faculdade Iguaçu (mantida pelo Instituto de Educação e Cultura de Capanema - IECC) é uma Instituição de Ensino Superior credenciada desde 2004 (Portaria Nº 2762/04), dedicando-se há mais de 15 anos à excelência na formação profissional.

                  Nosso foco é ser um lócus de saber e inteligência, promovendo o autoaperfeiçoamento, o raciocínio inovador e a conexão direta do aluno com o mercado de trabalho através de uma sólida integração entre ensino, pesquisa e extensão.

                  Oferta Educacional
                  Com o curso de Pedagogia Presencial e a importante expansão para a Educação a Distância (EaD) em 2019, nosso portfólio atualizado inclui:
                  <br />
                  * Licenciatura em Pedagogia
                  <br />
                  * Tecnólogo em Processos Gerenciais
                  <br />
                  * Bacharelado em Administração
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <Card
                      key={index}
                      className="border-none shadow-md hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6">
                        {/* text-primary substituído por text-red-700 */}
                        <feature.icon className="h-12 w-12 text-red-700 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

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
                {/* shadow-orange substituído por shadow-[0_4px_10px_rgba(220,38,38,0.5)] para um vermelho mais vívido */}
                {/* text-primary substituído por text-red-700 */}
                <Card className="absolute -bottom-6 -left-6 bg-background shadow-[0_4px_10px_rgba(220,38,38,0.5)] border-none">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-700 mb-1">
                        2004
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Ano de Fundação/Credenciamento
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contatos */}
          <div className="container mx-auto px-4 mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Entre em Contato Conosco
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fale com nossa equipe e tire suas dúvidas sobre nossos cursos.
              </p>
            </div>

            {contactSections.map((section, index) => (
              <div key={index} className="mb-16">
                <div className="text-center mb-8">
                  {/* text-primary substituído por text-red-700 */}
                  <h3 className="text-2xl font-bold text-red-700 mb-2">
                    {section.title}
                  </h3>
                  {/* bg-primary substituído por bg-red-700 */}
                  <div className="w-20 h-1 bg-red-700 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div
                    className={`grid gap-6 ${section.contacts.length === 1
                      ? "grid-cols-1 max-w-md mx-auto"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                      }`}
                  >
                    {section.contacts.map((contact, i) => (
                      <Card
                        key={i}
                        className="group border-2 border-red-700/20 shadow-lg hover:shadow-xl hover:border-red-700/40 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <CardContent className="p-8 text-center flex flex-col justify-between">
                          <div className="flex-1">
                            <div className="bg-red-700/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700/20 transition-colors">
                              {contact.icon ? (
                                <contact.icon className="h-10 w-10 text-red-700" />
                              ) : (                               
                                <Smartphone className="h-10 w-10 text-red-700" />
                              )}
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-2 break-all">
                              {contact.number ?? contact.info}
                            </h4>
                          </div>
                          <Link href={contact.href} passHref>

                            <Button className="w-full bg-red-800 hover:bg-red-700 text-red-50 py-3 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                              {contact.buttonText ?? "Fale com o consultor"}
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

      <Footer />
    </div>
  );
};

export default About;
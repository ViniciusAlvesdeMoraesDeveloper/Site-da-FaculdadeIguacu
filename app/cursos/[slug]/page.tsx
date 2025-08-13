import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, Star, Award, BookOpen, Target, Calendar, MapPin, DollarSign } from "lucide-react"
import { notFound } from "next/navigation"

// Dados dos cursos - simplificado e corrigido
const coursesData: Record<string, any> = {
  administracao: {
    title: "Administração",
    description:
      "O curso de Administração da Faculdade Marinho forma profissionais capazes de gerenciar organizações de forma estratégica e inovadora.",
    duration: "4 anos",
    students: "250+ alunos",
    rating: "4.9",
    category: "Negócios",
    modalidade: "Presencial/EAD",
    investimento: "R$ 890/mês",
    coordenador: "Prof. Dr. Carlos Silva",
    reconhecimento: "Reconhecido pelo MEC - Nota 5",
    sobre:
      "O curso de Administração prepara profissionais para atuar em diversas áreas da gestão empresarial, desenvolvendo competências em planejamento estratégico, gestão de pessoas, marketing, finanças e operações.",
    objetivos: [
      "Formar administradores éticos e competentes",
      "Desenvolver visão estratégica e sistêmica",
      "Capacitar para liderança e gestão de equipes",
      "Preparar para empreendedorismo e inovação",
    ],
    mercado: [
      "Gestão empresarial em grandes corporações",
      "Consultoria organizacional",
      "Empreendedorismo e startups",
      "Gestão pública",
      "Terceiro setor",
    ],
    grade: [
      {
        periodo: "1º Período",
        disciplinas: [
          "Fundamentos da Administração",
          "Matemática Aplicada",
          "Comunicação Empresarial",
          "Economia",
          "Metodologia Científica",
        ],
      },
      {
        periodo: "2º Período",
        disciplinas: [
          "Teoria Geral da Administração",
          "Contabilidade Geral",
          "Estatística",
          "Direito Empresarial",
          "Psicologia Organizacional",
        ],
      },
    ],
  },
  "engenharia-civil": {
    title: "Engenharia Civil",
    description:
      "Forme-se em Engenharia Civil e construa o futuro com conhecimentos sólidos em projetos, construção e infraestrutura.",
    duration: "5 anos",
    students: "180+ alunos",
    rating: "4.8",
    category: "Engenharia",
    modalidade: "Presencial",
    investimento: "R$ 1.290/mês",
    coordenador: "Prof. Dr. Ana Santos",
    reconhecimento: "Reconhecido pelo MEC - Nota 4",
    sobre:
      "O curso de Engenharia Civil forma profissionais capacitados para projetar, construir e gerenciar obras de infraestrutura, edificações e sistemas urbanos.",
    objetivos: [
      "Formar engenheiros competentes e éticos",
      "Desenvolver conhecimentos técnicos sólidos",
      "Capacitar para gestão de projetos",
      "Promover sustentabilidade na construção",
    ],
    mercado: [
      "Construtoras e incorporadoras",
      "Empresas de projetos estruturais",
      "Órgãos públicos de infraestrutura",
      "Consultoria em engenharia",
      "Perícia e avaliação de imóveis",
    ],
    grade: [
      {
        periodo: "1º Período",
        disciplinas: ["Cálculo I", "Geometria Analítica", "Física I", "Desenho Técnico", "Introdução à Engenharia"],
      },
      {
        periodo: "2º Período",
        disciplinas: ["Cálculo II", "Álgebra Linear", "Física II", "Química Geral", "Algoritmos e Programação"],
      },
    ],
  },
  direito: {
    title: "Direito",
    description:
      "Desenvolva senso crítico e conhecimento jurídico de excelência para atuar em diversas áreas do direito.",
    duration: "5 anos",
    students: "300+ alunos",
    rating: "4.9",
    category: "Humanas",
    modalidade: "Presencial/Noturno",
    investimento: "R$ 1.190/mês",
    coordenador: "Prof. Dr. Roberto Lima",
    reconhecimento: "Reconhecido pelo MEC - Nota 5",
    sobre:
      "O curso de Direito forma bacharéis capacitados para atuar em diversas áreas jurídicas, desenvolvendo raciocínio crítico e conhecimento das leis.",
    objetivos: [
      "Formar juristas éticos e competentes",
      "Desenvolver raciocínio jurídico crítico",
      "Capacitar para diversas carreiras jurídicas",
      "Promover justiça social e cidadania",
    ],
    mercado: [
      "Advocacia privada",
      "Ministério Público",
      "Magistratura",
      "Advocacia pública",
      "Consultoria jurídica empresarial",
    ],
    grade: [
      {
        periodo: "1º Período",
        disciplinas: [
          "Introdução ao Direito",
          "Teoria Geral do Estado",
          "Sociologia Jurídica",
          "Filosofia do Direito",
          "Português Jurídico",
        ],
      },
      {
        periodo: "2º Período",
        disciplinas: [
          "Direito Civil I",
          "Direito Penal I",
          "Direito Constitucional I",
          "História do Direito",
          "Economia",
        ],
      },
    ],
  },
  psicologia: {
    title: "Psicologia",
    description: "Compreenda o comportamento humano e transforme vidas através da ciência psicológica.",
    duration: "5 anos",
    students: "120+ alunos",
    rating: "4.7",
    category: "Saúde",
    modalidade: "Presencial",
    investimento: "R$ 1.090/mês",
    coordenador: "Prof. Dra. Maria Fernanda",
    reconhecimento: "Reconhecido pelo MEC - Nota 4",
    sobre:
      "O curso de Psicologia forma profissionais capacitados para compreender e intervir nos processos psicológicos, promovendo saúde mental e bem-estar.",
    objetivos: [
      "Formar psicólogos éticos e competentes",
      "Desenvolver conhecimento científico em psicologia",
      "Capacitar para intervenções psicológicas",
      "Promover saúde mental e bem-estar",
    ],
    mercado: [
      "Clínica psicológica",
      "Psicologia organizacional",
      "Psicologia escolar",
      "Psicologia hospitalar",
      "Pesquisa em psicologia",
    ],
    grade: [
      {
        periodo: "1º Período",
        disciplinas: [
          "História da Psicologia",
          "Anatomia Humana",
          "Filosofia",
          "Metodologia Científica",
          "Estatística",
        ],
      },
      {
        periodo: "2º Período",
        disciplinas: ["Psicologia Geral", "Neuroanatomia", "Sociologia", "Antropologia", "Genética"],
      },
    ],
  },
  "sistemas-informacao": {
    title: "Sistemas de Informação",
    description: "Domine a tecnologia que move o mundo moderno e seja protagonista da transformação digital.",
    duration: "4 anos",
    students: "200+ alunos",
    rating: "4.8",
    category: "Tecnologia",
    modalidade: "Presencial/EAD",
    investimento: "R$ 990/mês",
    coordenador: "Prof. Dr. João Tech",
    reconhecimento: "Reconhecido pelo MEC - Nota 5",
    sobre:
      "O curso de Sistemas de Informação forma profissionais capazes de desenvolver, implementar e gerenciar sistemas computacionais.",
    objetivos: [
      "Formar profissionais de TI competentes",
      "Desenvolver soluções tecnológicas inovadoras",
      "Capacitar para gestão de projetos de TI",
      "Promover transformação digital",
    ],
    mercado: [
      "Desenvolvimento de software",
      "Análise de sistemas",
      "Gestão de TI",
      "Consultoria tecnológica",
      "Startups de tecnologia",
    ],
    grade: [
      {
        periodo: "1º Período",
        disciplinas: [
          "Algoritmos e Programação",
          "Matemática Discreta",
          "Introdução à Computação",
          "Inglês Técnico",
          "Comunicação",
        ],
      },
      {
        periodo: "2º Período",
        disciplinas: [
          "Estruturas de Dados",
          "Programação Orientada a Objetos",
          "Banco de Dados I",
          "Estatística",
          "Administração",
        ],
      },
    ],
  },
  enfermagem: {
    title: "Enfermagem",
    description: "Cuide de pessoas e faça a diferença na sociedade através da ciência do cuidar.",
    duration: "4 anos",
    students: "150+ alunos",
    rating: "4.9",
    category: "Saúde",
    modalidade: "Presencial",
    investimento: "R$ 1.190/mês",
    coordenador: "Prof. Dra. Carla Saúde",
    reconhecimento: "Reconhecido pelo MEC - Nota 5",
    sobre:
      "O curso de Enfermagem forma profissionais capacitados para promover, prevenir, recuperar e reabilitar a saúde individual e coletiva.",
    objetivos: [
      "Formar enfermeiros competentes e humanizados",
      "Desenvolver cuidado integral em saúde",
      "Capacitar para liderança em enfermagem",
      "Promover saúde e prevenção de doenças",
    ],
    mercado: [
      "Hospitais e clínicas",
      "Unidades básicas de saúde",
      "Home care",
      "Enfermagem do trabalho",
      "Docência em enfermagem",
    ],
    grade: [
      {
        periodo: "1º Período",
        disciplinas: ["Anatomia Humana", "Histologia", "Bioquímica", "Introdução à Enfermagem", "Bioestatística"],
      },
      {
        periodo: "2º Período",
        disciplinas: [
          "Fisiologia",
          "Microbiologia",
          "Parasitologia",
          "Fundamentos de Enfermagem",
          "Ética em Enfermagem",
        ],
      },
    ],
  },
}

interface CoursePageProps {
  params: {
    slug: string
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const {  slug } = await params;
  const course = coursesData[slug]

  if (!course) {
    console.log("Curso não encontrado para slug:", params.slug)
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white mb-4">{course.category}</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{course.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">{course.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold">{course.duration}</div>
                <div className="text-sm opacity-80">Duração</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold">{course.students}</div>
                <div className="text-sm opacity-80">Alunos</div>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold">{course.rating}</div>
                <div className="text-sm opacity-80">Avaliação</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="font-semibold">MEC</div>
                <div className="text-sm opacity-80">Reconhecido</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="sobre" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="sobre">Sobre</TabsTrigger>
                  <TabsTrigger value="grade">Grade</TabsTrigger>
                  <TabsTrigger value="mercado">Mercado</TabsTrigger>
                  <TabsTrigger value="processo">Processo</TabsTrigger>
                </TabsList>

                <TabsContent value="sobre" className="mt-8">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Sobre o Curso</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{course.sobre}</p>

                      <div>
                        <h3 className="text-xl font-semibold mb-4">Objetivos do Curso</h3>
                        <ul className="space-y-2">
                          {course.objetivos.map((objetivo: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                              <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span>{objetivo}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="grade" className="mt-8">
                  <div className="space-y-6">
                    {course.grade.map((periodo: any, index: number) => (
                      <Card key={index} className="border-none shadow-md">
                        <CardHeader>
                          <CardTitle className="text-lg">{periodo.periodo}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-3">
                            {periodo.disciplinas.map((disciplina: string, idx: number) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                <BookOpen className="h-4 w-4 text-primary" />
                                <span className="text-sm">{disciplina}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="mercado" className="mt-8">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Mercado de Trabalho</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        O profissional formado em {course.title} possui amplas oportunidades no mercado de trabalho:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.mercado.map((area: string, index: number) => (
                          <div key={index} className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                            <Award className="h-5 w-5 text-primary" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="processo" className="mt-8">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle>Processo Seletivo</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Como Ingressar</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                              1
                            </div>
                            <div>
                              <h4 className="font-semibold">Vestibular</h4>
                              <p className="text-muted-foreground">Prova presencial ou online</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                              2
                            </div>
                            <div>
                              <h4 className="font-semibold">ENEM</h4>
                              <p className="text-muted-foreground">Use sua nota do ENEM</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                              3
                            </div>
                            <div>
                              <h4 className="font-semibold">Transferência</h4>
                              <p className="text-muted-foreground">Transfira de outra instituição</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Info Card */}
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Informações do Curso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Modalidade</div>
                      <div className="text-sm text-muted-foreground">{course.modalidade}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Coordenador</div>
                      <div className="text-sm text-muted-foreground">{course.coordenador}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Investimento</div>
                      <div className="text-sm text-muted-foreground">{course.investimento}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Reconhecimento</div>
                      <div className="text-sm text-muted-foreground">{course.reconhecimento}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="border-none shadow-md bg-gradient-hero text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Interessado?</h3>
                  <p className="mb-6 opacity-90">Fale com nossos consultores e tire todas suas dúvidas</p>
                  <div className="space-y-3">
                    <Button className="w-full bg-white text-black hover:bg-gray-100">Inscreva-se Agora</Button>
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-black bg-transparent"
                    >
                      Agendar Visita
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

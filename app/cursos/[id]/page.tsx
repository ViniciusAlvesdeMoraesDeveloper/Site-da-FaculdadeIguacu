// app/cursos/[id]/page.tsx

import { getCourseDetails } from "../../lib/apieduno";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Clock, Building2, GitBranch, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Função para gerar a descrição por template.
const generateDescription = (course: { titulo: string; area: string }): string => {
  if (course.titulo && course.area) {
    return `Fortaleça a sua posição no mercado com este curso de ${course.area}, focado em ${course.titulo}. Esta é uma oportunidade de parceria para aprofundar o conhecimento da sua equipe, adquirir competências práticas e aplicar as melhores estratégias para superar os desafios do seu setor. O crescimento mútuo é a base da nossa colaboração.`;
  }
  if (course.titulo) {
    return `Capacite seus profissionais e expanda a oferta de serviços do seu negócio com o nosso curso especializado em ${course.titulo}. Este conteúdo foi desenvolvido para fornecer as ferramentas e o conhecimento de ponta que sua equipe precisa para se destacar da concorrência e entregar resultados de excelência.`;
  }
  return `Explore o nosso catálogo de soluções de treinamento e descubra o parceiro ideal para o sucesso do seu negócio. Nossos cursos são desenhados para agregar valor, promover o desenvolvimento contínuo da sua equipe e fortalecer a nossa colaboração de longo prazo.`;
};

// Defina as props que o componente vai receber do Next.js
interface Props {
  params: {
    id: string; // O ID do curso virá da URL (ex: /cursos/1020)
  };
}

// Função para formatar a duração
const formatDuration = (titulo: string, duracao: string | null) => {
  // 1. Tente extrair a duração em horas do título (ex: "360H")
  const regex = /(\d+)\s*H/i;
  const match = titulo.match(regex);
  
  if (match && match[1]) {
    const hours = Number(match[1]);
    if (!isNaN(hours)) {
      if (hours >= 160) { // Aproximadamente 1 mês de carga horária
        const months = Math.floor(hours / 160);
        return `${months} ${months > 1 ? 'meses' : 'mês'} (${hours} horas)`;
      }
      return `${hours} horas`;
    }
  }

  // 2. Se não encontrar no título, use o valor da propriedade de duração da API
  if (duracao) {
    const numericDuration = Number(duracao);
    if (!isNaN(numericDuration)) {
      // Regras personalizadas para valores específicos
      if (numericDuration === 1) {
        return "1 ano";
      } else if (numericDuration === 18) {
        return "18 meses";
      }
      
      // Lógica padrão para outros valores
      if (numericDuration >= 365) {
        const years = Math.floor(numericDuration / 365);
        return `${years} ${years > 1 ? 'anos' : 'ano'}`;
      } else if (numericDuration >= 30) {
        const months = Math.floor(numericDuration / 30);
        return `${months} ${months > 1 ? 'meses' : 'mês'}`;
      } else {
        return `${numericDuration} dias`;
      }
    }
  }
  
  return "Não informado";
};

export default async function CourseDetailsPage({ params }: Props) {
  const id = params.id;
  const course = await getCourseDetails(Number(id));

  if (!course) {
    notFound();
  }

  // A LÓGICA DE CORREÇÃO ESTÁ AQUI:
  // Usa o operador || para garantir que a descrição exista.
  // Se course.descricao for nulo, a função generateDescription é chamada.
  const finalDescription = course.descricao || generateDescription(course);

  const formattedDuration = formatDuration(course.titulo, course.duracao);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-16 mt-10">
        <div className="mb-8">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-slate-700">
              Início
            </Link>
            <span className="mx-2">/</span>
            <Link href="/cursos" className="hover:text-slate-700">
              Cursos
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{course.titulo || "Curso"}</span>
          </nav>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Lado Esquerdo - Título e Descrição */}
            <div className="w-full lg:w-3/5 space-y-6">
              <Badge className="bg-orange-600 hover:bg-orange-700">
                {course.area || "Geral"}
              </Badge>
              <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
                {course.titulo || "Título do Curso"}
              </h1>
              {/* O componente agora usa a variável com a descrição garantida */}
              <p className="text-lg text-slate-700 leading-relaxed">
                {finalDescription}
              </p>
            </div>

            {/* Lado Direito - Detalhes do Curso */}
            <div className="w-full lg:w-2/5 p-8 bg-slate-50 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-orange-600 rounded-full"></div>
                Informações do Curso
              </h2>
              <div className="grid gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <div>
                    <span className="font-medium text-slate-900">Duração:</span>
                    <span className="ml-2 text-slate-700">{formattedDuration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Building2 className="h-5 w-5 text-orange-600" />
                  <div>
                    <span className="font-medium text-slate-900">Empresa:</span>
                    <span className="ml-2 text-slate-700">{course.empresa || "Não informado"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <GitBranch className="h-5 w-5 text-orange-600" />
                  <div>
                    <span className="font-medium text-slate-900">Repositório:</span>
                    <span className="ml-2 text-slate-700">{course.repositorio || "Não informado"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <GraduationCap className="h-5 w-5 text-orange-600" />
                  <div>
                    <span className="font-medium text-slate-900">TCC:</span>
                    <span className="ml-2 text-slate-700">{course.tcc === "S" ? "Sim" : "Não"}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="font-semibold text-orange-900 mb-2">Interessado neste curso?</h3>
                  <p className="text-orange-700 text-sm mb-4">
                    Entre em contato para mais informações sobre inscrições e cronograma.
                  </p>
                  <Link href="#contato">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">Solicitar Informações</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
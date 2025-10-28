import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursosClientComponent from "@/components/CursosClientComponent";
import { getAllCourses } from "../lib/apieduno";
import { ArrowRight, Wrench, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Defina as tipagens para os dados da sua API
interface Course {
  id: number;
  area: string;
  titulo: string;
  descricao: string;
  duracao: string;
  publicoalvo: string;
}

interface Category {
  id: number;
  name: string;
}

// O componente de servidor é assíncrono para buscar os dados
export default async function CursosPage() {
  const coursesResult = await getAllCourses();

  // Tratamento de erro: se a API falhar, retorne um JSX de erro
  if (!coursesResult) {
    return (
      <main>
        <Header />
        <div className="container mx-auto p-8 text-center">
          <h2 className="text-2xl font-bold text-red-500">
            Não foi possível carregar os cursos. Por favor, tente novamente mais tarde.
          </h2>
        </div>
        <Footer />
      </main>
    );
  }

  const courses = coursesResult;

  // Extraia as categorias dos cursos
  const uniqueCategories: Category[] = courses.reduce((acc: Category[], course) => {
    if (!acc.find((cat) => cat.name === course.area)) {
      acc.push({ id: acc.length + 1, name: course.area });
    }
    return acc;
  }, []);

  return (
    <main className="min-h-screen">
      <Header />

      <section
        id="areacurso"
        className="pt-32 pb-24 bg-gradient-to-br from-red-400 via-red-500 to-red-600 text-white relative overflow-hidden"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>

        <div className="container mx-auto px-4 relative z-10">
          <header className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Educação de Qualidade
            </div>
            <h1 itemProp="name" className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-balance">
              Nossos <span className="text-red-200">Cursos</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed max-w-3xl mx-auto mb-12 text-pretty">
              Descubra os cursos que ofertamos e transforme seu futuro com a
              <span itemProp="publisher" itemScope itemType="https://schema.org/Organization" className="font-semibold">
                <span itemProp="name"> Faculdade Marinho</span>
              </span>
            </p>
          </header>

          {/* Statistics section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                <span itemProp="credentialCategory">50+</span>
              </div>
              <div itemProp="name" className="text-red-200 font-medium">Cursos Disponíveis</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                18+
              </div>
              <div className="text-red-200 font-medium">Anos de Experiência</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <div className="text-red-200 font-medium">Alunos Formados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Apenas chame o componente cliente, passando os dados como props */}
      <CursosClientComponent courses={courses} categories={uniqueCategories} />

      {/* Seção para Cursos Técnicos */}
      <section className="py-24 bg-gray-100 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23f97316 fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-8">
              <Wrench className="h-4 w-4 mr-2" />
              Cursos da Global Tec
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance">
              Explore Nossas <span className="text-red-600">Formações Técnicas</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-pretty">
              Junte-se a nós para construir um futuro na educação técnica. Em parceria, oferecemos a você os cursos de alta qualidade da Global Tec para fortalecer sua marca e impulsionar o sucesso de seus estudantes.
            </p>
            <Link href="\coursetecnico" aria-label="Ver cursos técnicos">
              <Button
                size="lg"
                className="bg-red-700 hover:bg-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-12 py-6 text-lg font-semibold rounded-full group"
              >
                Ver Cursos Técnicos
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção para Parceiros Educacionais */}
      <section className="py-24 bg-white relative shadow-inner">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23f97316 fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-8">
              <Handshake className="h-4 w-4 mr-2" />
              Parceiros Educacionais
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance">
              Explore Mais <span className="text-red-600">Oportunidades</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-pretty">
              Conheça os cursos oferecidos pelos nossos parceiros e amplie ainda mais suas possibilidades de crescimento profissional.
            </p>
            <Link href="/courseparceiro" aria-label="Ver cursos de parceiros">
              <Button
                size="lg"
                className="bg-[#af260e] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-12 py-6 text-lg font-semibold rounded-full group"
              >
                Ver Cursos de Parceiros
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
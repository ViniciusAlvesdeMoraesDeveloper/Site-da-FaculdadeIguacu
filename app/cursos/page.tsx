
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CursosClientComponent from "@/components/CursosClientComponent"
import { getAllCourses, getCourseDetails } from "../lib/apieduno";

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
        if (!acc.find(cat => cat.name === course.area)) {
            acc.push({ id: acc.length + 1, name: course.area });
        }
        return acc;
    }, []);

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section - Mantém, pois é um conteúdo estático */}
            <section className="pt-24 pb-16 bg-gradient-hero text-white">
                <div id="areacurso" className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Nossos Cursos
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                            Descubra os cursos que ofertamos e transforme seu futuro com a
                            Faculdade Marinho
                        </p>                        
                    </div>
                </div>
            </section>

            {/* Apenas chame o componente cliente, passando os dados como props */}
            <CursosClientComponent courses={courses} categories={uniqueCategories} />

            <Footer/>
        </main>
    )
}
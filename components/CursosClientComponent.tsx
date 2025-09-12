'use client'


import { useState } from "react"
// Importe todos os seus componentes da UI aqui
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {ArrowRight, BookOpen, Clock, Star, Users} from "lucide-react"
import Link from "next/link";

// Defina as tipagens que você vai receber como props
interface CourseSummary {
  id: number;
  area: string;
  titulo: string;
  imagem: string;
  temimagem: string;
  area_id: string;
}

interface Category {
  id: number;
  name: string;
}

interface CursosClientProps {
  // Altere o tipo das props para CourseSummary[]
  courses: CourseSummary[];
  categories: Category[];
}

export default function CursosClientComponent({ courses, categories }: CursosClientProps) {
    // A lógica de estado e filtro fica toda aqui
    const [selectedCategory, setSelectedCategory] = useState("Todos")

    const filteredCourses =
        selectedCategory === "Todos"
            ? courses
            : courses.filter((course) => course.area === selectedCategory)

    return (
        <>
            {/* Filter Section */}
            <section className="py-8 bg-background border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button
                            onClick={() => setSelectedCategory("Todos")}
                            variant={selectedCategory === "Todos" ? "default" : "outline"}
                            className={selectedCategory === "Todos" ? "bg-primary" : ""}
                        >
                            Todos
                        </Button>
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.name)}
                                variant={selectedCategory === category.name ? "default" : "outline"}
                                className={selectedCategory === category.name ? "bg-primary" : ""}
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div id="cursos" className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredCourses.map((course, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-lg hover:shadow-primary transition-all duration-300 hover:-translate-y-1 border-none shadow-md"
                            >
                                {/* O restante do código do seu Card, adaptado para os dados da API */}
                                <CardHeader>
                                    <Badge variant="outline" className="w-fit">
                                        {course.area}
                                    </Badge>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {course.titulo}
                                    </CardTitle>
                                    {/* ... outros elementos */}
                                </CardHeader>
                                {/* ... CardContent e CardFooter */}
                                <CardFooter>
                                    <Link href={`/cursos/${course.id}`}>
                                        <Button
                                            variant="outline"
                                            className="w-full group-hover:bg-primary group-hover:text-white transition-colors bg-transparent"
                                        >
                                            Ver Detalhes
                                            <ArrowRight className="ml-2 h-4 w-4"/>
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
"use client"

import {useState} from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {ArrowRight, BookOpen, Clock, Star, Users} from "lucide-react"
import courses from "@/json/cursos.json"
import Link from "next/link";

console.time("Cursos page load");
export default function CursosPage() {
    // Estado para armazenar a categoria selecionada
    const [selectedCategory, setSelectedCategory] = useState("Todos")

    // Lista de cursos filtrada com base na categoria
    const filteredCourses =
        selectedCategory === "Todos"
            ? courses.courses
            : courses.courses.filter((course) => course.category === selectedCategory)

    return (
        <main className="min-h-screen">
            <Header/>

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-hero text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Nossos Cursos
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                            Descubra o curso ideal para sua carreira e transforme seu futuro
                            profissional
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-background border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {courses.categories.map((category) => (
                            <Button
                                key={category.id}
                                onClick={() => setSelectedCategory(category?.name ? category.name : "Todos")} // 👈 altera categoria
                                variant={
                                    selectedCategory === category.name ? "default" : "outline"
                                }
                                className={
                                    selectedCategory === category.name ? "bg-primary" : ""
                                }
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredCourses.map((course, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-lg hover:shadow-primary transition-all duration-300 hover:-translate-y-1 border-none shadow-md"
                            >
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-2">
                                        <Badge
                                            variant="secondary"
                                            className={`${course.color} text-white`}
                                        >
                                            {course.badge}
                                        </Badge>
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 text-yellow-500 fill-current"/>
                                            <span className="text-sm font-medium">
                                                {course.rating}
                                            </span>
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {course.title}
                                    </CardTitle>
                                    <Badge variant="outline" className="w-fit">
                                        {course.category}
                                    </Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4 text-sm">
                                        {course.description}
                                    </p>

                                    <div className="space-y-2 mb-4 text-sm">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-muted-foreground"/>
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-muted-foreground"/>
                                                <span>{course.students}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <BookOpen className="h-4 w-4 text-muted-foreground"/>
                                                <span>{course.modalidade}</span>
                                            </div>
                                        </div>
                                        <div className="text-primary font-semibold">
                                            {course.investimento}
                                        </div>
                                    </div>


                                </CardContent>
                                <CardFooter>
                                    <Link className="" href={`/cursos/${course.id}`}>
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

            {/* CTA Section */}
            <section className="py-20 bg-gradient-subtle">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Não encontrou o curso ideal?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Entre em contato conosco e descubra outras opções de cursos e
                        modalidades
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-primary hover:bg-orange-dark">
                            Falar com Consultor
                        </Button>
                    </div>
                </div>
            </section>

            <Footer/>
        </main>
    )
}
console.timeEnd("Cursos page load");
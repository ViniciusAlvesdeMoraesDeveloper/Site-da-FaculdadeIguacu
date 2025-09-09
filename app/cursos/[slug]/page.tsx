"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Calendar, Clock, DollarSign, MapPin, Star, Target, Users } from "lucide-react"
import { notFound } from "next/navigation"
import coursesData from "@/json/cursos.json"
import { useState } from "react";
import Modal from "@/components/Modal";
import React from "react";

// Dados dos cursos - simplificado e corrigido

interface CoursePageProps {
    params: { slug: string }
}

export default function CoursePage({ params }: CoursePageProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const { slug } = params;

    function handleModalSubmit(data: { name: string; email: string; course: string; }): void {
        setShowModal(false);
    }

    // @ts-ignore
    const course = coursesData.coursesData[slug]

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
                                                            <Target
                                                                className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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
                                                            <div key={idx}
                                                                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
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
                                                O profissional formado em {course.title} possui amplas oportunidades no
                                                mercado de trabalho:
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {course.mercado.map((area: string, index: number) => (
                                                    <div key={index}
                                                        className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
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
                                                        <div
                                                            className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                                            1
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold">Vestibular</h4>
                                                            <p className="text-muted-foreground">Prova presencial ou
                                                                online</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-4">
                                                        <div
                                                            className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                                            2
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold">ENEM</h4>
                                                            <p className="text-muted-foreground">Use sua nota do
                                                                ENEM</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-4">
                                                        <div
                                                            className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                                            3
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold">Transferência</h4>
                                                            <p className="text-muted-foreground">Transfira de outra
                                                                instituição</p>
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
                                    <p className="mb-6 opacity-90">Realize seu cadastro
                                    </p>
                                    <div className="space-y-3">
                                        <Button
                                            variant="secondary"
                                            className="bg-primary hover:bg-orange-600"
                                            onClick={() => {
                                                setIsMenuOpen(true);
                                                setShowModal(true);
                                            }}
                                        >
                                            Seja um Parceiro!

                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={(data) => console.log("Form enviado:", data)}

            />
        </main>
    )
}

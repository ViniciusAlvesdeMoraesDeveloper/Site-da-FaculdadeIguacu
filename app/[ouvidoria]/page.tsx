'use client'
import { OuvidoriaForm } from "../../components/listen/ouvidaoria-form";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../components/ui/button"; // Adjust the path if needed
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";


export default function OuvidoriaPage() {
    const [imageUrl, setImageUrl] = useState<string>("/images/ouvidoria-person.jpg");

    return (
        <>
            <Header/>
            <div className="mt-8 bg-gray-50">
                <div className="container mx-auto px-4 py-12">
                    
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6 underline">Ouvidoria</h1>
                        <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
                            <p className="mb-4">
                                Com o compromisso contínuo de zelar pela qualidade de nossos serviços e garantir o melhor atendimento aos nossos alunos e parceiros, a Faculdade Marinho tem a satisfação de anunciar o lançamento oficial do nosso Setor de Ouvidoria.
                            </p>
                            <p>
                                Para registrar uma manifestação, o aluno ou parceiro{" "}
                                <strong>deve ter tentado, sem sucesso</strong> a resolução por meio de outros canais de contato com nossos setores.
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Image */}
                        <div className="relative">
                            <Image
                                src={imageUrl || "https://images.pexels.com/photos/5717039/pexels-photo-5717039.jpeg?_gl=1*tky0d3*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NTc0NDUzODgkbzYkZzEkdDE3NTc0NDcyODIkajU5JGwwJGgw"}
                                alt="Pessoa sorrindo ao telefone representando atendimento da ouvidoria"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto"
                                onError={() => setImageUrl("/images/ouvidoria-person.jpg")}
                            />

                        </div>
                            
                        {/* Form */}
                        <div>
                        
                            <OuvidoriaForm />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

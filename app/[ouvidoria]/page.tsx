
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OuvidoriaForm } from "@/components/listen/ouvidaoria-form";

export default function OuvidoriaPage() {
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
                                Para registrar uma manifestação, o aluno ou parceiro
                                <strong> deve entrar em </strong>  contato com nossos setores.
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Image */}
                        <div className="relative">
                            <Image
                                src="/ouvidoria.webp"
                                alt="Pessoa sorrindo ao telefone representando atendimento da ouvidoria"
                                width={800}
                                height={600}
                                className="rounded-lg shadow-lg w-full h-auto"
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
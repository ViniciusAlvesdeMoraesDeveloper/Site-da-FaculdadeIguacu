import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OuvidoriaForm } from "@/components/listen/ouvidaoria-form";
import { Card, CardContent } from "@/components/ui/card";

export default function OuvidoriaPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 py-16">
                <div className="container mx-auto px-4">

                    
                    <div className="text-center mb-12 mt-10">
                        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
                            Ouvidoria
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                            Com o compromisso contínuo de zelar pela qualidade de nossos serviços e garantir o melhor atendimento aos nossos alunos e parceiros, a Faculdade Marinho tem a satisfação de anunciar o lançamento oficial do nosso Setor de Ouvidoria.
                        </p>
                    </div>

                    
                    <Card className="bg-white p-8 md:p-12 shadow-2xl rounded-lg">
                        <CardContent className="p-0">
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                {/* Imagem e Descrição Adicional */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                        Sua voz é a chave para a nossa melhoria.
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Nossa Ouvidoria é o canal direto para suas sugestões, elogios,
                                        críticas ou denúncias. Aqui, sua manifestação é tratada de forma
                                        confidencial e imparcial, buscando sempre a melhor solução.
                                    </p>
                                    <Image
                                        src="/ouvidoria.webp"
                                        alt="Pessoa sorrindo ao telefone representando atendimento da ouvidoria"
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow-lg w-full h-auto"
                                    />
                                </div>

                                
                                <div>
                                    <OuvidoriaForm />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </>
    );
}
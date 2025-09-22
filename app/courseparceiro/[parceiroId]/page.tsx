import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import cursos from "../cursos.json";
import NotFound from "@/app/NotFound";
import Header from '@/components/Header';
import Footer from '@/components/Footer';


type ParceiroProps = {
    params: { parceiroId: string };
};
    // Usando uma expressão regular mais robusta para substituir múltiplos espaços
   export default async function CursoPorParceiroPage({ params }: ParceiroProps) {

  const parceiroSlug = (params.parceiroId).toLowerCase().replace(/\s/g, "-");

    const cursoDoParceiro = cursos.filter(curso => curso.partner.toLowerCase().replace(/\s/g, "-") === parceiroSlug);

    if (cursoDoParceiro.length === 0) {
        return <NotFound />;
    }
    const nomeParceiro = cursoDoParceiro[0].partner;

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />

            {/* Banner Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
                        Cursos de <span className="text-orange-200">{nomeParceiro}</span>
                    </h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Explore as oportunidades de aprendizado que nosso parceiro tem a oferecer.
                    </p>
                </div>
            </section>

            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cursoDoParceiro.map((curso, index) => (
                            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader className="bg-orange-100 p-6 rounded-t-lg">
                                    <CardTitle className="text-2xl font-bold text-gray-800">
                                        {curso.course}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <p className="text-gray-600 mb-2 border-b pb-2">
                                        <strong className="font-semibold text-gray-900">Tipo:</strong> {curso.type}
                                    </p>
                                    <p className="text-gray-600 mb-4 border-b pb-2">
                                        <strong className="font-semibold text-gray-900">Parceiro:</strong> {curso.partner}
                                    </p>
                                    
                                    <h3 className="text-lg font-bold text-orange-600 mb-4">Contatos:</h3>
                                    <ul className="space-y-3">
                                        {curso.contacts.map((contact, contactIndex) => (
                                            <li key={contactIndex} className="flex items-center gap-4 p-3 rounded-lg bg-orange-50">
                                                <div className="flex-shrink-0">
                                                    <Phone className="h-5 w-5 text-orange-600" />
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="text-sm font-medium text-gray-800">Telefone: {contact.phone}</p>
                                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                                        <MapPin className="h-4 w-4" /> Estado: {contact.state}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                    <div className="mt-16 text-center">
                        <Link 
                            href="/courseparceiro" 
                            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <ArrowRight className="h-5 w-5 mr-3 transform rotate-180" />
                            Voltar para a página de Parceiros
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
   }
